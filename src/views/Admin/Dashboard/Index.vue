<script setup>

import { ref } from "vue";


const data = ref({
    totalEvents: 0,
    totalDestinations: 0,
    totalGalleries: 0,
    totalPosts: 0,
    totalUsers: 0,
    totalPostVisitors: 0,
    totalGalleryVisitors: 0,
    totalDestinationVisitors: 0,
});

// data.value = {
//     totalEvents: "50",
//     totalDestinations: "200",
//     totalGalleries: "120",
//     totalPosts: "213",
//     totalUsers: "12",
//     totalPostVisitors: "21829",
//     totalGalleryVisitors: "2273",
//     totalDestinationVisitors: "54221",
// };

</script>

<template>
    <div class="container-fluid py-4">
        <div class="row">
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div class="card mb-4">
                    <div class="card-header p-3 pt-2 rounded-circle">
                        <div
                            class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                        </div>
                        <div class="text-end pt-1">
                            <p class="text-sm mb-0 text-capitalize fw-bold">Total Events</p>
                            <h4 class="mb-0 fw-bold">{{ data.totalEvents }}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div class="card mb-4">
                    <div class="card-header p-3 pt-2 rounded-circle">
                        <div
                            class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                        </div>
                        <div class="text-end pt-1">
                            <p class="text-sm mb-0 text-capitalize fw-bold">Total Detinasitions</p>
                            <h4 class="mb-0 fw-bold">{{ data.totalDestinations }}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div class="card mb-4">
                    <div class="card-header p-3 pt-2 rounded-circle">
                        <div
                            class="icon icon-lg icon-shape bg-gradient-warning shadow-warning text-center border-radius-xl mt-n4 position-absolute">
                        </div>
                        <div class="text-end pt-1">
                            <p class="text-sm mb-0 text-capitalize fw-bold">Total Galleries</p>
                            <h4 class="mb-0 fw-bold">{{ data.totalGalleries }}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div class="card mb-4">
                    <div class="card-header p-3 pt-2 rounded-circle">
                        <div
                            class="icon icon-lg icon-shape bg-gradient-secondary shadow-secondary text-center border-radius-xl mt-n4 position-absolute">
                        </div>
                        <div class="text-end pt-1">
                            <p class="text-sm mb-0 text-capitalize fw-bold">Total Posts</p>
                            <h4 class="mb-0 fw-bold">{{ data.totalPosts }}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div class="card mb-4">
                    <div class="card-header p-3 pt-2 rounded-circle">
                        <div
                            class="icon icon-lg icon-shape bg-gradient-danger shadow-danger text-center border-radius-xl mt-n4 position-absolute">
                        </div>
                        <div class="text-end pt-1">
                            <p class="text-sm mb-0 text-capitalize fw-bold">Total Users</p>
                            <h4 class="mb-0 fw-bold">{{ data.totalUsers }}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div class="card mb-4">
                    <div class="card-header p-3 pt-2 rounded-circle">
                        <div
                            class="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                        </div>
                        <div class="text-end pt-1">
                            <p class="text-sm mb-0 text-capitalize fw-bold">Total Post Visitors</p>
                            <h4 class="mb-0 fw-bold">{{ data.totalPostVisitors }}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div class="card mb-4">
                    <div class="card-header p-3 pt-2 rounded-circle">
                        <div
                            class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                        </div>
                        <div class="text-end pt-1">
                            <p class="text-sm mb-0 text-capitalize fw-bold">Total Gallery Visitors</p>
                            <h4 class="mb-0 fw-bold">{{ data.totalGalleryVisitors }}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div class="card mb-4">
                    <div class="card-header p-3 pt-2 rounded-circle">
                        <div
                            class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                        </div>
                        <div class="text-end pt-1">
                            <p class="text-sm mb-0 text-capitalize fw-bold">Total Destinastion Visitors</p>
                            <h4 class="mb-0 fw-bold">{{ data.totalDestinationVisitors }}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<style scoped>
@import url("/src/assets/css/material-dashboard.css");
@import url("/src/assets/css/nucleo-svg.css");
@import url("/src/assets/css/nucleo-icons.css");
</style>