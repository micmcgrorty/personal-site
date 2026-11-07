import type { Handle, RemixNode } from "remix/component";
import { css } from "remix/component";

/** Space to the left of each entry, where the spine and markers sit. */
const GUTTER = 40;
/** Horizontal centre of the spine, measured from the timeline's left edge. */
const SPINE_CENTRE = 8;

const ENTRY_MARKER = 16;
const SUB_ENTRY_MARKER = 8;

/** Left offset, relative to an entry, that centres a marker on the spine. */
function markerLeft(size: number): string {
	return `${SPINE_CENTRE - GUTTER - size / 2}px`;
}

/**
 * A vertical timeline: a spine down the left, with a marker for each entry.
 * Children should be `TimelineEntry` elements.
 */
export function Timeline(handle: Handle<{ children?: RemixNode }>) {
	return () => (
		<ol
			mix={css({
				listStyle: "none",
				margin: 0,
				padding: `0 0 0 ${GUTTER}px`,
				position: "relative",
				display: "flex",
				flexDirection: "column",
				gap: "64px",
				"@keyframes spine-draw": {
					from: { transform: "scaleY(0)" },
					to: { transform: "scaleY(1)" },
				},
				"&::before": {
					content: '""',
					position: "absolute",
					left: `${SPINE_CENTRE - 1}px`,
					top: "10px",
					bottom: 0,
					width: "2px",
					background: "linear-gradient(to bottom, var(--accent), var(--rule))",
					transformOrigin: "top",
					animation: "spine-draw 1.6s cubic-bezier(0.2, 0.7, 0.2, 1) both",
				},
			})}
		>
			{handle.props.children}
		</ol>
	);
}

/** One entry on the timeline. A `current` entry gets a highlighted marker. */
export function TimelineEntry(
	handle: Handle<{ current?: boolean; children?: RemixNode }>,
) {
	return () => (
		<li
			mix={css({
				position: "relative",
				"&::before": {
					content: '""',
					position: "absolute",
					left: markerLeft(ENTRY_MARKER),
					top: "8px",
					width: `${ENTRY_MARKER}px`,
					height: `${ENTRY_MARKER}px`,
					borderRadius: "50%",
					border: "3px solid var(--accent)",
					background: handle.props.current ? "var(--highlight)" : "var(--bg)",
				},
				"@media print": { breakInside: "avoid" },
			})}
		>
			{handle.props.children}
		</li>
	);
}

/**
 * Style for an element inside a `TimelineEntry` that should get its own small
 * marker on the spine, such as one role within a job. The element must be
 * positioned (`position: relative`) and sit at the entry's left edge.
 */
export const timelineSubEntryMarker = {
	"&::before": {
		content: '""',
		position: "absolute",
		left: markerLeft(SUB_ENTRY_MARKER),
		top: "10px",
		width: `${SUB_ENTRY_MARKER}px`,
		height: `${SUB_ENTRY_MARKER}px`,
		borderRadius: "50%",
		background: "var(--accent)",
	},
} as const;
