import { createWebHistory, createRouter } from "vue-router";

const routes = [{
        path: "/",
        name: "Home",
        component: () =>
            import ("@/components/Container.vue"),
    },
    {
        path: "/detail/:name",
        name: "detail",
        component: () =>
            import ("@/pages/detail.vue"),
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;