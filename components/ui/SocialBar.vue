<template>
  <div
    class="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:left-0 z-50 top-0 w-full xl:w-32 xl:max-w-md xl:h-screen"
  >
    <div
      class="w-full px-8 xs:px-16 sm:px-24 md:px-40 xl:px-0 xl:h-max xl:py-8 py-4"
    >
      <ClientOnly>
        <div
          class="mx-auto container flex xl:flex-col items-center justify-between xl:justify-center w-full gap-y-8"
        >
          <div class="w-[2px] h-12 bg-accent" />
          <NuxtLink
            v-for="social in socialLinks"
            :key="social.name"
            :to="social.link"
            target="_blank"
            rel="noopener"
            class="text-accent hover:text-secondary transition-all duration-300 cursor-pointer"
          >
            <font-awesome-icon
              :icon="['fab', social.icon]"
              size="xl"
            ></font-awesome-icon>
          </NuxtLink>
          <div class="w-[2px] h-12 bg-accent" />
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { socialLinks } from "~/constants";
</script>
