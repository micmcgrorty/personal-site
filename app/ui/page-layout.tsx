import type { Handle, RemixNode } from "remix/component";
import { css } from "remix/component";

import { FONT_STACK } from "./styles.ts";
import { DARK, LIGHT, PRINT, paletteVariables, theme } from "./theme.ts";

export function PageLayout(handle: Handle<{ children?: RemixNode }>) {
	return () => (
		<main
			mix={css({
				...paletteVariables(LIGHT),
				"@media (prefers-color-scheme: dark)": paletteVariables(DARK),
				"@media print": {
					...paletteVariables(PRINT),
					minHeight: "auto",
					padding: 0,
				},
				"& *, & *::before, & *::after": { boxSizing: "border-box" },
				margin: 0,
				padding: "80px 32px 64px",
				minHeight: "100vh",
				background: theme.bg,
				color: theme.text,
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
				{handle.props.children}
			</div>
		</main>
	);
}
