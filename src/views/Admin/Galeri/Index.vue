<script setup>
import { ref } from 'vue'
import DataTable from "@/components/DataTable.vue"

const data = ref([]);

const events = [{
    id: 1,
    name: "Event 1",
    dateStart: "2024",
    dateEnd: "2024",
    price: "100000",
    user: "Raihan",
    description: "Event ini adalah suatu event yang dimana begitu dan begini"
}];

const table = {
    title: 'Galeri',
    headers: [
        'Nama Event', 'Tanggal Mulai', 'Tanggal Berakhir', 'Harga', 'User', 'Deskripsi'
    ],
};

</script>

<template>
    <DataTable :table="table">
        <tr v-for="event in events">
            <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{ event.name }}</span>
            </td>
            <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{ event.dateStart }}</span>
            </td>
            <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{ event.dateEnd }}</span>
            </td>
            <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{ event.price }}</span>
            </td>
            <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{ event.user }}</span>
            </td>
            <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{ event.description.substring(0, 20) }}...</span>
            </td>
            <td class="align-middle">
                <router-link class="text-white bg-info p-2 mx-1 rounded font-weight-bold text-xs" data-toggle="tooltip"
                    data-original-title="Edit user">
                    Edit
                </router-link>
                <router-link class="text-white bg-danger p-2 mx-1 rounded font-weight-bold text-xs" data-toggle="tooltip"
                    data-original-title="Edit user">
                    Delete
                </router-link>
            </td>
        </tr>
        <!-- <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">Online</span>
            </td> -->
    </DataTable>
</template>
<style scoped>
@import url("/src/assets/css/material-dashboard.css");
@import url("/src/assets/css/nucleo-svg.css");
@import url("/src/assets/css/nucleo-icons.css");
</style>