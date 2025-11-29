<script setup lang="ts">
import { computed } from 'vue'
import laravelIcon from '../assets/tech/laravel.svg'
import phpIcon from '../assets/tech/php.svg'
import dockerIcon from '../assets/tech/docker.svg'
import mysqlIcon from '../assets/tech/mysql.svg'

const props = defineProps<{
  title: string
  year: string
  description: string
  link?: string
  progress?: number
  status?: string
  techs?: string[]
}>()

const normalizedProgress = computed(() => {
  if (props.progress === undefined || Number.isNaN(props.progress)) return undefined
  return Math.min(100, Math.max(0, Math.round(props.progress)))
})

const iconMap: Record<string, string> = {
  laravel: laravelIcon,
  php: phpIcon,
  docker: dockerIcon,
  mysql: mysqlIcon,
}

const techIcon = (tech: string) => {
  const key = tech.toLowerCase()
  return iconMap[key]
}
</script>

<template>
  <article
    class="card-surface group flex flex-col gap-3 transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md"
  >
    <div class="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
      <span>{{ year }}</span>
      <a
        v-if="link"
        :href="link"
        target="_blank"
        rel="noreferrer"
        class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-amber-700 underline decoration-amber-300 decoration-2 underline-offset-4 transition-colors group-hover:text-amber-600 dark:text-amber-300 dark:decoration-amber-500"
      >
        Ver projeto →
      </a>
    </div>
    <h3 class="text-xl font-semibold text-slate-900 dark:text-white">
      {{ title }}
    </h3>
    <p class="text-sm text-slate-700 dark:text-slate-200">
      {{ description }}
    </p>

    <div v-if="normalizedProgress !== undefined || status" class="mt-2 space-y-2 rounded-lg bg-slate-100 px-3 py-3 text-sm dark:bg-slate-800/70">
      <div class="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
        <span>{{ status || 'Status' }}</span>
        <span v-if="normalizedProgress !== undefined">{{ normalizedProgress }}%</span>
      </div>
      <div
        v-if="normalizedProgress !== undefined"
        class="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"
        role="progressbar"
        :aria-valuenow="normalizedProgress"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="h-full bg-amber-500 transition-[width] duration-300 ease-out" :style="{ width: `${normalizedProgress}%` }"></div>
      </div>
      <div v-if="techs?.length" class="flex flex-wrap gap-2 pt-1 text-xs font-semibold text-slate-600 dark:text-slate-200">
        <span
          v-for="tech in techs"
          :key="tech"
          class="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700"
        >
          <img
            v-if="techIcon(tech)"
            :src="techIcon(tech)"
            :alt="tech + ' logo'"
            class="h-5 w-auto"
            loading="lazy"
            decoding="async"
          />
          <span v-if="tech.toLowerCase() !== 'mysql'" class="tracking-wide uppercase">{{ tech }}</span>
        </span>
      </div>
    </div>
  </article>
</template>
