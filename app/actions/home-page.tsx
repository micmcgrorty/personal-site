import { PAGE_TITLE } from "../data/profile.ts";
import { PageLayout } from "../ui/page-layout.tsx";
import { Document } from "./document.tsx";
import { Experience } from "./home/experience.tsx";
import { Footer } from "./home/footer.tsx";
import { HomeHead } from "./home/head.tsx";
import { Masthead } from "./home/masthead.tsx";

export function HomePage() {
	return () => (
		<Document title={PAGE_TITLE} head={<HomeHead />}>
			<PageLayout>
				<Masthead />
				<Experience />
				<Footer />
			</PageLayout>
		</Document>
	);
}
