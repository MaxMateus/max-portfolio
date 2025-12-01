<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const props = defineProps<{
  isDark: boolean
}>()

const emit = defineEmits<{
  (e: 'toggle-theme'): void
}>()

const route = useRoute()

const links = [
  { name: 'Início', to: '/' },
  { name: 'Projetos', to: '/projects' },
  { name: 'Sobre', to: '/about' },
]

const themeLabel = computed(() =>
  props.isDark ? 'Mudar para o modo claro' : 'Mudar para o modo escuro',
)
</script>

<template>
  <nav
    class="card-surface flex flex-col gap-6 border border-slate-300 bg-white px-5 py-5 shadow-md backdrop-blur dark:border-slate-700 dark:bg-slate-900/80"
  >
    <div class="flex items-center justify-between">
      <RouterLink to="/" class="text-lg font-semibold text-slate-900 no-underline hover:text-amber-600 dark:text-white">
        Max Mateus
      </RouterLink>
      <button
        type="button"
        class="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors duration-150 hover:border-amber-400 hover:text-amber-600 focus-visible:ring-amber-400 dark:border-slate-700 dark:text-slate-200 dark:hover:border-amber-400 dark:hover:text-amber-300"
        :aria-pressed="props.isDark"
        :aria-label="themeLabel"
        @click="emit('toggle-theme')"
      >
        <span class="inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-300 bg-white text-[0.65rem] dark:border-slate-600 dark:bg-slate-800">
          {{ props.isDark ? '🌙' : '☀️' }}
        </span>
        <span class="hidden sm:inline">{{ props.isDark ? 'Escuro' : 'Claro' }}</span>
      </button>
    </div>

    <hr class="border-slate-200/80 dark:border-slate-800/70" />

    <p class="text-sm text-slate-600 dark:text-slate-300">
      Sou Max, desenvolvedor backend e apaixonado por construir soluções eficientes. Este é o meu espaço digital. ☕
    </p>

    <div class="space-y-2 text-sm font-medium text-slate-700 dark:text-slate-200">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 no-underline transition-all duration-150 hover:border-blue-400 hover:bg-blue-200/80 hover:shadow-sm hover:text-blue-900 dark:border-transparent dark:hover:border-slate-700 dark:hover:bg-slate-800"
        :class="{
          'border-blue-400 bg-blue-300 text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white': route.path === link.to,
        }"
      >
        <span class="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" aria-hidden="true"></span>
        {{ link.name }}
      </RouterLink>
    </div>

    <div class="flex flex-wrap gap-2 pt-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
      <a
        href="https://www.linkedin.com/in/max-mateus2021"
        target="_blank"
        rel="noreferrer"
        class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1.5 text-white transition-colors hover:bg-amber-700 focus-visible:ring-amber-400 dark:bg-slate-800 dark:text-white dark:hover:bg-amber-500 dark:hover:text-slate-900"
      >
        LinkedIn
        <span aria-hidden="true">↗</span>
      </a>
      <a
        href="https://github.com/maxmateus"
        target="_blank"
        rel="noreferrer"
        class="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-1.5 text-slate-900 transition-colors hover:border-amber-500 hover:text-amber-700 focus-visible:ring-amber-400 dark:border-slate-700 dark:text-slate-100 dark:hover:border-amber-400 dark:hover:text-amber-300"
      >
        GitHub
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  </nav>
</template>
