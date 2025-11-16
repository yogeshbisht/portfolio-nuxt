<template>
  <SectionContainer section-id="testimonials" section-title="Testimonials">
    <ClientOnly>
      <swiper-container
        ref="containerRef"
        :slides-per-view="1"
        class="relative"
      >
        <swiper-slide v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="flex items-center justify-center h-full">
            <div
              class="flex flex-col justify-center max-w-[960px] xs:px-16 p-12"
            >
              <p
                class="xl:text-xl lg:text-lg lg:leading-relaxed xl:leading-relaxed"
              >
                {{ testimonial.text }}
              </p>
              <p class="text-right mt-4 text-support sm:text-base text-sm">
                - {{ testimonial.person }}, {{ testimonial.org }}
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
    <div
      @click="swiper.prev()"
      class="absolute cursor-pointer left-2 top-1/2 transform -translate-y-1/2 sm:left-4 z-20"
    >
      <font-awesome-icon icon="chevron-left" class="text-support text-2xl" />
    </div>
    <div
      @click="swiper.next()"
      class="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 sm:right-4 z-20"
    >
      <font-awesome-icon icon="chevron-right" class="text-support text-2xl" />
    </div>
  </SectionContainer>
</template>

<script lang="ts" setup>
import SectionContainer from "~/components/ui/SectionContainer.vue";

const containerRef = ref(null);
const swiper = useSwiper(containerRef, {
  loop: true,
});

type Testimonial = {
  id: string;
  text: string;
  person: string;
  org: string;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    text: "A highly intelligent man that goes well beyond. Yogesh is proven to be a valuable partner for any projects due to his passion to engage with the project, understand it and assist you to achieve a high quality and well functioning outcome.",
    person: "Kenneth Andersen",
    org: "Zentapon Pty Ltd",
  },
  {
    id: "2",
    text: "Thanks Yogesh! Appreciate your hard work and your help on our software projects.",
    person: "David",
    org: "Outlier.org",
  },
  {
    id: "3",
    text: "Yogesh is the real deal. His front end skills are near pixel-perfect, he is great at communicating and is an honest hardworking person.",
    person: "Cole Vineyard",
    org: "TeachSimple LLC",
  },
  {
    id: "4",
    text: "I wanted to personally thank you for all of your work and initiative. I've been alerted to all of your efforts and production. We really couldn’t be here without you.",
    person: "Thomas Gabriele",
    org: "Homewayz Inc.",
  },
];
</script>

<style>
.swiper-slide {
  border-radius: 1rem;
  height: auto !important;
  background-color: #1e293b;
}

.swiper-content {
  height: 100% !important;
}

.swiper-button-disabled {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
