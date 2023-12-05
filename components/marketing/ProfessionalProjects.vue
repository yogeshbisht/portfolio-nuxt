<template>
  <SectionContainer section-id="projects" section-title="Professional Works">
    <div class="flex justify-center items-center xs:gap-4 gap-3 mb-8">
      <button
        v-for="tag in projectTags"
        :key="tag.name"
        :class="[
          selectedTag === tag.name
            ? 'text-accent border-accent'
            : 'text-slate-600 border-slate-600 hover:border-accent hover:text-accent',
          'border-y-2 sm:px-6 px-4 sm:py-1 py-0.5 sm:text-base text-sm cursor-pointer transition duration-300 rounded-lg',
        ]"
        @click="selectedTag = tag.name"
      >
        {{ tag.name }}
      </button>
    </div>
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
import { professionalProjects } from "~/constants/projects";

const projectTags = [
  { name: "all" },
  { name: "react" },
  { name: "nuxt" },
  { name: "php" },
];

const selectedTag = ref("all");

const filteredProjects = computed(() => {
  return professionalProjects.filter((project) => {
    if (selectedTag.value === "all" || !project.tag) {
      return true;
    }

    return project.tag.includes(selectedTag.value);
  });
});
</script>
