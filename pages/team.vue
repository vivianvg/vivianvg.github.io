<template>
  <div>
    <Header />
    <div class="container-fluid header p-0 overflow-hidden">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <div class="page-title"><h2 class="margin-bottom">Our Team</h2></div>
          <div>
            <p>
              Our dedicated and passionate team is focused on growing and
              establishing the Waterloo Business Review in the Waterloo and
              Kitchener business community.
            </p>
            <p>
              Waterloo Business Review empowers our team through our emphasis on
              creative freedom, professional development of research and
              communication skills, and our culture of entrepreneurship and
              growth as we nuture members to adopt positions of greater
              responsibility and leadership.
            </p>
          </div>
          <!-- <div class="tab-bar"></div>
          <div v-if="year === 2023" class="team 2023">2023</div>
          <div v-else-if="year === 2022" class="team 2022">2022</div>
          <div v-else-if="year === 2021" class="team 2021">2021</div>
          <div v-else></div> -->
          >
        </div>
        <div class="col-1"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Team",
  ogTitle: "Team",
  description: "Waterloo Business Review Team",
  ogDescription: "Waterloo Business Review Team",
  ogImage: "",
});
</script>

<style lang="scss" scoped></style>
