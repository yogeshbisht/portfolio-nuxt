<template>
  <SectionContainer section-id="personal" section-title="Personal Projects">
    <div class="grid 2xl:grid-cols-3 lg:grid-cols-2 gap-12">
      <div v-for="(project, index) in personalProjects" :key="index">
        <ProjectCard
          :id="project.id"
          :intro="project.intro"
          :title="project.title"
          :webUrl="project.webUrl"
          :mockupImg="project.mockupImg"
          :imgUrl="project.imgUrl"
        />
      </div>
    </div>
  </SectionContainer>
</template>

<script lang="ts" setup>
import SectionContainer from "~/components/ui/SectionContainer.vue";
import { personalProjects } from "~/constants/projects";
import ProjectCard from "~/components/project/ProjectCard.vue";
</script>
