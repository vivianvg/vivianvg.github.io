<template>
  <div class="member-card">
    <div class="row member-headshot">
      <slot></slot>
    </div>
    <div class="row member-name">{{ name }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
});
</script>

<style scoped>
.member-card {
  display: flex;
  flex-wrap: wrap;
  max-width: 10rem;
  margin: 1rem;
}
.member-name {
  text-align: center;
}
</style>
