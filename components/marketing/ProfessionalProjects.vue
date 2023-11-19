<template>
  <SectionContainer section-id="projects" section-title="Professional Works">
    <div class="flex justify-center items-center xs:gap-4 gap-3 mb-8">
      <ProjectTag
        v-for="tag in projectTags"
        :key="tag.name"
        :name="tag.name"
        :is-selected="selectedTag === tag.name"
        @click="handleTagChange"
      />
    </div>
    <div class="grid 2xl:grid-cols-3 lg:grid-cols-2 gap-x-12 gap-y-16">
      <div v-for="(project, index) in filteredProjects" :key="index">
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
import SectionContainer from "../ui/SectionContainer.vue";
import ProjectTag from "../project/ProjectTag.vue";
import ProjectCard from "../project/ProjectCard.vue";
import { professionalProjects } from "~/constants/projects";

const projectTags = [
  { name: "all" },
  { name: "react" },
  { name: "nuxt" },
  { name: "php" },
];

const selectedTag = ref("all");

const handleTagChange = (tag: string) => {
  selectedTag.value = tag;
};

const filteredProjects = professionalProjects.filter((project) => {
  if (selectedTag.value === "all" || !project.tag) {
    return true;
  }

  return project.tag.includes(selectedTag.value);
});
</script>
~/constants/projects
