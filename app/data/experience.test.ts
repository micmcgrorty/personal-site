import { expect } from "remix/assert";
import { describe, it } from "remix/test";

import { defineJob, EXPERIENCE } from "./experience.ts";

const base = {
	company: "Acme",
	summary: "Built things.",
	highlights: [],
	tags: [],
};

describe("defineJob", () => {
	it("spans the job period from the earliest role start to the latest role end", () => {
		let job = defineJob({
			...base,
			roles: [
				{ title: "Senior Engineer", start: "2024-07", end: "2025-08" },
				{ title: "Engineer", start: "2021-10", end: "2024-07" },
			],
		});

		expect(job.period).toBe("October 2021 – August 2025");
	});

	it("is current, running to the present, when the latest role has no end", () => {
		let job = defineJob({
			...base,
			roles: [{ title: "Engineer", start: "2025-09" }],
		});

		expect(job.current).toBe(true);
		expect(job.period).toBe("September 2025 – Present");
	});

	it("is not current when every role has ended", () => {
		let job = defineJob({
			...base,
			roles: [{ title: "Engineer", start: "2019-09", end: "2021-10" }],
		});

		expect(job.current).toBe(false);
	});

	it("shows role periods only when there are several roles", () => {
		let single = defineJob({
			...base,
			roles: [{ title: "Engineer", start: "2019-09", end: "2021-10" }],
		});
		let several = defineJob({
			...base,
			roles: [
				{ title: "Senior Engineer", start: "2021-01", end: "2021-10" },
				{ title: "Engineer", start: "2019-09", end: "2021-01" },
			],
		});

		expect(single.showRolePeriods).toBe(false);
		expect(several.showRolePeriods).toBe(true);
		expect(several.roles.map((role) => role.period)).toEqual([
			"January 2021 – October 2021",
			"September 2019 – January 2021",
		]);
	});
});

describe("EXPERIENCE", () => {
	it("has exactly one current job, listed first", () => {
		let current = EXPERIENCE.filter((job) => job.current);

		expect(current).toHaveLength(1);
		expect(EXPERIENCE[0]).toBe(current[0]);
	});
});
