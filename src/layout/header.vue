<template>
  <n-layout-header bordered>
    <n-button text style="font-size: 20px">
      <n-icon>
        <refresh-outline />
      </n-icon>
    </n-button>
    <n-breadcrumb>
      <n-breadcrumb-item>Dashboard</n-breadcrumb-item>
      <n-breadcrumb-item>Home</n-breadcrumb-item>
    </n-breadcrumb>
  </n-layout-header>
</template>

<script lang="ts" setup>
import { RefreshOutline } from '@vicons/ionicons5'

</script>

<style lang="scss" scoped>
  .n-breadcrumb {
    padding-left: 16px;
  }
</style>