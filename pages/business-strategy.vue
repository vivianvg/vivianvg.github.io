<template>
  <Header />
  <div class="container-fluid header p-0 overflow-hidden">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <div><h2 class="margin-bottom">BUSINESS STRATEGY</h2></div>

        <div class="article-list">
          <!-- not able to do a for loop through because of issues with dynamic cover path-->
          <!-- temporary solution of using slot for the images -->

          <!-- <NuxtLink
            class="article-link"
            to="/articles/fall-2022/dependency-and-diversification"> -->
          <ArticleCardH
            title="Dependency and Diversification: Keys to Success for Single Export Nations"
            type="BUSINESS STRATEGY"
            term="F22"
            authors="Luka Pavlesen, Manu Krishna"
            creatives="Viviana Basurto"
            blurb="In 1959, around 1700 billion cubic meters of natural gas were found in Holland’s Groningen region. At the time, gas prices were near their all time high and the Dutch had a relatively strong ability to harvest oil through the Nederlandse Aardolie Maatschappij (NAM), which was jointly owned by Esso and Shell. The discovery of natural gas was believed to enable the Dutch economy to grow and prosper, which it appeared to do so through the 70s ..."
            articlePath="/articles/fall-2022/dependency-and-diversification"
            ><img
              class="article-cover"
              src="@/assets/articles/fall-2022/covers/dd-cover.png"
          /></ArticleCardH>
          <!-- </NuxtLink> -->

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
