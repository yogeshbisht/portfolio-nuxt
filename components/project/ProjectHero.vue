<template>
  <div
    class="relative py-40 min-h-screen bg-cover bg-no-repeat bg-center overflow-hidden"
    :style="{ backgroundImage: `url(/images/projects/${project.imgUrl})` }"
  >
    <div class="absolute inset-0 bg-black opacity-95"></div>
    <ClientOnly>
      <div
        class="fixed left-[2%] top-[30%] w-10 h-10 md:w-12 md:h-12 flex justify-center items-center group cursor-pointer"
        @click="onClickProjectNavigate(projectNumber, 'prev')"
      >
        <font-awesome-icon
          icon="chevron-left"
          class="navigate-icon"
        ></font-awesome-icon>
      </div>
      <div
        class="fixed right-[2%] top-[30%] w-10 h-10 md:w-12 md:h-12 flex justify-center items-center group cursor-pointer"
        @click="onClickProjectNavigate(projectNumber, 'next')"
      >
        <font-awesome-icon
          icon="chevron-right"
          class="navigate-icon"
        ></font-awesome-icon>
      </div>
    </ClientOnly>
    <div
      class="flex flex-col gap-8 z-10 relative justify-between items-center section-container"
    >
      <div class="flex flex-col flex-1 gap-1 xs:gap-2 mx-auto">
        <h1
          class="text-xl xs:text-2xl md:text-3xl xl:text-4xl text-center xl:mb-2"
        >
          {{ project.title }}
        </h1>
        <h3
          class="sm:text-base text-md xl:text-xl text-center text-support capitalize"
        >
          ({{ `${project.type} Project` }}
          {{ project.brand ? `for ${project.brand}` : "" }})
        </h3>
        <div
          v-if="isImageLoading"
          class="flex justify-center items-center xl:min-h-[50vh] md:min-h-[40vh] min-h-[30vh]"
        >
          <Spinner />
        </div>
        <NuxtImg
          v-show="!isImageLoading"
          :src="`/images/mockup/${project.mockupImg}`"
          width="1120"
          alt="project-hero"
          class="mx-auto block mt-4"
          @load="() => (isImageLoading = false)"
        />
      </div>
      <div class="flex items-center justify-center text-xs gap-3">
        <div
          v-for="(tech, index) in project.tech"
          :key="index"
          class="border-accent text-accent skill-capsule flex flex-wrap"
        >
          {{ tech }}
        </div>
      </div>
      <p
        class="text-sm md:text-base lg:text-xl text-white font-light lg:leading-9 sm:leading-7 leading-6 text-center"
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
            class="py-1.5 md:w-[240px] w-[200px] flex justify-center items-center gap-2 text-center border hover:border-support hover:text-support transition duration-300 rounded-lg shadow-lg"
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
            id="project-image"
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
import Spinner from "../ui/Spinner.vue";
import type { ProjectsData } from "~/types";

const isImageLoading = ref(true);

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
