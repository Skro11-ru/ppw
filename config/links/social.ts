import { getImage } from 'astro:assets';
import wh from '../../public/photos/qr/wh.svg';
import vk from '../../public/photos/qr/vk.svg';
import inst from '../../public/photos/qr/inst.svg';
import tg from '../../public/photos/qr/tg.svg';
import ph from '../../public/photos/qr/ph.svg';
import ml from '../../public/photos/qr/ml.svg';
import type { GetImageResult } from 'astro';

const vkQR = await getImage({
	src: vk,
	format: 'webp',
	inferSize: true,
	quality: 100,
});

const whQR = await getImage({
	src: wh,
	format: 'webp',
	inferSize: true,
	quality: 100,
});

const instQR = await getImage({
	src: inst,
	format: 'webp',
	inferSize: true,
	quality: 100,
});

const tgQR = await getImage({
	src: tg,
	format: 'webp',
	inferSize: true,
	quality: 100,
});

const phQR = await getImage({
	src: ph,
	format: 'webp',
	inferSize: true,
	quality: 100,
});

const mlQR = await getImage({
	src: ml,
	format: 'webp',
	inferSize: true,
	quality: 100,
});

type TSocialLink = {
	icon: string;
	label: string;
	link: string;
	qr: GetImageResult;
	customClasses: string[];
};

export const socialLink: TSocialLink[] = [
	{
		icon: 'fa:phone',
		label: 'phone',
		link: 'tel:+79138202385',
		customClasses: ['text-muted', 'hover:text-fuchsia-600'],
		qr: phQR,
	},
	{
		icon: 'fa:envelope-o',
		label: 'mail',
		link: 'mailto:ooo.basic@mail.ru',
		customClasses: ['text-muted', 'hover:text-fuchsia-600'],
		qr: mlQR,
	},
	{
		icon: 'cib:instagram',
		label: 'instagram',
		link: 'https://www.instagram.com/nastifox13/',
		customClasses: ['text-muted', 'hover:text-fuchsia-600'],
		qr: instQR,
	},
	{
		icon: 'cib:telegram',
		label: 'telegram',
		link: 'https://t.me/nasti_f13/',
		customClasses: ['text-muted', 'hover:text-fuchsia-600'],
		qr: tgQR,
	},

	{
		icon: 'cib:whatsapp',
		label: 'whatsapp',
		link: 'https://wa.me/79138202385/',
		customClasses: ['text-muted', 'hover:text-fuchsia-600'],
		qr: whQR,
	},
	{
		icon: 'cib:vk',
		label: 'vk',
		link: 'https://vk.com/a.sudarchikova/',
		customClasses: ['text-muted', 'hover:text-fuchsia-600'],
		qr: vkQR,
	},
];
