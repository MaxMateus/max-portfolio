<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import SectionTitle from '../components/SectionTitle.vue'
import { projects } from '../data/projects'
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
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :year="project.year"
        :link="project.link"
        :repos="project.repos"
        :status="project.status"
        :progress="project.progress"
        :techs="project.techs"
      />
    </div>
  </div>
</template>
