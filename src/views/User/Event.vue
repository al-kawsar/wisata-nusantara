<template>
    <div class="pt-5"></div>
    <div class="pt-3">
        <div class="container">
            <div class="row">
                <div class="col-md-8 p-2">
                    <div class="card p-2 mb-3 border-0">
                        <router-link class="card-image" to="/event/detail">
                            <img src="https://newsdesa.files.wordpress.com/2015/04/6165e-raja-ampat-islands-22062-1366x768.jpg"
                                alt="" class="w-100 object-fit-cover rounded-top-3" height="200">
                        </router-link>
                        <router-link class="card-title fw-bold fs-4 text-decoration-none p-0 m-0 mt-3"
                            to="/event/detail">Ini
                            Judul
                            Event</router-link>
                        <p class="m-0 p-0 my-2 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                            sunt?</p>
                        <div class="date mb-3">
                            <div>Mulai: 2020</div>
                            <div>Berakhir 2021</div>
                        </div>
                        <div class="card-bot">
                            <router-link to="/event/detail" class="btn btn-primary rounded-0">Get Ticket</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 p-4">
                    <form @submit.prevent="console.log('cari')">
                        <input type="text" placeholder="Cari Event" class="p-2 form-control">
                    </form>
                    <h4 class="mt-5 fw-bold">Event Sebelumnya</h4>
                    <div class="event-card">
                        <div class="d-flex gap-2 mt-3">
                            <div class="event-image">
                                <img src="https://newsdesa.files.wordpress.com/2015/04/6165e-raja-ampat-islands-22062-1366x768.jpg"
                                    alt="" class="rounded-0 object-fit-cover rounded-1" width="100" height="100">
                            </div>
                            <div class="event-text fw-semibold">
                                <p class="fs-5">Ini Judul Event 1 Sasjjsja</p>
                                <div class="" style="font-size: 14px;">Mulai</div>
                                <div class="" style="font-size: 14px;">Berakhir</div>
                            </div>
                        </div>
                        <hr class="border-1">
                    </div>
                    <div class="event-card">
                        <div class="d-flex gap-2 mt-3">
                            <div class="event-image">
                                <img src="https://newsdesa.files.wordpress.com/2015/04/6165e-raja-ampat-islands-22062-1366x768.jpg"
                                    alt="" class="rounded object-fit-cover rounded-1" width="100" height="100">
                            </div>
                            <div class="event-text fw-semibold">
                                <p class="fs-5">Ini Judul Event 1 Sasjjsja</p>
                                <div class="" style="font-size: 14px;">Mulai</div>
                                <div class="" style="font-size: 14px;">Berakhir</div>
                            </div>
                        </div>
                        <hr class="border-1">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
