<div class="slot-machine">
	<h3 class="-title">Генератор случайных чисел</h3>
	<div class="-container">
		<div class="group">
			{#each array as i}
				<div class="reel">
					<div class="reel-holder">
						{#each i as j}
							<p>{j}</p>
						{/each}
					</div>
					<div class="reel-holder">
						{#each i as j}
							<p>{j}</p>
						{/each}
					</div>
					<div class="reel-door bg-gray-50" class:--hidden={isDirty}>?</div>
				</div>
			{/each}
		</div>
		<button
			on:click={action}
			class:button-inactive={status === statusEnum.PROCESS}
			class="button bg-accent"
			class:--end={copied}
			disabled={status === statusEnum.PROCESS}
		>
			{titleBtn}
		</button>
	</div>
</div>

<script lang="ts">
	enum statusEnum {
		START = 'START',
		PROCESS = 'PROCESS',
		END = 'END',
	}

	import { copyToClipboard } from '@utils/copyToClipboard.ts';

	const COUNT = 4;
	const reel = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'0',
	];

	const array = Array(COUNT).fill(reel);

	let status: statusEnum = statusEnum.START;
	let titleBtn = 'Сгенерировать';
	let copied = false;

	$: isDirty = status !== statusEnum.START;

	const setStatus = (status: statusEnum) => {
		switch (status) {
			case statusEnum.PROCESS: {
				titleBtn = 'Генерирую...';
				return statusEnum.PROCESS;
			}
			case statusEnum.END: {
				titleBtn = 'Копировать';
				return statusEnum.END;
			}
			default: {
				return statusEnum.START;
			}
		}
	};

	const randomNumber = (min: number, max: number) => {
		const randomValue = crypto.getRandomValues(new Uint32Array(1))[0];
		return Math.trunc(min + ((max - min + 1) * randomValue) / 2 ** 32);
	};

	const target = randomNumber(1, 9999);
	let sTarget = target.toString();
	if (sTarget.length !== COUNT) {
		const numberMissing = COUNT - sTarget.length;
		for (let i = 0; i < numberMissing; i++) {
			sTarget = 0 + sTarget;
		}
	}

	function action() {
		if (status === statusEnum.END) {
			titleBtn = 'Скопировано';
			copied = true;

			copyToClipboard(sTarget);
			setTimeout(() => {
				titleBtn = 'Копировать';
				copied = false;
			}, 2000);
			return;
		}
		status = setStatus(statusEnum.PROCESS);
		const reelsElements = document.querySelectorAll('.reel');

		reelsElements.forEach((i, index) => {
			const holder = i.querySelectorAll('.reel-holder')[1];
			const pEl = holder.querySelectorAll('p');
			let curEl;

			pEl.forEach((j) => {
				if (j.innerText === sTarget[index]) {
					curEl = j;
				}
			});

			// i.scrollTo({
			// 	top: curEl.offsetTop - 5,
			// 	left: 0,
			// 	behavior: 'smooth',
			// });

			//   =================
			console.log(`########################## Reel ##### ${137}\n`, curEl);
			// setTimeout(() => {
			// 	curEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
			// }, index * 1000);

			// requestAnimationFrame(() => {
			// 	curEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
			// });

			//   =================
			//
			//
			//   =================
			// Используйте requestAnimationFrame
			requestAnimationFrame(() => {
				console.log('offsetTop:', curEl.offsetTop);

				i.scrollTo({
					top: curEl.offsetTop - 5,
					left: 0,
					// behavior: 'smooth', // Попробуйте удалить behavior: 'smooth'
				});
			});

			//   =================
		});

		status = setStatus(statusEnum.END);
	}
</script>

<style lang="scss">
	.slot-machine {
		width: 100%;
		max-width: 800px;
		margin: 0 auto;

		.-title {
			font-size: 30px;
			text-align: center;
		}

		.-container {
			max-width: 430px;
			margin: 0 auto;
		}
	}

	.button {
		display: block;
		width: 100%;
		padding: 23px 20px;
		color: #fff;
		font-size: 2rem;
		text-align: center;
		text-decoration: none;
		border: none;
		border-radius: 0.4rem;

		&-inactive {
			background-color: #88777b;
			box-shadow: none;

			&:hover {
				background-color: #88777b !important;
				cursor: default !important;
			}
		}

		&:hover {
			cursor: pointer;
			opacity: 0.8;
		}

		&.--end {
			color: #000;
			background-color: white;
			transition: background-color 0.1s linear;
		}
	}

	h1 {
		font-size: 40px;
		text-align: center;
	}

	p {
		margin: 0 0 16px;
		font-size: 18px;
		line-height: 23px;
	}

	.group,
	.reel {
		display: inline-block;
		color: #000;
	}

	.group {
		display: flex;
		gap: 10px;
		justify-content: space-between;
		padding: 1rem 0;
		border-radius: 3rem;
	}

	.reel {
		position: relative;
		flex: 1;
		height: 100px;
		overflow: hidden;
		text-align: center;
		background: #fff;
		border-radius: 1rem;
		box-shadow:
			0 0.2rem 0.7rem rgb(0 0 0 / 30%) inset,
			0 0 0.1rem rgb(0 0 0 / 20%) inset;

		.reel-holder {
			position: relative;
			text-align: center;
		}

		.reel-door {
			position: absolute;
			top: 0;
			left: 0;

			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;

			font-weight: 700;
			font-size: 4rem;

			&.--hidden {
				display: none;
			}
		}

		:global(p) {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 6rem;
			margin-bottom: 0;
			font-weight: 700;
			font-size: 48px;
		}
	}
</style>
