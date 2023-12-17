<template>
  <div class="article-card">
    <div class="article-cover">
      <slot></slot>
    </div>
    <!-- <div class="article-type">{{ type }}</div>
    <div class="article-title">{{ title }}</div>
    <div class="article-authors">{{ authors }}</div>
    <div class="article-creatives">{{ creatives }}</div> -->
  </div>
</template>

<script setup>
const props = defineProps({
  id: Number,
  coverPath: String,
  title: String,
  type: String,
  term: String,
  authors: String,
  creatives: String,
  blurb: String,
});
const imageUrl = props.coverPath;
const test = import(`./assets/${props.coverPath}.png`);
console.log(test);

// function getImageUrl() {
//   console.log(props.coverPath);
//   // This path must be correct for your file
//   return new URL(`@/assets/articles/${props.coverPath}`, import.meta.url);
// }


// defineProps(["coverPath", "title", "type", "term", "authors", "creatives"]);
</script>

<style scoped>
.article-cover {
  width: 100%;
  min-width: 12rem;
}

.article-metadata {
  color: var(--l-dark-blue);
  font-weight: 600;
}

.article-link {
  text-decoration: none;
  color: var(--l-text);
}

.article-card {
  max-width: 16rem;
}
</style>
