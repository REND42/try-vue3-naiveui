<template>
  <n-layout-sider content-style="padding: 24px;">
    <n-menu :options="menuOptions"></n-menu>

  </n-layout-sider>
</template>

<script lang="ts" setup>
import { MenuOption } from 'naive-ui'
import { computed, h } from 'vue'
import { RouteRecordRaw, RouterLink, useRouter } from 'vue-router'


const router = useRouter()

const menuList = router.options.routes[0].children

const mapping = (items: RouteRecordRaw[]): MenuOption[] => items.map(item => ({
  key: item.name?.toString(),
  label: item.name != null ? () => h(RouterLink, { to: item }, { default: () => item.meta?.title }) : item.meta?.title,
  children: item.children && mapping(item.children)
}))

const menuOptions = computed(() => (menuList ? mapping(menuList) : []))

console.log(233, menuList, menuOptions.value)

</script>