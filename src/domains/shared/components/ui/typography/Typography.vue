<template>
    <component :is="as" :class="classesDefinition">
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
// add the rest
  as: "h1" | "h2" | "p",
  variant: keyof typeof typos
}>()

const typos = {
    default: /** @tw */ "text-md font-normal",
    title: "text-lg font-extrabold tracking-tight lg:text-xl",
    paragraph: "lg:text-sm",
}  

const classesDefinition = computed(() => {
    return typos[props.variant] ?? typos["default"]
})

</script>