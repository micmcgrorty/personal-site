import { css } from "remix/component";

import { EXPERIENCE } from "../../data/experience.ts";
import { Timeline, TimelineEntry } from "../../ui/timeline.tsx";
import { ExperienceItem } from "./experience-item.tsx";

export function Experience() {
	return () => (
		<section
			aria-labelledby="experience-heading"
			mix={css({ display: "flex", flexDirection: "column", gap: "48px" })}
		>
			<h2
				id="experience-heading"
				mix={css({
					margin: 0,
					fontSize: "clamp(30px, 5vw, 40px)",
					fontWeight: 700,
					lineHeight: 1.1,
					letterSpacing: "-0.025em",
				})}
			>
				Experience
			</h2>
			<Timeline>
				{EXPERIENCE.map((job) => (
					<TimelineEntry
						key={`${job.company}-${job.period}`}
						current={job.current}
					>
						<ExperienceItem job={job} />
					</TimelineEntry>
				))}
			</Timeline>
		</section>
	);
}
