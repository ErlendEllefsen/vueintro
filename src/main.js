import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueCodeHighlight from 'vue-code-highlight';
import codeTheme from './assets/themes/codeTheme.css'
import axios from 'axios'
 
Vue.use(VueCodeHighlight)

Vue.config.productionTip = false

Vue.prototype.$makeUpperCase = function(prop) {
  this[prop] = this[prop].toUpperCase()
}

Vue.prototype.$makeLowerCase = function(prop) {
  this[prop] = this[prop].toLowerCase()
}

Vue.prototype.$AppName = 'VueCrashCourse'
Vue.prototype.$Author = 'Erlend Ellefsen'
Vue.prototype.$http = axios


new Vue({
  router,
  store,
  vuetify,
  codeTheme,
  render: h => h(App)
}).$mount('#app')
