---
type: ADR
status: accepted
authors:
  - David Vega
---

# ADR 2: Tech Stack

## Context

A standardized base tech stack is required to ensure consistency across projects.

## Decision

Use Next.js with React, TypeScript and Tailwind CSS.

## Consequences

1. Tailwind runs automatically as part of the `npm run dev` and `npm run build` commands.
2. It's easy to generate a static site, so a default workflow for publishing to GitHub Pages is provided.
3. HMR (Hot Module Replacement) is enabled by default, making development faster and more efficient.