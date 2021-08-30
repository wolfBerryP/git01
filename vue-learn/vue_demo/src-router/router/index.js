/**
 * 路由器模板
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'
import Messages from '../views/Messages'
import News from '../views/News'
import MessageDetail from "../views/MessageDetail";

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path:'/',
      redirect: '/about'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/news',   // path最左侧的/永远代表根路径
          component: News
        },
        {
          path: 'messages',  //简化写法
          component: Messages,
          children: [
            {
              path:'/home/messages/detail/:id',
              component: MessageDetail
            }
          ]
        },
        {
          path: '',
          redirect: 'news'
        }
      ]
    },
    {
      path: '/about',
      component: About
    }
  ]
})
