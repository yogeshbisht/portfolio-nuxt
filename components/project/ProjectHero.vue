<template>
  <div
    class="relative page-padding flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center overflow-hidden h-screen"
    :style="{ backgroundImage: `url(${imgUrl})` }"
  >
    <div class="absolute inset-0 bg-black opacity-90"></div>
    <div
      class="flex flex-col gap-16 z-10 relative container justify-between items-center"
    >
      <div class="flex flex-col flex-1 gap-2 mx-auto">
        <h1 class="text-2xl md:text-3xl xl:text-4xl text-center xl:mb-2">
          {{ title }}
        </h1>
        <h3 v-if="brand" class="xl:text-xl text-center text-support pb-4">
          ({{ brand }})
        </h3>
        <NuxtImg
          :src="mockupImg || imgUrl"
          alt="project-hero"
          class="mx-auto block"
        />
      </div>
      <p
        class="lg:text-xl text-white font-light lg:leading-8 leading-6 text-center max-w-[1200px]"
      >
        {{ intro.join(" ") }}
      </p>
      <ClientOnly>
        <NuxtLink
          :to="webUrl"
          class="py-2.5 md:w-[240px] w-[200px] flex justify-center items-center gap-3 md:text-lg text-md text-center border-y hover:border-support bg-transparent hover:text-support transition duration-300 rounded-lg shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Visit Website</span>
          <font-awesome-icon
            icon="external-link-alt"
            class="text-sm md:text-md"
          />
        </NuxtLink>
      </ClientOnly>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  imgUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    default: null,
  },
  intro: {
    type: Array,
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
});
</script>
