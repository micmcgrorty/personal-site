import type { Handle, RemixNode } from "remix/component";
import { css } from "remix/component";

/** The page's width, gutters and spacing between sections. */
export function PageLayout(handle: Handle<{ children?: RemixNode }>) {
	return () => (
		<main
			mix={css({
				margin: 0,
				padding: "80px 32px 64px",
				minHeight: "100vh",
				"@media (max-width: 720px)": { padding: "48px 20px 48px" },
				"@media print": { minHeight: "auto", padding: 0 },
			})}
		>
			<div
				mix={css({
					width: "100%",
					maxWidth: "900px",
					margin: "0 auto",
					display: "flex",
					flexDirection: "column",
					gap: "112px",
					"@media (max-width: 720px)": { gap: "72px" },
				})}
			>
				{handle.props.children}
			</div>
		</main>
	);
}
