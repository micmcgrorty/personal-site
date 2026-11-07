import { expect } from "remix/assert";
import { describe, it } from "remix/test";

import { PAGE_TITLE, PROFILE } from "../data/profile.ts";
import { router } from "../router.ts";
import { routes } from "../routes.ts";

const origin = "https://personal-site.test";

describe("home page", () => {
	it("renders the profile", async () => {
		let response = await router.fetch(
			new Request(new URL(routes.home.href(), origin)),
		);
		let html = await response.text();

		expect(response.status).toBe(200);
		expect(response.headers.get("Content-Type")).toMatch(/^text\/html/);
		expect(html).toContain(`<title>${PAGE_TITLE}</title>`);
		expect(html).toContain(PROFILE.name);
		expect(html).toContain(PROFILE.title);
	});

	it("returns 404 for unknown paths", async () => {
		let response = await router.fetch(
			new Request(new URL("/does-not-exist", origin)),
		);

		expect(response.status).toBe(404);
	});

	it("includes SEO and social sharing tags", async () => {
		let response = await router.fetch(
			new Request(new URL(routes.home.href(), origin)),
		);
		let html = await response.text();

		expect(html).toContain(
			`<meta name="description" content="${PROFILE.description}"`,
		);
		expect(html).toContain(
			'<link rel="canonical" href="https://www.micmcgrorty.dev/"',
		);
		expect(html).toContain(
			'<meta property="og:url" content="https://www.micmcgrorty.dev/"',
		);
		expect(html).toContain(`<meta property="og:title" content="${PAGE_TITLE}"`);
		expect(html).toContain(
			`<meta property="og:description" content="${PROFILE.description}"`,
		);
		expect(html).toContain(
			'<meta property="og:image" content="https://www.micmcgrorty.dev/og-image.png"',
		);
	});
});
