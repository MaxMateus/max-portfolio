<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import BaseContainer from './components/layout/BaseContainer.vue'

const isDark = ref(false)

const applyTheme = (value: boolean) => {
  isDark.value = value
  const root = document.documentElement
  root.classList.toggle('dark', value)
  localStorage.setItem('theme', value ? 'dark' : 'light')
}

const toggleTheme = () => {
  applyTheme(!isDark.value)
}

onMounted(() => {
  const stored = localStorage.getItem('theme')
  if (stored) {
    applyTheme(stored === 'dark')
    return
  }
  applyTheme(true)
})
</script>

<template>
  <BaseContainer :is-dark="isDark" @toggle-theme="toggleTheme">
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in" appear>
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </RouterView>
  </BaseContainer>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
</style>
