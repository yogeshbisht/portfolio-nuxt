<template>
  <div
    class="relative min-h-screen flex justify-center items-center bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat bg-center overflow-hidden"
  >
    <div class="absolute inset-0 bg-black opacity-90"></div>
    <div
      class="flex z-10 relative py-32 justify-center items-center section-container"
    >
      <div class="flex flex-col flex-1 gap-2 max-w-[1280px]">
        <h1
          class="text-2xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold !leading-normal pb-2 md:pb-4 text-center md:text-start"
        >
          Unlocking Excellence with <br />
          Development and Design
        </h1>
        <div
          v-for="(intro, index) in heroIntroduction"
          :key="index"
          class="xs:text-lg sm:text-xl lg:text-2xl gap-6 text-accent sm:leading-relaxed !leading-normal mt-4 font-light text-center md:text-start"
        >
          {{ intro }}
        </div>
        <div
          class="flex xs:flex-row flex-col md:mt-12 mt-8 gap-6 md:justify-start justify-center items-center"
        >
          <ActionButton link="#professional" text="View Projects" />
          <ActionButton link="#contact" text="Contact" />
        </div>
        <ClientOnly>
          <div
            class="flex items-center md:justify-start justify-center mt-12 sm:gap-8 gap-6 xl:hidden"
          >
            <div class="h-[2px] sm:w-12 w-8 bg-white" />
            <NuxtLink
              v-for="social in socialLinks"
              :key="social.name"
              :to="social.link"
              target="_blank"
              rel="noopener"
              class="hover:text-support transition-all duration-300 cursor-pointer"
            >
              <font-awesome-icon
                :icon="['fab', social.icon]"
                class="md:text-3xl text-2xl"
              ></font-awesome-icon>
            </NuxtLink>
            <div class="h-[2px] sm:w-12 w-8 bg-white" />
          </div>
        </ClientOnly>
      </div>
    </div>
    <NuxtImg
      src="/images/name.svg"
      class="absolute block bottom-0 -right-1 z-10 opacity-10 w-[70%] min-w-[280px]"
    />
  </div>
</template>

<script lang="ts" setup>
import ActionButton from "~/components/ui/ActionButton.vue";
import { socialLinks } from "~/constants";

const heroIntroduction = [
  "Hello, I am Yogesh Bisht, your guide to the seamless fusion of development and design.",
  "With a focus on delivering solutions that transcend the ordinary, my expertise brings businesses a transformative approach to digital excellence.",
];
</script>
