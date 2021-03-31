import { createWebHashHistory, createRouter } from "vue-router";
//createWebHistory  此模式github無法顯示~

const routes = [
    {
        path: "/",
        name: "home",
        component: () =>
            import ("./components/Container.vue"),
    },
    {
        path: "/detail/:name",
        name: "detail",
        component: () =>
            import ("./pages/detail.vue"),
        props: true
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes,
});

export default router;