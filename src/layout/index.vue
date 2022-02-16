<template>
	<n-layout position="absolute" has-sider>
		<Sidebar />
		<n-layout>
			<n-layout-header bordered>颐和园路</n-layout-header>
			<n-layout-content content-style="padding: 24px; min-height: 85vh">平山道</n-layout-content>
		</n-layout>
	</n-layout>
</template>

<script lang="ts" setup>
import Sidebar from './sidebar.vue'

</script>

<style scoped>
.n-layout-header {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 9px 18px;
}
</style>