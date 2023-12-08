<template>
  <div
    class="relative page-padding py-40 min-h-screen bg-cover bg-no-repeat bg-center overflow-hidden"
    :style="{ backgroundImage: `url(${project.imgUrl})` }"
  >
    <div class="absolute inset-0 bg-black opacity-90"></div>
    <ClientOnly>
      <div
        class="fixed left-[2%] top-[40%]"
        @click="onClickProjectNavigate(projectNumber, 'prev')"
      >
        <font-awesome-icon
          icon="chevron-left"
          size="2xl"
          class="text-accent duration-300 transition-all hover:text-support ease-in-out cursor-pointer"
        ></font-awesome-icon>
      </div>
      <div
        class="fixed right-[2%] top-[40%]"
        @click="onClickProjectNavigate(projectNumber, 'next')"
      >
        <font-awesome-icon
          icon="chevron-right"
          size="2xl"
          class="text-accent duration-300 transition-all hover:text-support ease-in-out cursor-pointer"
        ></font-awesome-icon>
      </div>
    </ClientOnly>
    <div
      class="flex flex-col gap-8 px-4 z-10 relative container justify-between items-center mx-auto"
    >
      <div class="flex flex-col flex-1 gap-2 mx-auto">
        <h1 class="text-2xl md:text-3xl xl:text-4xl text-center xl:mb-2">
          {{ project.title }}
        </h1>
        <h3 v-if="project.brand" class="xl:text-xl text-center text-support">
          ({{ project.brand }})
        </h3>
        <NuxtImg
          :src="project.mockupImg || project.imgUrl"
          width="1280"
          alt="project-hero"
          class="mx-auto block mt-4"
        />
      </div>
      <div class="flex items-center justify-center text-xs gap-3">
        <h4 class="text-accent">Tech Stack</h4>
        <div
          v-for="(tech, index) in project.tech"
          :key="index"
          class="border-accent text-accent skill-capsule flex flex-wrap"
        >
          {{ tech }}
        </div>
      </div>
      <p
        class="lg:text-xl text-white font-light lg:leading-9 leading-7 text-center max-w-[960px] px-6"
      >
        {{ project.intro.join(" ") }}
      </p>
      <ClientOnly>
        <div
          v-if="!project.siteDown"
          class="flex flex-col items-center justify-center gap-4"
        >
          <NuxtLink
            :to="project.webUrl"
            class="py-2 md:w-[240px] w-[200px] flex justify-center items-center gap-3 md:text-lg text-md text-center border hover:border-support hover:text-support transition duration-300 rounded-lg shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Visit Website</span>
            <font-awesome-icon
              icon="external-link-alt"
              class="text-sm md:text-md"
            />
          </NuxtLink>
          <NuxtLink
            v-if="project.appUrl"
            :to="project.appUrl"
            class="py-2 flex text-support justify-center items-center gap-2 text-sm text-center hover:text-brand transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon icon="home" size="xs" />
            <span>Company Home</span>
          </NuxtLink>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectsData } from "~/types";

defineProps({
  project: {
    type: Object as PropType<ProjectsData>,
    required: true,
  },
  projectNumber: {
    type: Number,
    required: true,
  },
  onClickProjectNavigate: {
    type: Function as PropType<(index: number, sequence: string) => void>,
    required: true,
  },
});
</script>
