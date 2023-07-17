<script setup lang="ts">
import PostsList from '@/components/PostsList.vue'
import ActivityList from '@/components/ActivityList.vue'
</script>
<template>
  <main>
    <PostsList />
    <ActivityList />
  </main>
</template>
<style lang="scss" scoped>
main {
  width: clamp(600px, 60%, 900px);
  display: flex;
  justify-content: space-between;
}
</style>
