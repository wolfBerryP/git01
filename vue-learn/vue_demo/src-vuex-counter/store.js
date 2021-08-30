import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0  //初始化状态数据
}

const mutations = {
  INCREMENT(){
    state.count++
  },

  DECREMENT(){
    state.count--
  }
}

const actions = {
  increment({commit}) {
    commit('INCREMENT')
  },

  decrement({commit}) {
    commit('DECREMENT')
  },

  incrementIfOdd({commit, state}) {
    if(state.count %2 ===1){
      commit('INCREMENT')
    }
  },

  incrementAsync({commit}) {
    setTimeout(()=>{
      commit('INCREMENT')
    },1000)
  }
}

const getters = {
  evenOrOdd2(state) {
    return state.count % 2 === 1 ? '奇数' : '偶数'
  },
  count(state){
    return state.count
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
