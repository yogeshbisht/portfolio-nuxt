<template>
  <button @click="selectTab()">
    <p
      :class="[
        'hover:text-slate-200 hover:border-slate-200 md:text-lg sm:text-base text-sm transition duration-300 border-b-2 py-2 px-4 rounded-full',
        buttonClasses,
      ]"
    >
      <slot></slot>
    </p>
  </button>
</template>

<script lang="ts" setup>
type TabButtonProps = {
  active: boolean;
  selectTab: Function;
};

const { active, selectTab } = defineProps<TabButtonProps>();

const buttonClasses = active
  ? "text-slate-200 border-slate-200"
  : "text-slate-600 border-slate-600";
</script>
