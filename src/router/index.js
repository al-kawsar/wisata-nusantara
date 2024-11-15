import { createRouter, createWebHistory } from "vue-router";

// Import grouped routes
import adminRoutes from "./adminRoutes";
import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";

// Error route
import NotFound from "@/views/Errors/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...adminRoutes,
    ...userRoutes,
    ...authRoutes,
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: NotFound,
    },
  ],
});

export default router;

