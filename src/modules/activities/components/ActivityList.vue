<script setup lang="ts">
import { Activity } from '../types/activity.interface'
import ActivityListItem from './ActivityListItem.vue'
import { faRotate } from '@fortawesome/free-solid-svg-icons'

const props = defineProps<{
  activities: Activity[]
  removeActivitiesToIndex: (activity: Activity) => void
  postService: PostService
}>()

defineEmits(['revert'])

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
    <h2>
      <span>List of actions commited</span>
      <div class="revert" v-if="activities.length">
        <font-awesome-icon :icon="faRotate" @click="$emit('revert')" />
        <span class="tooltiptext">Revert all the actions</span>
      </div>
    </h2>

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
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  * {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  svg {
    cursor: pointer;
  }
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

.revert {
  position: relative;
  height: 20px;
}

.revert .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  font-size: 0.7rem;
  position: absolute;
  z-index: 1;
}

.revert:hover .tooltiptext {
  visibility: visible;
}
</style>
