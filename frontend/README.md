# UniHub Frontend

Frontend application for UniHub, built with React, TypeScript, and Vite.

This app is currently in early foundation phase and includes:

- Frontend build and linting
- Tailwind CSS setup
- shadcn/ui setup
- Vitest + React Testing Library test infrastructure

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- shadcn/ui (Radix-based components)
- Vitest
- React Testing Library
- jsdom

## Prerequisites

- Node.js 22 or newer
- npm 10 or newer

## Getting Started

1. Install dependencies

   `npm install`

2. Start the development server

   `npm run dev`

3. Open the app

   Vite prints a local URL in the terminal, usually [`http://localhost:5173`]

## Available Scripts

- `npm run dev`
  Starts the local Vite development server.

- `npm run build`
  Builds production assets.

- `npm run preview`
  Serves the production build locally.

- `npm run lint`
  Runs ESLint across the frontend codebase.

- `npm run test`
  Runs Vitest in watch mode.

- `npm run test -- --run`
  Runs tests once and exits (useful for local validation and CI-like checks).

- `npm run test:coverage`
  Runs tests once and generates coverage output.

## Project Structure

Key frontend paths:

- `src/main.tsx`
  React app entry point.

- `src/App.tsx`
  Main application page/component.

- `src/index.css`
  Global styles, theme tokens, and Tailwind/shadcn layer setup.

- `src/test/setup.ts`
  Global test setup, including jest-dom matchers and cleanup hooks.

- `src/App.test.tsx`
  Example component test using React Testing Library.

- [`vite.config.ts`](/frontend/vite.config.ts)
  Vite configuration, alias resolution, and Vitest environment setup.

- [`tsconfig.json`](/frontend/tsconfig.json)
  Root TypeScript config with path alias definitions.

- [`tsconfig.app.json`](/frontend/tsconfig.app.json)
  App TypeScript settings used by the frontend build.

## Testing

The frontend testing setup is intentionally focused on behavior-first testing.

### Included

- Vitest test runner
- React Testing Library rendering/query utilities
- jsdom browser-like environment
- `@testing-library/jest-dom` custom assertions

### How tests are wired

- Test environment is configured in [`vite.config.ts`](/frontend/vite.config.ts)
- Test setup file is `src/test/setup.ts`
- Tests use `.test.tsx` naming

### Testing Philosophy

Prefer tests that reflect user-visible behavior:

- What the user can see
- What the user can click/type
- What changes in response

Avoid testing implementation details:

- Internal state shape
- Private helper calls
- Styling class implementation specifics

### Recommended next test targets

- Authentication pages and form validation flows
- Dashboard summary components
- Module list and module detail interactions
- Assignment create/edit/delete workflows

## Styling and UI System

Styling is based on Tailwind CSS and shadcn/ui.

### Tailwind

- Utility-first styling for layout and spacing
- Theme tokens are managed in `src/index.css`
- Keep reusable patterns in components rather than repeating long class strings everywhere

### shadcn/ui

- Component primitives are generated into the codebase (not consumed as a runtime UI package)
- Built on Radix primitives and Tailwind classes

Add a new shadcn component:

`npx shadcn@latest add button`

You can replace button with any supported component name.

## Path Aliases

The frontend uses an `@` alias for `src` imports.

Example import style:

`import { cn } from "@/lib/utils"`

If alias resolution breaks, verify:

- [`tsconfig.json`](/frontend/tsconfig.json) paths include `@/*`
- [`vite.config.ts`](/frontend/vite.config.ts) resolve.alias maps `@` to `./src`

## Linting and Code Quality

ESLint is configured for TypeScript and React hooks.

Run locally before opening a pull request:

- `npm run lint`
- `npm run test -- --run`
- `npm run build`

## Troubleshooting

### Tests fail with document is not defined

Cause:

- Vitest not running in jsdom mode.

Check:

- [`vite.config.ts`](/frontend/vite.config.ts) contains `test.environment` set to `jsdom`.

### Tests fail with multiple matching elements

Cause:

- Previous render not cleaned between tests.

Check:

- `src/test/setup.ts` calls cleanup in an afterEach hook.

### shadcn init fails with alias or Tailwind config errors

Check:

- [`tsconfig.json`](/frontend/tsconfig.json) has `@/*` path mapping
- Tailwind is installed
- Tailwind config exists in the frontend root
- `src/index.css` is configured with Tailwind and shadcn imports

## Current Status

Frontend foundation is in place:

- Build pipeline works
- Testing infrastructure is configured
- Tailwind and shadcn are integrated

Next delivery focus:

- Authentication UI
- Core dashboard and academic management screens
- Expanded component and page-level test coverage

## Contributing Notes

When adding features:

- Prefer accessible semantic markup
- Add tests for critical behavior
- Keep components focused and composable
- Update this README when setup or developer workflow changes
