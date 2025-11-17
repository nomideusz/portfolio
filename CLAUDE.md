# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern web developer portfolio built with **Svelte 5** and **SvelteKit**, showcasing real-world projects. The portfolio uses the latest Svelte 5 features including runes (`$state`, `$props`) and the new `{@render}` syntax.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run check

# Type checking in watch mode
npm run check:watch
```

## Architecture

### Svelte 5 Runes Usage

This project uses **Svelte 5 runes** throughout:
- `$state()` for reactive state management
- `$props()` for component props destructuring
- `{@render children()}` for rendering child content (replaces slots)

Example from `+layout.svelte`:
```svelte
let { children } = $props();
{@render children()}
```

### Route Structure

The portfolio uses SvelteKit's file-based routing:
- `src/routes/+layout.svelte` - Root layout with navigation, header, and footer
- `src/routes/+page.svelte` - Home page with hero section
- `src/routes/about/+page.svelte` - About page with skills
- `src/routes/projects/+page.svelte` - Projects showcase
- `src/routes/contact/+page.svelte` - Contact form with social links

### Styling System

**Global CSS Variables** (`src/styles/global.css`):
- Uses CSS custom properties for theming
- Automatic dark mode support via `prefers-color-scheme`
- Variables: `--color-primary`, `--color-secondary`, `--color-bg`, `--color-bg-secondary`, `--color-text`, `--color-text-secondary`, `--color-border`
- Imported globally in `+layout.svelte`

**Component Styles**:
- Each page uses scoped `<style>` blocks
- Leverages global CSS variables for consistency

### Project Data Structure

Projects are defined as typed state in `src/routes/projects/+page.svelte`:

```typescript
interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

let projects = $state<Project[]>([...]);
```

When adding new projects:
1. Add project objects to the `projects` array
2. Include `title`, `description`, `tech` array, and optional `link`
3. Projects are automatically rendered with cards and clickable links

## Windows Development Notes

On Windows, there's a known npm bug with Rollup's optional dependencies. If you encounter:
```
Error: Cannot find module @rollup/rollup-win32-x64-msvc
```

The fix is already in `package.json` with `@rollup/rollup-win32-x64-msvc` as an optional dependency. If issues persist:
```bash
cd node_modules/@rollup
npm pack @rollup/rollup-win32-x64-msvc
tar -xzf rollup-rollup-win32-x64-msvc-*.tgz
mv package rollup-win32-x64-msvc
rm rollup-rollup-win32-x64-msvc-*.tgz
```

## Key Conventions

- TypeScript is enabled with strict mode
- All components use `lang="ts"` in script blocks
- Route pages are standalone (no separate components directory yet)
- External links use `target="_blank" rel="noopener noreferrer"`
- Responsive design uses CSS Grid and Flexbox
