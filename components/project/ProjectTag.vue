<template>
  <button
    :class="[
      buttonStyles,
      'border-2 sm:px-6 px-4 sm:py-1 py-0.5 sm:text-base text-sm cursor-pointer transition duration-300',
    ]"
    @click="onClick(name)"
  >
    {{ name }}
  </button>
</template>

<script lang="ts" setup>
type ProjectTagProps = {
  name: string;
  isSelected: boolean;
  onClick: (name: string) => void;
};

const { name, isSelected, onClick } = defineProps<ProjectTagProps>();

const buttonStyles = computed(() => {
  if (isSelected) {
    return "text-slate-300 border-slate-300";
  }

  return "text-accent border-accent hover:border-slate-300 hover:text-slate-300";
});
</script>
