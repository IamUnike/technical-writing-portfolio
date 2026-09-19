# Technical Writing Portfolio

Phase 6F adds the production Work index and the reusable route, MDX, evidence,
and artifact architecture for long-form case studies. The first case-study
content remains intentionally deferred until its evidence is verified.

## Stack

- Next.js with the App Router
- TypeScript
- Tailwind CSS
- MDX for case-study content
- ESLint
- npm

## Local development

```bash
npm run dev
```

Then open <http://localhost:3000>.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Project structure

```text
content/projects/              MDX case-study content
public/images/projects/        Project and case-study assets
src/app/                       App Router routes and global styles
src/components/ui/             Reusable interface primitives
src/components/layout/         Shared layout components
src/components/projects/       Work-index and project-preview components
src/components/case-studies/   Headers, reading layout, evidence, and figures
src/content/                    Typed case-study content registry
src/data/                      Typed portfolio data shared by routes
src/lib/                       Framework-independent utilities
```
