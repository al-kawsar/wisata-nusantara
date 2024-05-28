<script setup>
// import "@/assets/css/admin.css";

defineProps({
    table: Object,
});
</script>

<template>
    <div class="container-fluid py-4">
        <div class="row">
            <div class="col-12">
                <div class="card my-4">
                    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                        <div class="bg-gradient-info shadow-info border-radius-lg pt-4 pb-3 px-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <h6 class="text-white text-capitalize ">{{ table.title }} table</h6>
                                <div class="rigth-action d-flex gap-2">
                                    <router-link :to="table.createPath" class="btn btn-success m-0">Create New</router-link>
                                    <a href="" class="btn btn-success m-0">Export Excel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body px-0 pb-2">
                        <div class="table-responsive p-0">
                            <table class="table align-items-center mb-0">
                                <thead>
                                    <tr>
                                        <th v-for="header in table.headers"
                                            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            {{ header }}
                                        </th>
                                        <th class="text-secondary opacity-7"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <slot />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url("@/assets/css/admin.css");
</style>