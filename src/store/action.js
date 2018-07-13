
export default {
	addNum({ commit, state }, payload) {
		//点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
		if(payload.isAdd){//next
			if (state.itemNum < state.itemDetail.length) {
				commit('addNum', 1);
			}
		}else{//prev
			if (state.itemNum > 1) {
				commit('addNum', -1);
			}
		}
		
	},
	remeberAnsw({ commit, state }, payload){
		commit('REMBER_ANSWER', payload);
	},
	//初始化信息
	initializeData({ commit },payload) {
		//console.log('action initializeData:'+JSON.stringify(payload));
		commit('initializeData',payload);
	},
	changeNum({commit,state},num) {
		commit('changeNum',num)
	},
	setCurrentClaz({commit,state},payload) {
		commit('setCurrentClaz',payload)
	},
	resetData ({ commit }) {
		commit('resetData')
	},
	clockDown ({ commit }) {
		commit('clockDown')
	},
	examEndClock ({ commit }) {
		commit('examEndClock')
	}

}