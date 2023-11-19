<template>
  <button @click="selectTab()">
    <p
      :class="[
        'hover:text-slate-200 md:text-lg sm:text-base text-sm transition duration-300',
        buttonClasses,
      ]"
    >
      <slot></slot>
    </p>
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

type TabButtonProps = {
  active: boolean;
  selectTab: Function;
};

const { active, selectTab } = defineProps<TabButtonProps>();

const buttonClasses = active ? "text-slate-200" : "text-slate-600";
</script>
