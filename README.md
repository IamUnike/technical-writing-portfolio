# Technical Writing Portfolio

Phase 6E adds the production homepage to the technical foundation, visual
system, global shell, navigation, and route scaffolding. The Work, About,
Contact, and case-study content remain intentionally deferred.

## Stack

- Next.js with the App Router
- TypeScript
- Tailwind CSS
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
content/projects/              MDX case-study content (added later)
public/images/projects/        Project and case-study assets
src/app/                       App Router routes and global styles
src/components/ui/             Reusable interface primitives
src/components/layout/         Shared layout components
src/components/projects/       Work-index and project-preview components
src/components/case-studies/   Reusable case-study components
src/data/                      Typed portfolio data shared by routes
src/lib/                       Framework-independent utilities
```
