import type { Handle, RemixNode } from "remix/component";

import { SITE } from "../data/site.ts";
import { FONT_FACES, FONT_STACK } from "../ui/styles.ts";
import { DARK, LIGHT, PRINT, paletteRule, theme } from "../ui/theme.ts";

export interface PageMeta {
	title: string;
	description: string;
	/** The page's path on the site, e.g. `/`. Used for the canonical URL. */
	path: string;
}

export interface DocumentProps {
	meta: PageMeta;
	children?: RemixNode;
}

/** Every site-wide rule: fonts, the theme palettes, resets and base type. */
const SITE_STYLES = `${FONT_FACES}
${paletteRule(LIGHT)}
@media (prefers-color-scheme: dark) {
${paletteRule(DARK)}
}
@media print {
${paletteRule(PRINT)}
}
*, *::before, *::after { box-sizing: border-box; }
body {
	margin: 0;
	background: ${theme.bg};
	color: ${theme.text};
	font-family: ${FONT_STACK};
	font-size: 16px;
	line-height: 1.6;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }`;

export function Document(handle: Handle<DocumentProps>) {
	return () => {
		let { children, meta } = handle.props;
		let url = new URL(meta.path, SITE.url).href;

		return (
			<html lang="en">
				<head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="color-scheme" content="light dark" />
					<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
					<title>{meta.title}</title>
					<link
						rel="preload"
						href="/fonts/bricolage-grotesque-latin.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<style>{SITE_STYLES}</style>

					<meta name="description" content={meta.description} />
					<link rel="canonical" href={url} />

					<meta property="og:type" content="website" />
					<meta property="og:site_name" content={SITE.name} />
					<meta property="og:title" content={meta.title} />
					<meta property="og:description" content={meta.description} />
					<meta property="og:url" content={url} />
					<meta
						property="og:image"
						content={new URL(SITE.ogImage.path, SITE.url).href}
					/>
					<meta
						property="og:image:width"
						content={String(SITE.ogImage.width)}
					/>
					<meta
						property="og:image:height"
						content={String(SITE.ogImage.height)}
					/>
					<meta name="twitter:card" content="summary_large_image" />
				</head>
				<body>{children}</body>
			</html>
		);
	};
}
