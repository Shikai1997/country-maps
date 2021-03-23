import { createWebHistory, createRouter } from "vue-router";
import Home from "./container.vue";
import Test from './pages/test.vue';

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/test",
        name: "Test",
        component: Test,
        props: true
    }
];

    const router = createRouter({
        history: createWebHistory(),
        routes,
    });

export default router;