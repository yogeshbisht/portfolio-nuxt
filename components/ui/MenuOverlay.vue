<template>
  <div class="container flex flex-col gap-3 py-4 items-end md:hidden">
    <div v-for="link in links" :key="link.id">
      <NuxtLink
        :to="link.path"
        class="block sm:text-lg hover:text-secondary transition duration-300"
        @click="onClick()"
      >
        {{ link.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { NavData } from "~/types";

export default defineComponent({
  props: {
    links: {
      type: Array as () => NavData[],
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
});
</script>
