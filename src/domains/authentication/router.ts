import type { RouteRecordRaw } from "vue-router";
import LoginView from "./views/LoginView.vue"

export const routes: RouteRecordRaw[] =  [
    {
        "path": "/login",
        component: LoginView
    }
]