import type { Handle } from "remix/component";
import { css } from "remix/component";

import { Document } from "./document.tsx";

const SITE_URL = "https://www.micmcgrorty.dev/";

const FONT_STACK =
	"'Bricolage Grotesque', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif";
const MONO_STACK =
	"'JetBrains Mono', ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace";

const PROFILE = {
	name: "Michael McGrorty",
	title: "Senior Frontend Engineer",
	bio: "I'm a frontend engineer based in Scotland, with eight years of experience building for the web in React and TypeScript. I came into software from brewing, after five months of study, and I've been learning on the job ever since. I'm happy to make back-end changes when a feature calls for them, but the front end is where I'm at my best. I'm happiest working on a single product that the whole company is built around. Outside work I read a lot, play games, follow F1, football and the NFL, and enjoy travel and craft beer.",
	description:
		"Senior frontend engineer from Scotland with eight years of experience in React and TypeScript. Currently at HBK, previously at Bynder.",
};

type Role = { title: string; period: string };

type Job = {
	company: string;
	companyUrl?: string;
	companyNote?: string;
	period: string;
	roles: Role[];
	summary: string;
	highlights: string[];
	tags: string[];
};

const EXPERIENCE: Job[] = [
	{
		company: "HBK",
		companyUrl: "https://hbkworld.com",
		period: "September 2025 – Present",
		roles: [
			{ title: "Senior React Developer", period: "September 2025 – Present" },
		],
		summary:
			"I work on ReliaSoft Cloud, HBK's SaaS software for FMEA (failure mode and effects analysis), as part of a distributed team across the US, UK and Poland. I work across the full stack: React and TypeScript on the front end, and C#, ASP.NET and EF Core on the back end, which was new to me when I joined.",
		highlights: [
			"Designed and built the front end of a new permissions system: a React context wrapping the whole app, so any component can check permissions with a hook",
			"Pushed for a restructure of a front-end codebase that was hard to follow, and did a large part of the work: a clearer React folder structure and co-located Styled Components",
			"Designed the architecture (database schema and endpoints) for making a hard-coded dataset configurable per FMEA type. It was reviewed by the architects and adopted as I proposed it",
			"Build back-end endpoints in C#, ASP.NET and EF Core using test-driven development, following the team's existing conventions, and use TDD on the front end too",
		],
		tags: [
			"React",
			"TypeScript",
			"Styled Components",
			"C#",
			"ASP.NET",
			"EF Core",
		],
	},
	{
		company: "Bynder",
		companyUrl: "https://bynder.com",
		companyNote: "Joined as GatherContent, acquired by Bynder in 2022",
		period: "October 2021 – August 2025",
		roles: [
			{ title: "Senior Software Engineer", period: "July 2024 – August 2025" },
			{ title: "Software Engineer", period: "January 2023 – July 2024" },
			{ title: "Frontend Developer", period: "October 2021 – January 2023" },
		],
		summary:
			"I worked on Bynder's Content Workflow module, formerly GatherContent. I was a front-end developer in a cross-functional team of back-end engineers, designers and a product manager. My work covered a React app, a Remix app and a Node.js server for live collaborative editing, and I also contributed to the PHP, Laravel and MySQL back end.",
		highlights: [
			"Became the go-to engineer for our live collaboration server, which lets two or more people edit a document at the same time using Socket.IO. A former CTO had built it in a weekend, it now powered a core feature, and nobody else on the team worked on it",
			"Modernised that server: converted it to TypeScript, migrated its tests to Vitest, upgraded Node.js, and found and fixed gaps in the test coverage",
			"Helped introduce a server-side rendered Remix app alongside our older React app. The pages we rebuilt in it were noticeably faster",
			"Led the front-end side of an initiative to define the contract between back end and front end with OpenAPI. Mock Service Worker checked that the front end sent and received the right data, and also let us run the Remix app against the documentation, so we could build features before the back end was finished",
			"Selected for a new team that took ownership of our design system and designed a new app to serve micro-frontends owned by other teams. I was on this team for six months",
			"Buddied two new developers and onboarded them to the company",
		],
		tags: [
			"React",
			"Remix",
			"TypeScript",
			"Node.js",
			"Socket.IO",
			"OpenAPI",
			"PHP",
			"Laravel",
			"MySQL",
		],
	},
	{
		company: "Vidatec",
		period: "September 2019 – October 2021",
		roles: [
			{ title: "Web Developer", period: "September 2019 – October 2021" },
		],
		summary:
			"I worked at a web agency in teams of two to four developers, building e-commerce sites, marketing sites and web apps for clients. My main projects were Granta.com, Social Good Connect and Insights Explore. Most were React and Node.js deployed on AWS, with one WordPress and WooCommerce project and one Next.js project.",
		highlights: [
			"Took over front-end development of Insights Explore when its lead developer left the company, with no drop in delivery speed or customer satisfaction",
			"Built a custom WordPress feature to bring a customer's book sales data into their WooCommerce content site, as the service holding it had no data export",
			"Built the marketing site for a new company, Bounc-e, in Next.js, which I hadn't used before",
			"Built internal tools integrating our time tracking and CRM software",
			"Took part in client calls, and worked especially closely with the customer on Granta.com",
		],
		tags: [
			"React",
			"Node.js",
			"Next.js",
			"AWS",
			"PHP",
			"WordPress",
			"WooCommerce",
		],
	},
	{
		company: "Scotweigh",
		period: "July 2018 – September 2019",
		roles: [
			{ title: "Software Developer", period: "July 2018 – September 2019" },
		],
		summary:
			"I moved into software from brewing after five months of study, and Scotweigh was my first developer job. I was one of two developers on software for Windows-based scales, mostly used in butcher shops. The scales ran VB.NET software with a MySQL database, and a PHP and jQuery web server, all deployed locally in each shop.",
		highlights: [
			"Built a feature that let customers with several shops take Christmas orders at any of them, one of the most requested features from customers",
			"Replaced the manual process of travelling to each shop to update its scales with an automatic update system",
			"Fixed bugs, added features and supported customers, including visiting butchers' shops to set up systems on site",
		],
		tags: ["VB.NET", "PHP", "MySQL", "jQuery", "JavaScript"],
	},
];

