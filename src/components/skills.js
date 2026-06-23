import i18next from "../i18n/index.js";

export function Skills() {
	const skillGroups = [
		{
			title: "Next.js",
			icon: "devicon-nextjs-plain",
			items: [
				"App Router",
				"API Routes",
				"Server Actions",
				"SSR / SSG / ISR / CSR",
				"Server Components",
				"Suspense",
				"Performance Optimization",
				"JWT Authentication",
			],
		},
		{
			title: "React & Ecosystem",
			icon: "devicon-react-original",
			items: [
				"JSX",
				"Functional Components",
				"Hooks",
				"Component Architecture",
				"Context API",
				"Redux / Redux Toolkit",
				"Zustand",
				"React Router",
				"TanStack Query",
				"React Hook Form",
				"Zod",
			],
		},
		{
			title: "JavaScript / TypeScript",
			icon: "devicon-javascript-plain",
			items: [
				"Modern JavaScript ES6+",
				"TypeScript Interfaces",
				"TypeScript Generics",
				"Promises",
				"Async / Await",
				"Fetch API",
				"Axios",
				"DOM Manipulation",
				"Functional Programming Concepts",
			],
		},
		{
			title: "Web Fundamentals",
			icon: "devicon-html5-plain",
			items: [
				"REST API",
				"JSON",
				"JWT Authentication",
				"Cookies",
				"SPA Concepts",
				"Client-Side Rendering",
			],
		},
		{
			title: "HTML & CSS",
			icon: "devicon-css3-plain",
			items: [
				"HTML5",
				"Semantic Tags",
				"CSS3",
				"Responsive Web Design",
				"Flexbox",
				"CSS Grid",
				"Media Queries",
				"Animations",
			],
		},
		{
			title: "UI & Styling",
			icon: "devicon-tailwindcss-plain",
			items: [
				"Tailwind CSS",
				"Styled-Components",
				"CSS Modules",
				"Material UI",
				"Headless UI",
				"ShadCN UI",
			],
		},
		{
			title: "Tools & Workflow",
			icon: "devicon-git-plain",
			items: [
				"Git",
				"GitFlow",
				"GitHub",
				"npm / yarn / pnpm",
				"Postman",
				"Figma",
				"Vite",
				"MongoDB",
			],
		},
	];

	return `
	<section class="skills-section fade-in">

		<div class="skills-hero glass-card">
			<span class="skills-eyebrow">Technical Stack</span>
			<h2 class="section-title">✨ ${i18next.t("skills_title")}</h2>
			<p class="skills-intro">
				A practical frontend skill set focused on building responsive, modern, scalable and user-friendly web applications.
			</p>
		</div>

		<div class="skills-modern-grid">
			${skillGroups
				.map(
					(group) => `
					<article class="skill-detail-card">
						<div class="skill-card-top">
							<div class="skill-main-icon">
								<i class="${group.icon} colored"></i>
							</div>

							<div>
								<h3>${group.title}</h3>
								<span>${group.items.length} topics</span>
							</div>
						</div>

						<div class="skill-tags">
							${group.items
								.map(
									(item) => `
									<span class="skill-tag">
										${item}
									</span>
								`,
								)
								.join("")}
						</div>
					</article>
				`,
				)
				.join("")}
		</div>

	</section>
	`;
}



