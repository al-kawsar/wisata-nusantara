<script setup>

import { ref, onMounted, } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const isNavbar = ref("");

const checkNavbarActive = () => {
    const name = route.path;
    isNavbar.value = name.split('/')[2];
}

onMounted(() => {
    checkNavbarActive();
    router.afterEach(() => {
        checkNavbarActive();
    });
});

</script>

<template>
    <aside
        class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
        id="sidenav-main">
        <div class="sidenav-header">
            <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                aria-hidden="true" id="iconSidenav"></i>
            <router-link class="navbar-brand m-0" :to="{ name: 'dashboard' }">
                <span class="ms-1 font-weight-bold text-white">Wisata Nusantara </span>
            </router-link>
        </div>
        <hr class="horizontal light mt-0 mb-2">
        <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link :to="{ name: 'dashboard' }" class="nav-link text-white"
                        :class="isNavbar === 'dashboard' ? 'active bg-gradient-info fw-bold' : ''">
                        <span class="nav-link-text ms-1">Dashboard</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white " :to="{ name: 'eventAdmin' }"
                        :class="isNavbar === 'event' ? 'active bg-gradient-info fw-bold' : ''">
                        <span class="nav-link-text ms-1">Event</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white " :to="{ name: 'destinasiAdmin' }"
                        :class="isNavbar === 'destinasi' ? 'active bg-gradient-info fw-bold' : ''">
                        <span class="nav-link-text ms-1">Destinasi</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white " :to="{ name: 'galeriAdmin' }"
                        :class="isNavbar === 'galeri' ? 'active bg-gradient-info fw-bold' : ''">
                        <span class="nav-link-text ms-1">Galeri</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white " :to="{ name: 'postsAdmin' }"
                        :class="isNavbar === 'posts' ? 'active bg-gradient-info fw-bold' : ''">
                        <span class="nav-link-text ms-1">Post</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white " :to="{ name: 'administrator' }"
                        :class="isNavbar === 'administrator' ? 'active bg-gradient-info fw-bold' : ''">
                        <span class="nav-link-text ms-1">Administrator</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white bg-danger mt-2 fw-bold" :to="{ name: 'beranda' }">
                        <span class="nav-link-text ms-1">Log Out</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </aside>
</template>

<style scoped>
@import url("/src/assets/css/material-dashboard.css");
@import url("/src/assets/css/nucleo-svg.css");
@import url("/src/assets/css/nucleo-icons.css");
</style>