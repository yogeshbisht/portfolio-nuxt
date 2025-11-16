<template>
  <SectionContainer section-id="skills" section-title="Skills">
    <NuxtImg
      src="/images/skills-bg.png"
      width="1280"
      height="720"
      alt="skills"
      class="mb-8 p-2 border-y-2 border-accent rounded-xl"
      layout="responsive"
    />
    <div class="flex flex-col gap-8">
      <p class="md:text-lg sm:text-base text-sm text-accent">
        I&apos;m a software engineer who's all about accuracy, fresh ideas, and
        seeing the bigger picture. I have a understanding of various programming
        languages with main focus on NuxtJS/NextJS and NodeJS/NestJS frameworks.
        I can build systems that work smoothly and do what they're supposed to.
        Beyond the code, I understand how to make things look good and be easy
        to use. Basically, I turn ideas into eye-catching, user-friendly
        creations. Below, you'll find a detailed breakdown of my skill set,
        including my experience level with each.
      </p>
      <div class="pt-4">
        <div class="flex flex-row sm:gap-8 gap-6 mb-8">
          <button
            v-for="tab in tabData"
            :key="tab.id"
            @click="handleTabChange(tab.id)"
          >
            <p
              :class="[
                'text-[12px] hover:text-blue-400 hover:border-blue-400 md:text-lg xs:text-base transition duration-300 py-2 px-4 rounded-xl',
                selectedTab === tab.id
                  ? 'text-blue-400 border-blue-400 font-normal border-b-2'
                  : 'text-accent/80 border-accent/80 font-light border-b',
              ]"
            >
              {{ tab.title }}
            </p>
          </button>
        </div>
        <div
          class="flex items-center justify-end xs:text-[12px] text-[11px] gap-3 xs:mb-2 mb-4"
        >
          <h4>Skill Level:</h4>
          <div
            v-for="(experience, index) in experienceLevels"
            :key="index"
            :class="[getAccentColor(experience.name), 'skill-capsule']"
          >
            {{ experience.name }}
          </div>
        </div>
        <div class="flex flex-col gap-8">
          <div v-for="(item, index) in tabSkills" :key="index">
            <h4
              class="relative ml-2 text-slate-300 sm:text-base text-sm z-10 bg-slate-900 w-max px-2 py-0.5 md:px-4 md:py-1 border rounded-lg"
            >
              {{ item.title }}
            </h4>
            <div
              class="-mt-4 border border-b-0 border-accent p-4 pt-8 rounded-lg"
            >
              <p
                v-if="item.description"
                class="sm:text-sm text-xs leading-relaxed mb-2 text-slate-300"
              >
                {{ item.description }}
              </p>
              <div v-if="item.items" class="flex gap-3 flex-wrap">
                <p
                  v-for="(skill, index) in item.items"
                  :key="index"
                  :class="[
                    getAccentColor(skill.level),
                    'skill-capsule sm:text-sm text-xs',
                  ]"
                >
                  {{ skill.name }}&nbsp;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script lang="ts" setup>
import SectionContainer from "../ui/SectionContainer.vue";
import type { ExperienceLevel } from "~/types";
import { SkillLevel, tabData } from "~/constants";

const experienceLevels: ExperienceLevel[] = [
  { name: SkillLevel.Advance, color: "bg-brand" },
  { name: SkillLevel.Intermediate, color: "bg-support" },
  { name: SkillLevel.Beginner, color: "bg-accent" },
];

const selectedTab = ref("software-engineering");

const handleTabChange = (tabId: string) => {
  if (tabId !== selectedTab.value) {
    selectedTab.value = tabId;
  }
};

const getAccentColor = (skill: SkillLevel) => {
  switch (skill) {
    case SkillLevel.Beginner:
      return "border-accent/70 text-accent/70";
    case SkillLevel.Intermediate:
      return "border-support text-support";
    case SkillLevel.Advance:
      return "border-brand text-brand";
  }
};

const tabSkills = computed(() => {
  return tabData.find((tab) => tab.id === selectedTab.value)?.skills;
});
</script>
