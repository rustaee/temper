<script setup lang="ts">
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
</script>
<template>
  <div class="item-wrapper">
    <div class="title">Item</div>
    <div class="arrow">
      <font-awesome-icon :icon="faChevronUp" width="10" />
      <font-awesome-icon :icon="faChevronDown" width="10" />
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

  svg {
    cursor: pointer;
  }
}
</style>
