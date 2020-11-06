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

Vue.prototype.$http = axios

Vue.prototype.$AppName = 'VueCrashCourse'


new Vue({
  router,
  store,
  vuetify,
  codeTheme,
  render: h => h(App)
}).$mount('#app')
