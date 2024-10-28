import { getAllImages } from '@utils/getAllImages.ts';

const getPoster = async (
	category: 'man' | 'woman' | 'business' | 'other' | 'moto',
) => {
	return await getAllImages(category);
};

export const navigation = [
	{
		id: 'main',
		title: 'Главная',
		link: '/',
	},
	{
		id: 'gallery',
		title: 'Портфолио',
		link: '/gallery/',
		links: [
			{
				title: 'Мужской портрет',
				link: '/gallery/man/',
				poster: await getPoster('man'),
			},
			{
				title: 'Бизнес-портрет',
				link: '/gallery/business/',
				poster: await getPoster('business'),
			},
			{
				title: 'Женский портрет',
				link: '/gallery/woman/',
				poster: await getPoster('woman'),
			},
			{
				title: 'Разное',
				link: '/gallery/other/',
				poster: await getPoster('other'),
			},
			{
				title: 'Moto life',
				link: '/gallery/moto/',
				poster: await getPoster('moto'),
			},
		],
	},
	{
		id: 'achievements',
		title: 'Достижения',
		link: '/achievements/',
	},
	{
		id: 'blog',
		title: 'Блог',
		link: '/blog/',
		// links: [
		// 	{
		// 		title: 'Ссылка 1',
		// 		link: '/1',
		// 	},
		// 	{
		// 		title: 'Ссылка 2',
		// 		link: '/2',
		// 	},
		// 	{
		// 		title: 'Ссылка 3',
		// 		link: '/3',
		// 	},
		// ],
	},
	{
		id: 'tariffs',
		title: 'Стоимость',
		link: '/tariffs/',
	},
	{
		id: 'contact',
		title: 'Контакты',
		link: '/contact/',
	},
];
