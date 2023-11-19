<template>
  <div class="container mx-auto xl:px-32 xs:px-12 px-8">
    <Hero />
    <About />
    <Skills />
    <ProfessionalProjects />
    <PersonalProjects />
  </div>
</template>

<script lang="ts" setup>
import Hero from "~/components/marketing/Hero.vue";
import About from "~/components/marketing/About.vue";
import Skills from "~/components/marketing/Skills.vue";
import ProfessionalProjects from "~/components/marketing/ProfessionalProjects.vue";
import PersonalProjects from "~/components/marketing/PersonalProjects.vue";
</script>
