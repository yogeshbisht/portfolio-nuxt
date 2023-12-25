<template>
  <header
    id="header"
    class="fixed md:h-24 h-20 w-screen backdrop-blur-lg bg-transparent z-50"
    ref="headerRef"
  >
    <div
      class="flex justify-between items-center h-full gap-x-4 section-container"
    >
      <Logo :home="home" />

      <ClientOnly v-if="home">
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
              :to="`#${link.id}`"
              class="relative flex items-center group hover:text-support transition-colors duration-300"
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
      v-if="home"
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
import Logo from "./Logo.vue";

const store = useScrollStore();

const navbarOpen = ref(false);
const headerRef = ref();

let ctx: any;
let tl: any;

const props = defineProps<{
  home?: boolean;
}>();

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

const setNavbarOpen = (value?: boolean) => {
  if (value === undefined) {
    return (navbarOpen.value = !navbarOpen.value);
  }

  navbarOpen.value = value;
};
</script>
