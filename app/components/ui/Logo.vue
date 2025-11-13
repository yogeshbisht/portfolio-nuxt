<template>
  <div
    class="flex justify-center items-center gap-2 cursor-pointer"
    @click="onLogoClick"
  >
    <NuxtImg
      src="/logo.svg"
      width="36"
      height="36"
      class="md:w-[36px] md:h-[36px] w-[32px] h-[32px]"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps<{
  home?: boolean;
}>();

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const onLogoClick = () => {
  if (!props.home) {
    router.push("/");
  }

  scrollToTop();
};
</script>
