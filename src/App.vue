<template>
  <router-view>
    <template #default="{ Component, route }">
      <n-config-provider :theme="appStore.theme">
        <component :is="Component" :key="route.fullPath" />
      </n-config-provider>
    </template>
  </router-view>
</template>
<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'
import { reactive, ref } from 'vue';
import { useAppStore } from './store/app';

const appStore = useAppStore()
// const theme = ref<GlobalTheme | null>(darkTheme)
//
appStore.setTheme(darkTheme)
</script>

<style>

</style>
