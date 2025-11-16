<template>
  <div
    class="flex items-center justify-center lg:justify-start gap-x-3 md:gap-x-4"
  >
    <ClientOnly>
      <font-awesome-icon
        v-if="sectionIcon"
        class="hidden lg:block text-xl xs:text-2xl md:text-3xl lg:text-4xl"
        :icon="sectionIcon"
      />
    </ClientOnly>
    <h1
      class="text-2xl xs:text-3xl md:text-4xl 2xl:text-6xl font-semibold text-center lg:text-left leading-normal! capitalize"
      :class="{
        'lg:text-5xl': !small,
        'xl:text-5xl': small,
      }"
    >
      {{ title }}
    </h1>
  </div>
  <p v-if="subtitle">{{ subtitle }}</p>
</template>

<script setup lang="ts">
import { headerData } from "~/constants";

type SectionTitleProps = {
  sectionId?: string;
  small?: boolean;
  title: string;
  subtitle?: string;
};

const { sectionId, small, title, subtitle } = defineProps<SectionTitleProps>();

const sectionIcon = headerData.find((header) => header.id === sectionId)?.icon;
</script>
