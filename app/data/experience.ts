export type Role = { title: string; period: string };

export type Job = {
	company: string;
	companyUrl?: string;
	companyNote?: string;
	period: string;
	roles: Role[];
	summary: string;
	highlights: string[];
	tags: string[];
};

export const EXPERIENCE: Job[] = [
	{
		company: "HBK",
		companyUrl: "https://hbkworld.com",
		period: "September 2025 – Present",
		roles: [
			{ title: "Senior React Developer", period: "September 2025 – Present" },
		],
		summary:
			"I work on ReliaSoft Cloud, HBK's SaaS software for FMEA (failure mode and effects analysis), as part of a distributed team across the US, UK and Poland. I work across the full stack: React and TypeScript on the front end, and C#, ASP.NET and EF Core on the back end, which was new to me when I joined.",
		highlights: [
			"Designed and built the front end of a new permissions system: a React context wrapping the whole app, so any component can check permissions with a hook",
			"Pushed for a restructure of a front-end codebase that was hard to follow, and did a large part of the work: a clearer React folder structure and co-located Styled Components",
			"Designed the architecture (database schema and endpoints) for making a hard-coded dataset configurable per FMEA type. It was reviewed by the architects and adopted as I proposed it",
			"Build back-end endpoints in C#, ASP.NET and EF Core using test-driven development, following the team's existing conventions, and use TDD on the front end too",
		],
		tags: [
			"React",
			"TypeScript",
			"Styled Components",
			"C#",
			"ASP.NET",
			"EF Core",
		],
	},
	{
		company: "Bynder",
		companyUrl: "https://bynder.com",
		companyNote: "Joined as GatherContent, acquired by Bynder in 2022",
		period: "October 2021 – August 2025",
		roles: [
			{ title: "Senior Software Engineer", period: "July 2024 – August 2025" },
			{ title: "Software Engineer", period: "January 2023 – July 2024" },
			{ title: "Frontend Developer", period: "October 2021 – January 2023" },
		],
		summary:
			"I worked on Bynder's Content Workflow module, formerly GatherContent. I was a front-end developer in a cross-functional team of back-end engineers, designers and a product manager. My work covered a React app, a Remix app and a Node.js server for live collaborative editing, and I also contributed to the PHP, Laravel and MySQL back end.",
		highlights: [
			"Became the go-to engineer for our live collaboration server, which lets two or more people edit a document at the same time using Socket.IO. A former CTO had built it in a weekend, it now powered a core feature, and nobody else on the team worked on it",
			"Modernised that server: converted it to TypeScript, migrated its tests to Vitest, upgraded Node.js, and found and fixed gaps in the test coverage",
			"Helped introduce a server-side rendered Remix app alongside our older React app. The pages we rebuilt in it were noticeably faster",
			"Led the front-end side of an initiative to define the contract between back end and front end with OpenAPI. Mock Service Worker checked that the front end sent and received the right data, and also let us run the Remix app against the documentation, so we could build features before the back end was finished",
			"Selected for a new team that took ownership of our design system and designed a new app to serve micro-frontends owned by other teams. I was on this team for six months",
			"Buddied two new developers and onboarded them to the company",
		],
		tags: [
			"React",
			"Remix",
			"TypeScript",
			"Node.js",
			"Socket.IO",
			"OpenAPI",
			"PHP",
			"Laravel",
			"MySQL",
		],
	},
	{
		company: "Vidatec",
		period: "September 2019 – October 2021",
		roles: [
			{ title: "Web Developer", period: "September 2019 – October 2021" },
		],
		summary:
			"I worked at a web agency in teams of two to four developers, building e-commerce sites, marketing sites and web apps for clients. My main projects were Granta.com, Social Good Connect and Insights Explore. Most were React and Node.js deployed on AWS, with one WordPress and WooCommerce project and one Next.js project.",
		highlights: [
			"Took over front-end development of Insights Explore when its lead developer left the company, with no drop in delivery speed or customer satisfaction",
			"Built a custom WordPress feature to bring a customer's book sales data into their WooCommerce content site, as the service holding it had no data export",
			"Built the marketing site for a new company, Bounc-e, in Next.js, which I hadn't used before",
			"Built internal tools integrating our time tracking and CRM software",
			"Took part in client calls, and worked especially closely with the customer on Granta.com",
		],
		tags: [
			"React",
			"Node.js",
			"Next.js",
			"AWS",
			"PHP",
			"WordPress",
			"WooCommerce",
		],
	},
	{
		company: "Scotweigh",
		period: "July 2018 – September 2019",
		roles: [
			{ title: "Software Developer", period: "July 2018 – September 2019" },
		],
		summary:
			"I moved into software from brewing after five months of study, and Scotweigh was my first developer job. I was one of two developers on software for Windows-based scales, mostly used in butcher shops. The scales ran VB.NET software with a MySQL database, and a PHP and jQuery web server, all deployed locally in each shop.",
		highlights: [
			"Built a feature that let customers with several shops take Christmas orders at any of them, one of the most requested features from customers",
			"Replaced the manual process of travelling to each shop to update its scales with an automatic update system",
			"Fixed bugs, added features and supported customers, including visiting butchers' shops to set up systems on site",
		],
		tags: ["VB.NET", "PHP", "MySQL", "jQuery", "JavaScript"],
	},
];
