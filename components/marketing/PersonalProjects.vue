<template>
  <SectionContainer section-id="personal" section-title="Personal Projects">
    <div class="grid 2xl:grid-cols-3 lg:grid-cols-2 gap-16">
      <div v-for="(project, index) in personalProjects" :key="index">
        <ProjectCard :project="project" />
      </div>
    </div>
  </SectionContainer>
</template>

<script lang="ts" setup>
import SectionContainer from "~/components/ui/SectionContainer.vue";
import { personalProjects } from "~/constants/projects";
import ProjectCard from "~/components/project/ProjectCard.vue";
</script>
