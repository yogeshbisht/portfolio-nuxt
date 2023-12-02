<template>
  <SectionContainer section-id="contact" section-title="Contact Me">
    <div class="relative flex flex-col lg:flex-row lg:gap-20 gap-12">
      <div
        class="text-accent leading-relaxed text-lg flex-1 lg:pt-6 text-justify"
      >
        Are you ready to transform your digital vision into a stunning reality?
        I&apos;m here to help. Whether you&apos;re a forward-thinking business
        in need of cutting-edge development or an executive seeking world-class
        design, I&apos;m dedicated to bringing your ideas to life. Contact me
        today to explore how my expertise can elevate your digital presence,
        captivate your audience, and drive exceptional results for your
        projects. I&apos;m eager to collaborate and deliver excellence with a
        commitment to perfection.
      </div>
      <form class="flex flex-col flex-1">
        <div class="mb-6">
          <label htmlFor="email" class="block mb-2 font-medium">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            required
            class="contact-input"
            placeholder="Enter your email id here..."
          />
        </div>
        <div class="mb-6">
          <label htmlFor="subject" class="block mb-2 font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            required
            class="contact-input"
            placeholder="I have a question about..."
          />
        </div>
        <div class="mb-10">
          <label htmlFor="message" class="block mb-2 font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            class="contact-input"
            placeholder="Your message here..."
            required
          />
        </div>
        <ActionButton text="Send Message" @click="submitForm" />
      </form>
    </div>
  </SectionContainer>
</template>

<script lang="ts" setup>
import SectionContainer from "../ui/SectionContainer.vue";
import ActionButton from "../ui/ActionButton.vue";

const submitForm = () => {
  console.log("Form submitted");
};
</script>
