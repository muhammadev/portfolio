import { projects } from './projects'

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  css: ['~/assets/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s | Mohammad Tarek',
      meta: [{ name: 'theme-color', content: '#111512' }],
    },
  },
  nitro: {
    prerender: { routes: ['/', ...projects.map(project => '/work/' + project.slug)] },
  },
})
