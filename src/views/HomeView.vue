<script setup lang="ts">
import PostList from '@/modules/posts/components/PostList.vue'
import ActivityList from '@/modules/activities/components/ActivityList.vue'
import useActivityService from '@/modules/activities/services/useActivityService'
import PostService from '@/modules/posts/services/PostService'
import { onMounted, ref } from 'vue'

const { activities, addActivity } = useActivityService()
const postService = ref(new PostService(addActivity))

onMounted(() => {
  postService.value.getAllPosts()
})
</script>
<template>
  <main>
    <PostList :post-service="postService" :addActivity="addActivity" />
    <ActivityList :activities="activities" />
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
