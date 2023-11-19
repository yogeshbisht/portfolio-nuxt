<template>
  <section :id="sectionId" class="md:py-28 py-16">
    <SectionTitle :title="sectionTitle" :section-id="sectionId" />
    <div class="relative md:mt-8 mt-6">
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
