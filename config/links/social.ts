type TSocialLink = {
	icon: string;
	title: string;
	link: string;
	customClasses: string[];
};

export const socialLink: TSocialLink[] = [
	{
		icon: 'mdi:instagram',
		title: 'Instagram Page',
		link: 'https://www.instagram.com/nastifox13/',
		customClasses: ['text-muted', 'hover:text-fuchsia-600'],
	},
];
