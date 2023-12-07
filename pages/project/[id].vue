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
          class="md:text-2xl text-xl font-medium capitalize tracking-wide cursor-pointer"
        >
          YOGESH BISHT
        </NuxtLink>
      </div>
    </header>
    <ProjectHero
      :title="title"
      :brand="brand"
      :intro="intro"
      :web-url="webUrl"
      :mockup-img="mockupImg"
      :img-url="imgUrl"
    />
  </div>
</template>

<script lang="ts" setup>
import ProjectHero from "~/components/project/ProjectHero.vue";
import { allProjects } from "~/constants/projects";

const route = useRoute();
const router = useRouter();

const project = allProjects.find((project) => project.id === route.params.id);

if (!project) {
  router.push({ name: "404" });
}

const { title, brand, intro, webUrl, mockupImg, imgUrl } = project!;

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
