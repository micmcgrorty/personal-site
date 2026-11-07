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

	// Which tags Document renders from a page's meta is covered in
	// document.test.tsx; this checks the home route passes the home page's meta.
	it("describes the home page at the site root", async () => {
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
	});
});
