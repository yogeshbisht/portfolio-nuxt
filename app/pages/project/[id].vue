<template>
  <div>
    <Header />
    <ProjectHero
      v-if="project"
      :project="project"
      :project-number="projectNumber"
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
import projects from "~/constants/projects";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const project = projects.find((project) => project.id === route.params.id);
const projectNumber = projects.findIndex(
  (project) => project.id === route.params.id
);

if (!project) {
  router.push({ name: "404" });
}

const onClickProjectNavigate = (index: number, sequence: string) => {
  if (sequence === "prev") {
    if (index === 0) {
      router.push({
        path: `/project/${projects[projects.length - 1].id}`,
      });
    } else {
      router.push({
        path: `/project/${projects[index - 1].id}`,
      });
    }
  } else if (index === projects.length - 1) {
    router.push({ path: `/project/${projects[0].id}` });
  } else {
    router.push({ path: `/project/${projects[index + 1].id}` });
  }
};
</script>
