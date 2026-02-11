<script setup lang="ts">
import SectionCard from '../components/common/SectionCard.vue';

const projectNotes = [
  {
    name: 'Booking API',
    stack: 'Spring Boot, MySQL, Redis',
    summary: '동시성 이슈를 재현하고 분산락 정책을 비교해 안정성 개선안을 도출했습니다.'
  },
  {
    name: 'Team Collaboration Board',
    stack: 'Vue 3, TypeScript, JWT',
    summary: '권한별 UI 제어와 API 에러 처리 공통화를 적용해 운영 안정성을 높였습니다.'
  }
];
</script>

<template>
  <SectionCard title="Project Notes" subtitle="구현보다 운영 기준을 강조한 프로젝트 정리">
    <ul class="space-y-3">
      <li
        v-for="project in projectNotes"
        :key="project.name"
        class="rounded-xl border border-slate-700 bg-slate-950/60 p-4"
      >
        <h3 class="text-base font-semibold text-white">{{ project.name }}</h3>
        <p class="mt-1 text-xs uppercase tracking-wide text-emerald-300">{{ project.stack }}</p>
        <p class="mt-2 text-sm text-slate-300">{{ project.summary }}</p>
      </li>
    </ul>
  </SectionCard>
</template>
