<template>
  <div>
    <Header />
    <SocialBar />
    <Hero />
    <div class="container mx-auto xl:px-32 md:px-12 px-8" ref="main">
      <About />
      <Skills />
      <Projects type="professional" />
      <Projects type="personal" />
      <Testimonials />
      <Contact />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import Header from "~/components/ui/Header.vue";
import SocialBar from "~/components/ui/SocialBar.vue";
import Hero from "~/components/marketing/Hero.vue";
import About from "~/components/marketing/About.vue";
import Skills from "~/components/marketing/Skills.vue";
import Projects from "~/components/marketing/Projects.vue";
import Testimonials from "~/components/marketing/Testimonials.vue";
import Contact from "~/components/marketing/Contact.vue";

const main = ref();
let ctx;

const siteSections = [
  { id: "about" },
  { id: "skills" },
  { id: "projects" },
  { id: "personal" },
  { id: "testimonials" },
  { id: "contact" },
];

onMounted(() => {
  ctx = gsap.context(() => {
    siteSections.forEach((section) => {
      gsap.fromTo(
        `#${section.id}`,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: `#${section.id}`,
          },
        }
      );
    });
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>
