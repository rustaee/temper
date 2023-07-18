<script setup lang="ts">
import { Activity } from '../types/activity.interface'

defineProps<{
  activity: Activity
}>()
</script>
<template>
  <div class="item-wrapper">
    <div class="title">
      Moved Post {{ activity.postId }} from {{ activity.from }} to {{ activity.to }}
    </div>
    <div class="action">
      <button>Time travel</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.item-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  font-size: 0.8rem;
  height: 50px;
  animation: strech 0.5s ease;
  overflow: hidden;
  padding: 0 0.7rem;
}

button {
  border: none;
  background-color: #27fe90;
  color: #666;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 0.7rem;
  font-weight: 600;
}

@keyframes strech {
  0% {
    height: 0;
  }
  100% {
    height: 50px;
  }
}
</style>
