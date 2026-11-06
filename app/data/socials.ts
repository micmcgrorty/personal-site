import { GitHubIcon, LinkedInIcon, MailIcon, XIcon } from "../ui/icons.tsx";

export type Social = {
	label: string;
	href: string;
	Icon: () => () => JSX.Element;
};

export const SOCIALS: Social[] = [
	{
		label: "GitHub",
		href: "https://github.com/micmcgrorty",
		Icon: GitHubIcon,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/michael-mcgrorty-a8207064/",
		Icon: LinkedInIcon,
	},
	{ label: "X", href: "https://x.com/micmcgrorty", Icon: XIcon },
	{
		label: "Email",
		href: "mailto:michaelmcgrorty2@gmail.com",
		Icon: MailIcon,
	},
];
