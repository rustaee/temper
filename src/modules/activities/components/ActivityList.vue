<script setup lang="ts">
import { Activity } from '../types/activity.interface'
import ActivityListItem from './ActivityListItem.vue'

const props = defineProps<{
  activities: Activity[]
  removeActivitiesToIndex: (activity: Activity) => void
  postService: PostService
}>()

const timeTravel = async (activity: Activity) => {
  await props.postService.timeTravel({
    allActivities: props.activities,
    destinationActivity: activity
  })
  props.removeActivitiesToIndex(activity)
}
</script>
<template>
  <div class="activity-wrapper">
    <h2>List of actions commited</h2>
    <div class="activities">
      <span v-if="!activities.length">Start by reordering the posts</span>
      <ul>
        <li class="activity-item" v-for="(activity, index) in activities" :key="activity.postId">
          <ActivityListItem
            :activity="activity"
            @timeTravel="() => timeTravel(activity)"
            :is-last-action="index === 0"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.activity-wrapper {
  width: 47%;
  background-color: #fff;
  border-radius: 0.2rem;
  box-shadow: 0 0.2rem 0.7rem rgba(0, 0, 0, 0.15);
}

h2 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 600;
  margin: 1rem;
}

.activities {
  width: 100%;
  padding: 1rem;
  background-color: #f5f5f5;
  text-align: center;

  span {
    font-size: 0.8rem;
    font-weight: 600;
    color: #6356b0;
  }
}

ul {
  background-color: #fff;
  width: 100%;
  border-radius: 0.2rem;
  border: 1px solid #eaeaea;
  box-shadow: 0 0.2rem 0.7rem rgba(0, 0, 0, 0.1);
}
</style>
