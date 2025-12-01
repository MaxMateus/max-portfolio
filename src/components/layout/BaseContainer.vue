<script setup lang="ts">
import NavBar from '../NavBar.vue'

const props = defineProps<{
  isDark: boolean
}>()

const emit = defineEmits<{
  (e: 'toggle-theme'): void
}>()

const year = new Date().getFullYear()
</script>

<template>
  <div
    class="flex min-h-screen flex-col bg-sky-100 text-slate-900 transition-colors duration-200 dark:bg-slate-900 dark:text-slate-100"
  >
    <div class="flex-1 px-4 py-10 md:px-8 md:py-14">
      <div class="lg:flex lg:items-start">
        <aside class="md:sticky md:top-10 md:self-start lg:static lg:top-auto lg:w-[260px] lg:shrink-0 lg:fixed lg:left-8 lg:top-10">
          <NavBar :is-dark="props.isDark" @toggle-theme="emit('toggle-theme')" />
        </aside>
        <div class="w-full lg:pl-[300px] xl:pl-[0px]">
          <main class="mx-auto w-full max-w-3xl space-y-12 md:space-y-14">
            <slot />
          </main>
        </div>
      </div>
    </div>

    <footer class="border-t border-slate-200/80 bg-sky-100/80 px-6 py-10 text-sm text-slate-500 backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/70 dark:text-slate-400">
      <div class="mx-auto flex max-w-5xl items-center justify-between">
        <span>Feito por Max Mateus</span>
        <span>{{ year }}</span>
      </div>
    </footer>
  </div>
</template>
