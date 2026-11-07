const TOKENS = {
	bg: "--bg",
	text: "--text",
	muted: "--muted",
	accent: "--accent",
	onAccent: "--on-accent",
	highlight: "--highlight",
	rule: "--rule",
} as const;

export type Token = keyof typeof TOKENS;

/** A value for every theme token. */
export type Palette = Record<Token, string>;

export const LIGHT: Palette = {
	bg: "#f5f7fa",
	text: "#101826",
	muted: "#46526a",
	accent: "#005eb8",
	onAccent: "#ffffff",
	highlight: "#f2a93b",
	rule: "#cbd5e3",
};

export const DARK: Palette = {
	bg: "#0e1522",
	text: "#e8eef7",
	muted: "#a9b6c9",
	accent: "#5ba3ff",
	onAccent: "#0e1522",
	highlight: "#f2a93b",
	rule: "#2a3750",
};

export const PRINT: Palette = {
	bg: "#ffffff",
	text: "#000000",
	muted: "#333333",
	accent: "#005eb8",
	onAccent: "#ffffff",
	highlight: "#f2a93b",
	rule: "#999999",
};

/** References to the theme tokens, for use in styles: `theme.muted`. */
export const theme = Object.fromEntries(
	Object.entries(TOKENS).map(([token, property]) => [
		token,
		`var(${property})`,
	]),
) as Record<Token, string>;

/** The custom property declarations that set a palette, for a style object. */
export function paletteVariables(palette: Palette) {
	return Object.fromEntries(
		Object.entries(palette).map(([token, value]) => [
			TOKENS[token as Token],
			value,
		]),
	);
}
