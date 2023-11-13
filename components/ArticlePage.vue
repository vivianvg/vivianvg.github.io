<template>
  <Header />
  <div class="container-fluid header p-0 overflow-hidden">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10 content">
        <div>{{ type }}</div>
        <div class="article-title">
          <h2>{{ title }}</h2>
        </div>
        <div class="article-metadata">
          {{ term }}, {{ authors }}, {{ creatives }}
        </div>
        <div class="article-content"><slot></slot></div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: Number,
  title: String,
  type: String,
  term: String,
  authors: String,
  creatives: String,
  blurb: String,
});
</script>

<style scoped>
.content > * {
  margin-bottom: 0.4rem;
}


</style>
