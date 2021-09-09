/**
 * 路由器
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Checkbox from "../views/Checkbox";
import Icon from "../views/Icon";
import InfiniteScroll from "../views/InfiniteScroll";
import Layout from "../views/Layout";

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/icon'
    },
    {
      path: '/checkbox',
      component: Checkbox
    },
    {
      path: '/icon',
      component: Icon
    },
    {
      path: '/infiniteScroll',
      component: InfiniteScroll
    },
    {
      path: '/layout',
      component: Layout
    }
  ]
})
