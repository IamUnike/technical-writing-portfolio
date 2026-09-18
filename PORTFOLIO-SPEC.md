# Technical Writing Portfolio — Product Specification

## Purpose

Build a premium technical-writing portfolio for Gideon Francis.

The website's primary purpose is to help Gideon secure technical-writing
opportunities by demonstrating the quality of his work, technical depth,
documentation process, and ability to investigate and document real software.

The website itself must function as evidence of attention to detail,
information architecture, UX, accessibility, and technical execution.

## Audience

Primary audiences:

- Technical-writing recruiters
- Documentation managers and leads
- Hiring managers
- Engineering teams evaluating technical writers

Support both:

1. A recruiter scanning the portfolio in under 60 seconds.
2. A technical reviewer investigating projects and documentation in depth.

## Positioning

Gideon is a technical writer focused on developer and technical documentation.

Core strengths demonstrated through the portfolio include:

- Developer documentation
- API and SDK documentation
- Docs-as-Code
- Technical investigation and verification
- Troubleshooting documentation
- Open-source documentation
- Git/GitHub workflows

Broader cybersecurity, research, education, certifications, and publications
should appear selectively on the About page where they strengthen technical
credibility.

Do not turn the website into a general personal portfolio.

## Experience Principles

The website should feel:

- Precise
- Premium
- Editorial
- Technical
- Confident
- Professional
- Deliberate
- Calm

Visual quality should come primarily from typography, hierarchy, spacing,
composition, interaction quality, and attention to detail.

Do not confuse complexity with quality.

## Visual Direction

Use:

**Editorial × Developer Documentation × Premium Product UI**

Prefer:

- Light-first interface
- Warm or off-white primary canvas
- Near-black typography
- Restrained neutral palette
- One sophisticated accent system
- Strong editorial typography
- Excellent whitespace
- Clear grid
- Subtle borders and surfaces
- Carefully used monospace typography for technical information
- High-quality code and terminal presentation
- Restrained motion

Avoid:

- Generic developer portfolio templates
- Excessive gradients
- Gratuitous glassmorphism
- Floating technology logos
- Skill percentage bars
- Large decorative 3D objects without purpose
- Cursor-following effects
- Excessive scroll animations
- Fake terminal interfaces as the primary visual identity
- Giant headshot-led hero
- Visual clutter

## Information Architecture

Primary navigation:

- Work
- About
- Contact
- Download CV

Primary routes:

```text
/
├── work/
│   └── [project]/
├── about/
└── contact/
```

The homepage should expose selected work without requiring visitors to open the
Work page first.

## Homepage

Recommended information sequence:

1. Hero
2. Selected Work
3. Capabilities
4. Documentation Process
5. Selected Background
6. Contact CTA

### Hero

Communicate immediately:

- Who Gideon is
- What he does
- What type of documentation he specializes in
- Where to inspect his work

Avoid generic introductions such as:

"Hello, I'm Gideon."

Use confident, concise positioning.

Primary CTA:

**View selected work**

Secondary actions may include:

- Download CV
- Contact
- GitHub
- LinkedIn

## Selected Work

Initial portfolio:

- Uptime Kuma
- Resend
- TaskFlow
- Conduit

Do not present the projects as four identical generic cards.

Allow stronger projects to receive greater visual prominence when appropriate.

Project previews should communicate:

- Project
- Documentation type
- Short problem/outcome statement
- Relevant technologies
- Verification/evidence
- Case-study link

## Capabilities

Show capabilities without ratings or percentage bars.

Examples:

- Developer Documentation
- API & SDK Documentation
- Docs-as-Code
- Technical Investigation
- Troubleshooting Documentation
- Open-source Documentation

Where possible, connect capabilities to evidence from actual projects.

## Documentation Process

Use the recurring framework:

```text
Investigate → Structure → Write → Verify → Ship
```

This may become a subtle visual motif across the website.

## Work Page

Provide a complete index of portfolio projects.

