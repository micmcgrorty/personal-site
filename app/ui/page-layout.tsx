import type { Handle, RemixNode } from "remix/component";
import { css } from "remix/component";

import { FONT_STACK } from "./styles.ts";

export function PageLayout(handle: Handle<{ children?: RemixNode }>) {
	return () => (
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
				{handle.props.children}
			</div>
		</main>
	);
}
