<template>
	<n-layout position="absolute" has-sider>
		<Sidebar />
		<n-layout>
			<Header />
			<n-layout-content position="absolute" content-style="padding: 24px; height: 100%;"
				style="top: 64px;">
				<router-view/>
			</n-layout-content>
		</n-layout>
	</n-layout>
</template>

<script lang="ts" setup>
import Sidebar from './sidebar.vue'
import Header from './header.vue'

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