type Social = { label: string; href: string; Icon: () => () => JSX.Element };

const SOCIALS: Social[] = [
	{
		label: "GitHub",
		href: "https://github.com/micmcgrorty",
		Icon: GitHubIcon,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/michael-mcgrorty-a8207064/",
		Icon: LinkedInIcon,
	},
	{ label: "X", href: "https://x.com/micmcgrorty", Icon: XIcon },
	{
		label: "Email",
		href: "mailto:michaelmcgrorty2@gmail.com",
		Icon: MailIcon,
	},
];

export function HomePage() {
	return () => (
		<Document title={`${PROFILE.name} – ${PROFILE.title}`} head={<HomeHead />}>
			<main
				mix={css({
					"--bg": "#f5f7fa",
					"--surface": "#e8eef6",
					"--text": "#101826",
					"--muted": "#46526a",
					"--accent": "#005eb8",
					"--on-accent": "#ffffff",
					"--highlight": "#f2a93b",
					"--rule": "#cbd5e3",
					"@media (prefers-color-scheme: dark)": {
						"--bg": "#0e1522",
						"--surface": "#17223a",
						"--text": "#e8eef7",
						"--muted": "#a9b6c9",
						"--accent": "#5ba3ff",
						"--on-accent": "#0e1522",
						"--highlight": "#f2a93b",
						"--rule": "#2a3750",
					},
					"@media print": {
						"--bg": "#ffffff",
						"--surface": "#ffffff",
						"--text": "#000000",
						"--muted": "#333333",
						"--accent": "#005eb8",
						"--on-accent": "#ffffff",
						"--rule": "#999999",
						minHeight: "auto",
						padding: 0,
					},
					"& *, & *::before, & *::after": { boxSizing: "border-box" },
					margin: 0,
					padding: "80px 32px 64px",
					minHeight: "100vh",
					background: "var(--bg)",
					color: "var(--text)",
					fontFamily: FONT_STACK,
					fontSize: "16px",
					lineHeight: 1.6,
					WebkitFontSmoothing: "antialiased",
					MozOsxFontSmoothing: "grayscale",
					"@media (max-width: 720px)": { padding: "48px 20px 48px" },
				})}
			>
				<div
					mix={css({
						width: "100%",
						maxWidth: "900px",
						margin: "0 auto",
						display: "flex",
						flexDirection: "column",
						gap: "112px",
						"@media (max-width: 720px)": { gap: "72px" },
					})}
				>
					<Masthead />
					<Experience />
					<Footer />
				</div>
			</main>
		</Document>
	);
}

