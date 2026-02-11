<script setup lang="ts">
interface RoleGroup {
  role: 'Backend' | 'Infrastructure' | 'Supporting';
  items: string[];
}

interface ProblemSolvingGroup {
  title: string;
  context: string;
  skills: string[];
}

const engineerName = 'Jeong Gwan Woo';

const valueStatement =
  '기술을 사용하는 개발자가 아니라, 선택의 이유를 설명할 수 있는 개발자를 지향합니다.';

const competencies = [
  'RESTful API 설계 경험',
  '트랜잭션 및 데이터 정합성 고려',
  'CI/CD 파이프라인 구성 경험',
  '클라우드 배포 및 운영 경험',
  '성능 최적화 경험'
];

const roleGroups: RoleGroup[] = [
  {
    role: 'Backend',
    items: ['Java', 'Spring Boot', 'JPA', 'MySQL', 'Redis']
  },
  {
    role: 'Infrastructure',
    items: ['Docker', 'Nginx', 'AWS EC2', 'GitHub Actions']
  },
  {
    role: 'Supporting',
    items: ['TypeScript', 'Vue 3', 'JUnit', 'Postman']
  }
];

const problemSolvingGroups: ProblemSolvingGroup[] = [
  {
    title: 'API Reliability & Data Integrity',
    context: '요구사항 변동이 많은 도메인에서 안정적인 API 계약과 데이터 일관성을 유지합니다.',
    skills: ['RESTful API Design', 'Transaction Boundary', 'JPA Mapping', 'Redis Caching']
  },
  {
    title: 'Delivery Pipeline & Release Control',
    context: '배포 속도보다 재현 가능한 배포 절차를 우선해 장애 가능성을 낮춥니다.',
    skills: ['GitHub Actions', 'Docker Image Build', 'Environment Separation', 'Rollback Strategy']
  },
  {
    title: 'Observability & Performance Tuning',
    context: '문제를 직감으로 해결하지 않고 로그/지표 기반으로 병목 원인을 추적합니다.',
    skills: ['Slow Query Analysis', 'Endpoint Latency Tracking', 'Load Test Feedback Loop']
  }
];
</script>

<template>
  <section class="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6">
    <header class="border-b border-slate-800 pb-4">
      <p class="text-xs uppercase tracking-[0.2em] text-emerald-300">Profile</p>
      <h2 class="mt-2 text-xl font-semibold text-white sm:text-2xl">
        Backend &amp; Infrastructure Engineer {{ engineerName }}
      </h2>
      <p class="mt-3 text-sm leading-6 text-slate-300">
        {{ valueStatement }}
      </p>
      <a
        href="https://github.com/JeongGwanWoo"
        target="_blank"
        rel="noreferrer"
        class="mt-4 inline-flex rounded-lg border border-emerald-400/50 px-3 py-2 text-xs font-medium uppercase tracking-wide text-emerald-200 transition hover:border-emerald-300 hover:text-white"
      >
        GitHub: github.com/JeongGwanWoo
      </a>
    </header>

    <div class="mt-5 grid gap-6 lg:grid-cols-2">
      <article>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-100">Core Competencies</h3>
        <ul class="mt-3 space-y-2 text-sm text-slate-300">
          <li
            v-for="competency in competencies"
            :key="competency"
            class="rounded-lg border border-slate-700 bg-slate-950/50 px-3 py-2"
          >
            {{ competency }}
          </li>
        </ul>
      </article>

      <article>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-100">Role-based Tech Badges</h3>
        <div class="mt-3 space-y-3">
          <div
            v-for="group in roleGroups"
            :key="group.role"
            class="rounded-lg border border-slate-700 bg-slate-950/50 p-3"
          >
            <p class="text-xs font-semibold uppercase tracking-wide text-emerald-300">{{ group.role }}</p>
            <div class="mt-2 flex flex-wrap gap-2">
              <span
                v-for="item in group.items"
                :key="item"
                class="rounded-full border border-slate-600 px-2.5 py-1 text-xs text-slate-200"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>

    <div class="mt-6">
      <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-100">
        Tech Stack by Problem Solving Perspective
      </h3>
      <div class="mt-3 grid gap-3 md:grid-cols-3">
        <article
          v-for="group in problemSolvingGroups"
          :key="group.title"
          class="rounded-xl border border-slate-700 bg-slate-950/60 p-4"
        >
          <h4 class="text-sm font-semibold text-white">{{ group.title }}</h4>
          <p class="mt-2 text-xs leading-5 text-slate-300">{{ group.context }}</p>
          <ul class="mt-3 space-y-1.5 text-xs text-emerald-200">
            <li v-for="skill in group.skills" :key="skill">- {{ skill }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
