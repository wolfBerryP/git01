import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  store   //这个store不能大写，否则组件加载$store属性失败
})

