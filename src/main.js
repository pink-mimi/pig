import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import './assets/css/reset.css'
import './assets/font/iconfont.css'
import 'swiper/dist/css/swiper.css';

import vant from 'vant';
import 'vant/lib/index.css';

Vue.use(vant);




Vue.config.productionTip = false

Vue.prototype.axios=axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
