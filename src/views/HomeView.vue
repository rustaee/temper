<script setup lang="ts">
import PostList from '@/modules/posts/components/PostList.vue'
import ActivityList from '@/modules/activities/components/ActivityList.vue'
import useActivityService from '@/modules/activities/services/useActivityService'
import PostService from '@/modules/posts/services/PostService'
import { onMounted, ref } from 'vue'

const { activities, addActivity, removeActivitiesToIndex, deleteAllActivities } =
  useActivityService()
const postService = ref(new PostService(addActivity))

const revertAllActions = () => {
  postService.value.getAllPosts()
  deleteAllActivities()
}

onMounted(() => {
  postService.value.getAllPosts()
  if (activities.value.length) {
    //To load thge last order of posts
    postService.value.timeTravel({
      allActivities: activities.value,
      destinationActivity: activities.value[0]
    })
  }
})
</script>
<template>
  <main>
    <PostList :post-service="postService" :addActivity="addActivity" />
    <ActivityList
      :activities="activities"
      :remove-activities-to-index="removeActivitiesToIndex"
      :post-service="postService"
      @revert="revertAllActions"
    />
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
