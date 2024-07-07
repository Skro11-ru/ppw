<div class="slot-machine">
	<h1>Генератор случайных чисел</h1>
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
				<div class="reel-door bg-white" class:--hidden={isDirty}>?</div>
			</div>
		{/each}
	</div>

	<button
		on:click={action}
		class:button-inactive={status === statusEnum.PROCESS}
		class="button bg-accent"
		class:--end={status === statusEnum.END}
		disabled={status === statusEnum.PROCESS}
	>
		{titleBtn}
	</button>
</div>

<script lang="ts">
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
	let start: number | undefined;

	const tMax = 4000;
	const height = 700;
	let numberOutput: number[] = [];
	let speeds: number[] = [];
	const r = [];

	enum statusEnum {
		START = 'START',
		PROCESS = 'PROCESS',
		END = 'END',
	}
	let status: statusEnum = statusEnum.START;

	$: isDirty = status !== statusEnum.START;

	let titleBtn: string;
	$: {
		switch (status) {
			case statusEnum.START: {
				titleBtn = 'Участвовать';
				break;
			}
			case statusEnum.PROCESS: {
				titleBtn = 'Генерирую...';
				break;
			}
			case statusEnum.END: {
				titleBtn = 'Копировать';
				break;
			}
			default: {
				titleBtn = 'Участвовать';
			}
		}
	}

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
			copyToClipboard(sTarget);
		}
		status = statusEnum.PROCESS;

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

			i.scrollTo({
				top: curEl.offsetTop - 5,
				left: 0,
				behavior: 'smooth',
			});
		});
		status = statusEnum.END;
	}
</script>

<style lang="scss">
	.slot-machine {
		width: 100%;
		max-width: 650px;
		margin: 0 auto;
	}

	.button {
		display: block;
		width: 100%;
		padding: 2.2rem 0;

		color: #fff;
		font-weight: 300;
		font-size: 2.4rem;
		line-height: 3.2rem;
		text-align: center;
		text-decoration: none;

		border: none;
		border-radius: 0.4rem;
		box-shadow:
			inset -0.1rem -0.1rem 0 0 #000,
			inset 0.1rem 0.1rem 0.1rem 0 #f36aa8,
			0.2rem 0.2rem 0.1rem rgb(0 0 59 / 60%);

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
			opacity: 0.7;
		}

		&.--end {
			color: #000;
			background-color: #43ef09;
			box-shadow:
				inset -0.1rem -0.1rem 0 0 #000,
				inset 0.1rem 0.1rem 0.1rem 0 #65f136,
				0.2rem 0.2rem 0.1rem rgb(0 0 59 / 60%);
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
		padding: 2rem 0;
		border-radius: 3rem;
	}

	.reel {
		position: relative;
		flex: 1;
		//height: 10rem;
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
			//top: -4rem;
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
			height: 6rem;
			//margin-top: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 0;
			font-weight: 700;
			//font-size: 4.8rem;
			font-size: 48px;
		}
	}
</style>
