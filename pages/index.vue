<script setup lang="ts">
import { projects } from '~/projects'

useSeoMeta({
  title: 'Senior Frontend Engineer',
  description: 'Mohammad Tarek’s frontend engineering portfolio. Selected Vue and Nuxt projects in fintech, automotive, healthcare, and HR.',
  ogTitle: 'Mohammad Tarek · Senior Frontend Engineer',
  ogDescription: 'Selected work in Vue and Nuxt, from financial operations to multilingual public websites.',
  ogType: 'website',
})
</script>

<template>
  <main id="main-content" class="shell">
    <section class="hero" aria-labelledby="intro">
      <div>
        <p class="eyebrow">Senior Frontend Engineer · Cairo, Egypt</p>
        <h1 id="intro">Mohammad<br>Tarek<span>.</span></h1>
        <p class="intro">I build Vue and Nuxt applications for complex workflows, from fraud investigations to patient appointments.</p>
        <div class="actions">
          <a class="button primary" href="#work">Explore selected work</a>
          <a class="button" href="mailto:tarek3529@gmail.com">Email me</a>
        </div>
      </div>
      <figure class="hero-art" aria-hidden="true">
        <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="orbit orbit-three"></div>
        <div class="art-mark">&lt;<span>/</span>&gt;</div>
      </figure>
    </section>

    <section id="work" class="section" aria-labelledby="work-heading">
      <div class="section-heading">
        <h2 id="work-heading">Selected work</h2>
        <p>Architecture, operational interfaces, and public websites.</p>
      </div>
      <div class="projects">
        <NuxtLink v-for="project in projects" :key="project.slug" class="project" :to="'/work/' + project.slug">
          <div class="project-diagram" aria-hidden="true">
            <span v-for="label in project.diagram" :key="label">{{ label }}</span>
          </div>
          <div class="project-body">
            <p class="eyebrow">{{ project.client }} · {{ project.category }}</p>
            <h3>{{ project.title }}</h3>
            <p>{{ project.summary }}</p>
            <span class="read">Read case study</span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section id="experience" class="section" aria-labelledby="experience-heading">
      <div class="section-heading"><h2 id="experience-heading">Experience</h2></div>
      <div class="experience">
        <article>
          <p class="eyebrow">Sulfah · Started July 2025</p>
          <h3>Senior Frontend Developer</h3>
          <p>Owned frontend delivery for a lending administration platform spanning operations, reporting, and compliance. Contributed to an incremental Vue 2 to Vue 3 migration.</p>
        </article>
        <article>
          <p class="eyebrow">Code95 · June 2021 – June 2025</p>
          <h3>Frontend Developer</h3>
          <p>Delivered Vue and Nuxt applications for automotive, healthcare, HR, and enterprise clients. Mentored a frontend intern on code structure and quality.</p>
        </article>
      </div>
      <p class="skills">Vue 2/3 · Nuxt · TypeScript · Pinia · Vuex · Vite · REST APIs · SSR · SEO · i18n</p>
    </section>

    <section id="contact" class="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact</h2>
      <p>For frontend engineering roles and project conversations.</p>
      <a class="button primary" href="mailto:tarek3529@gmail.com">tarek3529@gmail.com</a>
    </section>
  </main>
</template>
