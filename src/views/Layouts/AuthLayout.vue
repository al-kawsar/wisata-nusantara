<template>
    <div class="auth-container d-flex p-4 flex-col justify-content-center align-items-center">
        <router-view></router-view>
    </div>
</template>

<style scoped>
.auth-container {
    min-height: 100vh;
    background-image: url('https://newsdesa.files.wordpress.com/2015/04/6165e-raja-ampat-islands-22062-1366x768.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

form.auth {
    backdrop-filter: blur(120px);
    width: 40%;
}

form.auth>* {
    color: white;
}
</style>