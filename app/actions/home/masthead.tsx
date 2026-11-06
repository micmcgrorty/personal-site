import { css } from "remix/component";

import { PROFILE } from "../../data/profile.ts";

export function Masthead() {
	return () => (
		<header
			mix={css({
				display: "grid",
				gridTemplateColumns: "minmax(0, 1fr) 260px",
				gap: "64px",
				alignItems: "center",
				"@media (max-width: 720px)": {
					gridTemplateColumns: "1fr",
					gap: "36px",
				},
			})}
		>
			<div mix={css({ display: "flex", flexDirection: "column", gap: "28px" })}>
				<div>
					<h1
						mix={css({
							margin: 0,
							fontSize: "clamp(48px, 9vw, 88px)",
							fontWeight: 800,
							lineHeight: 0.98,
							letterSpacing: "-0.035em",
							textWrap: "balance",
						})}
					>
						{PROFILE.name}
					</h1>
					<p
						mix={css({
							margin: "16px 0 0",
							fontSize: "clamp(18px, 3vw, 22px)",
							fontWeight: 600,
							color: "var(--accent)",
						})}
					>
						{PROFILE.title}
					</p>
				</div>
				<p
					mix={css({
						margin: 0,
						maxWidth: "62ch",
						fontSize: "clamp(17px, 2.4vw, 20px)",
						lineHeight: 1.6,
					})}
				>
					{PROFILE.bio}
				</p>
			</div>
			<Portrait />
		</header>
	);
}

function Portrait() {
	return () => (
		<div
			mix={css({
				position: "relative",
				width: "100%",
				aspectRatio: "1 / 1",
				"&::before": {
					content: '""',
					position: "absolute",
					inset: 0,
					transform: "translate(14px, 14px)",
					background: "var(--accent)",
					borderRadius: "6px",
				},
				"@media (max-width: 720px)": { order: -1, width: "160px" },
				"@media print": { display: "none" },
			})}
		>
			<img
				src="/photo.webp"
				alt={`Portrait of ${PROFILE.name}`}
				width="720"
				height="720"
				mix={css({
					position: "relative",
					display: "block",
					width: "100%",
					height: "100%",
					objectFit: "cover",
					borderRadius: "6px",
				})}
			/>
		</div>
	);
}
