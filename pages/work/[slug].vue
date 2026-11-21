<script setup lang="ts">
import { projects } from '~/projects'

const route = useRoute()
const project = projects.find(item => item.slug === route.params.slug)

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found' })
}

useSeoMeta({
  title: project.title,
  description: project.summary,
  ogTitle: project.title + ' | Mohammad Tarek',
  ogDescription: project.summary,
})
</script>

<template>
  <main id="main-content" class="shell case-study">
    <NuxtLink class="read" to="/#work">All selected work</NuxtLink>
    <header class="case-header">
      <p class="eyebrow">{{ project.client }} · {{ project.category }}</p>
      <h1>{{ project.title }}</h1>
      <p class="intro">{{ project.summary }}</p>
      <ul class="tags" aria-label="Technologies and practices">
        <li v-for="tag in project.stack" :key="tag">{{ tag }}</li>
      </ul>
    </header>
    <ol class="project-diagram case-diagram" aria-label="Project workflow">
      <li v-for="label in project.diagram" :key="label">{{ label }}</li>
    </ol>
    <div class="case-copy">
      <section><h2>Challenge</h2><p>{{ project.challenge }}</p></section>
      <section><h2>My contribution</h2><p>{{ project.approach }}</p></section>
      <section><h2>Outcome</h2><p>{{ project.outcome }}</p></section>
    </div>
  </main>
</template>
