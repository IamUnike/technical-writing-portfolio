# Implementation Instructions

Read `PORTFOLIO-SPEC.md` before making significant product or design decisions.

## Working Principles

- Implement incrementally.
- Preserve the established visual and UX direction.
- Prefer simple, robust solutions over unnecessary abstraction.
- Do not introduce dependencies without a clear reason.
- Keep components focused and reusable.
- Keep content separate from presentation where practical.
- Use semantic HTML.
- Maintain accessibility during implementation.
- Maintain responsive behavior during implementation.
- Respect reduced-motion preferences.
- Avoid generic AI-portfolio aesthetics.

## Design

Do not independently redesign the portfolio into a conventional developer
portfolio.

Avoid adding decorative gradients, glass effects, 3D objects, excessive
animation, technology-logo clouds, skill bars, or other visual devices simply
to make the interface appear more complex.

Use typography, spacing, hierarchy, grids, restrained surfaces, and precise
interaction states as the primary design tools.

## Development

Use TypeScript.

Favor Server Components in Next.js. Add `"use client"` only when required for
actual client-side behavior.

Keep the application free of TypeScript, ESLint, and build errors.

Do not expose secrets or personal credentials.

## Content

Do not invent:

- Employment history
- Project outcomes
- Metrics
- Testimonials
- Clients
- Certifications
- Pull-request status
- Technical verification claims

Use placeholders or TODO markers when factual information is unavailable.

Do not rewrite substantive portfolio copy without a clear reason.

## Git

Work in logical increments.

Before considering a development milestone complete, run the relevant lint,
type, and build checks.

Keep commits focused and descriptive.

## Definition of Done

A feature is not complete merely because it renders.

Check:

- Correctness
- Responsive behavior
- Accessibility
- Keyboard interaction
- Focus states
- Reduced motion where relevant
- Content hierarchy
- Visual consistency
- Build/lint status