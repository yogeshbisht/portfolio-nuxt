<template>
  <div class="flex items-center justify-center lg:justify-start gap-x-4">
    <div v-if="sectionId" class="flex items-center justify-center">
      <SectionIcon class="hidden lg:block w-8 h-8" />
    </div>
    <h1
      class="text-2xl xs:text-3xl md:text-4xl 2xl:text-6xl font-semibold text-center lg:text-left leading-standard"
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
import { navData } from "~/constants";

type SectionTitleProps = {
  sectionId?: string;
  small?: boolean;
  title: string;
  subtitle?: string;
};

const { sectionId, small, title, subtitle } = defineProps<SectionTitleProps>();

const SectionIcon = navData.find((nav) => nav.id === sectionId)?.icon;
</script>
