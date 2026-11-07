import { css } from "remix/component";
import { theme } from "./theme.ts";

export const FONT_STACK =
	"'Bricolage Grotesque', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif";
export const MONO_STACK =
	"'JetBrains Mono', ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace";

export const FONT_FACES = `@font-face {
	font-family: 'Bricolage Grotesque';
	font-style: normal;
	font-weight: 400 800;
	font-display: swap;
	src: url(/fonts/bricolage-grotesque-latin.woff2) format('woff2');
}
@font-face {
	font-family: 'JetBrains Mono';
	font-style: normal;
	font-weight: 400 700;
	font-display: swap;
	src: url(/fonts/jetbrains-mono-latin.woff2) format('woff2');
}`;

export const linkStyle = css({
	color: "inherit",
	textDecoration: "none",
	"&:hover": {
		color: theme.accent,
		textDecoration: "underline",
		textUnderlineOffset: "4px",
	},
	"&:focus-visible": {
		outline: `2px solid ${theme.accent}`,
		outlineOffset: "3px",
		borderRadius: "2px",
	},
});

export const buttonStyle = css({
	display: "inline-block",
	padding: "12px 24px",
	borderRadius: "6px",
	background: theme.accent,
	color: theme.onAccent,
	fontSize: "16px",
	fontWeight: 600,
	textDecoration: "none",
	transition: "transform 150ms ease, filter 150ms ease",
	"&:hover": { filter: "brightness(1.12)", transform: "translateY(-1px)" },
	"&:focus-visible": {
		outline: `3px solid ${theme.accent}`,
		outlineOffset: "3px",
	},
});
