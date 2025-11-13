<template>
  <SectionContainer :section-id="type" :section-title="`${type} Projects`">
    <div class="grid 2xl:grid-cols-3 lg:grid-cols-2 gap-16">
      <ProjectCard
        v-for="(project, index) in filteredProjects"
        :key="index"
        :project="project"
      />
    </div>
  </SectionContainer>
</template>

<script lang="ts" setup>
import SectionContainer from "../ui/SectionContainer.vue";
import ProjectCard from "../project/ProjectCard.vue";
import projects from "~/app/constants/projects";
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});

const filteredProjects = computed(() => {
  return projects.filter((project) => project.type === props.type);
});
</script>
