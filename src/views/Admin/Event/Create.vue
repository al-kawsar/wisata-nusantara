<script setup>

import { ref } from 'vue';

const form = ref({
    name: "",
    dateStart: "",
    dateEnd: "",
    price: "",
    description: ""
});

</script>

<template>
    <div class="px-4">
        <form @submit.prevent="console.log('create event')" class="form p-5 rounded-3 bg-white border-5 border">
            <div class="row">
                <div class="left-form col-md-6">
                    <div class="form-field d-flex flex-column gap-2 mb-3">
                        <label class="fw-semibold">Nama Event</label>
                        <input required type="text" class="form-control border-2" v-model="form.name">
                    </div>

                    <div class="form-field d-flex flex-column gap-2 mb-3">
                        <label class="fw-semibold">Harga</label>
                        <input required type="number" class="form-control border-2" v-model="form.price">
                    </div>
                </div>
                <div class="right-form col-md-6">
                    <div class="form-field d-flex flex-column gap-2 mb-3">
                        <label class="fw-semibold">Tanggal Mulai</label>
                        <input required type="date" class="form-control border-2" v-model="form.dateStart">
                    </div>
                    <div class="form-field d-flex flex-column gap-2 mb-3">
                        <label class="fw-semibold">Tanggal Berakhir</label>
                        <input required type="date" class="form-control border-2" v-model="form.dateEnd">
                    </div>
                </div>
            </div>
            <div class="form-field d-flex flex-column gap-2 mb-3">
                <label class="fw-semibold">Deskripsi</label>
                <textarea required type="text" class="form-control border-2 bg-transparent" rows="7"
                    v-model="form.description"></textarea>
            </div>
            <button type="submit" class="btn btn-primary fw-bold p-2 px-3">Create</button>
        </form>
    </div>
</template>
<style scoped>
.form {
    margin: 0 auto;
    margin-top: 1rem;
}
</style>