<template>
  <div
    class="hidden xl:flex flex-col items-center justify-center gap-y-4 fixed bottom-0 mt-auto left-0 z-20 top-0 w-32 max-w-md h-screen"
  >
    <div
      class="w-full px-8 xs:px-16 sm:px-24 md:px-40 xl:px-0 xl:h-max xl:py-8 py-4"
    >
      <ClientOnly>
        <div
          class="mx-auto container flex flex-col items-center justify-center w-full gap-y-8"
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
