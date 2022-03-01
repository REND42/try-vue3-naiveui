import { RouteRecordRaw } from "vue-router";

const Layout = () => import('@/layout/index.vue')

export interface Meta {
  title: string
  icon?: string
  isHidden?: boolean
  role?: string[]
}

export interface AppRouteRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string,
  meta: Meta
}

export const basicRoutes: RouteRecordRaw[] = [
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      isHidden: true
    },
  },
  {
    name: 'REDIRECT',
    path: '/redirect',
    component: Layout,
    meta: {
      isHidden: true
    },
    children: [
      {
        name: 'REDIRECT_NAME',
        path: '',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    name: 'LOGIN',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录页',
      isHidden: true
    }
  },

  {
    name: 'HOME',
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      title: '首页'
    },
    children: [
      {
        name: 'DASHBOARD',
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: 'Dashboard'
        }
      }
    ]
  },
  {
    name: 'ERROR-PAGE',
    path: '/error-page',
    component: Layout,
    redirect: '/error-page/404',
    meta: {
      title: '错误页'
    },
    children: [
      {
        name: 'ERROR-404',
        path: '404',
        component: () => import('@/views/error-page/404.vue'),
        meta: {
          title: '404'
        }
      }
    ]
  },
  {
    name: 'POST',
    path: '/post',
    component: Layout,
    redirect: '/post/create',
    meta: {
      title: '文章'
    },
    children: [
      {
        name: 'CREATE',
        path: 'create',
        component: () => import('@/views/post/create.vue'),
        meta: {
          title: '创建'
        }
      },
      {
        name: 'MANAGE',
        path: 'manage',
        component: () => import('@/views/post/manage.vue'),
        meta: {
          title: '管理'
        }
      }
    ]
  },
  {
    name: 'TEST',
    path: '/test',
    component: Layout,
    redirect: '/test/unocss',
    meta: {
      title: '测试'
    },
    children: [
      {
        name: 'UNOCSS',
        path: 'unocss',
        component: () => import('@/views/test-page/TestUnocss.vue'),
        meta: {
          title: '测试unocss'
        }
      },
      {
        name: 'MESSAGE',
        path: 'message',
        component: () => import('@/views/test-page/TestMessage.vue'),
        meta: {
          title: '测试Message'
        }
      },
      {
        name: 'DIALOG',
        path: 'dialog',
        component: () => import('@/views/test-page/TestDialog.vue'),
        meta: {
          title: '测试Dialog'
        }
      },
      {
        name: 'THIRD',
        path: 'third',
        component: () => import('@/views/test-page/routerView.vue'),
        redirect: '/test/third/one',
        meta: {
          title: '第三级测试'
        },
        children: [
          {
            name: 'ONE',
            path: 'one',
            component: () => import('@/views/test-page/third/one.vue'),
            meta: {
              title: '第三级首页'
            }
          },
          {
            name: 'TWO',
            path: 'two',
            component: () => import('@/views/test-page/third/two.vue'),
            meta: {
              title: '第三级第二页'
            }
          }
        ]
      }
    ]
  }
]

export const NOT_FOUND_ROUTE: RouteRecordRaw = {
  name: 'NOT_FOUND',
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  meta: {
    isHidden: true
  }
}

const modules = import.meta.globEager('./modules/*.js')
const asyncRoutes: RouteRecordRaw[] = []
Object.keys(modules).forEach(key => {
  asyncRoutes.push(...modules[key].default)
})

export { asyncRoutes }