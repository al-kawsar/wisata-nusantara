<template>
    <section id="hero" class="pt-5 container">
        <div class="row">
            <div class="col-md-6">
                <div class="event-card py-5 d-flex flex-column gap-3">
                    <div class="card-image">
                        <img src="https://newsdesa.files.wordpress.com/2015/04/6165e-raja-ampat-islands-22062-1366x768.jpg"
                            alt="" class="w-100 object-fit-cover rounded w-100" height="200">
                    </div>
                    <h1 class="fw-bold">Nama Event</h1>
                    <p class="text-muted m-0 p-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores sit
                        dolor beatae sapiente porro nostrum voluptatem ipsam velit laboriosam iste deserunt voluptatum
                        provident quod aliquid eos libero, a aperiam cumque.</p>
                    <div class="date mt-3">
                        <div class="date_start fw-semibold">Tanggal Dimulai <span class="fw-bold">2024, April 27</span>
                        </div>
                        <div class="date_end fw-semibold">Tanggal Berakhir <span class="fw-bold">2024, April 29</span></div>
                    </div>
                    <div class="author bg-dark text-white p-2 rounded">
                        Andi Muh Raihan Alkawsar
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <form @submit.prevent="console.log('hehe')"
                    class="form mx-auto py-5 d-flex flex-column justify-content-between h-100">
                    <div class="form-field mb-4">
                        <label class="fw-bold mb-2">Nama</label>
                        <input type="text" class="form-control">
                        <!-- <p class="error-message fw-semibold mt-1 m-0 p-0">Form Wajib diisi</p> -->
                    </div>
                    <div class="form-field mb-4">
                        <label class="fw-bold mb-2">No HP</label>
                        <input type="number" class="form-control">
                        <!-- <p class="error-message fw-semibold mt-1 m-0 p-0">Form Wajib diisi</p> -->
                    </div>
                    <div class="form-field mb-4">
                        <label class="fw-bold mb-2">Email</label>
                        <input type="email" class="form-control">
                        <!-- <p class="error-message fw-semibold mt-1 m-0 p-0">Form Wajib diisi</p> -->
                    </div>
                    <div class="form-field mb-4">
                        <label class="fw-bold mb-2">Payment</label>
                        <select name="status" class="form-control">
                            <option value="">ATM BCA</option>
                            <option value="">ATM BRI</option>
                            <option value="">ATM BNI</option>
                            <option value="">GOPAY</option>
                            <option value="">Shopee Pay</option>
                            <option value="">Paypal</option>
                            <option value="">Alfamart</option>
                            <option value="">Indomaret</option>
                        </select>
                        <!-- <p class="error-message fw-semibold mt-1 m-0 p-0">Form Wajib diisi</p> -->
                    </div>
                    <button class="btn btn-primary">Registrasi</button>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
.error-message {
    font-size: 12px;
    color: #F00000;
}

.author {
    width: max-content;
}
</style>
