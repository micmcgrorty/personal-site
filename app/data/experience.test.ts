import { expect } from "remix/assert";
import { describe, it } from "remix/test";

import { EXPERIENCE, isCurrentJob } from "./experience.ts";

describe("isCurrentJob", () => {
	it("is true when the period runs to the present", () => {
		expect(
			isCurrentJob({ ...EXPERIENCE[0], period: "September 2025 – Present" }),
		).toBe(true);
		expect(isCurrentJob({ ...EXPERIENCE[0], period: "2025 – present" })).toBe(
			true,
		);
	});

	it("is false when the period has ended", () => {
		expect(
			isCurrentJob({ ...EXPERIENCE[0], period: "October 2021 – August 2025" }),
		).toBe(false);
	});
});

describe("EXPERIENCE", () => {
	it("has exactly one current job, listed first", () => {
		let current = EXPERIENCE.filter(isCurrentJob);

		expect(current).toHaveLength(1);
		expect(EXPERIENCE[0]).toBe(current[0]);
	});
});
