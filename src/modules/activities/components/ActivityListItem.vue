<script setup lang="ts"></script>
<template>
  <div class="item-wrapper">
    <div class="title">action title</div>
    <div class="action">
      <button>Time travel</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.item-wrapper {
  padding: 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border-bottom: 1px solid #eaeaea;
  font-size: 0.8rem;
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
</style>
