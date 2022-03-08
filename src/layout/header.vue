<template>
  <n-layout-header bordered>
    <div class="breadcrum">
      <n-button text style="font-size: 20px">
        <n-icon>
          <refresh-outline />
        </n-icon>
      </n-button>
      <n-breadcrumb>
        <n-breadcrumb-item v-for="item in currentRoute.matched" :key="item.path" @click="handleBreadClick(item.path)">
          {{ item.meta.title }}
        </n-breadcrumb-item>
      </n-breadcrumb>
    </div>

    <div class="opt-btn">
      <n-space>
        <n-switch v-model:value="active" size="medium" @update:value="handleSwitch">
          <template #checked-icon>
            <n-icon :component="ArrowForwardOutline" />
          </template>
          <template #unchecked-icon>
            <n-icon :component="ArrowBackOutline" />
          </template>
        </n-switch>
      </n-space>
    </div>

  </n-layout-header>
</template>

<script lang="ts" setup>
import { RefreshOutline, ArrowBackOutline, ArrowForwardOutline } from '@vicons/ionicons5'
import { darkTheme } from 'naive-ui';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '../store/app';

const router = useRouter()
const { currentRoute } = router
const appStore = useAppStore()

const active = ref(false)

const handleBreadClick = (path: string) => {
  if(path === currentRoute.value.path) return
  router.push(path)
}

const handleSwitch = (value: boolean) => {
  console.log('handle ', value)
  if(value) {
    appStore.setTheme(null)
  } else {
    appStore.setTheme(darkTheme)
  }
}

</script>

<style lang="scss" scoped>
.n-layout-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    height: 64px;
    box-shadow: 0 1px 4px #00152914;
    transition: all .2s ease-in-out;
    width: 100%;
    z-index: 11;

  .breadcrum {
    display: flex;

    .n-breadcrumb {
      padding-left: 16px;
    }
  }
}

</style>