import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Lagre API kall',
    titleVuex: 'Vuex',
    count: 0
  },
  getters: {
  },
  mutations: {
    increment (state) {
      var i = 0;
      while (i < 100) {
        (function(i) {
          setTimeout(function() {
            state.count++
          }, 100 * i)
        })(i++)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
