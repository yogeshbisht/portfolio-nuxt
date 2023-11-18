<template>
  <div class="min-h-screen flex justify-center items-center pt-32 pb-16">
    <div class="flex flex-col lg:flex-row gap-12 2xl:gap-16 items-center">
      <div class="lg:flex-1 order-2 lg:order-1">
        <SectionTitle
          title="Unlocking Excellence with Development and Design"
          small
        />
        <div
          v-for="(intro, index) in heroIntroduction"
          :key="index"
          class="flex flex-col xs:text-lg sm:text-xl lg:items-start items-center gap-6 text-accent sm:leading-relaxed leading-normal mt-6"
        >
          <p class="text-center lg:text-left">{{ intro }}</p>
        </div>
        <div class="w-full xs:mt-16 mt-12 flex flex-col md:flex-row gap-6">
          <ActionButton link="#projects" text="View Works" />
          <ActionButton link="#contact" text="Contact" />
        </div>
      </div>
      <div
        class="relative order-1 lg:order-2 xl:h-[360px] xl:w-[360px] h-[300px] w-[300px]"
      >
        <NuxtImg
          src="https://picsum.photos/400.jpg"
          alt="profile image"
          width="400"
          class="sm:border-4 sm:p-4 p-2 border-accent border-2 border-t-transparent border-l-transparent"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SectionTitle from "../ui/SectionTitle.vue";
import ActionButton from "../ui/ActionButton.vue";

const heroIntroduction = [
  "Welcome to a world where technology and artistry meet to define innovation. I am Yogesh Bisht, your guide to the seamless fusion of development and design.",
  "With a focus on delivering solutions that transcend the ordinary, my expertise brings high-end businesses and top executives a transformative approach to digital excellence.",
  "Explore the intersection of code and creativity, where your vision is brought to life with precision and style.",
];
</script>
