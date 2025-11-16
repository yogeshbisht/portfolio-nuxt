<template>
  <div
    class="page-padding flex flex-col gap-3 py-4 items-end md:hidden bg-black"
  >
    <div v-for="link in links" :key="link.id">
      <NuxtLink
        :to="`#${link.id}`"
        class="block sm:text-lg hover:text-support transition duration-300"
        @click="onClick()"
      >
        {{ link.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { HeaderData } from "~/types";

export default defineComponent({
  props: {
    links: {
      type: Array as () => HeaderData[],
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
});
</script>
