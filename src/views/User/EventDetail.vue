<script setup>

</script>

<template>
    <section id="hero">

    </section>
    <div id="event-container" class="container p-2 shadow-sm">
        <div class="row">
            <div class="col-md-4">
                <img src="https://newsdesa.files.wordpress.com/2015/04/6165e-raja-ampat-islands-22062-1366x768.jpg" alt=""
                    class="event-image rounded" width="100%" height="200">
            </div>
            <div class="col-md-4">
                <ul class="d-flex flex-column m-0 p-0 h-100 justify-self-start">
                    <h4 class="location fw-bold mb-3">Nama Event</h4>
                    <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, veniam!</h6>
                    <router-link class="btn btn-danger rounded-0 justify-self-end py-2 mt-5"
                        :to="{ name: 'eventRegistrasi' }">Registrasi Event</router-link>
                </ul>
            </div>
            <div class="col-md-4">
                <ul class="d-flex flex-column m-0 p-0 h-100 justify-self-start">
                    <h4 class="date fw-bold mb-3">Tanggal</h4>
                    <h5>Mulai:</h5>
                    <h5>Berakhir:</h5>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
#event-container {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-bottom-left-radius: .3rem;
    border-bottom-right-radius: .3rem;
}

#hero {
    background: url('https://newsdesa.files.wordpress.com/2015/04/6165e-raja-ampat-islands-22062-1366x768.jpg');
    background-size: cover;
    height: 50vh;
    margin-bottom: 25vh;
}

@media screen and (max-width: 768px) {
    #hero {
        height: 45vh;
        margin-bottom: 0;
    }

    #event-container {
        position: initial;
        transform: none;
        width: 100%;
        left: 0;
    }

}
</style>
