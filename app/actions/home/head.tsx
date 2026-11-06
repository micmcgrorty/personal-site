import { PAGE_TITLE, PROFILE } from "../../data/profile.ts";

const SITE_URL = "https://www.micmcgrorty.dev/";

export function HomeHead() {
	return () => (
		<>
			<meta name="description" content={PROFILE.description} />
			<link rel="canonical" href={SITE_URL} />

			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={PROFILE.name} />
			<meta property="og:title" content={PAGE_TITLE} />
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
}
