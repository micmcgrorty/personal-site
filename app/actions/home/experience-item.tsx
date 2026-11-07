import type { Handle } from "remix/component";
import { css } from "remix/component";

import type { Job, Role } from "../../data/experience.ts";
import { linkStyle, MONO_STACK } from "../../ui/styles.ts";
import { timelineSubEntryMarker } from "../../ui/timeline.tsx";
import { theme } from "../../ui/theme.ts";

export function ExperienceItem(handle: Handle<{ job: Job }>) {
	return () => {
		let { job } = handle.props;

		return (
			<article
				mix={css({ display: "flex", flexDirection: "column", gap: "20px" })}
			>
				<div
					mix={css({
						display: "flex",
						flexWrap: "wrap",
						alignItems: "baseline",
						justifyContent: "space-between",
						gap: "4px 24px",
					})}
				>
					<div>
						<h3
							mix={css({
								margin: 0,
								fontSize: "28px",
								fontWeight: 700,
								lineHeight: 1.2,
								letterSpacing: "-0.02em",
							})}
						>
							{job.companyUrl ? (
								<a href={job.companyUrl} mix={linkStyle}>
									{job.company}
								</a>
							) : (
								job.company
							)}
						</h3>
						{job.companyNote ? (
							<p
								mix={css({
									margin: "2px 0 0",
									fontSize: "15px",
									color: theme.muted,
								})}
							>
								{job.companyNote}
							</p>
						) : null}
					</div>
					<p
						mix={css({
							margin: 0,
							fontSize: "15px",
							color: theme.muted,
						})}
					>
						{job.period}
					</p>
				</div>

				<RoleList roles={job.roles} showPeriods={job.showRolePeriods} />

				<div
					mix={css({
						display: "flex",
						flexDirection: "column",
						gap: "16px",
						maxWidth: "44rem",
					})}
				>
					<p mix={css({ margin: 0, color: theme.muted })}>{job.summary}</p>
					{job.highlights.length > 0 ? (
						<ul
							mix={css({
								margin: 0,
								paddingLeft: "1.2em",
								listStyleType: "disc",
								display: "flex",
								flexDirection: "column",
								gap: "8px",
								"& li::marker": { color: theme.accent },
							})}
						>
							{job.highlights.map((highlight) => (
								<li key={highlight}>{highlight}</li>
							))}
						</ul>
					) : null}
				</div>

				{job.tags.length > 0 ? <TagList tags={job.tags} /> : null}
			</article>
		);
	};
}

function RoleList(handle: Handle<{ roles: Role[]; showPeriods: boolean }>) {
	return () => {
		let { roles, showPeriods } = handle.props;

		return (
			<ol
				aria-label="Roles"
				mix={css({
					listStyle: "none",
					margin: 0,
					padding: 0,
					display: "flex",
					flexDirection: "column",
					gap: "10px",
				})}
			>
				{roles.map((role) => (
					<li
						key={`${role.title}-${role.period}`}
						mix={css({
							position: "relative",
							display: "flex",
							flexWrap: "wrap",
							alignItems: "baseline",
							gap: "0 16px",
							...(showPeriods ? timelineSubEntryMarker : {}),
						})}
					>
						<span mix={css({ fontSize: "18px", fontWeight: 600 })}>
							{role.title}
						</span>
						{showPeriods ? (
							<span mix={css({ fontSize: "15px", color: theme.muted })}>
								{role.period}
							</span>
						) : null}
					</li>
				))}
			</ol>
		);
	};
}

function TagList(handle: Handle<{ tags: string[] }>) {
	return () => (
		<ul
			aria-label="Technologies"
			mix={css({
				listStyle: "none",
				margin: 0,
				padding: 0,
				display: "flex",
				flexWrap: "wrap",
				gap: "8px",
			})}
		>
			{handle.props.tags.map((tag) => (
				<li
					key={tag}
					mix={css({
						padding: "2px 9px",
						border: `1px solid ${theme.rule}`,
						borderRadius: "4px",
						color: theme.muted,
						fontFamily: MONO_STACK,
						fontSize: "13px",
						lineHeight: 1.6,
					})}
				>
					{tag}
				</li>
			))}
		</ul>
	);
}
