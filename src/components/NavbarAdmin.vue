<script setup>

import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const isPath = ref("");

const checkRoute = () => {
    const name = route.path;
    isPath.value = name;
}



onMounted(() => {
    checkRoute();
    router.afterEach(() => {
        checkRoute();
    })
});

</script>

<template>
    <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" data-scroll="true">
        <div class="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                    <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark">Pages</a></li>
                    <li class="breadcrumb-item text-sm">{{ isPath.split('/').pop() }}</li>
                </ol>
                <h6 class="font-weight-bolder mb-0 bread-end">{{ isPath.split('/').pop() }}</h6>
            </nav>

        </div>
    </nav>
</template>

<style scoped>
@import url("/src/assets/css/material-dashboard.css");
@import url("/src/assets/css/nucleo-svg.css");
@import url("/src/assets/css/nucleo-icons.css");

.bread-end {
    text-transform: capitalize;
}
</style>