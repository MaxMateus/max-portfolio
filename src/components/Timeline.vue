<script setup lang="ts">
type TimelineItem = {
  year: string
  company: string
  role: string
  description: string
}

defineProps<{
  items: TimelineItem[]
}>()
</script>

<template>
  <div class="relative">
    <div class="absolute left-3 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-700" aria-hidden="true"></div>
    <ol class="space-y-8">
      <li v-for="item in items" :key="item.company + item.year" class="relative pl-10">
        <span
          class="absolute left-1 top-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full border border-amber-200 bg-white text-[0.6rem] font-bold text-amber-700 dark:border-amber-500 dark:bg-slate-900 dark:text-amber-300"
          aria-hidden="true"
        >
          ●
        </span>
        <p class="text-xs uppercase tracking-wide text-amber-700 dark:text-amber-400">
          {{ item.year }}
        </p>
        <div class="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
          {{ item.company }} — {{ item.role }}
        </div>
        <p class="mt-2 text-sm text-slate-700 dark:text-slate-200">
          {{ item.description }}
        </p>
      </li>
    </ol>
  </div>
</template>
