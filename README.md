# JeongGwanWoo.github.io

Vite + Vue 3 (Composition API + TypeScript) + Tailwind CSS 기반 개발자 포트폴리오입니다.

## 1. 프로젝트 구조

```text
.
|-- src
|   |-- assets
|   |   `-- main.css
|   |-- components
|   |   `-- common
|   |       |-- ReportItem.vue
|   |       |-- SectionCard.vue
|   |       `-- TechBadge.vue
|   |-- router
|   |   `-- index.ts
|   |-- views
|   |   |-- HomeView.vue
|   |   `-- ProjectsView.vue
|   |-- App.vue
|   `-- main.ts
|-- .env.development
|-- .env.production
|-- eslint.config.js
|-- postcss.config.js
|-- tailwind.config.js
|-- vite.config.ts
`-- package.json
```

## 2. 실행 방법

```bash
npm install
npm run dev
npm run lint
npm run build
```

## 3. 기술 선택 이유

### Why Vue?

- Composition API + TypeScript 조합으로 기능 단위 분리가 명확해 유지보수가 쉽습니다.
- 컴포넌트 기반 구조로 포트폴리오 섹션(리포트/프로젝트)을 재사용 가능한 단위로 설계하기 좋습니다.
- Vue Router를 통한 확장형 페이지 구조를 간단하게 운영할 수 있습니다.

### Why Tailwind?

- 유틸리티 클래스 중심으로 빠르게 시안을 구현하고 반응형 규칙을 일관되게 관리할 수 있습니다.
- 디자인 토큰(색상, spacing)을 코드 가까이에서 통제해 UI 실험과 유지보수가 쉽습니다.
- 불필요한 CSS를 줄이기 쉬워 정적 배포 사이트에 유리합니다.

## 4. 배포 전략 개요

- 타깃: GitHub Pages (`JeongGwanWoo.github.io`)
- 빌드 산출물: `dist/`
- 핵심 설정:
  - `.env.production`의 `VITE_BASE_URL=/JeongGwanWoo.github.io/`
  - `vite.config.ts`에서 `base`를 환경 변수로 주입
- 배포 흐름(권장):
  1. `npm run build`
  2. `dist`를 GitHub Pages 브랜치(`gh-pages`) 또는 Actions 워크플로로 배포

## 5. 향후 개선 계획

- 실제 프로젝트별 아키텍처 다이어그램/트러블슈팅 로그를 Markdown 기반으로 관리하고 동적 렌더링 연결
- Lighthouse 기준 성능/접근성 점수 측정 후 이미지 최적화 및 코드 스플리팅 도입
- CI에 lint/build 체크와 자동 배포 파이프라인(GitHub Actions) 적용
