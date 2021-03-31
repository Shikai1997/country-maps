import { createWebHistory, createRouter } from "vue-router";
import home from "@/components/Container.vue"
// import detail from "@/pages/detail.vue"

const routes = [{
        path: "/",
        name: "Home",
        component: home
        // component: () =>
        //     import ("@/components/Container.vue"),
    },
    {
        path: "/detail/:name",
        name: "detail",
        component: () => import(/* webpackChunkName: "about" */ '@/pages/detail.vue'),
        // component: () =>
        //     import ("@/pages/detail.vue"),
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;