<script setup lang="ts">
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Post } from '../types/post.interface'
import { computed } from 'vue'

const props = defineProps<{
  post: Post
  listIndex: number
  totalItems: number
}>()

defineEmits(['moveUp', 'moveDown'])

const showUpArrow = computed(() => props.totalItems > 1 && props.listIndex != 0)
const showDownArrow = computed(
  () => props.totalItems > 1 && props.listIndex != props.totalItems - 1
)
</script>
<template>
  <div class="item-wrapper">
    <div class="title">Post {{ post.id }}</div>
    <div class="arrow" :class="{ spaceBetween: showDownArrow || showUpArrow }">
      <font-awesome-icon
        v-if="showUpArrow"
        :icon="faChevronUp"
        width="10"
        @click="$emit('moveUp')"
      />
      <font-awesome-icon
        v-if="showDownArrow"
        :icon="faChevronDown"
        width="10"
        @click="$emit('moveDown')"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.item-wrapper {
  background-color: #fff;
  width: 100%;
  margin: 1rem 0;
  border-radius: 0.2rem;
  padding: 0.7rem;
  box-shadow: 0 0.2rem 0.7rem rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  .title {
    padding: 0.5rem 0;
  }
}

.arrow {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #6356b0;

  &.spaceBetween {
    justify-content: space-around;
  }

  svg {
    cursor: pointer;
  }
}
</style>
