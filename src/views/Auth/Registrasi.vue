<template>
    <form @submit.prevent="console.log('hehe')"
        class="auth p-4 border shadow rounded form mx-auto d-flex flex-column justify-content-between">
        <router-link :to="{ name: 'beranda' }">
            <h1 class="fw-bold text-center  p-2 rounded">Wisata Nusantara</h1>
        </router-link>
        <div class="form-field my-2">
            <label class="fw-bold mb-2">Nama</label>
            <input type="text" class="form-control">
            <!-- <p class="error-message fw-semibold mt-1 m-0 p-0">Data Wajib diisi</p> -->
        </div>
        <div class="form-field my-2">
            <label class="fw-bold mb-2">Username</label>
            <input type="text" class="form-control">
            <!-- <p class="error-message fw-semibold mt-1 m-0 p-0">Data Wajib diisi</p> -->
        </div>
        <div class="form-field my-2">
            <label class="fw-bold mb-2">Email</label>
            <input type="text" class="form-control">
            <!-- <p class="error-message fw-semibold mt-1 m-0 p-0">Data Wajib diisi</p> -->
        </div>
        <div class="form-field my-2">
            <label class="fw-bold mb-2">Password</label>
            <input type="password" class="form-control">
            <!-- <p class="error-message fw-semibold mt-1 m-0 p-0">Data Wajib diisi</p> -->
        </div>
        <footer>
            <p class="btn p-0 m-0 mt-4 text-white">Sudah punya akun? <router-link :to="{ name: 'login' }"
                    class="fw-bold bg-primary text-white p-1 rounded">Login
                    disini</router-link></p>
        </footer>
    </form>
</template>

<style scoped>
.error-message {
    font-size: 12px;
    color: #F00000;
}


input:focus,
input {
    color: white;
}
</style>