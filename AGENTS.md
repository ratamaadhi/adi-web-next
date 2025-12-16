# AGENTS.md

## Commands

- **Build**: `yarn build`
- **Dev**: `yarn dev`
- **Lint**: `yarn lint`
- **Format**: `yarn prettier`
- **Test**: No test framework configured

## Code Style Guidelines

### Imports

- Use ES6 imports/exports
- React imports first, then third-party, then local imports
- Example: `import React, { useState } from 'react';`

### Formatting

- Use Prettier config: single quotes, trailing comma ES5, 2 spaces, semicolons
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

- Use functional components with hooks
- Prefer `useState` and `useEffect`
- Use Redux for global state management
- Apollo Client for GraphQL data fetching

### Styling

- Tailwind CSS for styling
- Custom CSS classes in `global.css` for utilities like `.glassmorph`
- Use className prop consistently
