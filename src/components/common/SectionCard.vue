<script setup lang="ts">
interface Props {
  title: string;
  subtitle?: string;
}

defineProps<Props>();
</script>

<template>
  <section class="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6">
    <header class="mb-4">
      <h2 class="text-lg font-semibold text-white sm:text-xl">{{ title }}</h2>
      <p v-if="subtitle" class="mt-1 text-sm text-slate-300">{{ subtitle }}</p>
    </header>
    <div class="space-y-3">
      <slot />
    </div>
  </section>
</template>
