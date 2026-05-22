<script setup>
import { computed } from 'vue'

const props = defineProps({
  config: { type: Object, required: true },
})

const pillars = [
  { id: 0, label: '강사 소개' },
  { id: 1, label: 'Pillar 1: 자동완성' },
  { id: 2, label: 'Pillar 2: 의미공간' },
  { id: 3, label: 'Pillar 3: MD 파일' },
]

const activePillar = computed(() => props.config.pillar ?? 0)

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
        v-for="p in pillars"
        :key="p.id"
        class="slide-nav-pillar"
        :class="{ 'is-active': activePillar === p.id }"
      >{{ p.label }}</span>
    </div>
    <div v-if="config.topic" class="slide-nav-right">
      <span class="slide-nav-topic">{{ config.topic }}</span>
      <span v-if="config.total" class="slide-nav-step">{{ stepLabel }}</span>
      <span v-if="config.total" class="slide-nav-dots">{{ dots }}</span>
    </div>
  </nav>
</template>
