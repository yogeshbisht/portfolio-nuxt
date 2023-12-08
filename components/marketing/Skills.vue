<template>
  <SectionContainer section-id="skills" section-title="My Skills">
    <NuxtImg
      src="/images/skills.png"
      width="1280"
      height="720"
      alt="skills"
      class="mb-8 p-2 border-y-2 border-accent rounded-xl"
      layout="responsive"
    />
    <div class="flex flex-col gap-8">
      <p class="md:text-lg text-accent">
        In the intricate landscape of technology and design, a rich tapestry of
        skills forms the cornerstone of my expertise. With a focus on precision,
        innovation, and strategic vision, I bring a unique blend of
        proficiencies to the table. As a software engineer, I possess a deep
        command of diverse programming languages, frameworks, and databases,
        equipping me to craft solutions that stand at the pinnacle of efficiency
        and functionality. In the realm of design, I wield the power of
        aesthetics and user experience to transform ideas into captivating
        visuals. Below, you&apos;ll find a detailed breakdown of my skill set,
        showcasing the tools that power my journey in these domains.
      </p>
      <div class="pt-4">
        <div class="flex flex-row justify-center sm:gap-8 gap-6 mb-8">
          <button
            v-for="tab in tabData"
            :key="tab.id"
            @click="handleTabChange(tab.id)"
          >
            <p
              :class="[
                'hover:text-accent hover:border-accent md:text-lg sm:text-base text-sm transition duration-300 border-b-2 py-2 px-4 rounded-xl',
                selectedTab === tab.id
                  ? 'text-accent border-accent'
                  : 'text-slate-600 border-slate-600',
              ]"
            >
              {{ tab.title }}
            </p>
          </button>
        </div>
        <div
          class="flex xs:flex-row flex-col xs:items-center xs:justify-end items-end text-[12px] gap-3"
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
