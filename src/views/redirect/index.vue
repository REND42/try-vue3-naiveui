<template></template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  const { currentRoute, replace } = useRouter()
  const { query } = currentRoute.value
</script>