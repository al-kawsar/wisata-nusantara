import AppLayout from "@/views/Layouts/AppLayout.vue";
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

const userRoutes = [
  {
    path: "/",
    component: AppLayout,
    children: [
      { path: "/", name: "beranda", component: Beranda },
      { path: "destinasi", name: "destinasi", component: Destinasi },
      { path: "destinasi/:id", name: "destinasiDetail", component: DestinasiDetail },
      { path: "event", name: "event", component: Event },
      { path: "event/:eventId", name: "eventDetail", component: EventDetail },
      { path: "event/registrasi", name: "eventRegistrasi", component: EventRegistrasi },
      { path: "galeri", name: "galeri", component: Galeri },
      { path: "galeri/:galeriId", name: "galeriDetail", component: GaleriDetail },
      { path: "posts", name: "posts", component: Post },
      { path: "posts/:postId", name: "postDetail", component: PostDetail },
    ],
  },
];

export default userRoutes;

