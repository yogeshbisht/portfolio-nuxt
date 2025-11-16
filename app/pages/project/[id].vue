<template>
  <div>
    <Header />
    <ProjectHero
      v-if="project"
      :project="project"
      :project-index="projectIndex"
      @click-project-navigate="onClickProjectNavigate"
    />
    <div class="py-8 flex items-center justify-center">
      <ULink
        to="/"
        class="text-accent hover:text-support text-lg transition-all duration-300 underline"
      >
        Go To Homepage
      </ULink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProjectHero from "~/components/project/ProjectHero.vue";
import Header from "~/components/ui/Header.vue";
import PROJECTS from "~/constants/projects";
import { useRoute, useRouter } from "vue-router";
import type { Project } from "~/types";

const route = useRoute();
const router = useRouter();

// Ensure PROJECTS array is not empty
if (PROJECTS.length === 0) {
  router.push({ name: "404" });
  throw new Error("No projects available");
}

const project = PROJECTS.find(
  (project: Project) => project.id === route.params.id
);
const projectIndex = PROJECTS.findIndex(
  (project: Project) => project.id === route.params.id
);

// Safe to use non-null assertion since we've checked PROJECTS.length > 0
const firstProject = PROJECTS[0]!;
const lastProject = PROJECTS[PROJECTS.length - 1]!;

if (!project) {
  router.push({ name: "404" });
}

const onClickProjectNavigate = (index: number, sequence: string) => {
  if (sequence === "prev") {
    if (index === 0) {
      return router.push({
        path: `/project/${lastProject.id}`,
      });
    }
    // Safe: index > 0 guarantees previousProject exists
    const previousProject = PROJECTS[index - 1]!;
    return router.push({
      path: `/project/${previousProject.id}`,
    });
  }

  // sequence === "next"
  if (index === PROJECTS.length - 1) {
    return router.push({ path: `/project/${firstProject.id}` });
  }
  // Safe: index < length - 1 guarantees nextProject exists
  const nextProject = PROJECTS[index + 1]!;
  return router.push({ path: `/project/${nextProject.id}` });
};
</script>
