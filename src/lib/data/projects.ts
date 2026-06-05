export interface Project {
	slug: string;
	title: string;
	description: string;
	longDescription: string;
	tech: string[];
	link?: string;
	github?: string;
	demos?: { label: string; url: string }[];
	category: string;
	featured?: boolean;
	features: string[];
	challenges: string[];
}

export const projects: Project[] = [
	{
		slug: 'asini',
		title: 'Asini',
		description:
			'pnpm monorepo powering multiple live Polish web products — 8 publishable @nomideusz Svelte 5 packages, 5 production apps, and Python data pipelines.',
		longDescription:
			'Asini is my main product workspace. I develop everything here in a pnpm monorepo, then sync individual apps to standalone GitHub repos for deployment (Netlify, Vercel, Railway). Shared libraries cover calendar UI, booking logic, Polish-aware search, i18n, QR codes, media uploads, Stripe Connect, and email templates. Production apps include a tour booking platform, a yoga school directory, two e-commerce stores, and a civic recycling map.',
		tech: ['pnpm', 'SvelteKit', 'Svelte 5', 'TypeScript', 'Turso', 'PostgreSQL', 'Drizzle', 'Python'],
		github: 'https://github.com/nomideusz/asini',
		category: 'Full-Stack',
		featured: true,
		features: [
			'8 @nomideusz packages extracted from proven tour-booking domain logic',
			'Apps: thebest.travel, szkolyjogi.pl, kompi.pl, fixtar.pl, recycling.kompi.pl',
			'@nomideusz/svelte-search — FTS5/trigram search with Polish locale support',
			'Sync scripts push monorepo slices to standalone deploy repos with bundled workspace deps',
			'Python scrapers (yoga-scraper, kompi-scraper) feed shared Turso databases'
		],
		challenges: [
			'Keeping package APIs generic while apps have different databases (Postgres vs Turso)',
			'Bundling workspace packages as file: deps when syncing to standalone deploy repos',
			'Enforcing one-way dependency flow — apps import packages, never the reverse'
		]
	},
	{
		slug: 'thebest',
		title: 'thebest.travel',
		description:
			'Tour booking platform rebuild for Cracow — 100+ tours, Stripe Connect, 3-layer search, and all 8 Asini packages integrated.',
		longDescription:
			'thebest.travel is a live tour booking business I am rebuilding from WordPress into SvelteKit. The new app uses PostgreSQL, Lucia auth, Stripe Connect, and every @nomideusz package in the monorepo — calendar, scheduler, search, i18n, media, payments, notify, and QR. It imports production data (50 tours, 18 guides) and implements a 3-step booking widget, cancellation policies, and SEO with JSON-LD.',
		tech: [
			'SvelteKit',
			'Svelte 5',
			'PostgreSQL',
			'Drizzle ORM',
			'Stripe Connect',
			'Lucia',
			'Google Maps'
		],
		link: 'https://thebest.travel',
		github: 'https://github.com/nomideusz/asini',
		category: 'Full-Stack',
		featured: true,
		features: [
			'BookingWidget — 3-step flow: slot selection, participants, Stripe checkout',
			'@nomideusz/svelte-scheduler — pricing engine with 4 models, lazy slot generation',
			'3-layer hybrid search: client index, server FTS/pg_trgm, external fallback',
			'Tour CRUD, guide dashboard, QR verification, and refund paths',
			'Deployed on Railway from the asini monorepo'
		],
		challenges: [
			'Extracting booking domain logic into reusable packages without legacy WordPress debt',
			'Virtual slot materialization and tour slot state machine edge cases',
			'Stripe Connect fee handling with guide cancellation = 100% refund rule'
		]
	},
	{
		slug: 'asini-packages',
		title: '@nomideusz Packages',
		description:
			'Suite of 8 Svelte 5 libraries — calendar, scheduler, search, i18n, QR, media, payments, and email templates. Published to npm.',
		longDescription:
			'These packages are developed inside the Asini monorepo and published under @nomideusz. They started as extracted logic from tour booking and now power multiple production apps. Four packages ship with live interactive demos — calendar, search, i18n, and QR — so you can try the APIs in the browser before installing from npm.',
		tech: ['Svelte 5', 'TypeScript', 'Vitest', 'npm', 'FTS5', 'pg_trgm'],
		link: 'https://svelte-calendar.xyz',
		github: 'https://github.com/nomideusz/asini',
		demos: [
			{ label: 'svelte-calendar', url: 'https://svelte-calendar.xyz' },
			{ label: 'svelte-search', url: 'https://svelte-search-eight.vercel.app' },
			{ label: 'svelte-i18n', url: 'https://svelte-i18n-five.vercel.app' },
			{ label: 'svelte-qr', url: 'https://svelte-qr.vercel.app' }
		],
		category: 'Open Source',
		featured: true,
		features: [
			'svelte-calendar — day/week planner, drag-and-drop, auto-theme (demo: svelte-calendar.xyz)',
			'svelte-search — FTS5/trigram search, geo proximity, Polish query resolver (live playground)',
			'svelte-i18n — runes-native i18n with LocaleSwitcher and flat JSON keys (live preview)',
			'svelte-qr — zero-dep TypeScript encoder with SVG output and playground',
			'svelte-scheduler, svelte-media, svelte-payments, svelte-notify — used in production apps'
		],
		challenges: [
			'Package APIs must stay framework-agnostic — no Tailwind inside libraries',
			'Search adapters for both Turso (FTS5) and PostgreSQL (pg_trgm) dialects',
			'Calendar and scheduler bridge via adapter pattern without tight coupling'
		]
	},
	{
		slug: 'szkolyjogi',
		title: 'szkolyjogi.pl',
		description:
			'Polish yoga school directory — 700+ schools across 60 cities, 3-layer search, and a Python scraper pipeline.',
		longDescription:
			'szkolyjogi.pl is a live directory of yoga schools in Poland, built in apps/yoga inside the Asini monorepo. Listings are ingested by a Python scraper (tools/yoga-scraper) into Turso, then served through city and category pages with @nomideusz/svelte-search and svelte-calendar. The app doubles as an integration sandbox for new package versions.',
		tech: ['SvelteKit', 'Svelte 5', 'Turso', 'Drizzle ORM', 'Google Maps', 'Python'],
		link: 'https://szkolyjogi.pl',
		github: 'https://github.com/nomideusz/asini',
		category: 'Full-Stack',
		features: [
			'700+ yoga schools with city and category browse pages',
			'3-layer hybrid search with admin analytics dashboard',
			'School claim flow and Resend email notifications',
			'Synced to nomideusz/yoga for Vercel deployment'
		],
		challenges: [
			'Normalizing scraped data from hundreds of varied school websites',
			'Search performance across a large SQLite edge database',
			'Keeping package sandbox and production site on the same codebase'
		]
	},
	{
		slug: 'fixtar',
		title: 'FixTar',
		description:
			'E-commerce for power tools — BaseLinker inventory sync, FTS5 search, and Better Auth. Twin architecture of kompi.pl.',
		longDescription:
			'FixTar (fixtar.pl) is an online store for elektronarzędzia, developed in apps/fixtar inside Asini. Products sync read-only from BaseLinker into Turso; search runs through @nomideusz/svelte-search with Polish FTS5 and trigram matching. Synced to nomideusz/fixtar for Vercel deployment.',
		tech: ['SvelteKit', 'Svelte 5', 'Turso', 'Drizzle ORM', 'Better Auth', 'BaseLinker'],
		link: 'https://fixtar.pl',
		github: 'https://github.com/nomideusz/asini',
		category: 'Full-Stack',
		features: [
			'BaseLinker read-only inventory sync into Turso edge DB',
			'FTS5 + trigram fuzzy search with Polish locale',
			'Better Auth with email/password and OAuth',
			'8 merged product categories from heterogeneous supplier data'
		],
		challenges: [
			'Read-only sync pipeline without write conflicts to BaseLinker',
			'Category merging across supplier taxonomies',
			'Sharing search package with kompi while keeping separate product sources'
		]
	},
	{
		slug: 'kompi',
		title: 'Kompi',
		description:
			'E-commerce for mikrokomputery — Turso, Przelewy24 payments, and shared @nomideusz/svelte-search.',
		longDescription:
			'Kompi.pl is the e-commerce storefront I build for Kompi, the company on my GitHub profile. It lives in apps/kompi inside Asini and shares the same Turso + search stack as FixTar, with Przelewy24 and bank transfer payments via a pluggable payment service layer. Synced to nomideusz/kompi for Netlify.',
		tech: ['SvelteKit', 'Svelte 5', 'Turso', 'Drizzle ORM', 'Better Auth', 'Przelewy24'],
		link: 'https://kompi.pl',
		github: 'https://github.com/nomideusz/asini',
		category: 'Full-Stack',
		features: [
			'Full storefront — products, cart, checkout, account, admin',
			'FTS5 + trigram search via @nomideusz/svelte-search',
			'Przelewy24 and bank transfer payment options',
			'Blog and deals sections'
		],
		challenges: [
			'Pluggable payment service layer for multiple providers',
			'Edge database migrations with Drizzle on Turso',
			'Twin-app architecture shared with FixTar but different inventory model'
		]
	},
	{
		slug: 'kompi-recycling',
		title: 'recycling.kompi.pl',
		description:
			'Interactive map of electronics recycling points in Poland, fed by a Python scraper pipeline.',
		longDescription:
			'recycling.kompi.pl shows collection points for electronic waste across Poland. Data comes from tools/kompi-scraper — Google Places, OpenStreetMap, and retail chain sources — into Turso. The SvelteKit app renders a clustered Google Maps interface with dynamic sitemaps and OG metadata.',
		tech: ['SvelteKit', 'Svelte 5', 'Turso', 'Google Maps', 'Python'],
		link: 'https://recycling.kompi.pl',
		github: 'https://github.com/nomideusz/asini',
		category: 'Full-Stack',
		features: [
			'Map of recycling collection points with marker clustering',
			'Python scraper ingesting Google Places, OSM, and retail chain data',
			'Dynamic sitemap, Open Graph, and web manifest',
			'Synced to nomideusz/kompi-recycling for Netlify'
		],
		challenges: [
			'Deduplicating points from multiple data sources with different schemas',
			'Keeping map performant with thousands of markers via clustering',
			'Scraper reliability across third-party APIs with rate limits'
		]
	},
	{
		slug: 'zaur',
		title: 'Zaur',
		description:
			'Complete self-hosted email platform — Stalwart mail server, JMAP webmail with calendar and contacts, Logto passkey auth, registration, and Dinosaurus with Navidrome radio.',
		longDescription:
			'Zaur is a full-stack email platform I build and operate, separate from the Asini monorepo. Stalwart runs the mail server at mail.zaur.app (JMAP, IMAP, SMTP). The SvelteKit webmail client handles inbox, folders, search operators, compose, contacts built from mail history, calendar, and offline caching via IndexedDB with an outbox queue. Account registration at register.zaur.app provisions Stalwart mailboxes, PostgreSQL password hashes, and Logto users — with invitation magic links, password reset, and optional passkey enrollment. On the creative side, Dinosaurus (dino.zaur.app) is a pixel-art mascot that sorts live content cards into category bins, backed by a WebSocket archive server and a Navidrome radio at music.zaur.app fed by ListenBrainz and MediaCMS ingest pipelines. Everything deploys to CapRover on a Contabo VPS.',
		tech: [
			'SvelteKit',
			'Svelte 5',
			'Stalwart',
			'JMAP',
			'Logto',
			'PostgreSQL',
			'Navidrome',
			'CapRover',
			'RxDB'
		],
		link: 'https://webmail.zaur.app',
		github: 'https://github.com/nomideusz/zaur',
		demos: [
			{ label: 'webmail', url: 'https://webmail.zaur.app' },
			{ label: 'dino', url: 'https://dino.zaur.app' },
			{ label: 'music', url: 'https://music.zaur.app' },
			{ label: 'register', url: 'https://register.zaur.app' }
		],
		category: 'Full-Stack',
		featured: true,
		features: [
			'Stalwart mail server — JMAP, IMAP, SMTP with hybrid Logto OIDC + PostgreSQL auth',
			'Webmail — mail, contacts, calendar, offline outbox, synced settings across devices',
			'Register — self-service signup, invitation links, password reset, passkey via Logto',
			'Dinosaurus — animated sky with sun/moon phases, live weather, content-sorting game, Navidrome radio',
			'Claude musings + ElevenLabs TTS and ambient SFX on dino.zaur.app',
			'Music pipeline — ListenBrainz recommendations → yt-dlp ingest → Navidrome → dino radio'
		],
		challenges: [
			'Hybrid auth — Logto Bearer tokens for webmail OIDC alongside PostgreSQL passwords for IMAP/SMTP',
			'Offline-first mail with RxDB/IndexedDB per account and encrypted httpOnly session cookies',
			'Seven CapRover apps (webmail, register, Stalwart mail, Logto auth, dino, dino-archive, Navidrome) with different deploy contexts'
		]
	},
	{
		slug: 'picarro-dashboard',
		title: 'Picarro Survey Dashboard',
		description:
			'Multi-tenant gas survey dashboard for Picarro clients (GNI, WWU, PSG). Replaced PocketBase + VPS setups with one SvelteKit app and a 280-line ArcGIS sync engine.',
		longDescription:
			'Built for my work operating Picarro mobile measuring vehicles. The dashboard unifies gas leak survey data for three utility clients — Gas Networks Ireland, Wales & West Utilities, and Polska Spółka Gazownictwa — in a single SvelteKit app on Railway. An ArcGIS REST sync engine pulls reports, driving sessions, indications, and FOV gaps into PostgreSQL, replacing separate 55K-line sync scripts and three PocketBase instances. Users switch between client projects, browse paginated reports with role-based columns, view survey maps, and export PDF or PowerPoint summaries via Puppeteer. Source lives in a private GitHub repository.',
		tech: [
			'SvelteKit',
			'Svelte 5',
			'PostgreSQL',
			'Drizzle ORM',
			'ArcGIS REST',
			'Railway',
			'Puppeteer',
			'svelteplot'
		],
		link: 'https://picarro.app',
		github: 'https://github.com/nomideusz/picarro-dashboard',
		category: 'Full-Stack',
		features: [
			'Multi-project tenancy — GNI, WWU, PSG with per-client ArcGIS feature servers',
			'ArcGIS → Postgres sync with deletion detection, breadcrumb aggregation, and SSE progress',
			'Configurable dashboard cards — network progress, coverage, indications, survey stats, FOV gaps',
			'Reports, surveys, indications, and Google Maps views with Excel/PDF/PPTX export',
			'Role-based access — superadmin, per-project admin, and viewer with user management'
		],
		challenges: [
			'Replacing 55K-line per-client sync scripts with one shared engine (~280 lines)',
			'Deduplicating ArcGIS session features and handling orphan report references',
			'Never storing 600K+ breadcrumb rows — server-side ArcGIS GROUP BY aggregation instead'
		]
	},
	{
		slug: 'igg',
		title: 'IGG Document Assistant',
		description:
			'LLM-assisted proposal tool for Picarro × PSG IGG methane inventory documents. Upload DOCX, work section-by-section in a 3-pane editor, translate references, and export.',
		longDescription:
			'Built to help draft Picarro responses to PSG\'s IGG (methane emissions inventory) questionnaire. Users upload the main English DOCX — the app parses it into 23 sections via mammoth, then provides a 3-pane workspace: section navigation, original source text, and a proposal editor with internal notes. German reference documents can be uploaded separately and translated to English through chunked OpenAI calls. A references view supports drag-and-drop reordering; the export view assembles finished proposals into copy-ready markdown. Progress is tracked per section with pending, in-progress, and complete states.',
		tech: [
			'SvelteKit',
			'Svelte 5',
			'SQLite',
			'Drizzle ORM',
			'OpenAI',
			'mammoth',
			'Fly.io',
			'bits-ui'
		],
		link: 'https://igg-assistant.fly.dev',
		github: 'https://github.com/nomideusz/igg',
		category: 'Full-Stack',
		features: [
			'Dashboard — upload main IGG document, track completion across all sections',
			'3-pane section editor — nav sidebar, original content, proposal + notes with word diff',
			'References view — upload German source docs, LLM translation with progress tracking',
			'Export view — assemble proposals into markdown (original + proposal or proposals only)',
			'DOCX parsing — automatic section extraction from heading structure'
		],
		challenges: [
			'Chunking long reference documents for reliable OpenAI translation without token overflows',
			'HTML-to-markdown conversion for diff view while preserving tables and structure',
			'Keeping section navigation, save state, and status in sync across a multi-view workflow'
		]
	},
	{
		slug: 'kruk-live',
		title: 'kruk.live',
		description:
			'Real-time collaborative apps built with Phoenix LiveView and Svelte 5.',
		longDescription:
			'kruk.live combines Phoenix LiveView for server-driven updates with Svelte 5 on the client. Active development in the rzeczywiscie repository on GitHub.',
		tech: ['Phoenix LiveView', 'Elixir', 'Svelte 5', 'LiveSvelte', 'PostgreSQL'],
		link: 'https://kruk.live',
		github: 'https://github.com/nomideusz/rzeczywiscie',
		category: 'Full-Stack',
		features: [
			'Phoenix LiveView for real-time server-driven UI',
			'Svelte 5 components embedded via LiveSvelte',
			'Collaborative features with low-latency updates'
		],
		challenges: [
			'Integrating Svelte 5 islands inside LiveView templates',
			'Managing concurrent state across connected clients',
			'Balancing Elixir process model with frontend interactivity'
		]
	},
	{
		slug: 'pikastro',
		title: 'Pikastro',
		description:
			'Website for an interior design studio. Portfolio gallery, service pages, and lead-generation layout.',
		longDescription:
			'Pikastro.eu is a client site for a Kraków interior design studio. The site presents their project gallery, design process, and contact paths. Built with SvelteKit and maintained in a dedicated GitHub repository.',
		tech: ['SvelteKit', 'Svelte 5', 'Tailwind CSS', 'Responsive Design'],
		link: 'https://pikastro.eu',
		github: 'https://github.com/nomideusz/pikastro',
		category: 'Client Sites',
		features: [
			'Image-heavy portfolio with optimized loading',
			'Service and process pages for lead generation',
			'Responsive layout for mobile browsing',
			'Deployed and maintained via GitHub'
		],
		challenges: [
			'Fast page loads with many high-resolution interior photos',
			'Clear information architecture for a visual-first brand',
			'Balancing Polish content with accessible structure'
		]
	},
	{
		slug: 'kurcz',
		title: 'Kurcz.pl',
		description:
			'Health information site about muscle cramps. Lightweight SPA with Alpine.js.',
		longDescription:
			'Kurcz.pl is a Polish-language health resource about muscle cramps (kurcze mięśniowe). It uses Alpine.js for client-side navigation and Tailwind for styling, keeping the bundle small and pages fast to load.',
		tech: ['Alpine.js', 'Tailwind CSS', 'JavaScript', 'SPA'],
		link: 'https://kurcz.pl',
		github: 'https://github.com/nomideusz/kurcz',
		category: 'Client Sites',
		features: [
			'Single-page navigation without full reloads',
			'Readable typography for medical content',
			'Lightweight stack with no heavy framework',
			'Mobile-friendly reading experience'
		],
		challenges: [
			'Presenting medical information clearly without overwhelming readers',
			'SPA routing and state with minimal JavaScript',
			'Core Web Vitals on a content-focused site'
		]
	},
	{
		slug: 'tutitutu',
		title: 'TUTITUTU',
		description:
			'Portfolio site for an interior architecture firm with 25+ years of work. Image-first, minimalist layout.',
		longDescription:
			'TUTITUTU.pl showcases projects from a Kraków interior architecture studio founded in 1997. The site prioritizes photography over chrome — large galleries, WebP images, and a layout that works across portrait and landscape shots.',
		tech: ['SvelteKit', 'WebP', 'CSS Grid', 'Google Analytics'],
		link: 'https://tutitutu.pl',
		github: 'https://github.com/nomideusz/tuti',
		category: 'Client Sites',
		features: [
			'WebP images with lazy loading',
			'Minimal UI that stays out of the way of the work',
			'Gallery spanning decades of residential and commercial projects',
			'Responsive grid for mixed aspect-ratio photography'
		],
		challenges: [
			'Image optimization without visible quality loss',
			'Layout that handles both portrait and landscape photos',
			'Performance with a large historical archive'
		]
	},
	{
		slug: 'wibroakustyka',
		title: 'Wibroakustyka.ai',
		description:
			'Product site for the Graal vibroacoustic chair. Wellness technology showcase with theme switching.',
		longDescription:
			'Wibroakustyka.ai presents the Graal vibroacoustic chair — a wellness product combining sound and vibration therapy. The site covers product features, event coverage, and user testimonials. Source is in the wibro repository on GitHub.',
		tech: ['Astro', 'JavaScript', 'Tailwind CSS', 'Partytown'],
		link: 'https://wibroakustyka.ai',
		github: 'https://github.com/nomideusz/wibro',
		category: 'Client Sites',
		features: [
			'Product showcase with photo and video content',
			'Light and dark theme switching',
			'Event and testimonial sections',
			'Analytics loaded off the main thread via Partytown'
		],
		challenges: [
			'Explaining niche wellness tech to a general audience',
			'Rich media without sacrificing load performance',
			'Theme transitions without layout flash'
		]
	},
	{
		slug: 'intertech-poland',
		title: 'Intertech Poland',
		description:
			'B2B site for a scientific equipment distributor. Product catalog, blog, and dark mode.',
		longDescription:
			'Intertech Poland distributes Picarro and UGT measurement equipment. The site serves as a product catalog and industry blog for a specialized B2B audience. Rebuilt as version 2 in the inter repository.',
		tech: ['SvelteKit', 'JavaScript', 'Netlify', 'Markdown', 'Tailwind CSS'],
		link: 'https://intertechpoland.pl',
		github: 'https://github.com/nomideusz/inter',
		category: 'Client Sites',
		features: [
			'Product pages for CRDS spectroscopy and environmental monitoring gear',
			'Blog for industry news and technical articles',
			'Dark and light mode',
			'Responsive layout for desktop and mobile'
		],
		challenges: [
			'Making dense technical specs scannable for engineers',
			'Blog content workflow with markdown',
			'Corporate design that still feels current'
		]
	},
	{
		slug: 'kino',
		title: 'Kino.net.pl',
		description:
			'Minimal fullscreen video loop. A small experiment in distraction-free media presentation.',
		longDescription:
			'Kino.net.pl is a one-page site that plays a seamless fullscreen video loop. It is a deliberate exercise in restraint — no navigation, no chrome, just the video.',
		tech: ['HTML5 Video', 'CSS'],
		link: 'https://kino.net.pl',
		github: 'https://github.com/nomideusz/kino',
		category: 'Client Sites',
		features: [
			'Seamless video looping',
			'Fullscreen presentation',
			'Minimal markup and styling'
		],
		challenges: [
			'Consistent autoplay and loop behavior across browsers',
			'Video compression for acceptable load times'
		]
	}
];
