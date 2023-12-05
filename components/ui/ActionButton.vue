<template>
  <NuxtLink
    v-if="link"
    :to="link"
    class="py-2.5 px-4 font-medium max-w-[240px] w-full text-center hover:bg-secondary bg-transparent text-accent hover:text-black border-accent border-2 hover:border-transparent transition duration-300 rounded-lg"
  >
    {{ text }}
  </NuxtLink>
  <button
    v-else
    type="submit"
    class="py-2.5 px-4 font-medium w-full text-center hover:bg-secondary bg-transparent text-accent hover:text-black border-accent border-2 hover:border-transparent transition duration-300 rounded-lg"
  >
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  link?: string;
  text: string;
}>();
</script>
