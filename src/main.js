import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './components/plugins/axios'
import './assets/css/reset.css'
import './assets/css/iconfont_beta/iconfont.css'
import animate from 'animate.css'
import tools from 'js/tools.js'
import './assets/js/JSI.js'
//import './assets/js/LocalJSI.js'
import './assets/js/message.js'

Vue.config.productionTip = false
Vue.config.devtools = true;
/* eslint-disable no-new */
Vue.use(axios)	
Vue.use(tools)

const VueTouch = require('vue-touch');
Vue.use(VueTouch, { name: 'v-touch' });


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
