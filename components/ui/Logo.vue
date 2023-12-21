<template>
  <div class="flex justify-center items-center gap-2 cursor-pointer" @click="onLogoClick">
    <NuxtImg src="/logo-light.svg" width="28" height="28" class="md:w-[28px] md:h-[28px] w-[24px] h-[24px]" />
    <span class="md:text-2xl text-xl font-medium capitalize">
      YOGESH BISHT
    </span>
  </div>
</template>

<script lang="ts" setup>
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
