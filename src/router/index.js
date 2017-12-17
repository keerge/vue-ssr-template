import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

/* Layout */
import Layout from '../views/layout/Layout'

Vue.use(Router)
export function createRouter() {
  const router = new Router({
    mode: 'history',
    routes: [
      { path: '/404', component: _import('404'), hidden: true },
      {
        path: '/',
        name: 'Home',
        hidden: true,
        component: Layout,
        redirect: '/home',
        children: [{
          path: 'home',
          component: _import('Home/index'),
          meta: { title: '首页' }
        }]
      },
      {
        path: '/news',
        name: 'News',
        component: Layout,
        redirect: '/news/index',
        children: [{
          path: 'index',
          component: _import('News/index'),
          meta: { title: '列表' }
        }]
      },
      { path: '*', redirect: '/404', hidden: true }
    ]
  })
  return router
}
