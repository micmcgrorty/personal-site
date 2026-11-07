import type { Handle, RemixNode } from "remix/component";
import { css } from "remix/component";

import { PROFILE } from "../data/profile.ts";
import { FONT_FACES } from "../ui/styles.ts";

const SITE_URL = "https://www.micmcgrorty.dev";

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

const SITE_STYLES = `${FONT_FACES}
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }`;

export function Document(handle: Handle<DocumentProps>) {
	return () => {
		let { children, meta } = handle.props;
		let url = new URL(meta.path, SITE_URL).href;

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
					<meta property="og:site_name" content={PROFILE.name} />
					<meta property="og:title" content={meta.title} />
					<meta property="og:description" content={meta.description} />
					<meta property="og:url" content={url} />
					<meta property="og:image" content={`${SITE_URL}/og-image.png`} />
					<meta property="og:image:width" content="1200" />
					<meta property="og:image:height" content="630" />
					<meta name="twitter:card" content="summary_large_image" />
				</head>
				<body mix={css({ margin: 0 })}>{children}</body>
			</html>
		);
	};
}
