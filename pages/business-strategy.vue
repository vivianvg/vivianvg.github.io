<template>
  <Header />
  <div class="container-fluid header p-0 overflow-hidden">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <div><h2 class="margin-bottom">Business Strategy</h2></div>
        <hr />
        <div class="article-list">
          <div class="article-list-item" v-for="article in articles">
            <ArticleCardH
              :id="article.id"
              :title="article.title"
              :type="article.type"
              :term="article.term"
              :authors="article.authors"
              :creatives="article.creatives"
              :blurb="article.blurb"
              :coverPath="article.coverPath"
              :articlePath="article.articlePath"
            ></ArticleCardH>
            <hr />
          </div>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
    coverPath: "nuxt/assets/articles/fall-2022/covers/dd-cover.png",
    articlePath: "articles/fall-2022/dependency-and-diversification",
    title:
      "Dependency and Diversification: Keys to Success for Single Export Nations",
    type: "Business Strategy",
    term: "Fall 2022",
    authors: "Luka Pavlesen, Manu Krishna",
    creatives: "Viviana Basurto",
    blurb:
      "In 1959, around 1700 billion cubic meters of natural gas were found in Holland’s Groningen region. At the time, gas prices were near their all time high and the Dutch had a relatively strong ability to harvest oil through the Nederlandse Aardolie Maatschappij (NAM), which was jointly owned by Esso and Shell. The discovery of natural gas was believed to enable the Dutch economy to grow and prosper, which it appeared to do so through the 70s ...",
  },
  {
    id: 2,
    coverPath: "nuxt/assets/articles/fall-2022/covers/dd-cover.png",
    articlePath: "articles/fall-2022/dependency-and-diversification",
    title:
      "The Crisis of Greed: Behind the Scenes of the Russian-Ukrainian War",
    type: "Business Strategy",
    term: "Fall 2022",
    authors: "Rachel Butler, Pranav Shireen",
    creatives: "Pramiya Arulraj",
    blurb: "",
  },
]);

// const glob = import.meta.glob("~/assets/articles/*", {
//   eager: true,
// });

// const getImageAbsolutePath = (imageName) => {
//   return glob[`/assets/articles/${imageName}`]["default"];
// };
</script>

<style scoped>
hr {
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
}
/* .article-list > * {
  margin-bottom: 2.4rem;
} */
</style>
