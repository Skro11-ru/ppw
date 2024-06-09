import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

interface AstroFrontmatter {
	title: string;
	description: string;
	pubDate: string;
	heroImage: string;
	images: string[];
	category: string;
	minutesRead: string;
	tags: string[];
}

interface AstroData {
	astro: {
		frontmatter: AstroFrontmatter;
	};
}

export function remarkReadingTime() {
	return function (tree: unknown, { data }: { data: AstroData }) {
		const textOnPage = toString(tree);
		const readingTime = getReadingTime(textOnPage);
		const displayed = Math.ceil(
			Number.parseFloat(readingTime.minutes.toFixed(2)),
		);
		data.astro.frontmatter.minutesRead = `${displayed} мин`;
	};
}
