<template>
  <Header />
  <div class="container-fluid header p-0 overflow-hidden">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <div><h2>BUSINESS STRATEGY</h2></div>

        <div class="article-list">
          <!-- not able to do a for loop through because of issues with dynamic cover path-->
          <!-- temporary solution of using slot for the images -->

          <Article
            title="Dependency and Diversification: Keys to Success for Single Export Nations"
            type="BUSINESS STRATEGY"
            term="F22"
            authors="Luka Pavlesen, Manu Krishna"
            creatives="Viviana Basurto"
            blurb=""
            ><img
              class="article-cover"
              src="@/assets/articles/fall-2022/covers/dd-cover.png"
          /></Article>

          <!-- <Article
            v-for="article in articles"
            :coverPath="article.coverPath"
            :title="article.title"
            :type="article.type"
            :term="article.term"
            :authors="article.authors"
            :creatives="article.creatives"
          /> -->
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Business Strategy",
  ogTitle: "Business Strategy",
  description: "Waterloo Business Review Business Strategy",
  ogDescription: "Waterloo Business Review Business Strategy",
  ogImage: "",
});

const articles = ref([
  {
    id: 1,
    coverPath: "assets/articles/fall-2022/covers/dd-cover.png",
    title:
      "Dependency and Diversification: Keys to Success for Single Export Nations",
    type: "Business Strategy",
    term: "F22",
    authors: "Luka Pavlesen, Manu Krishna",
    creatives: "Viviana Basurto",
  },
  {
    id: 2,
    coverPath: "fall-2022/covers/crisis-cover.png",
    title:
      "The Crisis of Greed: Behind the Scenes of the Russian-Ukrainian War",
    type: "Business Strategy",
    term: "F22",
    authors: "Rachel Butler, Pranav Shireen",
    creatives: "Pramiya Arulraj",
  },
]);
</script>

<style scoped></style>
