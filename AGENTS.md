# Portfolio Website Synchronization Guide

## Project purpose

This repository is a personal portfolio website used as a public URL for job applications.
The work in this repository is primarily portfolio synchronization: keeping the site aligned
with the latest verified portfolio source while preserving the existing visual style.

## Source of truth

- The latest portfolio PDF, PPTX, or DOCX supplied or explicitly identified by the user is
  the verified source of truth for website content.
- Treat the source portfolio as the approved representation of project responsibilities,
  technologies, outcomes, and retrospective notes. Do not require a separate Git history
  review unless the user asks for it or the source is ambiguous.
- If the source conflicts with existing site content, propose changing the site to match the
  source. Do not silently choose between conflicting descriptions.
- Do not add unsupported achievements, personal responsibilities, metrics, technologies, or
  claims. If the source does not settle an existing claim, mark it as requiring confirmation.

## Site structure

- `index.html` contains the profile, technology stack, project summaries, and project links.
- `project-wedge.html`, `project-dondone.html`, `project-dnc.html`, and
  `project-mytripquest.html` are project detail pages.
- `styles.css` is the shared design and responsive layout.
- `assets/pdfs/` contains portfolio and project PDF files.
- `assets/images/gallery/` contains project screenshots and diagrams.
- `assets/icons/tech/` contains technology icons.

Keep the current page hierarchy, visual language, shared styles, and accessibility structure
unless the user explicitly asks for a redesign.

## Core integrity rules

- A project detail page and its matching summary in `index.html` must be reviewed together.
- Preserve the distinction between source facts and site-specific editorial summaries. A
  shortened website sentence must not strengthen or change the source claim.
- Do not replace or delete original source files.
- Do not modify unrelated project pages when the user asks to synchronize one project only.
- Do not replace a gallery image, video, PDF, or external link without identifying its source
  and checking that the replacement is public and appropriate for a job-application website.

## Privacy and public-content rules

- Before publishing source-derived content, flag personal contact details, health information,
  team-member information, private URLs, credentials, tokens, internal dashboards, or other
  sensitive material that may not be suitable for a public site.
- Do not expose data merely because it appears in a source document. Ask for direction when its
  public suitability is unclear.
- Never place credentials, private repository URLs, or non-public service links in the site.

## Portfolio synchronization workflow

### 1. Inspect the source and the current site

Before editing, identify the source pages relevant to the requested project and the matching
website files.

For PDF sources, render or inspect the relevant pages. For PPTX or DOCX sources, inspect the
relevant slides or sections. Record:

- the purpose of each relevant page, slide, or section;
- source wording for the project overview, implementation, problem solving, role, technology,
  outcome, and retrospective;
- available screenshots, diagrams, videos, and linked documents;
- the current corresponding website text, assets, and links.

### 2. Propose changes with evidence

Before changing files, present an evidence-based comparison for every affected page.

| Website section | Current content | Latest source content | Proposed change | Evidence |
| --- | --- | --- | --- | --- |

The evidence must name the source file and its page, slide, or section.

For a project detail page, compare at minimum:

- title, subtitle, and introduction;
- gallery images, video, and PDF link;
- implementation details;
- problem, options, solution, and learning narrative;
- personal role;
- technology stack and rationale;
- outcome and retrospective.

State explicitly what will be retained, revised, added, removed, or left pending confirmation.

### 3. Approval gate

Do not edit HTML, CSS, images, PDFs, videos, links, or metadata until the user approves the
change proposal.

If the request requires a new project page, a new design pattern, or a change to shared layout,
separate that scope from an ordinary content synchronization proposal and obtain explicit
approval for it.

### 4. Apply approved changes

After approval, update only the approved content and assets.

- Preserve existing section order, card patterns, typography, color, navigation, and responsive
  behavior unless redesign was explicitly approved.
- Update the project detail page and matching `index.html` summary in the same change when both
  are affected.
- Keep image alternatives, headings, link labels, and Korean copy consistent with the existing
  site style.

### 5. Verify and report

After editing, verify:

- desktop and mobile layout;
- Korean text rendering and line wrapping;
- image, video, PDF, email, GitHub, and other external links;
- missing assets and broken paths;
- agreement between every changed site claim and the approved source evidence.

Report the changed files, changed sections, source evidence, items intentionally left unchanged,
and verification results. Do not call a synchronization complete without this check.

## Efficiency and scope decisions

- Do not update the whole site merely because a new portfolio file exists. Limit work to the
  projects and sections the user identifies or that have material source differences.
- If a change is cosmetic, does not affect recruiter-facing understanding, or has no approved
  source basis, describe it as optional rather than expanding the synchronization scope.
- When a source is incomplete, keep the current supported content or request clarification;
  do not invent a replacement.

## Change control

- Preserve unrelated user changes in the working tree.
- Do not commit, push, deploy, alter repository settings, or publish external changes unless the
  user explicitly requests that exact action.
- Before a user-requested commit, inspect the intended diff and report relevant verification
  evidence.

## Skill routing

### Source-artifact skills

- When inspecting, rendering, or verifying a PDF source, use `$pdf`.
- When the source is a PPTX presentation, use `$presentations`.
- When the source is a DOCX document, use `$documents`.
- Use `$imagegen` only when the user explicitly requests a new visual asset. Do not use it to
  replace screenshots, diagrams, or other evidence images from the portfolio source.

### Reusable workflow skills

The following workflow Skills originate from the established project workflow used in the
Discord recruitment-bot repository. Use them when they are available in this project or in the
current agent environment. If a named Skill is not available, follow the matching procedure in
this file instead; do not block ordinary portfolio synchronization.

- Use `$brainstorming` before a new project page, a new content pattern, or a material redesign.
  Routine source-to-site synchronization follows this file's comparison and approval process and
  does not need a separate design exercise.
- Use `$writing-plans` after approval when the work changes shared layout, multiple project
  pages, JavaScript behavior, or a substantial set of assets. Do not create a detailed code plan
  for a small, approved text or link update.
- Use `$requesting-code-review` after a meaningful CSS, JavaScript, or shared-template change.
  It is optional for source-only copy updates that do not affect shared behavior or layout.
- Use `$verification-before-completion` before claiming a synchronization is complete. The
  required evidence is the verification list in this file: source agreement, layout, asset paths,
  and external links.
- Use `$git-workflow-and-versioning` when the user requests a branch, commit, merge, conflict
  resolution, or release-related work. This repository's explicit user-approval requirements for
  commit, push, deployment, and publishing still apply.
- Use `$github-pr-creation` only after the user explicitly requests a GitHub pull request from a
  pushed branch.

### Skills outside normal synchronization scope

- `$test-driven-development` applies only when changing or adding site behavior such as
  JavaScript interactions. It is not required for ordinary content synchronization.
- `$flyway-migration-safety`, `$security-threat-model`, `$security-best-practices`, and
  `$learning-review-prompt` are not part of routine portfolio work. Use them only for their
  specific requested situations.
- Create project-local workflow Skills only when the user explicitly asks to create or maintain
  them. Until then, use the reusable skills above and this repository's workflow directly.
