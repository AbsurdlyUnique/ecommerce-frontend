<template>
  <button
    :class="[
      'rounded-md border border-transparent px-md py-sm text-base font-semibold transition-colors duration-fast',
      'm-1.25', // This adds 5px margin around the button
      variant === 'secondary' ? 'bg-primary text-background-light' : 'bg-dark text-light',
      variant === 'secondary' && 'hover:bg-primary-hover',
      'focus:outline-none focus:ring-4 focus:ring-offset-2'
    ]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary'
}>();
</script>
