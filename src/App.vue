<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="clipped-bg"></div>
  <router-view />
</template>

<style lang="scss" scoped>
.clipped-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #6356b0;
  clip-path: polygon(0 0%, 0 40%, 100% 0);
}
</style>
