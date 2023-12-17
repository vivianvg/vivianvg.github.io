<template>
  <div class="article-card-h row">
    <div class="col-3">
      <!-- Clickable cover image-->
      <div class="article-cover">
        <NuxtLink class="article-link" :href="articlePath"
          ><img class="article-cover" :src="coverPath"
        /></NuxtLink>
      </div>
    </div>
    <!--Article content-->
    <div class="col-9 info">
      <div class="article-credits">{{ term }}</div>
      <!-- <div class="article-type">{{ type }}</div> -->
      <NuxtLink class="article-link" :href="articlePath"
        ><div class="article-title">{{ title }}</div></NuxtLink
      >
      <div class="article-credits">
        Written by
        <div class="semibold">{{ authors }}</div>
      </div>
      <div class="article-credits spacing">
        Illustrated by
        <div class="semibold">{{ creatives }}</div>
      </div>
      <div>{{ blurb }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: String,
  coverPath: String,
  title: String,
  type: String,
  term: String,
  authors: String,
  creatives: String,
  blurb: String,
  articlePath: String,
});
</script>

<style scoped>
/* .article-link {
  text-decoration: none;
} */

.semibold {
  display: inline;
  font-weight: 600;
}
.article-link:hover {
  color: var(--l-medium-blue);
}
.article-type {
  font-weight: bold;
  color: #5e5e5e;
  font-size: 1rem;
}
.article-title {
  font-weight: 600;
  font-size: 1.4rem;
}
.spacing {
  margin-bottom: 1.2rem;
}
.article-img {
  max-width: 100%;
  height: auto;
}
.article-credits {
  color: #5e5e5e;
  font-size: 0.9rem;
}
.article-metadata {
  color: var(--l-dark-blue);
  font-weight: 600;
}

/* media queries - set different col size proportions*/


</style>
