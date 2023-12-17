<template>
  <Header />
  <div class="container-fluid header p-0 overflow-hidden">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <div><h2 class="margin-bottom">Technology</h2></div>
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
  title: "Technology",
  ogTitle: "Technology",
  description: "Waterloo Business Review Technology",
  ogDescription: "Waterloo Business Review Technology",
  ogImage: "",
});

const articles = ref([
  {
    id: 1,
    coverPath: "nuxt/assets/articles/fall-2022/covers/dr-cover.png",
    articlePath: "articles/fall-2022/dependency-and-diversification",
    title: "The Digital Recession",
    type: "Technology",
    term: "Fall 2022",
    authors: "Lakshya Balchandani, Vivian Guo, Ali Ravjani",
    creatives: "Devena Mohabir",
    blurb:
      "In an increasingly digitalized society, technological advancement has always been accompanied by an inconspicuous force: bots and spam. With the prevalence of automation, bots and spam have become a pervasive poison to accurate information on the web, radically shifting the way governments, businesses, and even people conduct themselves online. This article explores the impact of malicious bots on the internet and the world economy, and what this incoming digital recession means for our future.",
  },
]);
</script>

<style scoped>
hr {
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
}
</style>
