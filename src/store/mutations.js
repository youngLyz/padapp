const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
export default {
	//点击进入下一题
	addNum(state, num) {
		state.itemNum += num;
	},
	changeNum(state,num){
		state.itemNum = num;
	},
	//记录答案
	[REMBER_ANSWER](state, payload) {
		//查询当前题目的答案
		let currentItem = state.answerid[payload.topic_type].find((item) => item.num===state.itemNum);
		//将新答案赋值过来
		currentItem.answer_id = payload.answer_id;
		
	},
	/*
	记录做题时间
	 */
	[REMBER_TIME](state) {//模拟考试计时
		state.timer = setInterval(() => {
			let allSecs = ++state.allTime;			
			if(allSecs<60){
				state.showTime = '00:00:' + formatTime(allSecs);
			}else if(allSecs<3600){
				let mm = Math.floor(allSecs/60);
				let ss = allSecs-mm*60;
				state.showTime = '00:' + formatTime(mm)+':'+formatTime(ss);
			}else {
				let hh = Math.floor(allSecs/3600);
				let mm = Math.floor((allSecs-hh*3600)/60);
				let ss = allSecs - hh*3600 - mm*60;
				state.showTime = formatTime(hh) + ':' + formatTime(mm) + ':' + formatTime(ss);
			}
			
			function formatTime(time){
				if(time < 10){
					time = '0'+time
				}
				return time;
			}
			//模拟考试时间超过
			if(allSecs>state.examMinutes*60){
				state.examState = false;
				clearInterval(state.timer);
			}

		}, 1000)
	},
	/*
	初始化信息，
	 */
	initializeData(state,payload) {
		state.itemNum = 1;
		state.allTime = 0;
		state.score = 0;
		state.showTime = '00:00:00';
		state.scorePrinciple = payload.scorePrinciple||{};
		state.itemTheme = payload.itemTheme;
		state.itemDetail = payload.itemDetail;
		state.totalScore = payload.totalScore;
		state.examState = true;
		//答题卡
		let ones = [],mores = [],tfng = [];
		state.itemDetail.forEach((item,index) =>{
			let obj = {
					num:index+1,
					id:item.id,
					res:0,//默认答错，部分答对=1,全对=2
					result:item.q_result,//标准答案
					answer_id:item.answer_ids||[]//列表中包含答案，用于测试记录
				};
			switch(item.q_type){
				case '1':
					ones.push(obj);
					break;
				case '2':
					mores.push(obj);
					break;
				case '3':
					tfng.push(obj);
					break;
			}
		});
		state.answerid['1'] = ones;
		state.answerid['2'] = mores;
		state.answerid['3'] = tfng;
	},
	setCurrentClaz(state,payload) {
		state.firstClz = payload.firstClz;
		state.secondClz = payload.secondClz;
	},
	clockDown (state) {//考试倒计时
		if(state.examtimer===null){
			let now = new Date();
			let final = new Date(state.examDate);
			let allSecs = Math.floor((final.getTime()-now.getTime())/1000);
			
			if(allSecs>0){
				state.examtimer = setInterval(() => {
					if(allSecs<60){//秒
						state.examClock = '00天 00:00:' + formatTime(allSecs);
					}else if(allSecs<3600){//分
						let mm = Math.floor(allSecs/60);
						let ss = allSecs-mm*60;
						state.examClock = '00天 00:' + formatTime(mm)+':'+formatTime(ss);
					}else if(allSecs<86400){//时
						let hh = Math.floor(allSecs/3600);
						let mm = Math.floor((allSecs-hh*3600)/60);
						let ss = allSecs - hh*3600 - mm*60;
						state.examClock = '00天 ' + formatTime(hh) + ':' + formatTime(mm) + ':' + formatTime(ss);
					}else{//天
						let d = Math.floor(allSecs/86400);
						let hh = Math.floor((allSecs-d*86400)/3600);
						let mm = Math.floor((allSecs-d*86400-hh*3600)/60);
						let ss = allSecs -d*86400- hh*3600 - mm*60;
						state.examClock = d+'天 ' + formatTime(hh) + ':' + formatTime(mm) + ':' + formatTime(ss);
					}
					
					allSecs--;
					if(allSecs<1){
						clearInterval(state.examtimer)
						state.examClock = "00天 00:00:00";
						//debugger//调试使用
						state.examState = true;//考试开始
					}

					function formatTime(time){
						if(time < 10){
							time = '0'+time
						}
						return time;
					}
				}, 1000);

			}
		}
			
	},
	computeScore (state) {
		//计算考试分数
		let score = 0;
		let score1 = state.scorePrinciple.single_score,
			score2 = state.scorePrinciple.multi_score,
			score3 = state.scorePrinciple.tf_score;
		//单选
		state.answerid['1'].forEach((item,index)=>{			
			if(item.result[0] === item.answer_id[0]){
				score += score1
				item.res = 2//答对
			}
		});
		//多选
		state.answerid['2'].forEach((item,index)=>{
			let res = item.result;
			let len = res.length
			let temp = 0.0;
			
			item.answer_id.forEach((_item,_index)=>{
				if(res.indexOf(_item)>-1){//多选，每题分数为答对个数/总个数百分比
					let pf = parseFloat(score2/len)
					score += pf
					temp +=  pf
				}
			})
			if(temp==score2){
				item.res = 2
			}else if(temp<score2&&temp>0){
				item.res = 1//部分答对
			}
		})
		//判断
		state.answerid['3'].forEach((item,index)=>{
			
			if(item.result[0] === item.answer_id[0]){
				score += score3
				item.res = 2
			}
		})
		state.score = score;
		state.examState = false;//提交考试，不在考试状态
	}
}