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
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {[typeof SectionCard, typeof SectionCard, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(SectionCard, new SectionCard({
    title: "Project Notes",
    subtitle: "구현보다 운영 기준을 강조한 프로젝트 정리",
}));
const __VLS_1 = __VLS_0({
    title: "Project Notes",
    subtitle: "구현보다 운영 기준을 강조한 프로젝트 정리",
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
var __VLS_3 = {};
__VLS_2.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "space-y-3" },
});
for (const [project] of __VLS_getVForSourceType((__VLS_ctx.projectNotes))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        key: (project.name),
        ...{ class: "rounded-xl border border-slate-700 bg-slate-950/60 p-4" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: "text-base font-semibold text-white" },
    });
    (project.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "mt-1 text-xs uppercase tracking-wide text-emerald-300" },
    });
    (project.stack);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "mt-2 text-sm text-slate-300" },
    });
    (project.summary);
}
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['space-y-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-slate-700']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-slate-950/60']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-wide']} */ ;
/** @type {__VLS_StyleScopedClasses['text-emerald-300']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-slate-300']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            SectionCard: SectionCard,
            projectNotes: projectNotes,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
