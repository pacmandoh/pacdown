// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    'nuxt-og-image',
    '@vueuse/nuxt',
    '@nuxt/eslint'
  ],
  ui: {
    icons: ['heroicons', 'simple-icons', 'ph']
  },
  routeRules: {
    // Pre-render
    '/*': { prerender: true }
  },
  runtimeConfig: {
    // apiKey
  },
  // Fonts
  fontMetrics: {
    fonts: ['DM Sans']
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700]
    }
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never'
      }
    }
  },
  // ogImage support Chinese
  ogImage: {
    fonts: [
      'Noto+Sans+SC:400',
      'Noto+Sans+SC:500',
      'Noto+Sans+SC:600',
      'Noto+Sans+SC:700'
    ]
  },
  // Devtools / Typescript
  devtools: { enabled: true },
  typescript: { strict: false }
})
