# AGENTS.md

## Commands

- **Build**: `yarn build`
- **Dev**: `yarn dev`
- **Lint**: `yarn lint`
- **Format**: `yarn prettier`
- **Test**: No test framework configured
- **Commit**: `yarn commit` (uses commitizen with conventional commits)

## Code Style Guidelines

### Imports & Aliases

- Use ES6 imports/exports with path aliases: `@/components/*`, `@/lib/*`, `@/utils/*`
- React imports first, then third-party, then local imports
- Example: `import React, { useState } from 'react';`

### Formatting & Types

- Prettier: single quotes, trailing comma ES5, 2 spaces, semicolons
- TypeScript enabled but strict mode disabled (`strict: false`)
- ESLint extends Next.js, React, and Prettier rules

### Naming Conventions

- Components: PascalCase (e.g., `TopNav`, `MenuRight`)
- Functions/variables: camelCase
- Files: kebab-case for folders, PascalCase for React components

### Error Handling

- Use try/catch in async functions
- Set error state in hooks (see `useAxiosFetch.js`)
- Handle loading states consistently

### React Patterns

- Functional components with hooks only
- Redux for global state, Apollo Client for GraphQL
- Tailwind CSS for styling with shadcn/ui components
