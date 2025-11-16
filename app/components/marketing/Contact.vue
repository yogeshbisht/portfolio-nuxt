<template>
  <SectionContainer section-id="contact" section-title="Contact Me">
    <div class="relative flex flex-col lg:flex-row lg:gap-20 gap-12">
      <div class="text-accent leading-relaxed md:text-lg flex-1">
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
        <div
          v-if="formSubmitted"
          class="flex flex-col items-center justify-center bg-secondary rounded-lg border-y-2 border-accent p-8 gap-4"
        >
          <div class="text-accent text-2xl font-bold">
            Thank you for your message!
          </div>
          <div class="text-accent text-lg">
            I will get back to you as soon as possible.
          </div>
        </div>
        <UForm
          v-else
          :schema="ContactSchema"
          :state="formState"
          class="flex flex-col flex-1 gap-6"
          @submit="submitForm"
        >
          <UFormField label="Your Name" name="name">
            <UInput
              type="text"
              v-model="formState.name"
              class="w-full"
              placeholder="Enter your name"
              size="xl"
            />
          </UFormField>
          <UFormField label="Your Email" name="email">
            <UInput
              type="text"
              v-model="formState.email"
              class="w-full"
              placeholder="Enter your email id here"
              size="xl"
            />
          </UFormField>
          <UFormField label="Subject" name="subject">
            <UInput
              type="text"
              v-model="formState.subject"
              class="w-full"
              placeholder="I have a question about..."
              size="xl"
            />
          </UFormField>
          <UFormField label="Message" name="message" class="mb-4">
            <UTextarea
              v-model="formState.message"
              :rows="6"
              class="w-full"
              placeholder="Your message here..."
              size="xl"
            />
          </UFormField>
          <ActionButton text="Send Message" :disabled="isSubmitting" />
        </UForm>
      </ClientOnly>
    </div>
  </SectionContainer>
</template>

<script lang="ts" setup>
import type { FormSubmitEvent } from "@nuxt/ui";
import { ContactSchema, type ContactSchemaType } from "~/schemas/contact";
import SectionContainer from "~/components/ui/SectionContainer.vue";
import ActionButton from "~/components/ui/ActionButton.vue";
import { ref, reactive } from "vue";

const formSubmitted = ref(false);
const isSubmitting = ref(false);

const formState = reactive<Partial<ContactSchemaType>>({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitForm = async (event: FormSubmitEvent<ContactSchemaType>) => {
  const { name, email, subject, message } = event.data;

  isSubmitting.value = true;

  const response = await $fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      subject,
      message,
    }),
  });

  if ((response as { statusCode: number }).statusCode === 200) {
    formSubmitted.value = true;
  }
  isSubmitting.value = false;
};
</script>
