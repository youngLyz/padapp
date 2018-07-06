

export default {
	addNum({ commit, state }, payload) {
		//点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
		commit('REMBER_ANSWER', payload);
		if (state.itemNum < state.itemDetail.length) {
			commit('addNum', 1);
		}
	},
	//初始化信息
	initializeData({ commit }) {
		commit('initializeData');
	},
	changeNum({commit,state},num) {
		commit('changeNum',num)
	},
	setCurrentClaz({commit,state},payload) {
		commit('setCurrentClaz',payload)
	}

}