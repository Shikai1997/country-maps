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
    },
    {
        // path: "/:catchAll(.*)",
        // component: () =>
        //     import ("@/pages/noFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;