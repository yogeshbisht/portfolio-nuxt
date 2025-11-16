<template>
  <section :id="sectionId" class="section-container">
    <SectionTitle :title="sectionTitle" :section-id="sectionId" />
    <div class="relative md:mt-8 mt-6 max-w-[1280px]">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts" setup>
import SectionTitle from "./SectionTitle.vue";

type SectionContainerProps = {
  sectionId: string;
  sectionTitle: string;
};

const { sectionId, sectionTitle } = defineProps<SectionContainerProps>();
</script>