function HomeHead() {
	return () => {
		let pageTitle = `${PROFILE.name} – ${PROFILE.title}`;

		return (
			<>
				<meta name="description" content={PROFILE.description} />
				<link rel="canonical" href={SITE_URL} />

				<meta property="og:type" content="website" />
				<meta property="og:site_name" content={PROFILE.name} />
				<meta property="og:title" content={pageTitle} />
				<meta property="og:description" content={PROFILE.description} />
				<meta property="og:url" content={SITE_URL} />
				<meta property="og:image" content={`${SITE_URL}og-image.png`} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta name="twitter:card" content="summary_large_image" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=JetBrains+Mono:wght@400;700&display=swap"
				/>

				<style>
					{`@keyframes spine-draw { from { transform: scaleY(0); } to { transform: scaleY(1); } }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }`}
				</style>
			</>
		);
	};
}

function Masthead() {
	return () => (
		<header
			mix={css({
				display: "grid",
				gridTemplateColumns: "minmax(0, 1fr) 260px",
				gap: "64px",
				alignItems: "center",
				"@media (max-width: 720px)": {
					gridTemplateColumns: "1fr",
					gap: "36px",
				},
			})}
		>
			<div mix={css({ display: "flex", flexDirection: "column", gap: "28px" })}>
				<div>
					<h1
						mix={css({
							margin: 0,
							fontSize: "clamp(48px, 9vw, 88px)",
							fontWeight: 800,
							lineHeight: 0.98,
							letterSpacing: "-0.035em",
							textWrap: "balance",
						})}
					>
						{PROFILE.name}
					</h1>
					<p
						mix={css({
							margin: "16px 0 0",
							fontSize: "clamp(18px, 3vw, 22px)",
							fontWeight: 600,
							color: "var(--accent)",
						})}
					>
						{PROFILE.title}
					</p>
				</div>
				<p
					mix={css({
						margin: 0,
						maxWidth: "62ch",
						fontSize: "clamp(17px, 2.4vw, 20px)",
						lineHeight: 1.6,
					})}
				>
					{PROFILE.bio}
				</p>
			</div>
			<Portrait />
		</header>
	);
}

function Portrait() {
	return () => (
		<div
			mix={css({
				position: "relative",
				width: "100%",
				aspectRatio: "1 / 1",
				"&::before": {
					content: '""',
					position: "absolute",
					inset: 0,
					transform: "translate(14px, 14px)",
					background: "var(--accent)",
					borderRadius: "6px",
				},
				"@media (max-width: 720px)": { order: -1, width: "160px" },
				"@media print": { display: "none" },
			})}
		>
			<img
				src="/photo.webp"
				alt={`Portrait of ${PROFILE.name}`}
				width="720"
				height="720"
				mix={css({
					position: "relative",
					display: "block",
					width: "100%",
					height: "100%",
					objectFit: "cover",
					borderRadius: "6px",
				})}
			/>
		</div>
	);
}

function Experience() {
	return () => (
		<section
			aria-labelledby="experience-heading"
			mix={css({ display: "flex", flexDirection: "column", gap: "48px" })}
		>
			<h2
				id="experience-heading"
				mix={css({
					margin: 0,
					fontSize: "clamp(30px, 5vw, 40px)",
					fontWeight: 700,
					lineHeight: 1.1,
					letterSpacing: "-0.025em",
				})}
			>
				Experience
			</h2>
			<ol
				mix={css({
					listStyle: "none",
					margin: 0,
					padding: "0 0 0 40px",
					position: "relative",
					display: "flex",
					flexDirection: "column",
					gap: "64px",
					"&::before": {
						content: '""',
						position: "absolute",
						left: "7px",
						top: "10px",
						bottom: 0,
						width: "2px",
						background:
							"linear-gradient(to bottom, var(--accent), var(--rule))",
						transformOrigin: "top",
						animation: "spine-draw 1.6s cubic-bezier(0.2, 0.7, 0.2, 1) both",
					},
				})}
			>
				{EXPERIENCE.map((job) => {
					let current = /present/i.test(job.period);

					return (
						<li
							key={`${job.company}-${job.period}`}
							mix={css({
								position: "relative",
								"&::before": {
									content: '""',
									position: "absolute",
									left: "-40px",
									top: "8px",
									width: "16px",
									height: "16px",
									borderRadius: "50%",
									border: "3px solid var(--accent)",
									background: current ? "var(--highlight)" : "var(--bg)",
								},
								"@media print": { breakInside: "avoid" },
							})}
						>
							<ExperienceItem job={job} />
						</li>
					);
				})}
			</ol>
		</section>
	);
}

