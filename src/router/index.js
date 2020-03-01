import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(Router)
export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: '知识库管理',
        component: () => import('@/views/Dashboard.vue'),
        meta: { title: '知识库管理', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/example',
    name: '知识管理',
    component: Layout,
    redirect: '/example/table',
    meta: { title: '知识管理', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/Table.vue'),
        meta: { title: '条件搜索', icon: 'table' }
      }, {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/Tree.vue'),
        meta: { title: '我的收藏', icon: 'tree' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/myStore.vue'),
        meta: { title: '我的库管理', icon: 'tree' }
      }
    ]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '系统管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'),
        name: '用户管理',
        meta: { title: '用户管理' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1/index.vue'),
            name: '普通用户',
            meta: { title: '普通用户' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2/index.vue'),
            name: '高级用户',
            meta: { title: '高级用户' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: '数据库管理',
        meta: { title: '数据库管理' }
      }
    ]
  }

]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
const router = createRouter()
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
