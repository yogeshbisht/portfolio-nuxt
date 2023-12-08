<template>
  <div class="relative" @mouseover="showOverlay" @mouseleave="hideOverlay">
    <div class="relative bg-slate-800 lg:min-h-[520px] xl:min-h-[480px] z-10">
      <div class="relative overflow-hidden">
        <NuxtImg
          :src="project.imgUrl"
          :alt="project.title"
          width="720"
          height="450"
          fit="cover"
        />
        <div class="image-overlay" ref="imageOverlay">
          <div class="flex gap-4">
            <ClientOnly>
              <NuxtLink
                v-if="!project.siteDown"
                :to="project.webUrl"
                class="project-link group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font-awesome-icon
                  icon="link"
                  size="lg"
                  class="project-icon group-hover:text-support"
                ></font-awesome-icon>
              </NuxtLink>
              <NuxtLink
                :to="`/project/${project.id}`"
                class="project-link group"
              >
                <font-awesome-icon
                  :icon="['far', 'image']"
                  size="lg"
                  class="project-icon group-hover:text-support"
                ></font-awesome-icon>
              </NuxtLink>
            </ClientOnly>
          </div>
        </div>
      </div>
      <div class="py-6 px-4">
        <h5 class="text-slate-300 text-lg font-medium mb-3">
          {{ project.title }}
        </h5>
        <p class="text-slate-500">{{ project.intro.join(" ") }}</p>
      </div>
    </div>
    <div
      class="absolute top-1/4 -bottom-2 -left-2 -right-2 border-2 border-t-0 border-accent rounded-xl"
    />
  </div>
</template>

<script lang="ts" setup>
import gsap from "gsap";
import { onMounted, onUnmounted, ref } from "vue";
import type { ProjectsData } from "~/types";

defineProps<{ project: ProjectsData }>();

const imageOverlay = ref();
let ctx: any;
let tl: any;

onMounted(() => {
  ctx = gsap.context(() => {
    tl = gsap.timeline({ paused: true });
    tl.to(imageOverlay.value, {
      duration: 0.3,
      y: 0,
      ease: "power3.inOut",
      opacity: 1,
    });
  }, imageOverlay.value);
});

onUnmounted(() => {
  ctx.revert();
});

const showOverlay = () => {
  tl.play();
};

const hideOverlay = () => {
  tl.reverse();
};
</script>
