
export default {
	setAdminToken({ commit,state }, payload){
		commit("setAdminToken",payload)
	},
	removeAdminToken({ commit,state }){
		commit("removeAdminToken")
	},
	setLocalUser({ commit,state }, payload){
		commit("setLocalUser",payload)
	},
	removeLocalUser({ commit,state }){
		commit("removeLocalUser")
	},
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
	initExamData({ commit },payload){//考试信息		
		commit('initExamData',payload)
	},
	submitExamDate({ commit }){
		commit('submitExamDate');
	},
	changeNum({commit,state},num) {
		commit('changeNum',num)
	},
	setCurrentClaz({commit,state},payload) {
		
		commit('setCurrentClaz',payload)
	},
	setPostClz({commit,state},payload){		
		commit('setPostClz',payload)
	},
	clockDown ({ commit }) {
		commit('clockDown')
	},
	examEndClock ({ commit }) {
		commit('examEndClock')
	},
	computeScore ({ commit }) {
		commit('computeScore')
	},
	exitExercise ({ commit }) {
		commit('exitExercise');
	}

}