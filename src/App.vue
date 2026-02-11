<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';

const route = useRoute();
const title = import.meta.env.VITE_APP_TITLE || 'Developer Portfolio';

const navItems = [
  { label: 'Tech Report', to: '/' },
  { label: 'Project Notes', to: '/projects' }
];

const activePath = computed(() => route.path);
</script>

<template>
  <div class="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8">
    <header class="mb-10 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur">
      <p class="text-xs uppercase tracking-[0.2em] text-emerald-300">Backend Engineering Portfolio</p>
      <div class="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 class="text-2xl font-bold text-white sm:text-3xl">{{ title }}</h1>
          <p class="mt-2 text-sm text-slate-300">실무 투입 가능한 신입 백엔드 개발자의 기술 리포트</p>
        </div>
        <nav class="flex gap-2">
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="rounded-lg border px-3 py-2 text-sm transition"
            :class="
              activePath === item.to
                ? 'border-emerald-400 bg-emerald-400/10 text-emerald-300'
                : 'border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
            "
          >
            {{ item.label }}
          </RouterLink>
        </nav>
      </div>
    </header>

    <main class="flex-1">
      <RouterView />
    </main>

    <footer class="mt-12 border-t border-slate-800 pt-5 text-xs text-slate-400">
      <p>Built with Vue 3 + TypeScript + Tailwind CSS.</p>
    </footer>
  </div>
</template>
