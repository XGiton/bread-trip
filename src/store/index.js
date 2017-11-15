import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: {}
  },
  actions: {
    setProfile ({ commit }, profile) {
      commit('setProfile', profile)
    }
  },
  getters: {
    profile: state => {
      return state.profile
    }
  },
  mutations: {
    setProfile (state, profile) {
      state.profile = profile
    }
  }
})
