import { createWebHistory, createRouter } from "vue-router";
// import Home from "./container.vue";
// import Test from './pages/test.vue';
// import NotFound from './pages/noFound.vue'

const routes = [{
        path: "/",
        name: "Home",
        component: () =>
            import ("@/components/Container.vue"),
    },
    {
        path: "/test/:name",
        name: "Test",
        component: () =>
            import ("@/pages/test.vue"),
        props: true
    },
    {
        path: "/:catchAll(.*)",
        component: () =>
            import ("@/pages/noFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;