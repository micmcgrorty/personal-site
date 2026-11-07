import { PROFILE } from "./profile.ts";

/** Facts about the site itself, used in every page's metadata. */
export const SITE = {
	name: PROFILE.name,
	url: "https://www.micmcgrorty.dev",
	/** Link preview image, served from `public/`. */
	ogImage: { path: "/og-image.png", width: 1200, height: 630 },
};
