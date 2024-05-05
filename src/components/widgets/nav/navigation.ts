export const navigation = [
	{
		id: 'main',
		title: 'Главная',
		link: '/',
	},
	{
		id: 'gallery',
		title: 'Портфолио',
		link: '/gallery',
		links: [
			{
				title: 'Все',
				link: '/gallery/all',
			},
			{
				title: 'Мужской портрет',
				link: '/gallery/man',
			},
			{
				title: 'Женский портрет',
				link: '/gallery/woman',
			},
			{
				title: 'Семейное фото',
				link: '/gallery/family',
			},
		],
	},
	{
		id: 'contact',
		title: 'Контакты',
		link: '/contact',
	},
	{
		id: 'blog',
		title: 'Блог',
		link: '/blog',
		links: [
			{
				title: 'Ссылка 1',
				link: '/1',
			},
			{
				title: 'Ссылка 2',
				link: '/2',
			},
			{
				title: 'Ссылка 3',
				link: '/3',
			},
		],
	},
	{
		id: 'prices',
		title: 'Цены',
		link: '/prices',
	},
	{
		id: 'reviews',
		title: 'Отзывы',
		link: '/reviews',
	},
];
