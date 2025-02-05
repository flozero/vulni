import { createRouter, createWebHistory } from 'vue-router'

import { routes as authenticationRoutes } from "@/domains/authentication/index"
import { routes as VulnerabilityRoutes } from "@/domains/vulnerability/index"

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      "path": "/",
      redirect: "/login"
    },
    ...VulnerabilityRoutes,
    ...authenticationRoutes,
    { path: '/:pathMatch(.*)*', name: 'NotFound', redirect: "/login" },
  ],
})