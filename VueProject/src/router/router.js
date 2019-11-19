import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/frame/Home'
import Authorization from '@/components/frame/pages/Authorization'
import Product from '@/components/frame/pages/Product'
import User from '@/components/frame/pages/User'
import Person from '@/components/frame/settings/Person'
import Password from '@/components/frame/settings/Password'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      name: 'Index',
      meta: {
        title: '登录'
      },
      component: Index
    },
    {
      path: '/home',
      name: 'Home',
      meta: {
        title: '授权管理系统'
      },
      component: Home,
      children: [{
          path: 'management/authorization',
          meta: {
            title: '授权管理'
          },
          component: Authorization
        },
        {
          path: 'management/product',
          meta: {
            title: '产品管理'
          },
          component: Product
        },
        {
          path: 'management/user',
          meta: {
            title: '用户管理'
          },
          component: User
        },
        {
          path: 'settings/person',
          meta: {
            title: '个人信息'
          },
          component: Person
        },
        {
          path: 'settings/password',
          meta: {
            title: '修改密码'
          },
          component: Password
        }
      ]
    }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => { // beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) { // 判断是否有标题
    document.title = to.meta.title
  }
  next() // 执行进入路由，如果不写就不会进入目标页
})

export default router
