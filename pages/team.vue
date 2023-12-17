<template>
  <div>
    <Header />
    <div class="container-fluid header p-0 overflow-hidden text">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
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
          <div>
            <img class="image" src="@/assets/images/team/2023/full_team.jpg" />
          </div>

          <!-- <div class="tab-bar"></div>
          <div v-if="year === 2023" class="team 2023">2023</div>
          <div v-else-if="year === 2022" class="team 2022">2022</div>
          <div v-else-if="year === 2021" class="team 2021">2021</div>
          <div v-else></div> -->
        </div>
        <div class="row margin-top">
          <div class="col-2"></div>
          <!-- <div class="col-1 margin-top">
            <div class="button-selected">2023</div>
            <div class="button">2022</div>
            <div class="button">2021</div>
          </div> -->
          <div class="teams col-8">
            <div>
              <div class="margin-top" v-for="subteam in full_team">
                <h3>{{ subteam.subteam_name }}</h3>
                <div class="row">
                  <MemberCard
                    v-for="member in subteam.subteam"
                    :name="member.name"
                    :headshot="member.headshot"
                  ></MemberCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref } from "vue";

useSeoMeta({
  title: "Team",
  ogTitle: "Team",
  description: "Waterloo Business Review Team",
  ogDescription: "Waterloo Business Review Team",
  ogImage: "",
});

// consider something to replace the front with nuxt?

const leadership_team = ref([
  {
    name: "Luka Pavlesen",
    headshot: "nuxt/assets/images/team/2023/leadership/l1.png",
  },
  {
    name: "Vivian Guo",
    headshot: "nuxt/assets/images/team/2023/leadership/l2.png",
  },
  {
    name: "Devena Mohabir",
    headshot: "nuxt/assets/images/team/2023/leadership/l3.png",
  },
]);

const research_team = ref([
  {
    name: "Kabir Bajwa",
    headshot: "nuxt/assets/images/team/2023/research/r1.png",
  },
  {
    name: "Sofia Suleman",
    headshot: "nuxt/assets/images/team/2023/research/r6.png",
  },
  {
    name: "Gurpartap Thap",
    headshot: "nuxt/assets/images/team/2023/research/r2.png",
  },
  {
    name: "Leo Stetsyuk",
    headshot: "nuxt/assets/images/team/2023/research/r5.png",
  },
  {
    name: "Siddhant Kapur",
    headshot: "nuxt/assets/images/team/2023/research/r8.png",
  },
  {
    name: "Arpit Sandhu",
    headshot: "nuxt/assets/images/team/2023/research/r3.png",
  },
  {
    name: "Agraj Joshi",
    headshot: "nuxt/assets/images/team/2023/research/r7.png",
  },
  {
    name: "Yukttha Siva",
    headshot: "nuxt/assets/images/team/2023/creative/c4.png",
  },
]);

const editorial_team = ref([
  {
    name: "Ali Ravjani",
    headshot: "nuxt/assets/images/team/2023/editorial/e1.png",
  },
  {
    name: "Ansh Farmah",
    headshot: "nuxt/assets/images/team/2023/editorial/e2.png",
  },
  {
    name: "Katarina Miovcic",
    headshot: "nuxt/assets/images/team/2023/editorial/e3.png",
  },
  {
    name: "Manu Krishna",
    headshot: "nuxt/assets/images/team/2023/editorial/e4.png",
  },
  {
    name: "Sophie Hsieh",
    headshot: "nuxt/assets/images/team/2023/editorial/e5.png",
  },
  {
    name: "Alex Zhu",
    headshot: "nuxt/assets/images/team/2023/editorial/e6.png",
  },
  {
    name: "Arnav Sheth",
    headshot: "nuxt/assets/images/team/2023/editorial/e7.png",
  },
]);

const creative_team = ref([
  {
    name: "Viviana Basurt",
    headshot: "nuxt/assets/images/team/2023/creative/c1.png",
  },
  {
    name: "Nirva Bharwada",
    headshot: "nuxt/assets/images/team/2023/creative/c2.png",
  },
  {
    name: "Pramiya Arulraj",
    headshot: "nuxt/assets/images/team/2023/creative/c3.png",
  },
  {
    name: "Yukttha Siva",
    headshot: "nuxt/assets/images/team/2023/creative/c4.png",
  },
]);

const full_team = ref([
  {
    subteam: leadership_team,
    subteam_name: "Leadership",
  },
  {
    subteam: editorial_team,
    subteam_name: "Editorial",
  },
  {
    subteam: creative_team,
    subteam_name: "Creative",
  },
  {
    subteam: research_team,
    subteam_name: "Research",
  },
]);
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
}
.teams > div {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.button-selected {
  padding: 0.5rem;
  text-align: center;
  background-color: var(--l-primary-accent);
}
.button {
  padding: 0.5rem;
  text-align: center;
  background-color: var(--l-background);
}

.margin-top {
  margin-top: 2rem;
}
</style>
