<template>
  <SectionContainer section-id="projects" section-title="Professional Works">
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
import SectionContainer from "~/components/ui/SectionContainer.vue";
import ProjectCard from "~/components/project/ProjectCard.vue";
import projects from "~/constants/projects";

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
