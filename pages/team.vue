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
              <h3>Leadership Team</h3>
              <div class="row">
                <MemberCard name="Luka Pavlesen"
                  ><img src="@/assets/images/team/2023/leadership/l1.png"
                /></MemberCard>
                <MemberCard name="Vivian Guo"
                  ><img src="@/assets/images/team/2023/leadership/l2.png"
                /></MemberCard>
                <MemberCard name="Devena Mohabir"
                  ><img src="@/assets/images/team/2023/leadership/l3.png"
                /></MemberCard>
              </div>
            </div>
            <div>
              <h3>Editorial Team</h3>
              <div class="row">
                <MemberCard name="Ali Ravjani"
                  ><img src="@/assets/images/team/2023/editorial/e1.png"
                /></MemberCard>
                <MemberCard name="Ansh Farmah"
                  ><img src="@/assets/images/team/2023/editorial/e2.png"
                /></MemberCard>
                <MemberCard name="Katarina Miovcic"
                  ><img src="@/assets/images/team/2023/editorial/e3.png"
                /></MemberCard>
                <MemberCard name="Manu Krishna"
                  ><img src="@/assets/images/team/2023/editorial/e4.png"
                /></MemberCard>
                <MemberCard name="Sophie Hsieh"
                  ><img src="@/assets/images/team/2023/editorial/e5.png"
                /></MemberCard>
                <MemberCard name="Alex Zhu"
                  ><img src="@/assets/images/team/2023/editorial/e6.png"
                /></MemberCard>
                <MemberCard name="Arnav Sheth"
                  ><img src="@/assets/images/team/2023/editorial/e7.png"
                /></MemberCard>
              </div>
            </div>
            <div>
              <h3>Creative Team</h3>
              <div class="row">
                <MemberCard name="Viviana Basurto"
                  ><img src="@/assets/images/team/2023/creative/c1.png"
                /></MemberCard>
                <MemberCard name="Nirva Bharwada"
                  ><img src="@/assets/images/team/2023/creative/c2.png"
                /></MemberCard>
                <MemberCard name="Pramiya Arulraj"
                  ><img src="@/assets/images/team/2023/creative/c3.png"
                /></MemberCard>
                <MemberCard name="Yukttha Siva"
                  ><img src="@/assets/images/team/2023/creative/c4.png"
                /></MemberCard>
              </div>
            </div>
            <div>
              <h3>Research Team</h3>
              <div class="row">
                <MemberCard name="Kabir Bajwa"
                  ><img src="@/assets/images/team/2023/research/r1.png"
                /></MemberCard>
                <MemberCard name="Sofia Suleman"
                  ><img src="@/assets/images/team/2023/research/r6.png"
                /></MemberCard>
                <MemberCard name="Gurpartap Thap"
                  ><img src="@/assets/images/team/2023/research/r2.png"
                /></MemberCard>
                <MemberCard name="Leo Stetsyuk"
                  ><img src="@/assets/images/team/2023/research/r5.png"
                /></MemberCard>
                <MemberCard name="Siddhant Kapur"
                  ><img src="@/assets/images/team/2023/research/r8.png"
                /></MemberCard>
                <MemberCard name="Arpit Sandhu"
                  ><img src="@/assets/images/team/2023/research/r3.png"
                /></MemberCard>
                <MemberCard name="Agraj Joshi"
                  ><img src="@/assets/images/team/2023/research/r7.png"
                /></MemberCard>
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
useSeoMeta({
  title: "Team",
  ogTitle: "Team",
  description: "Waterloo Business Review Team",
  ogDescription: "Waterloo Business Review Team",
  ogImage: "",
});
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
