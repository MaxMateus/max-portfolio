<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import SectionTitle from '../components/SectionTitle.vue'

const projects = [
  {
    title: 'ms-auth',
    year: '2025',
    description:
      'Serviço de autenticação em Laravel com suporte a MFA (e-mail, SMS e WhatsApp) e emissão de tokens via Passport.',
    link: 'https://github.com/maxmateus/ms-auth',
    status: 'Em desenvolvimento',
    progress: 65,
    techs: ['Laravel', 'PHP', 'Docker', 'MySQL', 'Redis', 'Swagger'],
  }
]
</script>

<template>
  <div class="space-y-8 fade-in">
    <SectionTitle eyebrow="Portfólio" title="Projetos" />
    <p class="text-base text-slate-700 dark:text-slate-200">
      Uma coleção curta do que venho construindo. Priorizo código claro, documentação leve e boas experiências ao
      usuário.
    </p>

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
  </div>
</template>
