<template>
  <div>
    <header
      id="header"
      class="page-padding fixed h-[80px] w-screen backdrop-blur-lg bg-transparent shadow-lg z-50"
      ref="headerRef"
    >
      <div
        class="flex justify-between items-center h-full gap-x-4 container mx-auto"
      >
        <NuxtLink
          to="/"
          class="md:text-2xl text-xl font-medium capitalize tracking-wide cursor-pointer group transition duration-300"
        >
          <ClientOnly
            ><font-awesome-icon
              icon="home"
              size="xs"
              class="mr-3 transition-all duration-300 ease-in-out"
            ></font-awesome-icon
            >YOGESH BISHT</ClientOnly
          >
        </NuxtLink>
      </div>
    </header>
    <ProjectHero
      v-if="project"
      :project="project"
      :project-number="projectNumber"
      @click-project-navigate="onClickProjectNavigate"
    />
  </div>
</template>

<script lang="ts" setup>
import ProjectHero from "~/components/project/ProjectHero.vue";
import projects from "~/constants/projects";

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
  console.log(sequence);
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
