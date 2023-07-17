<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import PostListItem from './PostListItem.vue'
import PostService from '../services/PostService'

const postService = ref(new PostService())

const posts = computed(() => postService.value.posts.slice(0, 5))

onMounted(() => {
  postService.value.getAllPosts()
})
</script>
<template>
  <div class="list-wrapper">
    <h1>Sortable Post List</h1>
    <ul>
      <li class="list-item" v-for="(post, index) in posts" :key="post.id">
        <PostListItem :post="post" :list-index="index" :total-items="posts.length" />
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
