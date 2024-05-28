<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/NavbarAdmin.vue";
</script>

<template>
    <section class="g-sidenav-show bg-gray-200">
        <Sidebar />
        <main class="main-content position-relative h-100 border-radius-lg">
            <!-- Navbar -->
            <Navbar />
            <!-- End Navbar -->
            <router-view></router-view>
            <footer class="footer py-4 position-static w-100 bottom-0">
                <div class="container-fluid">
                    <div class="row align-items-center justify-content-lg-between">
                        <div class="col-lg-6 mb-lg-0 mb-4">
                            <div class="copyright text-center text-sm text-muted text-lg-start">
                                made with <i class="fa fa-heart"></i> by
                                <span class="text-info">Andi Muh Raihan Alkawsar | SMKN 7 MAKASSAR</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
        <!--   Core JS Files   -->
        <!-- <script src="../assets/js/core/popper.min.js"></script>
        <script src="../assets/js/core/bootstrap.min.js"></script>
        <script src="../assets/js/plugins/perfect-scrollbar.min.js"></script>
        <script src="../assets/js/plugins/smooth-scrollbar.min.js"></script>
        <script src="../assets/js/plugins/chartjs.min.js"></script> -->

        <!-- <script src="../assets/js/material-dashboard.min.js?v=3.1.0"></script> -->
    </section>
</template>
<style scoped>
@import url("@/assets/css/admin.css");
</style>
