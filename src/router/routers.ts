import { RouteRecordRaw } from "vue-router";

interface Meta {
  title: string,
  disabled: boolean,
  auth: boolean
}

const Layout = () => import('@/layout/index.vue')

const mainRoutes: RouteRecordRaw[] = [
  {
    name: 'dashboard',
    path: '/',
    component: Layout,
    
    meta: {
      title: 'Dashboard',
      auth: true,
    },
    children: [
      {
        name: 'home',
        path: '/',
        component: () => import('@/views/home.vue'),
        meta: {
          title: 'Home',
          auth: true,
        }
      },
      {
        name: 'update',
        path: 'update',
        component: () => import('@/views/update.vue'),
        meta: {
          title: 'update',
          auth: true,
        }
      }
    ]
  },
]

const routes: RouteRecordRaw[] = [
  {
    name: 'layout',
    path: '/',
    component: () => import('@/layout/index.vue'),
    children: [...mainRoutes]
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/login.vue'),
    meta: {
      title: 'Sign In'
    }
  }
]

export default routes