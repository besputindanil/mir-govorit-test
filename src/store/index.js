import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    seminarsData: {}
  },
  getters: {
    author: state => state.seminarsData.author,
    seminars: state => state.seminarsData.seminars
  },
  mutations: {
    SET_SEMINARS_DATA: (state, payload) => {
      state.seminarsData = payload
    }
  },
  actions: {
    getSeminarsData: async function({commit}) {
      const data = await getJSON()
      commit('SET_SEMINARS_DATA', data)
    }
  }
})
