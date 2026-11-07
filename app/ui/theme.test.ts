import { expect } from "remix/assert";
import { describe, it } from "remix/test";

import { DARK, LIGHT, PRINT, theme } from "./theme.ts";

describe("theme", () => {
	it("defines the same tokens in the light, dark and print palettes", () => {
		let tokens = Object.keys(theme).sort();

		expect(Object.keys(LIGHT).sort()).toEqual(tokens);
		expect(Object.keys(DARK).sort()).toEqual(tokens);
		expect(Object.keys(PRINT).sort()).toEqual(tokens);
	});

	it("refers to each token as a CSS custom property", () => {
		expect(theme.muted).toBe("var(--muted)");
		expect(theme.onAccent).toBe("var(--on-accent)");
	});
});
