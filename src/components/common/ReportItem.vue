<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  impact: string;
}

defineProps<Props>();
</script>

<template>
  <article class="rounded-xl border border-slate-700 bg-slate-950/60 p-4">
    <h3 class="text-sm font-semibold text-white sm:text-base">{{ title }}</h3>
    <p class="mt-2 text-sm leading-6 text-slate-300">{{ description }}</p>
    <p class="mt-3 text-xs font-medium uppercase tracking-wide text-emerald-300">Impact: {{ impact }}</p>
  </article>
</template>
