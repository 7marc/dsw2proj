import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue-next/dist/bootstrap-vue-next.css'
  ],

  plugins: [
    '~/plugins/bootstrap-vue.js'
  ],

  runtimeConfig: 
  {
    public: 
    {
      apiBase: process.env.API_BASE || 'http://localhost:3000'
    }
  },

  nitro: 
  {
    devProxy: 
    {
      '/api': 
      {
        target: process.env.API_BASE || 'http://localhost:3000',
        changeOrigin: true
      },
    },
  },

  compatibilityDate: '2024-08-16',
});