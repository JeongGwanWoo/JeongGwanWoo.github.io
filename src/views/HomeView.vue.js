import ProfileSection from '../components/ProfileSection.vue';
import ReportItem from '../components/common/ReportItem.vue';
import SectionCard from '../components/common/SectionCard.vue';
const reports = [
    {
        title: 'API 응답 시간 분석 자동화',
        description: '로그 수집과 슬로우 쿼리 추적 기준을 정리하고, endpoint별 평균/최댓값을 주간 리포트로 관리했습니다.',
        impact: '문제 API 탐지 시간 단축'
    },
    {
        title: '트랜잭션 경계 재설계',
        description: '서비스 계층에서 읽기/쓰기 트랜잭션을 분리하고 불필요한 영속성 컨텍스트 유지 구간을 줄였습니다.',
        impact: 'DB 부하 안정화'
    },
    {
        title: '캐시 전략 검증',
        description: '조회 빈도가 높은 도메인에 대해 TTL 정책 실험과 캐시 미스 상황 로깅을 적용해 병목 구간을 검증했습니다.',
        impact: '반복 조회 처리량 개선'
    }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "grid gap-6" },
});
/** @type {[typeof ProfileSection, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(ProfileSection, new ProfileSection({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {[typeof SectionCard, typeof SectionCard, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(SectionCard, new SectionCard({
    title: "Technical Reports",
    subtitle: "실무형 관점에서 정리한 핵심 개선 사례",
}));
const __VLS_4 = __VLS_3({
    title: "Technical Reports",
    subtitle: "실무형 관점에서 정리한 핵심 개선 사례",
}, ...__VLS_functionalComponentArgsRest(__VLS_3));
__VLS_5.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "grid gap-3 md:grid-cols-2" },
});
for (const [report] of __VLS_getVForSourceType((__VLS_ctx.reports))) {
    /** @type {[typeof ReportItem, ]} */ ;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(ReportItem, new ReportItem({
        key: (report.title),
        title: (report.title),
        description: (report.description),
        impact: (report.impact),
    }));
    const __VLS_7 = __VLS_6({
        key: (report.title),
        title: (report.title),
        description: (report.description),
        impact: (report.impact),
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
}
var __VLS_5;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-6']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-2']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ProfileSection: ProfileSection,
            ReportItem: ReportItem,
            SectionCard: SectionCard,
            reports: reports,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
