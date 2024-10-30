interface ExtendedImageMetadata extends ImageMetadata {
	index: number;
	// ...
}

export const getAllImages = async (
	gallery: 'man' | 'woman' | 'business' | 'family' | 'moto',
	currentPath?: string | undefined,
) => {
	let paths = {};

	const data: {
		images: ExtendedImageMetadata[];
		setting: {
			vertical: number[];
			horizontal: number[];
			big: number[];
		};
	} = {
		images: [],
		setting: {
			vertical: [],
			horizontal: [],
			big: [],
		},
	};

	if (gallery === 'man') {
		paths = import.meta.glob<{ default: ExtendedImageMetadata }>(
			'../../public/photos/gallery/man/*.{jpeg,jpg,png,gif,JPEG,JPG,PNG,GIF}',
		);

		data.setting = {
			horizontal: [1, 8, 18],
			vertical: [2, 5, 10, 12, 15],
			big: [0, 8, 16],
		};
	}

	if (gallery === 'woman') {
		paths = import.meta.glob<{ default: ExtendedImageMetadata }>(
			'../../public/photos/gallery/woman/*.{jpeg,jpg,png,gif,JPEG,JPG,PNG,GIF}',
		);

		data.setting = {
			horizontal: [0, 21],
			vertical: [1, 7, 9, 10, 15],
			big: [2, 5, 10, 17],
		};
	}

	if (gallery === 'business') {
		paths = import.meta.glob<{ default: ExtendedImageMetadata }>(
			'../../public/photos/gallery/business/*.{jpeg,jpg,png,gif,JPEG,JPG,PNG,GIF}',
		);

		data.setting = {
			horizontal: [0],
			vertical: [3, 6, 15],
			big: [2, 5, 16],
		};
	}

	if (gallery === 'moto') {
		paths = import.meta.glob<{ default: ExtendedImageMetadata }>(
			'../../public/photos/gallery/moto/*.{jpeg,jpg,png,gif,JPEG,JPG,PNG,GIF}',
		);

		data.setting = {
			horizontal: [1, 4, 13, 14, 24, 25, 36, 43],
			vertical: [
				0, 2, 5, 8, 9, 12, 15, 16, 23, 29, 30, 31, 33, 35, 37, 39, 40, 41, 42,
			],
			big: [3, 7, 12, 13, 27, 34],
		};
	}

	if (gallery === 'family') {
		paths = import.meta.glob<{ default: ExtendedImageMetadata }>(
			'../../public/photos/gallery/family/*.{jpeg,jpg,png,gif,JPEG,JPG,PNG,GIF}',
		);

		data.setting = {
			horizontal: [9, 17],
			vertical: [0, 4, 5, 11, 12, 13, 14, 15],
			big: [1, 7, 10],
		};
	}

	if (currentPath?.includes('achievements')) {
		paths = import.meta.glob<{ default: ExtendedImageMetadata }>(
			'../../public/photos/achievements/*.{jpeg,jpg,png,gif,JPEG,JPG,PNG,GIF}',
		);

		data.setting = {
			horizontal: [],
			vertical: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			big: [],
		};
	}

	//todo https://docs.astro.build/en/recipes/dynamically-importing-images/
	for (const [, value] of Object.entries(paths)) {
		const resolve: { default: ExtendedImageMetadata } = await (
			value as () => Promise<{ default: ExtendedImageMetadata }>
		)();
		const index: string | undefined = resolve.default.src
			?.split('/')
			?.at(-1)
			?.split('.')?.[0];

		const img = resolve.default;

		if (index !== undefined) {
			img['index'] = Number(index);
		}
		data.images.push(img);

		data.images = data.images.sort((a, b) => a.index - b.index);

		return data;
	}
};
