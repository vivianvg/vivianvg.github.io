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
    id: "f22-b1",
    coverPath: "articles/fall-2022/covers/dd-cover.png",
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
    id: "f22-b2",
    coverPath: "articles/fall-2022/covers/crisis-cover.png",
    articlePath: "articles/fall-2022/the-crisis-of-greed-russian-ukrainian-war",
    title:
      "The Crisis of Greed: Behind the Scenes of the Russian-Ukrainian War",
    type: "Business Strategy",
    term: "Fall 2022",
    authors: "Rachel Butler, Pranav Shireen",
    creatives: "Pramiya Arulraj",
    blurb:
      "Nearly everyone is familiar with the Russian-Ukrainian war that exploded at the beginning of 2022, but why did it start? Was the capital gain for Russia’s elite a surprising side effect, or an important consideration all along? This article explores the unintended consequences of the West’s response to the war and how Russia’s social and political system enables oligarchs to continue profiting off of times of crisis.",
  },
  {
    id: "f22-b3",
    coverPath: "articles/fall-2022/covers/tesla-cover.png",
    articlePath:
      "articles/fall-2022/tesla-the-future-of-the-electrical-industry",
    title: "Tesla: The Future of the Electrical Industry",
    type: "Business Strategy",
    term: "Fall 2022",
    authors: "Chiran Beniwal, Sophie Hsieh, Arnav Sheth",
    creatives: "Yukttha Sivaraju",
    blurb:
      "Tesla is considered one of the key leaders in the EV market, but with other players slowly entering the EV market and facing increasing pressure from its growing competitors, can Tesla still keep its title of being a leader in the EV market? This article explores how Tesla can expand beyond being just a leader in the EV space, and instead become a broader leader within the entire energy transition.",
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
