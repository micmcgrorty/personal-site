import { expect } from "remix/assert";
import { renderToString } from "remix/component/server";
import { describe, it } from "remix/test";

import { ExperienceItem } from "./experience-item.tsx";

describe("ExperienceItem", () => {
	it("links the company name when it has a URL", async () => {
		let html = await renderToString(
			<ExperienceItem
				job={{
					company: "Acme",
					companyUrl: "https://acme.test",
					period: "2020 – 2022",
					roles: [{ title: "Engineer", period: "2020 – 2022" }],
					summary: "Built things.",
					highlights: [],
					tags: [],
				}}
			/>,
		);

		expect(html).toMatch(/<a href="https:\/\/acme\.test"[^>]*>Acme<\/a>/);
	});

	it("shows the company name as plain text without a URL", async () => {
		let html = await renderToString(
			<ExperienceItem
				job={{
					company: "Acme",
					period: "2020 – 2022",
					roles: [{ title: "Engineer", period: "2020 – 2022" }],
					summary: "Built things.",
					highlights: [],
					tags: [],
				}}
			/>,
		);

		expect(html).toContain("Acme");
		expect(html).not.toMatch(/<a[\s>]/);
	});

	it("shows the company note when there is one", async () => {
		let html = await renderToString(
			<ExperienceItem
				job={{
					company: "Acme",
					companyNote: "Formerly Widgets",
					period: "2020 – 2022",
					roles: [{ title: "Engineer", period: "2020 – 2022" }],
					summary: "Built things.",
					highlights: [],
					tags: [],
				}}
			/>,
		);

		expect(html).toContain("Formerly Widgets");
	});

	it("hides the role period when there is only one role", async () => {
		let html = await renderToString(
			<ExperienceItem
				job={{
					company: "Acme",
					period: "2020 – 2022",
					roles: [{ title: "Engineer", period: "Jan – Mar 2020" }],
					summary: "Built things.",
					highlights: [],
					tags: [],
				}}
			/>,
		);

		expect(html).toContain("Engineer");
		expect(html).not.toContain("Jan – Mar 2020");
	});

	it("shows each role's period when there are several roles", async () => {
		let html = await renderToString(
			<ExperienceItem
				job={{
					company: "Acme",
					period: "2020 – 2022",
					roles: [
						{ title: "Senior Engineer", period: "2021 – 2022" },
						{ title: "Engineer", period: "2020 – 2021" },
					],
					summary: "Built things.",
					highlights: [],
					tags: [],
				}}
			/>,
		);

		expect(html).toContain("Senior Engineer");
		expect(html).toContain("2021 – 2022");
		expect(html).toContain("2020 – 2021");
	});

	it("renders highlights and tags as lists", async () => {
		let html = await renderToString(
			<ExperienceItem
				job={{
					company: "Acme",
					period: "2020 – 2022",
					roles: [{ title: "Engineer", period: "2020 – 2022" }],
					summary: "Built things.",
					highlights: ["Shipped a feature"],
					tags: ["TypeScript"],
				}}
			/>,
		);

		expect(html).toContain("<li>Shipped a feature</li>");
		expect(html).toContain('aria-label="Technologies"');
		expect(html).toContain("TypeScript");
	});

	it("omits the highlights list when there are no highlights", async () => {
		let html = await renderToString(
			<ExperienceItem
				job={{
					company: "Acme",
					period: "2020 – 2022",
					roles: [{ title: "Engineer", period: "2020 – 2022" }],
					summary: "Built things.",
					highlights: [],
					tags: ["TypeScript"],
				}}
			/>,
		);

		// Only the technologies list should remain.
		expect(html.match(/<ul/g)).toHaveLength(1);
		expect(html).toContain('aria-label="Technologies"');
	});

	it("omits the technologies list when there are no tags", async () => {
		let html = await renderToString(
			<ExperienceItem
				job={{
					company: "Acme",
					period: "2020 – 2022",
					roles: [{ title: "Engineer", period: "2020 – 2022" }],
					summary: "Built things.",
					highlights: ["Shipped a feature"],
					tags: [],
				}}
			/>,
		);

		// Only the highlights list should remain.
		expect(html.match(/<ul/g)).toHaveLength(1);
		expect(html).not.toContain('aria-label="Technologies"');
	});
});
