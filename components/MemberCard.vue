<template>
  <div class="member-card">
    <div class="row member-headshot">
      <img :src="headshot" />
    </div>
    <div class="row member-name">{{ name }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  headshot: String,
});
</script>

<style scoped>
.member-card {
  display: flex;
  flex-wrap: wrap;
  max-width: 10rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.member-name {
  text-align: center;
  margin: auto;
}
.member-headshot {
  margin-bottom: 0.5rem;
}
</style>
