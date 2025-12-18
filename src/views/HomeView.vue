<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProjectCard from '../components/ProjectCard.vue'
import SectionTitle from '../components/SectionTitle.vue'

const projects = [
  {
    title: 'ms-auth',
    year: '2025',
    description:
      'Serviço de autenticação em Laravel com suporte a MFA (e-mail, SMS e WhatsApp) e emissão de tokens via Passport.',
    link: 'https://github.com/maxmateus/ms-auth',
    status: 'Concluído',
    progress: 100,
    techs: ['Laravel', 'PHP', 'Docker', 'MySQL', 'Redis', 'Swagger'],
  }
]
</script>

<template>
  <div class="space-y-16">
    <section class="space-y-4 fade-in">
      <p class="text-sm uppercase tracking-[0.18em] text-amber-700 dark:text-amber-400">Visão geral</p>
      <h1 class="text-4xl font-semibold leading-tight text-slate-900 dark:text-white md:text-5xl">
        Sobre mim
      </h1>
      <div class="space-y-3 text-base text-slate-700 dark:text-slate-200">
        <p>
          Sou desenvolvedor de software e apaixonado por tecnologia. Atuo na área há três anos, construindo projetos, estudando continuamente e explorando novos experimentos ao longo da minha jornada.
        </p>
        <p>
          Gosto de transformar ideias em soluções objetivas, focar no essencial e manter o desenvolvimento simples, seguro e fácil de evoluir.
        </p>
      </div>
    </section>

    <section class="space-y-6 fade-in">
      <SectionTitle eyebrow="Trabalho recente" title="Projetos em destaque" />
      <div class="grid gap-4">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :year="project.year"
          :link="project.link"
          :status="project.status"
          :progress="project.progress"
          :techs="project.techs"
        />
      </div>
      <RouterLink to="/projects" class="inline-flex items-center gap-2 text-sm font-semibold">
        Ver todos os projetos <span aria-hidden="true">→</span>
      </RouterLink>
    </section>

    <!-- <section class="space-y-6 fade-in">
      <SectionTitle eyebrow="Digital garden" title="Notas rápidas" />
      <div class="space-y-1">
        <NoteItem v-for="note in notes" :key="note.title" :title="note.title" :date="note.date" :link="note.link" />
      </div>
      <RouterLink to="/about" class="inline-flex items-center gap-2 text-sm font-semibold">
        Sobre mim e carreira <span aria-hidden="true">→</span>
      </RouterLink>
    </section> -->
  </div>
</template>
