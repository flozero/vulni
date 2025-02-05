import type { RouteRecordRaw } from "vue-router";

export const router: RouteRecordRaw[] =  [
    {
        "path": "/",
        component: () => import("./views/LoginView.vue")
    }
]