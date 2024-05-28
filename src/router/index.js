import { createRouter, createWebHistory } from "vue-router";

import AuthLayout from "@/views/Layouts/AuthLayout.vue";
import AppLayout from "@/views/Layouts/AppLayout.vue";
import AdminLayout from "@/views/Layouts/AdminLayout.vue";

// * User Page
import Beranda from "@/views/User/Beranda.vue";
import Destinasi from "@/views/User/Destinasi.vue";
import DestinasiDetail from "@/views/User/DestinasiDetail.vue";
import Event from "@/views/User/Event.vue";
import EventDetail from "@/views/User/EventDetail.vue";
import EventRegistrasi from "@/views/User/EventRegistrasi.vue";
import Galeri from "@/views/User/Galeri.vue";
import GaleriDetail from "@/views/User/GaleriDetail.vue";
import Post from "@/views/User/Post.vue";
import PostDetail from "@/views/User/PostDetail.vue";

// * Admin Page
import Dashboard from "@/views/Admin/Dashboard/Index.vue";
import Administrator from "@/views/Admin/Administrator/Index.vue";
import CreateAdministrator from "@/views/Admin/Administrator/Create.vue";
import DestinasiAdmin from "@/views/Admin/Destinasi/Index.vue";
import CreateDestinasi from "@/views/Admin/Destinasi/Create.vue";
import EventAdmin from "@/views/Admin/Event/Index.vue";
import CreateEvent from "@/views/Admin/Event/Create.vue";
import EventRegistrasiAdmin from "@/views/Admin/EventRegistrasi/Index.vue";
import GaleriAdmin from "@/views/Admin/Galeri/Index.vue";
import CreateGaleri from "@/views/Admin/Galeri/Create.vue";
import PostAdmin from "@/views/Admin/Post/Index.vue";
import CreatePost from "@/views/Admin/Post/Create.vue";

import Login from "@/views/Auth/Login.vue";
import Registrasi from "@/views/Auth/Registrasi.vue";

import NotFound from "@/views/Errors/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      component: AdminLayout,
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: Dashboard,
        },
        {
          path: "administrator",
          name: "administrator",
          component: Administrator,
        },
        {
          path: "administrator/create",
          name: "createAdministrator",
          component: CreateAdministrator,
        },
        {
          path: "destinasi",
          name: "destinasiAdmin",
          component: DestinasiAdmin,
        },
        {
          path: "destinasi/create",
          name: "createDestinasi",
          component: CreateDestinasi,
        },
        {
          path: "event",
          name: "eventAdmin",
          component: EventAdmin,
        },
        {
          path: "event/create",
          name: "createEvent",
          component: CreateEvent,
        },
        {
          path: "event-registrasi",
          name: "eventRegistrasiAdmin",
          component: EventRegistrasiAdmin,
        },
        {
          path: "galeri",
          name: "galeriAdmin",
          component: GaleriAdmin,
        },
        {
          path: "galeri/create",
          name: "createGaleri",
          component: CreateGaleri,
        },
        {
          path: "posts",
          name: "postsAdmin",
          component: PostAdmin,
        },
        {
          path: "posts/create",
          name: "createPost",
          component: CreatePost,
        },
      ],
    },
    {
      path: "/",
      component: AppLayout,
      children: [
        {
          path: "/",
          name: "beranda",
          component: Beranda,
        },
        {
          path: "destinasi",
          name: "destinasi",
          component: Destinasi,
        },
        {
          path: "destinasi/:id",
          name: "destinasiDetail",
          component: DestinasiDetail,
        },
        {
          path: "event",
          name: "event",
          component: Event,
        },
        {
          path: "event/:eventId",
          name: "eventDetail",
          component: EventDetail,
        },
        {
          path: "event/registrasi",
          name: "eventRegistrasi",
          component: EventRegistrasi,
        },
        {
          path: "galeri",
          name: "galeri",
          component: Galeri,
        },
        {
          path: "galeri/:galeriId",
          name: "galeriDetail",
          component: GaleriDetail,
        },
        {
          path: "posts",
          name: "posts",
          component: Post,
        },
        {
          path: "posts/:postId",
          name: "postDetail",
          component: PostDetail,
        },
      ],
    },
    {
      path: "/auth",
      component: AuthLayout,
      children: [
        {
          path: "registrasi",
          name: "registrasi",
          component: Registrasi,
        },
        {
          path: "login",
          name: "login",
          component: Login,
        },
      ],
    },
    {
      path: "/:pathMatch",
      name: "notFound",
      component: NotFound,
    },
  ],
});

export default router;
