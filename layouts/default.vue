<template>
  <main class="flex min-h-screen flex-col bg-slate-900 text-slate-200">
    <SocialBar />
    <NuxtPage />
    <Footer />
  </main>
</template>

<script lang="ts" setup>
import SocialBar from "~/components/ui/SocialBar.vue";
import Footer from "~/components/ui/Footer.vue";
</script>
