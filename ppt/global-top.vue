<script setup>
import { computed } from 'vue'
import { useNav } from '@slidev/client'
import navConfig from './nav-config.js'
import SlideNav from './components/SlideNav.vue'

const { currentPage } = useNav()

const config = computed(() => navConfig[currentPage.value] ?? null)

const showNav = computed(() => {
  const c = config.value
  if (!c) return false
  return !['cover', 'break', 'thanks'].includes(c.type)
})
</script>

<template>
  <SlideNav v-if="showNav && config" :config="config" />
</template>
