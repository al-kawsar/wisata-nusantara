<script setup>

import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const isNavbarSticky = ref(false);
const isNavbar = ref("");
const route = useRoute();
const router = useRouter();

const navbarScroll = () => {
  if (route.name != 'beranda' && window.scrollY === 0) isNavbarSticky.value = true;
  if ((window.scrollY > 0 && route.name == 'beranda') || (window.scrollY > 0 && route.name == 'eventDetail')) isNavbarSticky.value = true;
  if ((window.scrollY === 0 && route.name == 'beranda') || (window.scrollY === 0 && route.name == 'eventDetail')) isNavbarSticky.value = false;
}

const checkNavbarActive = () => {
  const name = route.fullPath;
  isNavbar.value = name;
}

onMounted(() => {
  navbarScroll();
  checkNavbarActive();
  window.addEventListener('scroll', navbarScroll);
  router.afterEach(() => {
    navbarScroll();
    checkNavbarActive();
    window.scrollTo(0, 0);
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', navbarScroll);
});

</script>

<template>
  <nav id="navbar" :class="{ 'sticky': isNavbarSticky }" class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand fw-bold" :class="isNavbarSticky ? 'text-dark' : 'text-white'"
        :to="{ name: 'beranda' }">WisataNusantara</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :class="[isNavbarSticky ? 'text-dark' : 'text-white', { 'fw-bold': isNavbar === '/' }]"
              :to="{ name: 'beranda' }" class="nav-link" aria-current="page">Beranda</router-link>
          </li>
          <li class="nav-item">
            <router-link
              :class="[isNavbarSticky ? 'text-dark' : 'text-white', { 'fw-bold': isNavbar.split('/')[1] === 'destinasi' }]"
              :to="{ name: 'destinasi' }" class="nav-link" aria-current="page">Destinasi</router-link>
          </li>
          <li class="nav-item">
            <router-link
              :class="[isNavbarSticky ? 'text-dark' : 'text-white', { 'fw-bold': isNavbar.split('/')[1] === 'event' }]"
              :to="{ name: 'event' }" class="nav-link" aria-current="page">Event</router-link>
          </li>
          <li class="nav-item">
            <router-link
              :class="[isNavbarSticky ? 'text-dark' : 'text-white', { 'fw-bold': isNavbar.split('/')[1] === 'posts' }]"
              :to="{ name: 'posts' }" class="nav-link" aria-current="page">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link
              :class="[isNavbarSticky ? 'text-dark' : 'text-white', { 'fw-bold': isNavbar.split('/')[1] === 'galeri' }]"
              :to="{ name: 'galeri' }" class="nav-link" aria-current="page">Galeri</router-link>
          </li>

        </ul>
        <form class="d-flex" @submit.prevent="console.log('tahyu')" role="search">
          <input class="form-control me-2"
            :class="isNavbarSticky ? 'text-dark border border-dark placeholder' : 'text-white'" type="search"
            placeholder="Search" aria-label="Search">
        </form>
        <router-link class="btn btn-dark" :to="{ name: 'login' }">Login</router-link>
      </div>
    </div>
  </nav>
</template>

<style>
#navbar {
  border: 1.5px solid rgba(255, 255, 255, .5);
  position: fixed;
  width: 90%;
  top: 0;
  z-index: 99;
  backdrop-filter: blur(20px);
  left: 50%;
  transform: translate(-50%, 20px);
  border-radius: .5rem;
  -webkit-border-radius: .5rem;
  -moz-border-radius: .5rem;
  -ms-border-radius: .5rem;
  -o-border-radius: .5rem;
  transition: all .3s ease-in-out;

}

#navbar.sticky {
  top: 0;
  width: 100%;
  border-radius: 0;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, .1);
  transform: translate(-50%, 0%);
  background-color: white;
  -webkit-transform: translate(-50%, 0%);
  -moz-transform: translate(-50%, 0%);
  -ms-transform: translate(-50%, 0%);
  -o-transform: translate(-50%, 0%);
}

.nav-item>* {
  transition: all .3s ease-in-out;
}

form input,
form input:focus {
  background: transparent !important;
  box-shadow: none !important;
  cursor: auto;
}

form input::placeholder {
  color: white !important;
}

form input.placeholder,
form input.placeholder::placeholder {
  color: black !important;
}
</style>