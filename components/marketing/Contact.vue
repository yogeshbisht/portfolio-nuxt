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
      <ClientOnly>
        <UForm
          :schema="ContactSchema"
          :state="formState"
          class="flex flex-col flex-1"
          @submit="submitForm"
        >
          <UFormGroup label="Your Email" name="email" class="mb-6">
            <UInput
              type="text"
              v-model="formState.email"
              input-class="bg-slate-800 border placeholder-slate-600 p-3 focus:border-support focus:outline-none focus:ring-1 focus:ring-support rounded-lg"
              placeholder="Enter your email id here"
            />
          </UFormGroup>
          <UFormGroup label="Subject" name="subject" class="mb-6">
            <UInput
              type="text"
              v-model="formState.subject"
              input-class="bg-slate-800 border placeholder-slate-600 p-3 focus:border-support focus:outline-none focus:ring-1 focus:ring-support rounded-lg"
              placeholder="I have a question about..."
            />
          </UFormGroup>
          <UFormGroup label="Message" name="message" class="mb-10">
            <UTextarea
              v-model="formState.message"
              :rows="5"
              textarea-class="bg-slate-800 border placeholder-slate-600 p-3 focus:border-support focus:outline-none focus:ring-1 focus:ring-support rounded-lg"
              placeholder="Your message here..."
            />
          </UFormGroup>
          <ActionButton text="Send Message" @click="submitForm" />
        </UForm>
      </ClientOnly>
    </div>
  </SectionContainer>
</template>

<script lang="ts" setup>
import { z } from "zod";
import SectionContainer from "../ui/SectionContainer.vue";
import ActionButton from "../ui/ActionButton.vue";
import { ContactSchema } from "~/schemas/contact";
import type { FormSubmitEvent } from "@nuxt/ui/dist/runtime/types";

const formState = reactive({
  email: "",
  subject: "",
  message: "",
});

const submitForm = (event: FormSubmitEvent<z.output<typeof ContactSchema>>) => {
  console.log("Form submitted", event);
};
</script>
