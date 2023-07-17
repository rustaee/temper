<script setup lang="ts">
import PostListItem from './PostListItem.vue'
</script>
<template>
  <div class="list-wrapper">
    <h1>Sortable Post List</h1>
    <ul>
      <li class="list-item" v-for="i in 5" :key="i">
        <PostListItem />
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.list-wrapper {
  width: 45%;
}

h1 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #fff;
  font-weight: 600;
}

ul {
  width: 100%;
}
</style>