Do not add filtering unless the number of projects eventually makes filtering
useful.

## Case Studies

Case studies are the most important deep-content experience.

Recommended structure:

1. Project hero
2. Project metadata
3. Challenge
4. Investigation
5. Documentation strategy
6. Selected artifacts
7. Technical verification
8. Outcome
9. Documentation/GitHub links
10. Next project

Case studies should combine editorial storytelling with technical evidence.

Possible evidence:

- Documentation screenshots
- Code
- Terminal output
- API responses
- Diagrams
- GitHub repositories
- Pull requests
- CI results
- Documentation excerpts

Do not make every case study visually identical.

## Evidence Component

Where useful, provide compact evidence summaries such as:

```text
EVIDENCE

✓ Tested against live product
✓ Documentation set
✓ Automated documentation QA
↗ GitHub repository
↗ Upstream contribution
```

Evidence must be factual.

## About

Keep the page focused on technical-writing relevance.

May selectively include:

- Technical-writing background
- Cybersecurity education
- Technical knowledge
- Research/publications
- Relevant certifications
- Documentation philosophy
- Current professional direction

Do not turn this page into a complete autobiography.

## Contact

Make contacting Gideon simple.

The page should eventually support:

- Email
- LinkedIn
- GitHub
- CV download

Avoid unnecessary forms or fields unless they improve the experience.

## UX

Support two visitor journeys:

```text
Quick:
Home → Work → Evidence → Contact/CV

Deep:
Home → Project → Case Study → Documentation/GitHub → About → Contact
```

Navigation should remain accessible during long pages.

Long case studies may use a restrained reading-progress indicator and desktop
contents navigation.

Essential information must never depend on hover.

## Motion

Motion should communicate hierarchy, state, or progression.

Good uses include:

- Subtle page entrances
- Project preview responses
- Navigation feedback
- Case-study progress
- Purposeful diagram animation
- Small state transitions

Motion must never delay access to content.

Respect `prefers-reduced-motion`.

## Responsive Design

Design intentionally for:

- Mobile
- Tablet
- Laptop
- Large desktop

Do not merely shrink desktop layouts.

Pay particular attention to:

- Typography
- Navigation
- Code blocks
- Project compositions
- Case-study contents navigation
- Touch targets

## Accessibility

Accessibility is a design requirement, not a final-stage patch.

Implement:

- Semantic HTML
- Logical heading hierarchy
- Keyboard navigation
- Visible focus states
- Appropriate contrast
- Meaningful alt text
- Accessible interactive controls
- Sufficient target sizes
- Reduced-motion support

Target WCAG 2.2 AA where applicable.

## Technical Architecture

Use:

- Next.js
- TypeScript
- Tailwind CSS
- MDX for case studies
- Motion for React where justified
- Lucide icons
- Git + GitHub
- GitHub Actions
- Vercel

Favor Server Components unless client-side behavior is genuinely required.

Keep dependencies intentional.

## Content Architecture

Separate content from presentation.

Case-study content should live primarily in MDX or structured content rather
than being hard-coded into large React components.

Example:

```text
content/
└── projects/
    ├── uptime-kuma.mdx
    ├── resend.mdx
    ├── taskflow.mdx
    └── conduit.mdx
```

Use reusable case-study components for technical evidence.

## Performance

Prioritize:

- Optimized images
- Minimal unnecessary JavaScript
- Efficient font loading
- Stable layouts
- Fast initial rendering
- Sensible animation cost

Do not sacrifice performance for decorative effects.

## SEO and Metadata

Eventually implement:

- Page titles
- Meta descriptions
- Canonical metadata
- Open Graph metadata
- Social preview image
- Sitemap
- robots.txt
- Favicon
- Structured metadata where useful

## Quality Standard

The finished website should not merely state that Gideon values high-quality
technical communication.

Its information architecture, writing, implementation, accessibility,
performance, and interaction design should demonstrate that standard.