import type { User } from "../store";

export const login = async (email: string, _: string): Promise<User> => {
    // we would add check here
    
    const user = {
        email
    }

    return user
}

export const logout = async (): Promise<void> => {
    // logout
} 
