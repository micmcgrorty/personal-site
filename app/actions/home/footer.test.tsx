import { expect } from "remix/assert";
import { renderToString } from "remix/component/server";
import { describe, it } from "remix/test";

import { PROFILE } from "../../data/profile.ts";
import { SOCIALS } from "../../data/socials.ts";
import { Footer } from "./footer.tsx";

describe("Footer", () => {
	it("links the Email me button to the profile's email address", async () => {
		let html = await renderToString(<Footer />);
		let buttonHref = html.match(/<a href="([^"]*)"[^>]*>Email me<\/a>/)?.[1];

		expect(buttonHref).toBe("mailto:michaelmcgrorty2@gmail.com");
		expect(buttonHref).toBe(`mailto:${PROFILE.email}`);
	});

	it("lists every social link in the social nav, and no email link", async () => {
		let html = await renderToString(<Footer />);
		let nav = html.match(/<nav[\s\S]*?<\/nav>/)?.[0];

		expect(nav).toBeDefined();
		expect(SOCIALS.length).toBeGreaterThan(0);
		for (let social of SOCIALS) {
			expect(nav).toContain(`href="${social.href}"`);
			expect(nav).toContain(social.label);
		}
		expect(nav).not.toContain("mailto:");
	});

	it("shows the current year in the copyright notice", async () => {
		let html = await renderToString(<Footer />);
		let year = new Date().getFullYear();

		expect(html).toMatch(
			new RegExp(
				`(?:©|&copy;)(?:\\s|<!-- -->)*${year}(?:\\s|<!-- -->)*${PROFILE.name}`,
			),
		);
	});
});
