<template>
    <div class="container mx-auto flex flex-col items-center justify-center h-full">
        <Card class="w-full max-w-sm">
            <CardHeader>
                <CardTitle class="text-2xl">
                Login
                </CardTitle>
                <CardDescription>
                Enter your email below to login to your account.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form @submit.prevent="onAuth" class="grid gap-4">
                    <div class="grid gap-2">
                        <Label for="email">Email</Label>
                        <Input id="email" type="email" placeholder="m@example.com" required v-model="email" />
                    </div>
                    <div class="grid gap-2">
                        <Label for="password">Password</Label>
                        <Input id="password" type="password" required v-model="password" />
                    </div>
                    <div class="text-right">
                        <Button :disabled="is_loading" type="submit">
                            <LoaderCircle
                                v-if="is_loading"
                                class="animate-spin"
                                :size="32"
                            />
                            Login
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    </div>
</template>

<script setup lang="ts">
import { Button } from '@/domains/shared/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/domains/shared/components/ui/card'
import { Input } from '@/domains/shared/components/ui/input'
import { Label } from '@/domains/shared/components/ui/label'
import { login } from '../services/auth';
import { ref } from 'vue';
import {
    LoaderCircle
} from "lucide-vue-next"
import { useRouter } from 'vue-router';

const fakePromise = () => new Promise((resolve) => setTimeout(() => resolve("ok"), 2000))

const email = ref("florent.giraud.16@gmail.com")
const password = ref("asdjasdkljalkj")
const is_loading = ref(false)

const router = useRouter()

const onAuth = async () => {
    await login(email.value, password.value)
    await fakePromise()
    router.replace("/list")
}
</script>