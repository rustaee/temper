<script setup lang="ts">
import ActivityListItem from './ActivityListItem.vue'
</script>
<template>
  <div class="activity-wrapper">
    <h2>List of actions commited</h2>
    <div class="activities">
      <ul>
        <li class="activity-item" v-for="i in 2" :key="i">
          <ActivityListItem />
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
}

ul {
  background-color: #fff;
  width: 100%;
  border-radius: 0.2rem;
  border: 1px solid #eaeaea;
  box-shadow: 0 0.2rem 0.7rem rgba(0, 0, 0, 0.1);
}
</style>
