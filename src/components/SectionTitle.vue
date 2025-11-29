<script setup lang="ts">
defineProps<{
  title: string
  eyebrow?: string
}>()
</script>

<template>
  <div class="mb-6 space-y-2">
    <p v-if="eyebrow" class="text-xs uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
      {{ eyebrow }}
    </p>
    <h2 class="text-2xl font-semibold leading-tight text-slate-900 dark:text-white md:text-3xl">
      {{ title }}
    </h2>
  </div>
</template>
