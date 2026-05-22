<script setup>
import { computed } from 'vue'

const props = defineProps({
  config: { type: Object, required: true },
})

// slides.md 상세 목차·교시 구간과 동일한 표현
const sections = [
  { id: 0, label: '1회차 개요' },
  { id: 1, label: '1교시 · 자동완성' },
  { id: 2, label: '2교시 · 의미공간' },
  { id: 3, label: '3교시 · MD 파일' },
]

const activeSection = computed(() => props.config.section ?? 0)

const dots = computed(() => {
  const total = props.config.total ?? 0
  const step = props.config.step ?? 0
  if (!total || !step) return ''
  return Array.from({ length: total }, (_, i) => (i + 1 === step ? '●' : '○')).join('')
})

const stepLabel = computed(() => {
  const total = props.config.total ?? 0
  const step = props.config.step ?? 0
  if (!total || !step) return ''
  return `${step}/${total}`
})
</script>

<template>
  <nav class="slide-nav" aria-label="슬라이드 진행">
    <div class="slide-nav-left">
      <span
        v-for="s in sections"
        :key="s.id"
        class="slide-nav-section"
        :class="{ 'is-active': activeSection === s.id }"
      >{{ s.label }}</span>
    </div>
    <div v-if="config.topic" class="slide-nav-right">
      <span class="slide-nav-topic">{{ config.topic }}</span>
      <span v-if="config.total" class="slide-nav-step">{{ stepLabel }}</span>
      <span v-if="config.total" class="slide-nav-dots">{{ dots }}</span>
    </div>
  </nav>
</template>
