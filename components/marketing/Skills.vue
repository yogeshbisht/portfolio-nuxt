<template>
  <SectionContainer section-id="skills" section-title="My Skills">
    <NuxtImg
      src="https://picsum.photos/1280/640.jpg"
      width="1280"
      height="640"
      alt="skills"
      class="mb-8 p-2 border-y-2 border-accent rounded-xl"
    />
    <div class="flex flex-col gap-8">
      <p class="md:text-lg text-slate-300">
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
      <div class="pt-4 pb-12">
        <div class="flex flex-row sm:gap-8 gap-6 mb-4">
          <TabButton
            v-for="tab in tabData"
            :key="tab.id"
            :select-tab="() => handleTabChange(tab.id)"
            :active="selectedTab === tab.id"
          >
            {{ tab.title }}
          </TabButton>
        </div>
        <div>
          <p v-if="isPending">Loading...</p>
          <ul v-else-if="tabSkills" class="flex flex-col gap-6">
            <li
              v-for="(item, index) in tabSkills"
              :key="index"
              class="flex flex-col"
            >
              <h4 class="text-slate-300 md:font-medium sm:text-base text-sm">
                {{ item.title }}
              </h4>
              <div class="border-l-2 border-accent pl-2 sm:py-2 py-1 ml-1">
                <p
                  v-if="item.description"
                  class="sm:text-sm text-xs leading-relaxed mb-2 text-slate-300"
                >
                  {{ item.description }}
                </p>
                <div v-if="item.items" class="flex gap-2 flex-wrap">
                  <p
                    v-for="(skill, index) in item.items"
                    :key="index"
                    :class="[
                      getAccentColor(skill.level),
                      'sm:text-sm text-xs border px-3 py-1 rounded-full',
                    ]"
                  >
                    {{ skill.name }}&nbsp;
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="flex xs:flex-row flex-col xs:items-center xs:justify-end items-end text-[12px] gap-3"
    >
      <h4>Skill Level:</h4>
      <div
        v-for="(experience, index) in experienceLevels"
        :key="index"
        :class="[
          getAccentColor(experience.name),
          'border-y-2 px-2 sm:text-sm text-xs rounded-full',
        ]"
      >
        {{ experience.name }}
      </div>
    </div>
  </SectionContainer>
</template>

<script lang="ts" setup>
import SectionContainer from "../ui/SectionContainer.vue";
import TabButton from "../ui/TabButton.vue";

enum SkillLevel {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advance = "Advance",
}

type SkillItem = {
  name: string;
  level: SkillLevel;
};

type Skill = {
  title: string;
  items?: SkillItem[];
  description?: string;
};

type TabData = {
  title: string;
  id: string;
  skills: Skill[];
};

type ExperienceLevel = {
  name: SkillLevel;
  color: string;
};

const experienceLevels: ExperienceLevel[] = [
  { name: SkillLevel.Advance, color: "bg-primary" },
  { name: SkillLevel.Intermediate, color: "bg-secondary" },
  { name: SkillLevel.Beginner, color: "bg-accent" },
];

