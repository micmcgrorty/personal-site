import { expect } from "remix/assert";
import { renderToString } from "remix/component/server";
import { describe, it } from "remix/test";

import { PROFILE } from "../../data/profile.ts";
import { SOCIALS } from "../../data/socials.ts";
import { Footer } from "./footer.tsx";

describe("Footer", () => {
	it("links the Email me button to the email address", async () => {
		let html = await renderToString(<Footer />);
		let email = SOCIALS.find((social) => social.label === "Email");
		let buttonHref = html.match(/<a href="([^"]*)"[^>]*>Email me<\/a>/)?.[1];

		expect(email).toBeDefined();
		expect(buttonHref).toBe(email?.href);
	});

	it("lists every other social link, but not email", async () => {
		let html = await renderToString(<Footer />);
		let nav = html.match(/<nav[\s\S]*?<\/nav>/)?.[0];
		let others = SOCIALS.filter((social) => social.label !== "Email");

		expect(nav).toBeDefined();
		expect(others.length).toBeGreaterThan(0);
		for (let social of others) {
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
