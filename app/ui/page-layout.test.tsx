import { expect } from "remix/assert";
import { renderToString } from "remix/component/server";
import { describe, it } from "remix/test";

import { PageLayout } from "./page-layout.tsx";

describe("PageLayout", () => {
	it("lays out its children without setting the theme", async () => {
		let html = await renderToString(
			<PageLayout>
				<p>Content</p>
			</PageLayout>,
		);

		expect(html).toContain("<p>Content</p>");
		expect(html).not.toContain("--bg:");
		expect(html).not.toContain("font-family:");
	});
});
