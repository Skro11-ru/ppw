type TSocialLink = {
	icon: string;
	label: string;
	link: string;
	customClasses: string[];
};

export const socialLink: TSocialLink[] = [
	{
		icon: 'cib:instagram',
		label: 'instagram',
		link: 'https://www.instagram.com/nastifox13/',
		customClasses: ['text-muted', 'hover:text-fuchsia-600'],
	},
	{
		icon: 'cib:telegram',
		label: 'telegram',
		link: 'https://t.me/nasti_f13/',
		customClasses: ['text-muted', 'hover:text-fuchsia-600'],
	},

	{
		icon: 'cib:whatsapp',
		label: 'whatsapp',
		link: 'https://wa.me/79138202385/',
		customClasses: ['text-muted', 'hover:text-fuchsia-600'],
	},
	{
		icon: 'cib:vk',
		label: 'vk',
		link: 'https://vk.com/a.sudarchikova/',
		customClasses: ['text-muted', 'hover:text-fuchsia-600'],
	},
];
