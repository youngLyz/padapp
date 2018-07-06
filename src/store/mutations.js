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
	[REMBER_TIME](state) {
		state.timer = setInterval(() => {
			let allSecs = ++state.allTime;
			//console.log(allSecs);
			if(allSecs<60){
				state.showTime = '00:00:' + formatTime(allSecs);
			}else if(allSecs<3600){
				let mm = Math.floor(allSecs/60);
				let ss = allSecs-mm*60;
				state.showTime = formatTime(mm)+':'+formatTime(ss);
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
		}, 1000)
	},
	/*
	初始化信息，
	 */
	initializeData(state) {
		state.itemNum = 1;
		state.allTime = 0;
		state.showTime = '00:00:00';
		//答题卡
		let ones = [],mores = [],tfng = [];
		state.itemDetail.forEach((item,index) =>{
			let obj = {
					num:index+1,
					topic_id:item.topic_id,
					answer_id:[]
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
	}
}