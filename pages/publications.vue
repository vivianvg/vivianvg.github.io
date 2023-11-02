<template>
  <div>
    <Header />
    <div class="container-fluid header p-0 overflow-hidden">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <h2>PUBLICATIONS</h2>
        </div>
        <div class="col-1"></div>
      </div>
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