function ExperienceItem(handle: Handle<{ job: Job }>) {
	return () => {
		let { job } = handle.props;

		return (
			<article
				mix={css({ display: "flex", flexDirection: "column", gap: "20px" })}
			>
				<div
					mix={css({
						display: "flex",
						flexWrap: "wrap",
						alignItems: "baseline",
						justifyContent: "space-between",
						gap: "4px 24px",
					})}
				>
					<div>
						<h3
							mix={css({
								margin: 0,
								fontSize: "28px",
								fontWeight: 700,
								lineHeight: 1.2,
								letterSpacing: "-0.02em",
							})}
						>
							{job.companyUrl ? (
								<a href={job.companyUrl} mix={linkStyle}>
									{job.company}
								</a>
							) : (
								job.company
							)}
						</h3>
						{job.companyNote ? (
							<p
								mix={css({
									margin: "2px 0 0",
									fontSize: "15px",
									color: "var(--muted)",
								})}
							>
								{job.companyNote}
							</p>
						) : null}
					</div>
					<p
						mix={css({
							margin: 0,
							fontSize: "15px",
							color: "var(--muted)",
						})}
					>
						{job.period}
					</p>
				</div>

				<RoleList roles={job.roles} />

				<div
					mix={css({
						display: "flex",
						flexDirection: "column",
						gap: "16px",
						maxWidth: "44rem",
					})}
				>
					<p mix={css({ margin: 0, color: "var(--muted)" })}>{job.summary}</p>
					{job.highlights.length > 0 ? (
						<ul
							mix={css({
								margin: 0,
								paddingLeft: "1.2em",
								listStyleType: "disc",
								display: "flex",
								flexDirection: "column",
								gap: "8px",
								"& li::marker": { color: "var(--accent)" },
							})}
						>
							{job.highlights.map((highlight) => (
								<li key={highlight}>{highlight}</li>
							))}
						</ul>
					) : null}
				</div>

				{job.tags.length > 0 ? <TagList tags={job.tags} /> : null}
			</article>
		);
	};
}

function RoleList(handle: Handle<{ roles: Role[] }>) {
	return () => {
		let { roles } = handle.props;
		let multiple = roles.length > 1;

		return (
			<ol
				aria-label="Roles"
				mix={css({
					listStyle: "none",
					margin: 0,
					padding: 0,
					display: "flex",
					flexDirection: "column",
					gap: "10px",
				})}
			>
				{roles.map((role) => (
					<li
						key={`${role.title}-${role.period}`}
						mix={css({
							position: "relative",
							display: "flex",
							flexWrap: "wrap",
							alignItems: "baseline",
							gap: "0 16px",
							...(multiple
								? {
										"&::before": {
											content: '""',
											position: "absolute",
											left: "-36px",
											top: "10px",
											width: "8px",
											height: "8px",
											borderRadius: "50%",
											background: "var(--accent)",
										},
									}
								: {}),
						})}
					>
						<span mix={css({ fontSize: "18px", fontWeight: 600 })}>
							{role.title}
						</span>
						{multiple ? (
							<span mix={css({ fontSize: "15px", color: "var(--muted)" })}>
								{role.period}
							</span>
						) : null}
					</li>
				))}
			</ol>
		);
	};
}

function TagList(handle: Handle<{ tags: string[] }>) {
	return () => (
		<ul
			aria-label="Technologies"
			mix={css({
				listStyle: "none",
				margin: 0,
				padding: 0,
				display: "flex",
				flexWrap: "wrap",
				gap: "8px",
			})}
		>
			{handle.props.tags.map((tag) => (
				<li
					key={tag}
					mix={css({
						padding: "2px 9px",
						border: "1px solid var(--rule)",
						borderRadius: "4px",
						color: "var(--muted)",
						fontFamily: MONO_STACK,
						fontSize: "13px",
						lineHeight: 1.6,
					})}
				>
					{tag}
				</li>
			))}
		</ul>
	);
}

function Footer() {
	let email = SOCIALS.find((social) => social.label === "Email");
	let others = SOCIALS.filter((social) => social.label !== "Email");

	return () => (
		<footer
			mix={css({
				display: "flex",
				flexDirection: "column",
				gap: "32px",
				paddingTop: "40px",
				borderTop: "2px solid var(--rule)",
			})}
		>
			<div
				mix={css({
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					gap: "20px 40px",
				})}
			>
				{email ? (
					<a href={email.href} mix={buttonStyle}>
						Email me
					</a>
				) : null}
				<nav aria-label="Social links">
					<ul
						mix={css({
							listStyle: "none",
							margin: 0,
							padding: 0,
							display: "flex",
							flexWrap: "wrap",
							gap: "8px 28px",
						})}
					>
						{others.map((social) => (
							<li key={social.label}>
								<SocialLink social={social} />
							</li>
						))}
					</ul>
				</nav>
			</div>
			<p
				mix={css({
					margin: 0,
					fontSize: "14px",
					color: "var(--muted)",
				})}
			>
				&copy; {new Date().getFullYear()} {PROFILE.name}
			</p>
		</footer>
	);
}

