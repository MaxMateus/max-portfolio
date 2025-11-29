<script setup lang="ts">
import SectionTitle from '../components/SectionTitle.vue'
import Timeline from '../components/Timeline.vue'

const timeline = [
  {
    year: '2023 — 2025',
    company: 'Movida',
    role: 'Desenvolvedor de Software',
    description:
      'Lidero iniciativas de integração e autenticação entre serviços, conectando times de produto e infraestrutura para manter entregas estáveis.',
  }
]
</script>

<template>
  <div class="space-y-12 fade-in">
    <section class="space-y-4">
      <SectionTitle eyebrow="Introdução" title="Sobre mim" />
      <p class="text-base text-slate-700 dark:text-slate-200">
        Olá, eu sou o Max! Bem-vindo ao meu espaço na web dedicado a projetos, estudos, ideias e tudo aquilo que eu quiser compartilhar. 
        Aqui você vai encontrar minhas anotações, experimentos e alguns dos projetos que venho construindo ao longo da minha jornada como desenvolvedor.
      </p>
      <p class="text-base text-slate-700 dark:text-slate-200">
        É apenas um espaço pessoal para registrar o que aprendo, organizar pensamentos e, quem sabe, ajudar alguém que esteja passando pelos mesmos desafios.
      </p>
      <p class="text-base text-slate-700 dark:text-slate-200">
        Trabalho como desenvolvedor de software com foco em backend e APIs. Gosto de escrever código claro, documentar decisões e tornar o desenvolvimento mais leve para quem trabalha comigo. Fora do código, você provavelmente vai me encontrar estudando, ouvindo música ou tomando um café.
      </p>
    </section>

    <section class="space-y-6">
      <SectionTitle eyebrow="Carreira" title="Linha do tempo" />
      <Timeline :items="timeline" />
    </section>

    <section class="space-y-4">
      <SectionTitle eyebrow="Contato" title="Me encontre online" />
      <div class="flex flex-wrap gap-4 text-sm font-semibold">
        <a
          href="https://www.linkedin.com/in/max-mateus2021"
          class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-white transition-colors hover:bg-amber-700 focus-visible:ring-amber-400 dark:bg-slate-800 dark:text-white dark:hover:bg-amber-500 dark:hover:text-slate-900"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
          <span aria-hidden="true">↗</span>
        </a>
        <a
          href="https://github.com/maxmateus"
          class="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-slate-900 transition-colors hover:border-amber-500 hover:text-amber-700 focus-visible:ring-amber-400 dark:border-slate-700 dark:text-slate-100 dark:hover:border-amber-400 dark:hover:text-amber-300"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  </div>
</template>
