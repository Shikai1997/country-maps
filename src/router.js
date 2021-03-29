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
    // {
    // github pages 會定向為not found 暫時移除
    // path: "/:catchAll(.*)",
    // component: () =>
    //     import ("@/pages/noFound.vue"),
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;