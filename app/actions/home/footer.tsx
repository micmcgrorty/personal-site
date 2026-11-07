import type { Handle } from "remix/component";
import { css } from "remix/component";

import { PROFILE } from "../../data/profile.ts";
import { SOCIALS, type Social } from "../../data/socials.ts";
import { buttonStyle, linkStyle } from "../../ui/styles.ts";

export function Footer() {
	return () => (
		<footer
			mix={css({
				display: "flex",
				flexDirection: "column",
				gap: "32px",
				paddingTop: "40px",
				borderTop: "2px solid var(--rule)",
			})}
		>
			<div
				mix={css({
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					gap: "20px 40px",
				})}
			>
				<a href={`mailto:${PROFILE.email}`} mix={buttonStyle}>
					Email me
				</a>
				<nav aria-label="Social links">
					<ul
						mix={css({
							listStyle: "none",
							margin: 0,
							padding: 0,
							display: "flex",
							flexWrap: "wrap",
							gap: "8px 28px",
						})}
					>
						{SOCIALS.map((social) => (
							<li key={social.label}>
								<SocialLink social={social} />
							</li>
						))}
					</ul>
				</nav>
			</div>
			<p
				mix={css({
					margin: 0,
					fontSize: "14px",
					color: "var(--muted)",
				})}
			>
				&copy; {new Date().getFullYear()} {PROFILE.name}
			</p>
		</footer>
	);
}

function SocialLink(handle: Handle<{ social: Social }>) {
	return () => {
		let { label, href, Icon } = handle.props.social;

		return (
			<a
				href={href}
				mix={[
					linkStyle,
					css({
						display: "inline-flex",
						alignItems: "center",
						gap: "10px",
						padding: "6px 0",
						fontWeight: 500,
						"& svg": { width: "20px", height: "20px", display: "block" },
					}),
				]}
			>
				<span aria-hidden="true" mix={css({ display: "flex" })}>
					<Icon />
				</span>
				<span>{label}</span>
			</a>
		);
	};
}
