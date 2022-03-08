<template>
  <router-view>
    <template #default="{ Component, route }">
      <n-config-provider :theme="appStore.theme" :theme-overrides="lightTheme">
        <n-loading-bar-provider>
          <n-message-provider>
          <loading-bar />
          <component :is="Component" :key="route.fullPath" />
          </n-message-provider>
        </n-loading-bar-provider>
      </n-config-provider>
    </template>
  </router-view>
</template>
<script setup lang="ts">
import { darkTheme, GlobalThemeOverrides } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'
import { reactive, ref } from 'vue';
import LoadingBar from "./components/LoadingBar.vue"
import { useAppStore } from './store/app';

const appStore = useAppStore()
// const theme = ref<GlobalTheme | null>(darkTheme)
//
appStore.setTheme(null)


const lightTheme: GlobalThemeOverrides = {
  common: {
    bodyColor: '#EBD9D9FF',
    primaryColor: '#FF0000',
    hoverColor: '#FF0000',
    baseColor: '#FF0000',
    textColor1: '#000111',
    textColorBase: '#FF0000',
  },
  Layout: {
    // color: '#EBD9D9FF'
  },
  Menu: {
    itemTextColorHover: '#FF0000'
  },
  Button: {
    textColor: '#FF0000'
  }
}

</script>

<style lang="scss" scoped>
.n-config-provider {
  height: 100%;
  width: 100%;
}
</style>
