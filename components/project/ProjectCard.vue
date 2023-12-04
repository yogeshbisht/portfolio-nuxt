<template>
  <div class="relative" @mouseover="showOverlay" @mouseleave="hideOverlay">
    <div class="relative bg-slate-800 lg:min-h-[520px] z-10">
      <div class="relative overflow-hidden">
        <NuxtImg
          :src="imgUrl"
          :alt="title"
          width="720"
          height="450"
          fit="cover"
          class="cursor-pointer"
        />
        <div class="image-overlay" ref="imageOverlay">
          <div class="flex gap-4">
            <NuxtLink
              :to="webUrl"
              class="project-link group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon
                icon="link"
                size="lg"
                class="project-icon group-hover:text-secondary"
              ></font-awesome-icon>
            </NuxtLink>
            <NuxtLink :to="`/project/${id}`" class="project-link group">
              <font-awesome-icon
                :icon="['far', 'image']"
                size="lg"
                class="project-icon group-hover:text-secondary"
              ></font-awesome-icon>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="py-6 px-4">
        <h5 class="text-slate-300 text-lg font-medium mb-3">{{ title }}</h5>
        <p class="text-slate-500">{{ intro.join(" ") }}</p>
      </div>
    </div>
    <div
      class="absolute top-1/4 -bottom-2 -left-2 -right-2 border-2 border-t-0 rounded-xl"
    />
  </div>
</template>

<script setup>
import gsap from "gsap";

defineProps({
  id: {
    type: String,
    required: true,
  },
  intro: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  webUrl: {
    type: String,
    required: true,
  },
  mockupImg: {
    type: String,
    required: false,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

const imageOverlay = ref();
let ctx;
let tl;

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
