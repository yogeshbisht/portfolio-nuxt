<template>
  <NuxtLink v-if="link" :to="link" class="action-button max-w-[240px]">
    {{ text }}
  </NuxtLink>
  <button
    v-else
    type="submit"
    class="action-button"
    :class="{ 'disable-element': disabled }"
  >
    <font-awesome-icon
      v-if="disabled"
      icon="arrows-rotate"
      class="mr-2 animate-spin"
    />
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  link?: string;
  text: string;
  disabled?: boolean;
}>();
</script>
