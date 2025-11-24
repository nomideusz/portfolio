export interface Project {
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

export const projects: Project[] = [
	// 1. kruk.live
	{
		slug: 'kruk-live',
		title: 'kruk.live',
		description: 'Real-time collaboration platform featuring a shared drawing board, Kanban board, live world map, and real estate scraper. Built with Phoenix LiveView and Svelte 5 for instant synchronization.',
		longDescription: 'kruk.live is a cutting-edge real-time collaboration platform designed to bridge the gap between remote teams. It integrates multiple productivity tools into a single, cohesive interface. The platform leverages the power of Phoenix LiveView for backend-driven real-time updates, ensuring that every stroke on the drawing board or card movement on the Kanban board is instantly reflected across all connected clients. The addition of Svelte 5 on the frontend provides a highly responsive and interactive user experience.',
		tech: ['Phoenix LiveView', 'Svelte 5', 'LiveSvelte', 'Real-time', 'Elixir', 'Tailwind CSS'],
		link: 'https://kruk.live',
		category: 'Full-Stack',
		featured: true,
		features: [
			'Shared Drawing Board: Collaborative whiteboard with real-time syncing.',
			'Kanban Board: Drag-and-drop task management for teams.',
			'Live World Map: Visualize user activity or data points geographically in real-time.',
			'Real Estate Scraper: Live property listings from OLX and Otodom with auto-updates.',
			'Instant Synchronization: Powered by Phoenix Channels for sub-millisecond updates.'
		],
		challenges: [
			'Synchronizing complex state across multiple clients with minimal latency.',
			'Integrating Svelte 5 components seamlessly within Phoenix LiveView templates.',
			'Handling concurrent updates on the drawing board to prevent conflicts.',
			'Optimizing the real estate scraper to handle large datasets without blocking the application.'
		]
	},
	// 2. zaur
	{
		slug: 'zaur',
		title: 'Zaur',
		description: 'The simplest booking system with QR codes for independent tour guides. Features PWA capabilities, Stripe payments, and instant reservations.',
		longDescription: 'Zaur is a comprehensive booking solution tailored for independent tour guides, allowing them to keep 100% of their earnings. It simplifies the reservation process through a QR-code-based system, allowing tourists to book tours instantly. As a Progressive Web App (PWA), it offers an app-like experience without the need for installation. The platform integrates Stripe for secure payments, Google Maps for meeting point navigation, and live weather updates to help guides and tourists plan better.',
		tech: ['SvelteKit', 'Stripe API', 'Google Maps', 'OpenWeather API', 'PWA', 'TypeScript', 'Supabase'],
		link: 'https://zaur.app',
		category: 'Full-Stack',
		featured: true,
		features: [
			'QR Code Booking: Instant access to booking pages via physical QR codes.',
			'Zero Commission: Independent tour guides keep 100% of their earnings.',
			'PWA Support: Offline capabilities and installability on mobile devices.',
			'Stripe Integration: Secure and fast payment processing.',
			'Weather Forecasts: Real-time weather data integration for tour planning.'
		],
		challenges: [
			'Implementing a robust PWA strategy to ensure reliability in areas with poor connectivity.',
			'Securely handling payment flows and webhooks with Stripe.',
			'Designing a mobile-first UI that remains intuitive for users on the go.',
			'Integrating multiple third-party APIs (Maps, Weather, Stripe) while maintaining fast load times.'
		]
	},
	// 3. pikastro
	{
		slug: 'pikastro',
		title: 'Pikastro',
		description: 'AI-powered interior design studio website. "Enough beige. Time for color!" - showcasing a modern, colorful approach to design with AI integration.',
		longDescription: 'Pikastro is a forward-thinking interior design studio website that highlights the intersection of creativity and technology. With the motto "Enough beige. Time for color!", it showcases a vast portfolio of over 50 projects and emphasizes the studio\'s use of AI in the design process (AI Prototyping). The site serves as both a portfolio and a lead generation tool, demonstrating the studio\'s modern, bold, and colorful approach to interior architecture.',
		tech: ['Web Development', 'UI/UX Design', 'AI Integration', 'Responsive Design', 'SvelteKit', 'Tailwind CSS'],
		link: 'https://pikastro.eu',
		category: 'Web Development',
		featured: true,
		features: [
			'AI Design Process: Consultation, AI Prototyping, Refinement, Documentation.',
			'Bold Aesthetic: "Dość beżu. Czas na kolor!" (Enough beige. Time for color!).',
			'Extensive Portfolio: Gallery of over 50 completed interior design projects.',
			'Service Breakdown: Detailed descriptions of design packages and processes.',
			'Lead Generation: Optimized call-to-action sections for potential clients.'
		],
		challenges: [
			'Organizing a large portfolio in a way that is easy to navigate.',
			'Visually representing the "AI-powered" aspect of the service without being gimmicky.',
			'Creating a distinct brand identity that stands out in the interior design market.',
			'Ensuring high performance with image-heavy content.'
		]
	},
	// 4. kurcz.pl
	{
		slug: 'kurcz',
		title: 'Kurcz.pl',
		description: 'Health information website focused on muscle cramps. Component-based SPA with modern loading states and error handling.',
		longDescription: 'Kurcz.pl is a specialized health information resource dedicated to muscle cramps. It provides users with reliable medical information, prevention tips, and treatment options. Built as a Single Page Application (SPA), it offers a smooth, app-like browsing experience with instant page transitions and modern UI patterns for loading and error states.',
		tech: ['Alpine.js', 'Tailwind CSS', 'PNPM', 'SPA', 'HTML5'],
		link: 'https://kurcz.pl',
		category: 'Web Development',
		features: [
			'SPA Architecture: Seamless navigation without full page reloads.',
			'Modern UI/UX: Clean, readable typography and intuitive layout.',
			'Error Handling: Graceful degradation and user-friendly error messages.',
			'Fast Performance: Lightweight implementation using Alpine.js.',
			'Mobile Optimized: Excellent reading experience on smartphones.'
		],
		challenges: [
			'Creating a lightweight SPA without a heavy framework overhead.',
			'Ensuring content is accessible and easy to read for all age groups.',
			'Managing state effectively with Alpine.js for a multi-page feel.',
			'Optimizing for Core Web Vitals to ensure good search engine ranking.'
		]
	},
	// 5. tutitutu
	{
		slug: 'tutitutu',
		title: 'TUTITUTU',
		description: 'Professional portfolio website for an established interior architecture firm. Showcasing 25+ years of design expertise with a focus on revitalization and modern aesthetics.',
		longDescription: 'TUTITUTU is a visual-first portfolio website for a prestigious interior architecture firm established in 1997. The site is designed to let the work speak for itself, featuring large, high-quality image galleries and a minimalist UI. It showcases over 25 years of design expertise, including designs for villas, residences, offices, and public spaces, as well as the revitalization of old interiors.',
		tech: ['SvelteKit', 'WebP Optimization', 'Google Analytics', 'Responsive Design', 'CSS Grid'],
		link: 'https://tutitutu.pl/',
		category: 'Web Development',
		features: [
			'High-Performance Gallery: Optimized image loading with WebP and lazy loading.',
			'Minimalist Design: Distraction-free interface focusing on architectural photography.',
			'Extensive Portfolio: Showcasing projects from over two decades of work.',
			'Responsive Layout: Fluid adaptation to all screen sizes.',
			'Bilingual Content: Support for international clients.'
		],
		challenges: [
			'Optimizing a large number of high-resolution images without compromising visual quality.',
			'Creating a layout that adapts gracefully to both portrait and landscape photography.',
			'Ensuring the site remains fast and responsive despite the heavy media content.'
		]
	},
	// 6. wibroakustyka.ai
	{
		slug: 'wibroakustyka',
		title: 'Wibroakustyka.ai',
		description: 'Showcase website for the Graal vibroacoustic chair. Immersive wellness product site featuring biofeedback integration and therapeutic applications.',
		longDescription: 'Wibroakustyka.ai is an immersive product showcase for the Graal vibroacoustic chair, often described as a "zero gravity" chair for audiophiles. The website is designed to reflect the futuristic and therapeutic nature of the product. It features a modern, sleek design with dark/light theme switching and detailed sections explaining the science behind vibroacoustic therapy, biofeedback integration, and VR compatibility.',
		tech: ['Astro', 'Google Analytics', 'Partytown', 'Theme Switching', 'React', 'Tailwind CSS'],
		link: 'https://wibroakustyka.ai/',
		category: 'Web Development',
		features: [
			'Immersive Product Showcase: High-quality visuals and detailed feature breakdowns.',
			'Event Coverage: Updates and videos from events like Audio Video Show.',
			'Theme Switching: Dynamic light and dark modes to match the wellness aesthetic.',
			'Performance Optimization: Fast loading times using Astro\'s island architecture.',
			'Testimonials: Video reviews and feedback from users.'
		],
		challenges: [
			'Balancing rich visual content with high performance requirements.',
			'Explaining a niche wellness technology to a broader audience.',
			'Implementing smooth theme transitions without flashing unstyled content.',
			'Integrating third-party scripts (like Analytics) without impacting main thread performance.'
		]
	},
	// 7. Intertech Poland
	{
		slug: 'intertech-poland',
		title: 'Intertech Poland',
		description: 'Exclusive distributor website for Picarro and UGT. B2B platform for environmental monitoring, CRDS spectroscopy, and scientific measurement solutions.',
		longDescription: 'Intertech Poland is a professional B2B platform designed for a leading distributor of scientific measurement solutions. The website serves as a digital catalog and informational hub for high-tech equipment like CRDS spectroscopy, AI-powered leak detection systems, and UGT lysimeters. It is built to convey trust and technical expertise, featuring a clean, corporate design with a blog for industry news and product updates.',
		tech: ['SvelteKit', 'Netlify', 'Dark Mode', 'Blog Integration', 'Markdown', 'Tailwind CSS'],
		link: 'https://intertechpoland.pl/',
		category: 'Web Development',
		features: [
			'Product Catalog: Detailed showcase of scientific equipment (Picarro, UGT).',
			'Specialized Solutions: Sections for emissions measurement, leak detection, and pipe replacement.',
			'Blog Integration: Content management system for industry news and articles.',
			'Dark/Light Mode: User preference support for better readability.',
			'Responsive Design: Optimized for viewing on desktops, tablets, and mobiles.'
		],
		challenges: [
			'Presenting complex technical specifications in an accessible and readable format.',
			'Implementing a performant dark mode that respects system preferences.',
			'Optimizing high-resolution product images for fast loading.',
			'Structuring the content to appeal to a specialized B2B audience.'
		]
	},
	// 8. kino.net.pl
	{
		slug: 'kino',
		title: 'Kino.net.pl',
		description: 'Minimalist fullscreen video loop experience designed for visual immersion.',
		longDescription: 'Kino.net.pl is a minimalist web experience focused on delivering high-quality fullscreen video loops. It serves as a visual experiment in simplicity and media optimization, providing a distraction-free environment for video content.',
		tech: ['HTML5 Video', 'CSS3', 'Responsive Design'],
		link: 'https://kino.net.pl',
		category: 'Web Development',
		features: [
			'Seamless Video Looping: Continuous playback without interruption.',
			'Fullscreen Immersion: Distraction-free viewing experience.',
			'Minimalist UI: Focus remains entirely on the visual content.'
		],
		challenges: [
			'Optimizing video assets for fast loading on various connection speeds.',
			'Ensuring consistent playback behavior across different browsers and devices.'
		]
	}
];
