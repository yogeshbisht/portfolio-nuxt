<template>
  <div class="flex justify-center gap-2 cursor-pointer" @click="onLogoClick">
    <NuxtImg src="/logo-light.svg" width="32" height="28" />
    <span class="md:text-2xl text-xl font-medium capitalize tracking-wide">
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
