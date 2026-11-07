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
});
