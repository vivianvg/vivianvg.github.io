<template>
  <div class="article-cover">
    <slot></slot>
  </div>
  <div class="article-type">{{ type }}</div>
  <div class="article-title">{{ title }}</div>
  <div class="article-authors">{{ authors }}</div>
  <div class="article-creatives">{{ creatives }}</div>
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
const test = import(`./assets/articles/${props.coverPath}.png`);
console.log(test);

// function getImageUrl() {
//   console.log(props.coverPath);
//   // This path must be correct for your file
//   return new URL(`@/assets/articles/${props.coverPath}`, import.meta.url);
// }

import coverSrc from "@/assets/articles/fall-2022/covers/dd-cover.png";
// defineProps(["coverPath", "title", "type", "term", "authors", "creatives"]);
</script>

<style scoped>
body {
  background-color: black;
}

.article-cover {

}
</style>
