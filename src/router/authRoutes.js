import AuthLayout from "@/views/Layouts/AuthLayout.vue";
import Login from "@/views/Auth/Login.vue";
import Registrasi from "@/views/Auth/Registrasi.vue";

const authRoutes = [
  {
    path: "/auth",
    component: AuthLayout,
    children: [
      { path: "login", name: "login", component: Login },
      { path: "registrasi", name: "registrasi", component: Registrasi },
    ],
  },
];

export default authRoutes;

