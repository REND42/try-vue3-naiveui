<template>
  <n-layout-sider content-style="padding: 0px;" :width="200" :collapsed-width="0" :native-scrollbar="false">
    <div class="logo">
    <n-icon size="36" color="#316c72">
      <leaf/>
    </n-icon>
    <router-link to="/">
      <n-gradient-text type="info">
        Leaves
      </n-gradient-text>
    </router-link>
  </div>

    <n-menu accordion :options="menuOptions"
      :default-value="activeMenus"
      :value="currentRoute.name?.toString()"
      @update:value="handleMenuSelect">
    </n-menu>
  </n-layout-sider>
</template>

<script lang="ts" setup>
import { Leaf } from '@vicons/ionicons5'
import { MenuOption } from 'naive-ui'
import { computed, h } from 'vue'
import { RouteLocationRaw, RouteRecordRaw, RouterLink, useRouter } from 'vue-router'
import { useMenuStore } from '../store/menu'
import { usePermissionStore } from '../store/permission'

const router = useRouter()
const { currentRoute } = router
const premissionStore = usePermissionStore()
const menuStore = useMenuStore()

const activeMenus = menuStore.getCurMenu ? menuStore.getCurMenu : ''

const menuOptions = computed(() => {
  return generateOptions(premissionStore.routes, '')
})

function resolvePath(basePath: string, path: string) {
  return (
    '/' +
    [basePath, path]
      .filter((path) => !!path && path !== '/')
      .map((path) => path.replace(/(^\/)|(\/$)/g, ''))
      .join('/')
  )
}

function generateOptions(routes: RouteRecordRaw[], basePath: string): MenuOption[] {
  let options: MenuOption[] = []
  routes.forEach(route => {
    if(route.name && !route.meta?.isHidden) {
      let curOption: MenuOption = {
        // label: (route.meta && route.meta?.title) || route.name,
        label: !route.children ? () => h(RouterLink, { to: route }, { default: () => route.meta?.title }) : route.meta?.title,
        key: route.name.toString(),
        // path: resolvePath(basePath, route.path) as RouteLocationRaw
      }
      if(route.children && route.children.length) {
        curOption.children = generateOptions(route.children, resolvePath(basePath, route.path))
      }
      if(curOption.children && curOption.children.length <= 1) {
        if(curOption.children.length === 1) {
          curOption = { ...curOption.children[0] }
        }
        delete curOption.children
      }
      options.push(curOption)
    }
  })
  return options
}

function handleMenuSelect(key: string, item: MenuOption) {
  // router.push(item.path)
  menuStore.setCurrentMenu(key)
  console.log(112, key, item)
  // router.push(item.path)
}


</script>

<style lang="scss" scoped>

.n-layout-side {
  max-width: 200px;
  width: 200px;
}
.logo {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    margin-left: 5px;
    text-decoration: none;
    font-size: 1.25rem;
    color: #316c72;
    font-weight: 800;
    .n-gradient-text {
      font-size: 14px;
      font-weight: bold;
    }
  }
}


</style>