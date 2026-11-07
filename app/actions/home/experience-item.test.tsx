import { expect } from "remix/assert";
import { renderToString } from "remix/component/server";
import { describe, it } from "remix/test";

import { defineJob, type JobEntry } from "../../data/experience.ts";
import { ExperienceItem } from "./experience-item.tsx";

function render(overrides: Partial<JobEntry> = {}) {
	let job = defineJob({
		company: "Acme",
		roles: [{ title: "Engineer", start: "2020-01", end: "2022-06" }],
		summary: "Built things.",
		highlights: [],
		tags: [],
		...overrides,
	});

	return renderToString(<ExperienceItem job={job} />);
}

describe("ExperienceItem", () => {
	it("links the company name when it has a URL", async () => {
		let html = await render({ companyUrl: "https://acme.test" });

		expect(html).toMatch(/<a href="https:\/\/acme\.test"[^>]*>Acme<\/a>/);
	});

	it("shows the company name as plain text without a URL", async () => {
		let html = await render();

		expect(html).toContain("Acme");
		expect(html).not.toMatch(/<a[\s>]/);
	});

	it("shows the company note when there is one", async () => {
		let html = await render({ companyNote: "Formerly Widgets" });

		expect(html).toContain("Formerly Widgets");
	});

	it("shows the job period once, without the role period, when there is only one role", async () => {
		let html = await render({
			roles: [{ title: "Engineer", start: "2020-01", end: "2022-06" }],
		});

		expect(html).toContain("Engineer");
		expect(html.match(/January 2020 – June 2022/g)).toHaveLength(1);
	});

	it("shows each role's period when there are several roles", async () => {
		let html = await render({
			roles: [
				{ title: "Senior Engineer", start: "2021-03", end: "2022-06" },
				{ title: "Engineer", start: "2020-01", end: "2021-03" },
			],
		});

		expect(html).toContain("Senior Engineer");
		expect(html).toContain("March 2021 – June 2022");
		expect(html).toContain("January 2020 – March 2021");
	});

	it("renders highlights and tags as lists", async () => {
		let html = await render({
			highlights: ["Shipped a feature"],
			tags: ["TypeScript"],
		});

		expect(html).toContain("<li>Shipped a feature</li>");
		expect(html).toContain('aria-label="Technologies"');
		expect(html).toContain("TypeScript");
	});

	it("omits the highlights list when there are no highlights", async () => {
		let html = await render({ highlights: [], tags: ["TypeScript"] });

		// Only the technologies list should remain.
		expect(html.match(/<ul/g)).toHaveLength(1);
		expect(html).toContain('aria-label="Technologies"');
	});

	it("omits the technologies list when there are no tags", async () => {
		let html = await render({ highlights: ["Shipped a feature"], tags: [] });

		// Only the highlights list should remain.
		expect(html.match(/<ul/g)).toHaveLength(1);
		expect(html).not.toContain('aria-label="Technologies"');
	});
});
