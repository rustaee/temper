<script setup lang="ts">
import { computed, onMounted, onUpdated, ref } from 'vue'
import PostListItem from './PostListItem.vue'
import PostService from '../services/PostService'

const postService = ref(new PostService())

const posts = computed(() => postService.value.posts.slice(0, 5))

onMounted(() => {
  postService.value.getAllPosts()
})

onUpdated(() => {
  console.log('updated')
})
</script>
<template>
  <div class="list-wrapper">
    <h1>Sortable Post List</h1>
    <div class="loading">
      <span v-if="postService.loading">Loading...</span>
    </div>

    <transition-group name="list" tag="ul">
      <li
        class="list-item"
        v-for="(post, index) in posts"
        :key="post.id"
        :style="{ top: `${index * 75}px` }"
      >
        <PostListItem
          :post="post"
          :list-index="index"
          :total-items="posts.length"
          @move-down="postService.moveDown(index)"
          @move-up="postService.moveUp(index)"
        />
      </li>
    </transition-group>
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

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

li {
  transition: all 0.5s ease;
}
</style>
