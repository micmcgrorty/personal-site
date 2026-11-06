import { css } from "remix/component";

import { EXPERIENCE } from "../../data/experience.ts";
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
			<ol
				mix={css({
					listStyle: "none",
					margin: 0,
					padding: "0 0 0 40px",
					position: "relative",
					display: "flex",
					flexDirection: "column",
					gap: "64px",
					"&::before": {
						content: '""',
						position: "absolute",
						left: "7px",
						top: "10px",
						bottom: 0,
						width: "2px",
						background:
							"linear-gradient(to bottom, var(--accent), var(--rule))",
						transformOrigin: "top",
						animation: "spine-draw 1.6s cubic-bezier(0.2, 0.7, 0.2, 1) both",
					},
				})}
			>
				{EXPERIENCE.map((job) => {
					let current = /present/i.test(job.period);

					return (
						<li
							key={`${job.company}-${job.period}`}
							mix={css({
								position: "relative",
								"&::before": {
									content: '""',
									position: "absolute",
									left: "-40px",
									top: "8px",
									width: "16px",
									height: "16px",
									borderRadius: "50%",
									border: "3px solid var(--accent)",
									background: current ? "var(--highlight)" : "var(--bg)",
								},
								"@media print": { breakInside: "avoid" },
							})}
						>
							<ExperienceItem job={job} />
						</li>
					);
				})}
			</ol>
		</section>
	);
}
