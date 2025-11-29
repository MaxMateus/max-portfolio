<script setup lang="ts">
defineProps<{
  title: string
  date: string
  link?: string
}>()
</script>

<template>
  <div class="grid grid-cols-[110px_1fr] items-baseline gap-4 rounded-lg px-2 py-2 hover:bg-slate-100/60 dark:hover:bg-slate-800/60">
    <p class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
      {{ date }}
    </p>
    <div class="text-sm font-medium text-slate-800 dark:text-slate-100">
      <a
        v-if="link"
        :href="link"
        class="underline decoration-slate-300 decoration-2 underline-offset-4 transition-colors hover:text-amber-700 hover:decoration-amber-400 dark:decoration-slate-600"
      >
        {{ title }}
      </a>
      <span v-else>{{ title }}</span>
    </div>
  </div>
</template>
