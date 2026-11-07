import { expect } from "remix/assert";
import { renderToString } from "remix/component/server";
import { describe, it } from "remix/test";

import { Timeline, TimelineEntry } from "./timeline.tsx";

describe("Timeline", () => {
	it("renders its entries, in order, as an ordered list", async () => {
		let html = await renderToString(
			<Timeline>
				<TimelineEntry>First</TimelineEntry>
				<TimelineEntry>Second</TimelineEntry>
			</Timeline>,
		);

		expect(html).toMatch(
			/<ol[^>]*><li[^>]*>First<\/li><li[^>]*>Second<\/li><\/ol>/,
		);
		expect(html).toContain("@keyframes spine-draw");
	});

	it("highlights the marker only for the current entry", async () => {
		let past = await renderToString(
			<Timeline>
				<TimelineEntry>Past</TimelineEntry>
			</Timeline>,
		);
		let current = await renderToString(
			<Timeline>
				<TimelineEntry current>Now</TimelineEntry>
			</Timeline>,
		);

		expect(past).not.toContain("var(--highlight)");
		expect(current).toContain("var(--highlight)");
	});
});
