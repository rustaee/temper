<script setup lang="ts">
import PostList from '@/components/PostList.vue'
import ActivityList from '@/components/ActivityList.vue'
</script>
<template>
  <main>
    <PostList />
    <ActivityList />
  </main>
</template>
<style lang="scss" scoped>
main {
  width: clamp(600px, 60%, 900px);
  display: flex;
  justify-content: space-between;
  padding-top: 2.5rem;
  align-items: start;
}
</style>
