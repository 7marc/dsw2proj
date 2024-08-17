/*
import Vue from 'vue'
import BoostrapVue from 'bootstrap-vue'

Vue.use(BoostrapVue)

import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => 
{
  nuxtApp.vueApp.use(BootstrapVue)
})
  */
import { defineNuxtPlugin } from '#app'
import * as BootstrapVueNext from 'bootstrap-vue-next';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

export default defineNuxtPlugin((nuxtApp) => 
{
  nuxtApp.vueApp.use(BootstrapVueNext)
})