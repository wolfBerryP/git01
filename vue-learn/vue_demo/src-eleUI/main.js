/**
 * 入口Js : element-ui 全局引入& 局部引入
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import {Button, Select} from 'element-ui';

// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
