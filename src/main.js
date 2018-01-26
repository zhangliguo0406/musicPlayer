// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import Swiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'
// import fastclick from 'fastclick'
import './common/css/reset.less'
// fastclick.attach('document.body')
Vue.use(Swiper)
Vue.use(VueLazyload,{
  loading: require('components/m-header/logo@2x.png')
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
