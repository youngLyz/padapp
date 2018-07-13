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
		
		let currentItem = state.answerid[payload.topic_type].find((item) => item.num===state.itemNum);		
		currentItem.answer_id = payload.answer_id;
		if(currentItem.answer_id.length==0){
			state.answerid.len++	
		}
	},
	/*
	记录做题时间
	 */
	[REMBER_TIME](state) {//模拟考试计时
		state.timer = setInterval(() => {
			state.examState = true;//考试开始

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
		state.showTime = '00:00:00';
		state.itemTheme = payload.itemTheme;
		state.itemDetail = payload.itemDetail;
		state.examState = true;
		//答题卡
		let ones = [],mores = [],tfng = [];
		state.itemDetail.forEach((item,index) =>{
			let obj = {
					num:index+1,
					topic_id:item.topic_id,
					answer_id:item.answer_ids||[]//列表中包含答案，用于测试记录
				};
			switch(item.type){
				case 'ONE':
					ones.push(obj);
					break;
				case 'MORE':
					mores.push(obj);
					break;
				case 'TFNG':
					tfng.push(obj);
					break;
			}
		});
		state.answerid.ONE = ones;
		state.answerid.MORE = mores;
		state.answerid.TFNG = tfng;
	},
	setCurrentClaz(state,payload) {
		state.firstClz = payload.firstClz;
		state.secondClz = payload.secondClz;
	},
	resetData (state) {
		state.itemTheme = '';
		state.itemDetail = [];
		state.answerid.ONE = [];
		state.answerid.MORE = [];
		state.answerid.TFNG = [];
		state.showTime = '00:00:00';
		state.itemNum = 1;
		state.allTime = 0;
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
						state.examState = true;//考试开始
						//考试开始，根据考试时间计算结束倒计时，结束时将无法进入考试
						/*let endSecs = state.examMinutes*60;
						if(state.examEndTimer==null){
							state.examEndTimer = setInterval(()=>{								
								if(endSecs>0){
									endSecs--;
									state.examState = true;
								}else{
									clearInterval(state.examEndTimer);
									state.examState = false;
									console.log("examState:"+state.examState)									
								}
								console.log("endSecs:"+endSecs)				
							},1000);	
						}*/
					}
					console.log("allSecs:"+allSecs)

					function formatTime(time){
						if(time < 10){
							time = '0'+time
						}
						return time;
					}
				}, 1000);

			}
		}
			
	}
}