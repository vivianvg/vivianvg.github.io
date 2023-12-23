<template>
  <Header />
  <div class="container-fluid header p-0 overflow-hidden">
    <!-- <div class="row">
      <div class="col-2"></div>
      <div class="col-8"><h2>Publications</h2></div>
      <hr id="top-hr" />
    </div> -->
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <div class="row">
          <div class="margin-bottom"><h2>Publications</h2></div>
          <ArticleCardV
            title="Dependency and Diversification: Keys to Success for Single Export Nations"
            type="Business Strategy"
            term="F23"
            authors="Luka Pavlesen, Manu Krishna"
            creatives="Viviana Basurto"
            ><img
              class="article-cover"
              src="@/assets/fall-2022/covers/dd-cover.png"
          /></ArticleCardV>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";

useSeoMeta({
  title: "Publications",
  ogTitle: "Publications",
  description: "Waterloo Business Review Publications",
  ogDescription: "Waterloo Business Review Publications",
  ogImage: "",
});
</script>

<style lang="scss" scoped></style>