function SocialLink(handle: Handle<{ social: Social }>) {
	return () => {
		let { label, href, Icon } = handle.props.social;

		return (
			<a
				href={href}
				mix={[
					linkStyle,
					css({
						display: "inline-flex",
						alignItems: "center",
						gap: "10px",
						padding: "6px 0",
						fontWeight: 500,
						"& svg": { width: "20px", height: "20px", display: "block" },
					}),
				]}
			>
				<span aria-hidden="true" mix={css({ display: "flex" })}>
					<Icon />
				</span>
				<span>{label}</span>
			</a>
		);
	};
}

const linkStyle = css({
	color: "inherit",
	textDecoration: "none",
	"&:hover": {
		color: "var(--accent)",
		textDecoration: "underline",
		textUnderlineOffset: "4px",
	},
	"&:focus-visible": {
		outline: "2px solid var(--accent)",
		outlineOffset: "3px",
		borderRadius: "2px",
	},
});

const buttonStyle = css({
	display: "inline-block",
	padding: "12px 24px",
	borderRadius: "6px",
	background: "var(--accent)",
	color: "var(--on-accent)",
	fontSize: "16px",
	fontWeight: 600,
	textDecoration: "none",
	transition: "transform 150ms ease, filter 150ms ease",
	"&:hover": { filter: "brightness(1.12)", transform: "translateY(-1px)" },
	"&:focus-visible": {
		outline: "3px solid var(--accent)",
		outlineOffset: "3px",
	},
});

function GitHubIcon() {
	return () => (
		<svg viewBox="0 0 20 19.67" fill="none">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M10.008 0C4.474 0 0 4.507 0 10.083C0 14.54 2.867 18.312 6.843 19.648C7.341 19.748 7.523 19.431 7.523 19.164C7.523 18.93 7.506 18.129 7.506 17.294C4.722 17.895 4.142 16.092 4.142 16.092C3.695 14.924 3.032 14.623 3.032 14.623C2.121 14.006 3.099 14.006 3.099 14.006C4.109 14.072 4.64 15.041 4.64 15.041C5.534 16.576 6.976 16.142 7.556 15.875C7.639 15.224 7.904 14.773 8.186 14.523C5.965 14.289 3.629 13.421 3.629 9.548C3.629 8.447 4.026 7.545 4.656 6.844C4.557 6.594 4.209 5.559 4.756 4.173C4.756 4.173 5.601 3.906 7.506 5.208C8.322 4.987 9.163 4.875 10.008 4.874C10.853 4.874 11.715 4.991 12.51 5.208C14.416 3.906 15.261 4.173 15.261 4.173C15.808 5.559 15.46 6.594 15.36 6.844C16.007 7.545 16.388 8.447 16.388 9.548C16.388 13.421 14.051 14.273 11.814 14.523C12.179 14.84 12.494 15.441 12.494 16.393C12.494 17.745 12.477 18.83 12.477 19.164C12.477 19.431 12.66 19.748 13.157 19.648C17.133 18.312 20 14.54 20 10.083C20.016 4.507 15.526 0 10.008 0Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function LinkedInIcon() {
	return () => (
		<svg viewBox="0 0 24 24" fill="none">
			<path
				d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
				fill="currentColor"
			/>
		</svg>
	);
}

function XIcon() {
	return () => (
		<svg viewBox="0 0 18.33 16.57" fill="none">
			<path
				d="M14.439 0H17.25L11.108 7.02L18.333 16.572H12.676L8.245 10.778L3.175 16.572H0.362L6.931 9.063L0 0H5.801L9.806 5.295L14.439 0ZM13.452 14.889H15.01L4.955 1.594H3.283L13.452 14.889Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function MailIcon() {
	return () => (
		<svg viewBox="0 0 24 24" fill="none">
			<rect
				x="2"
				y="4"
				width="20"
				height="16"
				rx="2"
				stroke="currentColor"
				stroke-width="1.75"
			/>
			<path
				d="m22 7-10 6L2 7"
				stroke="currentColor"
				stroke-width="1.75"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}
