<template>
  <section id="about" class="section-container" ref="aboutRef">
    <SectionTitle title="About Me" section-id="about" />
    <div class="relative md:mt-8 mt-6">
      <div class="flex flex-col lg:flex-row gap-12 2xl:gap-16 items-center">
        <div class="lg:flex-1 order-2 lg:order-1">
          <div
            class="flex flex-col gap-6 2xl:text-lg sm:text-base text-sm leading-normal!"
          >
            <p
              v-for="(intro, index) in aboutIntroduction"
              :key="index"
              class="text-accent"
            >
              {{ intro }}
            </p>

            <p class="text-accent">
              Consider me as your committed business partner, not merely a
              developer or designer. I am dedicated to your business&apos;s
              success and growth, focusing on making a positive impact.
              <NuxtLink to="#contact" class="text-brand">
                Let&apos;s connect
              </NuxtLink>
              and discuss your project requirements, working together to achieve
              excellence.
            </p>
          </div>
        </div>
        <div
          class="relative order-1 lg:order-2 lg:-mt-8 xl:w-[360px] lg:w-[280px] w-[270px] h-auto"
        >
          <div
            class="absolute hidden lg:block h-full w-full -right-3 -bottom-3 border-accent border-2 z-10 rounded-lg"
          />
          <NuxtImg
            src="/images/yogesh_about.png"
            alt="profile image"
            class="xl:w-[360px] lg:w-[280px] w-[270px] z-10 relative rounded-lg h-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import useScrollStore from "~/store/scroll";
import SectionTitle from "~/components/ui/SectionTitle.vue";

const store = useScrollStore();
const aboutRef = ref<HTMLElement | null>(null);

onMounted(() => {
  store.setAboutSectionTop(aboutRef.value?.offsetTop ?? 0);
});

const aboutIntroduction = [
  "I am a dedicated professional specializing in development and design, with an unwavering commitment to excellence. With a profound understanding of technology and aesthetics, I craft innovative solutions that seamlessly merge form and function. As a seasoned software engineer, I bring extensive experience in coding, web development, and software architecture to your projects.",
  "I'm a results-oriented professional, valuing self-improvement and growth. I don't follow the crowd and believe in leading with purpose, precision, and a hunger for constant improvement. I am a highly independent and self-motivated individual. I thrive in environments where I am given the freedom to think creatively and work autonomously.",
  "I enjoy collaborating with others for specific objectives in brainstorming sessions and team meetings. I am confident in my abilities and value, and I prefer to be judged on my results rather than on the amount of time I spend working. I am not the right person for roles that require strict adherence to instructions and procedures without the opportunity for input and creativity.",
  "If you want someone who loves to take ownership of projects and treat them as their own, then I am the right person. I am not afraid to ask questions and offer suggestions to improve existing processes and outcomes. I am also willing to take risks and try new things, and I am not afraid to fail as long as I am learning from my mistakes. I also look forward to take on new challenges and push myself to the limit. I am not afraid to stand out and I am not afraid to be myself.",
];
</script>
