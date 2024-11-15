import AdminLayout from "@/views/Layouts/AdminLayout.vue";
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

const adminRoutes = [
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      { path: "dashboard", name: "dashboard", component: Dashboard },
      { path: "administrator", name: "administrator", component: Administrator },
      { path: "administrator/create", name: "createAdministrator", component: CreateAdministrator },
      { path: "destinasi", name: "destinasiAdmin", component: DestinasiAdmin },
      { path: "destinasi/create", name: "createDestinasi", component: CreateDestinasi },
      { path: "event", name: "eventAdmin", component: EventAdmin },
      { path: "event/create", name: "createEvent", component: CreateEvent },
      { path: "event-registrasi", name: "eventRegistrasiAdmin", component: EventRegistrasiAdmin },
      { path: "galeri", name: "galeriAdmin", component: GaleriAdmin },
      { path: "galeri/create", name: "createGaleri", component: CreateGaleri },
      { path: "posts", name: "postsAdmin", component: PostAdmin },
      { path: "posts/create", name: "createPost", component: CreatePost },
    ],
  },
];

export default adminRoutes;

