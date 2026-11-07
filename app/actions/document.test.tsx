import { expect } from "remix/assert";
import { renderToString } from "remix/component/server";
import { describe, it } from "remix/test";

import { Document } from "./document.tsx";

function render() {
	return renderToString(
		<Document
			meta={{ title: "A page", description: "About the page.", path: "/cv" }}
		/>,
	);
}

describe("Document", () => {
	it("renders the page title and description", async () => {
		let html = await render();

		expect(html).toContain("<title>A page</title>");
		expect(html).toContain(
			'<meta name="description" content="About the page."',
		);
	});

	it("builds the canonical URL from the page path", async () => {
		let html = await render();

		expect(html).toContain(
			'<link rel="canonical" href="https://www.micmcgrorty.dev/cv"',
		);
		expect(html).toContain(
			'<meta property="og:url" content="https://www.micmcgrorty.dev/cv"',
		);
	});

	it("includes social sharing tags for the page", async () => {
		let html = await render();

		expect(html).toContain('<meta property="og:title" content="A page"');
		expect(html).toContain(
			'<meta property="og:description" content="About the page."',
		);
		expect(html).toContain(
			'<meta property="og:site_name" content="Michael McGrorty"',
		);
		expect(html).toContain(
			'<meta property="og:image" content="https://www.micmcgrorty.dev/og-image.png"',
		);
		expect(html).toContain(
			'<meta name="twitter:card" content="summary_large_image"',
		);
	});

	it("sets the light, dark and print palettes on the root element", async () => {
		let html = await render();

		expect(html).toMatch(/(^|\n):root \{[^}]*--bg: #f5f7fa;/);
		expect(html).toMatch(
			/@media \(prefers-color-scheme: dark\) \{\s*:root \{[^}]*--bg: #0e1522;/,
		);
		expect(html).toMatch(/@media print \{\s*:root \{[^}]*--bg: #ffffff;/);
	});

	it("applies the base type, colours and box-sizing to every page", async () => {
		let html = await render();

		expect(html).toMatch(
			/\*, \*::before, \*::after \{[^}]*box-sizing: border-box;/,
		);
		expect(html).toMatch(/body \{[^}]*background: var\(--bg\);/);
		expect(html).toMatch(/body \{[^}]*color: var\(--text\);/);
		expect(html).toMatch(/body \{[^}]*font-family: 'Bricolage Grotesque'/);
	});
});
