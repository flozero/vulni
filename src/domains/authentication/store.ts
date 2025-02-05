import { defineStore } from "pinia"
import { ref } from "vue"
import { login as loginService, logout as logoutService } from "./services/auth"

export interface User { 
    email: string
}

export const useAuthenticationStore = defineStore("authentication", () => {
    const user = ref<User | null>()

    const login = async (email: string, _: string) => {
            await loginService(email, _)
            user.value = {
                email
            }
    }
    const logout = async () => {
        await logoutService()
        user.value = null
    }

    return {
        logout,
        login,
        user
    }
})