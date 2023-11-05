<template>
  <div class="container-fluid header p-0 overflow-hidden">
    <div class="row">
      <!-- Side menu -->
      <div class="col-1 sidemenu">
        <div id="toggle_sidemenu">
          <a href="#" class="icon-link" @click="openSidebar()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </a>
        </div>
      </div>
      <!-- Logo -->
      <div class="col-2">
        <img src="~/assets/images/logo/wbr-logo.svg" class="logo" />
      </div>
      <!-- Navigation -->
      <div class="col-8 navigation">
        <NuxtLink to="/alumni_insights">ALUMNI INSIGHT</NuxtLink>
        <NuxtLink to="/business_strategy">BUSINESS STRATEGY</NuxtLink>
        <NuxtLink to="/entrepreneurship">ENTREPRENEURSHIP</NuxtLink>
        <NuxtLink to="/technology">TECHNOLOGY</NuxtLink>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import { sidebar } from "../store.js";
export default {
  name: "Sidebar",

  methods: {
    openSidebar() {
      sidebar.display = true;
      console.log(sidebar.display);
    },
  },
};
</script>

<style scoped>
.hidden {
  visibility: hidden;
}

a:after {
  display: block;
  content: "";
  border-bottom: solid 3px var(--l-primary-accent);
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
  transform-origin: left;
}
a:hover:after {
  transform: scaleX(1);
}

.header {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.sidemenu {
  display: flex;
  justify-content: flex-end;
}
.navigation {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  column-gap: 2.8rem;
}
.navigation * {
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  color: var(--l-text);
}
</style>