const tabData: TabData[] = [
  {
    title: "Software Engineering",
    id: "software-engineering",
    skills: [
      {
        title: "Programming Languages",
        description:
          "I have experience in the following programming languages.",
        items: [
          { name: "JavaScript/TypeScript", level: SkillLevel.Advance },
          { name: "Java", level: SkillLevel.Intermediate },
          { name: "Kotlin", level: SkillLevel.Beginner },
          { name: "Python", level: SkillLevel.Beginner },
        ],
      },
      {
        title: "Frameworks (Frontend/Backend)",
        description:
          "I have experience in following frameworks where I combine the power of overall user experience with server-side architecture to handle data management, authorization, security, business logic and more.",
        items: [
          { name: "Node/Express/Nest.js", level: SkillLevel.Advance },
          { name: "Vue/Nuxt.js", level: SkillLevel.Advance },
          { name: "React/Next.js", level: SkillLevel.Intermediate },
          { name: "React Native", level: SkillLevel.Intermediate },
          { name: "Django/Flask", level: SkillLevel.Beginner },
        ],
      },
      {
        title: "Databases",
        description:
          "I have experience in the following relational and non-relational databases.",
        items: [
          { name: "MongoDB", level: SkillLevel.Advance },
          { name: "MySQL", level: SkillLevel.Intermediate },
          { name: "PostgreSQL", level: SkillLevel.Intermediate },
          { name: "Redis", level: SkillLevel.Beginner },
        ],
      },
      {
        title: "Cloud Applications and Hosting Platforms",
        items: [
          { name: "Netlify", level: SkillLevel.Advance },
          { name: "Heroku", level: SkillLevel.Advance },
          { name: "Vercel", level: SkillLevel.Intermediate },
          { name: "Google Cloud", level: SkillLevel.Intermediate },
        ],
      },
      {
        title: "Amazon Web Services",
        description:
          "A comprehensive and widely adopted cloud computing platform provided by Amazon. It offers a vast array of on-demand services, including computing power, storage, databases, machine learning, analytics, content delivery, and more, allowing businesses to scale and deploy applications and resources with ease. Below are the AWS services that I have experience in.",
        items: [
          { name: "EC2", level: SkillLevel.Advance },
          { name: "S3", level: SkillLevel.Advance },
          { name: "Route 53", level: SkillLevel.Advance },
          { name: "DynamoDB", level: SkillLevel.Intermediate },
          { name: "CloudWatch", level: SkillLevel.Beginner },
        ],
      },
      {
        title: "Other",
        items: [
          { name: "Git/GitHub", level: SkillLevel.Advance },
          { name: "REST", level: SkillLevel.Advance },
          { name: "GraphQL", level: SkillLevel.Intermediate },
          { name: "Cloudinary", level: SkillLevel.Intermediate },
          { name: "Docker", level: SkillLevel.Intermediate },
          { name: "Kubernetes", level: SkillLevel.Beginner },
        ],
      },
    ],
  },
  {
    title: "Graphic Design",
    id: "graphic-design",
    skills: [
      {
        title: "Adobe Creative Cloud",
        description:
          "I primarily use the Adobe Creative Cloud suite to create and edit visual content for my projects. From designing logos and illustrations to editing photos and videos, I leverage the power of these tools to bring my ideas to life. Below are the proficiencies in the various Adobe applications.",
        items: [
          { name: "Adobe XD", level: SkillLevel.Advance },
          { name: "Adobe Photoshop", level: SkillLevel.Advance },
          { name: "Adobe Illustrator", level: SkillLevel.Intermediate },
          { name: "Adobe Premiere Pro", level: SkillLevel.Intermediate },
          { name: "Adobe After Effects", level: SkillLevel.Intermediate },
        ],
      },
      {
        title: "Designing Tools",
        description:
          "I also use other designing tools to create visual content for my projects. Below are the proficiencies in the various designing tools.",
        items: [
          { name: "Figma", level: SkillLevel.Advance },
          { name: "Framer", level: SkillLevel.Intermediate },
          { name: "Sketch", level: SkillLevel.Intermediate },
          { name: "InVision", level: SkillLevel.Beginner },
        ],
      },
      {
        title: "Other",
        description:
          "Here are some other similar tools that I use for my projects.",
        items: [
          { name: "Canva", level: SkillLevel.Advance },
          { name: "Crello", level: SkillLevel.Intermediate },
          { name: "Piktochart", level: SkillLevel.Intermediate },
          { name: "Adobe Spark", level: SkillLevel.Beginner },
        ],
      },
    ],
  },
];

const selectedTab = ref("software-engineering");
const isPending = ref(false);

const startTransition = () => {
  // Perform some asynchronous operation
  isPending.value = true;

  // Simulate asynchronous operation completion after a delay
  setTimeout(() => {
    isPending.value = false;
  }, 500);
};

const handleTabChange = (tabId: string) => {
  console.log(tabId);
  if (tabId !== selectedTab.value) {
    startTransition();
    selectedTab.value = tabId;
  }
};

const getAccentColor = (skill: SkillLevel) => {
  switch (skill) {
    case SkillLevel.Beginner:
      return "border-accent/70 text-accent/70";
    case SkillLevel.Intermediate:
      return "border-secondary text-secondary";
    case SkillLevel.Advance:
      return "border-primary text-primary";
  }
};

const tabSkills = computed(() => {
  return tabData.find((tab) => tab.id === selectedTab.value)?.skills;
});
</script>
