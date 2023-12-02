<template>
  <nav
    id="nav"
    class="page-padding fixed h-[80px] w-screen z-50 nav-background shadow-lg"
  >
    <div
      class="flex justify-between items-center h-full gap-x-4 container mx-auto"
    >
      <div class="md:text-2xl text-xl font-medium capitalize tracking-wide">
        Yogesh Bisht
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
          <div v-for="link in navData" :key="link.name">
            <NuxtLink
              :to="link.path"
              class="relative flex items-center group hover:text-secondary transition-colors duration-300"
              :class="{ 'text-secondary': link.path === 'home' }"
            >
              <div
                class="absolute top-10 -right-2 hidden w-max xl:group-hover:flex"
              >
                <div
                  class="bg-accent relative flex items-center px-3 py-[6px] rounded-md"
                >
                  <div class="text-sm text-white font-medium capitalize">
                    {{ link.name }}
                  </div>
                  <div
                    class="border-solid border-b-accent border-b-8 border-x-transparent border-x-8 border-t-0 absolute -top-2 right-3"
                  />
                </div>
              </div>
              <font-awesome-icon :icon="link.icon"></font-awesome-icon>
            </NuxtLink>
          </div>
        </div>
      </ClientOnly>
    </div>
    <MenuOverlay
      v-show="navbarOpen"
      :links="navData"
      :on-click="() => setNavbarOpen(false)"
    />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { navData } from "~/constants";
import MenuOverlay from "./MenuOverlay.vue";

export default defineComponent({
  components: { MenuOverlay },

  data() {
    return {
      navbarOpen: false,
      navData,
    };
  },

  methods: {
    setNavbarOpen(value?: boolean) {
      if (value === undefined) {
        return (this.navbarOpen = !this.navbarOpen);
      }

      this.navbarOpen = value;
    },
  },
});
</script>
