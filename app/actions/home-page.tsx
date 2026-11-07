import { PAGE_TITLE, PROFILE } from "../data/profile.ts";
import { PageLayout } from "../ui/page-layout.tsx";
import { Document } from "./document.tsx";
import { Experience } from "./home/experience.tsx";
import { Footer } from "./home/footer.tsx";
import { Masthead } from "./home/masthead.tsx";

export function HomePage() {
	return () => (
		<Document
			meta={{ title: PAGE_TITLE, description: PROFILE.description, path: "/" }}
		>
			<PageLayout>
				<Masthead />
				<Experience />
				<Footer />
			</PageLayout>
		</Document>
	);
}
