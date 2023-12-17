<template>
  <Header />
  <div class="container-fluid header p-0 overflow-hidden">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <div>
          <h2 class="margin-bottom">Alumni Insights</h2>
        </div>

        <div class="article-list">
          <ArticleCardV
            cover-path="/assets/fall-2022/covers/crisis-cover.png"
            title=""
            type="Alumni Insights"
            term="F22"
            authors=""
            creatives=""
          />
        </div>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Alumni Insights",
  ogTitle: "Alumni Insights",
  description: "Waterloo Business Review Alumni Insights",
  ogDescription: "Waterloo Business Review Alumni Insights",
  ogImage: "",
});
</script>

<style lang="scss" scoped></style>
