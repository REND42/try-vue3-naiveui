import { RouteRecordRaw } from "vue-router";

const Layout = () => import('@/layout/index.vue')

const mainRoutes: RouteRecordRaw[] = [
  {
    name: 'dashboard',
    path: '/dashboard',
    redirect: '/dashboard/home',
    component: () => import('@/views/dashboard/home.vue'),
    meta: {
      title: 'Dashboard',
      auth: true,
    },
    children: [
      {
        name: 'home',
        path: 'home',
        component: () => import('@/views/dashboard/home.vue'),
        meta: {
          title: 'Home',
          auth: true,
        }
      },
      {
        name: 'update',
        path: 'update',
        component: () => import('@/views/dashboard/update.vue'),
        meta: {
          title: 'update',
          auth: true,
        }
      }
    ]
  },
  {
    name: 'Post',
    path: '/post',
    component: () => import('@/views/post/manage.vue'),
    meta: {
      title: 'Post',
      auth: true,
    },
    children: [
      {
        name: 'manage',
        path: 'manage',
        component: () => import('@/views/post/manage.vue'),
        meta: {
          title: 'Manage',
          auth: true,
        }
      },
      {
        name: 'create',
        path: 'create',
        component: () => import('@/views/post/create.vue'),
        meta: {
          title: 'Create',
          auth: true,
        }
      }
    ]
  }
]

const routes: RouteRecordRaw[] = [
  // ...mainRoutes,
  {
    name: 'sys',
    path: '/',
    redirect: '/dashboard/home',
    component: Layout,
    meta: {
      title: 'index',
      auth: true,
    },
    children:[...mainRoutes]
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