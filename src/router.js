import { createWebHistory, createRouter } from "vue-router";
import Home from "./container.vue";
import Test from './pages/test.vue';
import NotFound from './pages/noFound.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/test/:name",
        name: "Test",
        component: Test,
        props: true
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    },
];

    const router = createRouter({
        history: createWebHistory(),
        routes,
    });

export default router;