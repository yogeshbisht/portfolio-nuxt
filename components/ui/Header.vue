<template>
  <header
    id="header"
    class="page-padding fixed h-[80px] w-screen backdrop-blur-lg bg-transparent shadow-lg z-50"
    ref="headerRef"
  >
    <div
      class="flex justify-between items-center h-full gap-x-4 container mx-auto"
    >
      <div
        class="md:text-2xl text-xl font-medium capitalize tracking-wide cursor-pointer"
        @click="scrollToTop"
      >
        YOGESH BISHT
      </div>
      <ClientOnly>
        <div class="block md:hidden">
          <button class="flex items-center" @click="() => setNavbarOpen()">
            <font-awesome-icon
              :icon="navbarOpen ? 'fa-xmark' : 'fa-bars'"
              size="xl"
            />
          </button>
        </div>
        <div
          class="hidden md:flex justify-center items-center gap-x-10 rounded-full"
        >
          <div v-for="link in headerData" :key="link.name">
            <NuxtLink
              :to="link.path"
              class="relative flex items-center group hover:text-support transition-colors duration-300"
              :class="{ 'text-support': link.path === 'home' }"
            >
              <div
                class="absolute top-10 -right-2 hidden w-max xl:group-hover:flex"
              >
                <div
                  class="bg-support relative flex items-center px-3 py-[6px] rounded-md"
                >
                  <div class="text-sm text-black font-medium capitalize">
                    {{ link.name }}
                  </div>
                  <div
                    class="border-solid border-b-support border-b-8 border-x-transparent border-x-8 border-t-0 absolute -top-2 right-3"
                  />
                </div>
              </div>
              <font-awesome-icon
                :icon="link.icon"
                size="lg"
              ></font-awesome-icon>
            </NuxtLink>
          </div>
        </div>
      </ClientOnly>
    </div>
    <MenuOverlay
      v-show="navbarOpen"
      :links="headerData"
      :on-click="() => setNavbarOpen(false)"
    />
  </header>
</template>

<script lang="ts" setup>
import gsap from "gsap";
import { headerData } from "~/constants";
import MenuOverlay from "./MenuOverlay.vue";
import useScrollStore from "~/store/scroll";

const store = useScrollStore();

const navbarOpen = ref(false);
const headerRef = ref();

let ctx: any;
let tl: any;

const updateHeaderBackground = () => {
  if (store.getScrollPosition >= store.getAboutSectionTop) {
    tl.play();
  } else {
    tl.reverse();
  }
};

onMounted(() => {
  ctx = gsap.context(() => {
    tl = gsap.timeline({ paused: true });
    tl.to(headerRef.value, {
      backgroundColor: "rgba(#0ea5e9, 0.7)",
      duration: 0.3,
      ease: "power3.inOut",
    });
  }, headerRef.value);
  window.addEventListener("scroll", () => {
    store.setScrollPosition(window.scrollY);

    updateHeaderBackground();
  });
});

onUnmounted(() => {
  ctx.revert();
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const setNavbarOpen = (value?: boolean) => {
  if (value === undefined) {
    return (navbarOpen.value = !navbarOpen.value);
  }

  navbarOpen.value = value;
};
</script>
