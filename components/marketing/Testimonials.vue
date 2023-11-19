<template>
  <SectionContainer
    section-id="testimonials"
    section-title="What My Clients Say"
  >
    <ClientOnly>
      <Swiper
        :modules="[SwiperNavigation]"
        :slides-per-view="1"
        class="relative"
        :navigation="{
          nextEl: '#button-next',
          prevEl: '#button-prev',
        }"
      >
        <SwiperSlide v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="flex items-center justify-center h-full">
            <div
              class="flex flex-col justify-center max-w-[960px] xs:px-16 p-12"
            >
              <p
                class="xl:text-xl lg:text-lg lg:leading-relaxed xl:leading-relaxed"
              >
                {{ testimonial.text }}
              </p>
              <p class="text-right mt-4 text-secondary sm:text-base text-sm">
                - {{ testimonial.person }}, {{ testimonial.org }}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <div id="button-prev" className="swiper-navigation left-2 sm:left-4">
          <font-awesome-icon icon="chevron-left" />
        </div>
        <div id="button-next" className="swiper-navigation right-2 sm:right-4">
          <font-awesome-icon icon="chevron-right" />
        </div>
      </Swiper>
    </ClientOnly>
  </SectionContainer>
</template>

<script lang="ts" setup>
import SectionContainer from "../ui/SectionContainer.vue";

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
