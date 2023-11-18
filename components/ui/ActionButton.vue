<template>
  <NuxtLink
    :to="link"
    class="py-2.5 px-4 font-medium w-full text-center hover:bg-secondary bg-accent text-black transition duration-300"
  >
    {{ text }}
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
