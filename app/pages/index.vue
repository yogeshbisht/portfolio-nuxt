<template>
  <div>
    <Header home />
    <SocialBar />
    <Hero />
    <div class="mx-auto" ref="main">
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
import { headerData } from "~/app/constants";

const main = ref();
let ctx;

const siteSections = headerData.map((link) => ({ id: link.id }));

onMounted(() => {
  ctx = gsap.context(() => {
    siteSections.forEach((section) => {
      gsap.fromTo(
        `#${section.id}`,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power3.inOut",
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
