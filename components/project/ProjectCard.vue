<template>
  <div class="px-2.5 pb-2.5 border-2 border-t-0 border-accent rounded-xl">
    <div
      class="bg-slate-800 lg:min-h-[510px] xl:min-h-[480px] 2xl:min-h-[520px]"
    >
      <div
        class="h-60 relative group"
        :style="{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }"
      >
        <div
          class="items-center justify-center absolute top-0 left-0 w-full h-full bg-slate-800 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 cursor-pointer"
        >
          <NuxtLink
            :to="webUrl"
            class="h-12 w-12 mr-2 border-2 relative rounded-full border-slate-400 hover:border-white group/link"
          >
            <CodeBracketIcon
              class="h-8 w-8 text-slate-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"
            />
          </NuxtLink>
          <NuxtLink
            :to="`/project/${id}`"
            class="h-12 w-12 border-2 relative rounded-full border-slate-400 hover:border-white group/link"
          >
            <EyeIcon
              class="h-8 w-8 text-slate-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="py-6 px-4">
        <h5 class="text-slate-300 text-lg font-medium mb-3">{{ title }}</h5>
        <p class="text-slate-500">{{ intro.join(" ") }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CodeBracketIcon, EyeIcon } from "@heroicons/vue/24/outline";

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
</script>
