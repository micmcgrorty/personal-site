export type SocialIcon = "github" | "linkedin" | "x";

export type Social = {
	label: string;
	href: string;
	icon: SocialIcon;
};

export const SOCIALS: Social[] = [
	{ label: "GitHub", href: "https://github.com/micmcgrorty", icon: "github" },
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/michael-mcgrorty-a8207064/",
		icon: "linkedin",
	},
	{ label: "X", href: "https://x.com/micmcgrorty", icon: "x" },
];
