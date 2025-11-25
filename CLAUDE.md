# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern web developer portfolio built with **Svelte 5** and **SvelteKit**, showcasing real-world projects with live data. The portfolio uses the latest Svelte 5 features including runes (`$state`, `$props`) and the new `{@render}` syntax. It includes dark mode support, custom 404 pages, SEO optimization, and responsive design.

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
- `src/routes/+layout.svelte` - Root layout with navigation, header, footer, and dark mode toggle
- `src/routes/+page.svelte` - Home page with hero section
- `src/routes/+error.svelte` - Custom 404 and error pages with helpful navigation
- `src/routes/about/+page.svelte` - About page with skills and downloadable resume
- `src/routes/projects/+page.svelte` - Projects showcase with featured badges
- `src/routes/projects/[slug]/+page.svelte` - Detailed individual project pages
- `src/routes/contact/+page.svelte` - Contact form with social links (GitHub, LinkedIn, Instagram)

### Styling System

**Global CSS Variables** (`src/styles/global.css`):
- Uses CSS custom properties for theming
- Dark mode support with manual toggle and localStorage persistence
- Theme classes: `.light` and `.dark` applied to `<html>` element
- Variables: `--color-primary`, `--color-secondary`, `--color-bg`, `--color-bg-secondary`, `--color-text`, `--color-text-secondary`, `--color-border`, `--color-accent`, `--color-surface`, etc.
- Responsive spacing system: `--space-xs` through `--space-3xl`
- Design tokens for shadows, borders, and border radius
- Imported globally in `+layout.svelte`

**Dark Mode Implementation**:
- Toggle button in header with sun/moon icons
- Persists user preference in localStorage
- Falls back to system preference on first visit
- Smooth transitions between themes

**Component Styles**:
- Each page uses scoped `<style>` blocks
- Leverages global CSS variables for consistency
- Scroll reveal animations with `.scroll-reveal` class
- Responsive design with mobile-first approach

### Project Data Structure

Projects are centralized in `src/lib/data/projects.ts` for reusability:

```typescript
interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  link?: string;
  category: string;
  featured?: boolean;
  features: string[];
  challenges: string[];
}

export const projects: Project[] = [...];
```

**Project Features**:
- Centralized data in `src/lib/data/projects.ts`
- Featured badge system for highlighting key projects
- Slug-based routing for detailed project pages (`/projects/[slug]`)
- Rich project details including features and challenges
- Category-based organization (Full-Stack, Frontend, Backend)
- External links with proper security attributes

**When adding new projects**:
1. Add project objects to the `projects` array in `src/lib/data/projects.ts`
2. Include all required fields: `slug`, `title`, `description`, `longDescription`, `tech`, `category`, `features`, `challenges`
3. Optional fields: `link`, `featured`
4. Projects are automatically rendered in both list and detail views

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
- Centralized data management in `src/lib/data/`
- External links use `target="_blank" rel="noopener noreferrer"`
- Responsive design uses CSS Grid and Flexbox with mobile-first approach
- Accessibility: semantic HTML, ARIA labels, keyboard navigation support
- SEO: meta tags, Open Graph, structured data

## Static Assets

Located in `static/` directory:
- `favicon.png` - Site favicon
- `bartek.png` - Profile image
- `resume.pdf` - Downloadable resume
- `robots.txt` - SEO crawler instructions

## Features

### Dark Mode
- Manual toggle in header (sun/moon icon)
- Persists preference in localStorage
- Falls back to system preference (`prefers-color-scheme`)
- Smooth transitions between themes
- Implementation in `src/routes/+layout.svelte:10-39`

### Custom Error Pages
- Styled 404 page with helpful navigation
- Error state handling for 500 and other errors
- Animated visual elements and call-to-action buttons
- Implementation in `src/routes/+error.svelte`

### SEO & Accessibility
- Semantic HTML structure
- Meta tags and Open Graph data
- Descriptive ARIA labels
- Keyboard navigation support
- `robots.txt` for search engine crawlers

### Animations
- Scroll reveal animations with `.scroll-reveal` class
- Smooth page transitions
- Floating animations for decorative elements
- Implementation in `src/routes/+layout.svelte:41-66`

### Mobile-First Design
- Responsive navigation with hamburger menu
- Touch-friendly interactive elements
- Optimized layouts for all screen sizes
- Progressive enhancement approach
