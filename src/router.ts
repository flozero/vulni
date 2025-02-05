import { createMemoryHistory, createRouter } from 'vue-router'

import { router as authenticationRoutes } from "./domains/authentication/index"

export const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    ...authenticationRoutes,
    { path: '/:pathMatch(.*)*', name: 'NotFound', redirect: "/" },
  ],
})