<template>
  <div
    class="relative page-padding h-screen flex justify-center items-center bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat bg-center"
  >
    <div class="absolute inset-0 bg-black opacity-90"></div>
    <div
      class="flex gap-16 z-10 relative container justify-between items-center"
    >
      <div class="flex flex-col flex-1 gap-2 max-w-[960px]">
        <h1
          class="text-2xl xs:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-center lg:text-left leading-standard pb-4"
        >
          Unlocking Excellence with <br />
          Development and Design
        </h1>
        <div
          v-for="(intro, index) in heroIntroduction"
          :key="index"
          class="flex flex-col xs:text-lg sm:text-xl lg:text-2xl lg:items-start items-center gap-6 text-accent sm:leading-relaxed leading-standard mt-4 font-light"
        >
          <p class="text-center lg:text-left">{{ intro }}</p>
        </div>
        <div
          class="xs:mt-16 mt-12 flex flex-col md:flex-row gap-6 justify-center lg:justify-start items-center"
        >
          <ActionButton link="#projects" text="View Projects" />
          <ActionButton link="#contact" text="Contact" />
        </div>
      </div>
      <div class="w-64">Section</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ActionButton from "../ui/ActionButton.vue";

const heroIntroduction = [
  "Hello, I am Yogesh Bisht, your guide to the seamless fusion of development and design.",
  "With a focus on delivering solutions that transcend the ordinary, my expertise brings businesses a transformative approach to digital excellence.",
];
</script>
