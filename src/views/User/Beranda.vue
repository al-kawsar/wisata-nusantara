<template>
    <section id="page-1" class="d-flex justify-content-center align-items-center text-center flex-column gap-2 text-white">
        <h3 class="display-4 fw-bold text-uppercase fs-1 text-white">Selamat Datang</h3>
        <h1 class="display-3 fw-bold text-white">Temukan Keindahan<br>di Indonesia yang<br>Memanjakan Mata.</h1>
    </section>
    <section id="page-2">
        <div class="container py-5">
            <div class="row">
                <div class="col-md-6">
                    <div class="card-image px-3 position-relative">
                        <img src="https://awsimages.detik.net.id/community/media/visual/2021/12/06/desa-wisata-wae-rebo-12_169.jpeg?w=620"
                            class="w-100 rounded-5" alt="">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="right-text">
                        <h1 class="text-black fw-bold">Keindahan Alam yang <br>di Akui Dunia yang <br>Dapat di Temukan di
                            <br>Indonesia.
                        </h1>
                        <p class="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores repellat
                            perferendis ipsa
                            necessitatibus saepe itaque cupiditate distinctio architecto, blanditiis soluta.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="page-3">
        <div class="container py-5">
            <div class="row">
                <div class="col-md-6">
                    <div class="right-text">
                        <h1 class="text-black fw-bold">Beragam Wisata Alam <br>yang Menarik dan <br>Menjadi Pilihan Mu.
                        </h1>
                        <p class="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores repellat
                            perferendis ipsa
                            necessitatibus saepe itaque cupiditate distinctio architecto, blanditiis soluta.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card-image px-3 position-relative">
                        <img src="https://newsdesa.files.wordpress.com/2015/04/6165e-raja-ampat-islands-22062-1366x768.jpg"
                            class="rounded-5 w-100" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="page-4">
        <div class="container py-5">
            <div class="row">
                <div class="col-md-3">
                    <div class="card-galeri">
                        <img src="https://newsdesa.files.wordpress.com/2015/04/6165e-raja-ampat-islands-22062-1366x768.jpg"
                            alt="" class="rounded w-100 object-fit-cover" height="200">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card-galeri">
                        <img src="https://awsimages.detik.net.id/community/media/visual/2021/12/06/desa-wisata-wae-rebo-12_169.jpeg?w=620"
                            alt="" class="rounded w-100 object-fit-cover" height="200">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card-galeri">
                        <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/wisata-nusantara-mempawah-pontianak-johan-k.jpg"
                            alt="" class="rounded w-100 object-fit-cover" height="200">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card-galeri">
                        <img src="https://rakyatjambi.co/wp-content/uploads/2017/02/wayag.jpg" alt=""
                            class="rounded w-100 object-fit-cover" height="200">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#page-1 {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .8)), url('https://newsdesa.files.wordpress.com/2015/04/6165e-raja-ampat-islands-22062-1366x768.jpg');
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.right-text h1 {
    line-height: 1.5;
}

.img-main {
    clip-path: polygon(25% 0%, 85% 17%, 100% 100%, 0% 100%);
}
</style>
