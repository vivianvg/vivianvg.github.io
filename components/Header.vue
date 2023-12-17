<template>
  <div class="container-fluid header p-0 overflow-hidden">
    <div class="row">
      <!-- Side menu -->
      <div class="col-1 sidemenu">
        <div id="toggle_sidemenu">
          <a
            href="#"
            @click="toggleSidebar()"
            class="sidemenu_button icon-link"
          >
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
        <div
          :class="['sidebar-opened', displaySidebar ? '' : 'sidebar-closed']"
        >
          <Transition name="slide-fade"
            ><sidebar
              :display-sidebar="displaySidebar"
              :sidebar-toggle="toggleSidebar"
          /></Transition>
        </div>
      </div>
      <!-- Logo -->
      <div class="col-1">
        <!-- mobile side menu -->
        <div class="navigation-mobile">
          <a
            href="#"
            @click="toggleSidebar()"
            class="sidemenu_button icon-link"
          >
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
        <!-- logo -->
        <div class="logo-container hide-on-mobile">
          <a href="/"
            ><img src="~/assets/images/logo/wbr-logo.svg" class="logo"
          /></a>
        </div>
      </div>
      <!-- Logo on mobile view -->
      <div class="logo-container col-2 navigation-mobile">
        <a href="/"
          ><img src="~/assets/images/logo/wbr-logo.svg" class="logo"
        /></a>
      </div>
      <!-- Navigation -->
      <div class="col-8 navigation display-on-large">
        <!-- Full navigation -->
        <NuxtLink to="/alumni-insights">ALUMNI INSIGHT</NuxtLink>
        <NuxtLink to="/business-strategy">BUSINESS STRATEGY</NuxtLink>
        <NuxtLink to="/entrepreneurship">ENTREPRENEURSHIP</NuxtLink>
        <NuxtLink to="/technology">TECHNOLOGY</NuxtLink>
      </div>
      <div class="col-8 navigation-mobile">
        <div class="toggled_menu"></div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Sidebar from "@/components/Sidebar";

export default {
  components: { Sidebar },
  data() {
    return {
      displaySidebar: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.displaySidebar = !this.displaySidebar;
    },
  },
};
</script>

<style scoped>
.hidden {
  visibility: hidden;
}

.no-style:after {
  all: unset;
}

a:after {
  display: block;
  content: "";
  border-bottom: solid 3px var(--l-medium-grey);
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
  column-gap: 2.2rem;
}
.navigation * {
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  color: var(--l-text);
}

.sidebar-opened {
  display: flex;
}
.sidebar-closed {
  display: none;
}

/* Media queries for navigation bar */
@media (max-width: 1100px) {
  .navigation {
    display: none;
  }
  .navigation-mobile {
    display: inline-block;
    /* justify-content: flex-end; */
  }
  .logo-container {
    display: inline-block;
    /* justify-content: flex-start; */
  }
  #toggle_sidemenu {
    display: none;
  }
  .hide-on-mobile {
    display: none;
  }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 1100px) {
  .navigation {
    display: flex;
  }
  .navigation-mobile {
    display: none;
  }
  .logo {
    margin-left: 0;
  }
}
</style>
