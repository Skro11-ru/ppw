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
				title: 'Мужской портрет',
				link: '/gallery/man',
			},
			{
				title: 'Бизнес-портрет',
				link: '/gallery/business',
			},
			{
				title: 'Женский портрет',
				link: '/gallery/woman',
			},
			{
				title: 'Разное',
				link: '/gallery/other',
			},
			{
				title: 'Moto life',
				link: '/gallery/moto',
			},
		],
	},
	{
		id: 'be',
		title: 'Быть, а не казаться',
		link: '/gallery/be',
	},
	// {
	// 	id: 'blog',
	// 	title: 'Блог',
	// 	link: '/blog',
	// 	links: [
	// 		{
	// 			title: 'Ссылка 1',
	// 			link: '/1',
	// 		},
	// 		{
	// 			title: 'Ссылка 2',
	// 			link: '/2',
	// 		},
	// 		{
	// 			title: 'Ссылка 3',
	// 			link: '/3',
	// 		},
	// 	],
	// },
	{
		id: 'tariffs',
		title: 'Цены',
		link: '/tariffs',
	},
	{
		id: 'contact',
		title: 'Контакты',
		link: '/contact',
	},
];
