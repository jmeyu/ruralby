<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { t, locale, locales } from "./firstTime_i18n";
	export let lang = 'zh';

	let showModal = false;

	onMount(() => {
		const hasUnderstood = localStorage.getItem('hasUnderstood');
		if (!hasUnderstood)
			setTimeout(() => {
				showModal = true;
				setTimeout(() => {
					showModal = false;
				}, 50000);
			}, 4000);
	});

	function destroy() {
		showModal = false;
		localStorage.setItem('hasUnderstood', true);
	}

	function toggle(event) {
		lang = lang === 'en' ? 'zh' : 'en';
		$locale = lang;
	}
</script>

{#if showModal}
	<div class="modal-overlay">
		<div class="modal" transition:slide={{ duration: 2000 }}>
			<div class="modal-header">
				<Icon icon="mdi:warning-octagon" />
				<p><svg 
					class="localeSwitcher"
					width="63px"
					height="36px"
					viewBox="0 0 42 24"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
							on:click={toggle}
				>
					<g class={lang}>
						<rect x="0" y="0" width="42" height="24" rx="12" />
						<circle class={lang} cx="12" cy="12" r="10" />
						<path class="zh" d="M31.25,10.13 L32.38,10.45 C32.34,10.53 32.34,10.53 32.26,10.74 C32.16,11.02 32.15,11.03 32.12,11.12 C32.53,11.22 32.82,11.36 33.16,11.61 C33.8,12.09 34.11,12.71 34.11,13.5 C34.11,14.59 33.52,15.44 32.39,16 C31.8,16.29 31.23,16.44 30.35,16.53 C30.24,16.1 30.15,15.92 29.82,15.4 C30.63,15.39 31.14,15.28 31.73,15 C32.53,14.62 32.9,14.13 32.9,13.44 C32.9,12.81 32.49,12.3 31.78,12.06 C31.23,13.25 30.76,13.97 30.04,14.72 C29.14,15.67 28.25,16.16 27.42,16.16 C26.49,16.16 25.86,15.45 25.86,14.41 C25.86,13.59 26.21,12.8 26.85,12.17 C27.25,11.78 27.62,11.53 28.22,11.27 C28.22,10.95 28.24,10.55 28.26,10.07 C28.15,10.07 27.61,10.06 26.64,10.03 L26.45,10.03 C26.42,10.03 26.33,10.03 26.22,10.04 L26.22,8.92 C26.67,9.02 27.26,9.07 28.09,9.07 L28.31,9.07 C28.32,8.87 28.32,8.87 28.35,8.47 C28.36,8.34 28.37,8.09 28.37,7.9 C28.37,7.86 28.37,7.82 28.35,7.74 L29.59,7.8 C29.51,8.07 29.47,8.33 29.41,9.03 C31.01,8.94 32.43,8.74 33.2,8.5 L33.25,9.65 C33.11,9.66 33.07,9.66 32.86,9.69 C31.76,9.87 30.14,10.02 29.34,10.04 C29.31,10.47 29.3,10.79 29.29,11 C29.83,10.89 30.06,10.87 30.67,10.87 C30.79,10.87 30.87,10.87 31.05,10.89 C31.16,10.57 31.22,10.36 31.25,10.13 Z M28.24,12.41 C27.8,12.7 27.63,12.85 27.43,13.1 C27.13,13.49 26.98,13.9 26.98,14.32 C26.98,14.77 27.2,15.05 27.55,15.05 C27.83,15.05 28.1,14.93 28.42,14.67 C28.29,14.02 28.24,13.38 28.24,12.41 Z M29.37,13.92 L29.39,13.93 C29.43,13.87 29.43,13.87 29.5,13.79 C29.97,13.26 30.37,12.62 30.74,11.79 C30.63,11.78 30.58,11.78 30.48,11.78 C30.04,11.78 29.68,11.83 29.28,11.96 C29.29,12.88 29.29,12.98 29.35,13.68 C29.36,13.74 29.36,13.74 29.36,13.81 C29.36,13.86 29.36,13.87 29.37,13.92 Z" />
						<path class="en" d="M11.25,8.4 L12.87,8.4 L15.89,16 L14.27,16 L13.55,14 L10.49,14 L9.76,16 L8.23,16 L11.25,8.4 Z M13.13,12.82 L12.01,9.76 L10.9,12.82 L13.13,12.82 Z" />
					</g>
				</svg></p>
				<h2>Heads Up</h2>
			</div>
			<div class="modal-body">
				<p>
					{@html $t("firstTime.title")}
				</p>
				<p>
					{@html $t("firstTime.body")}
				</p>
				<p><strong>{@html $t("firstTime.footer")}</strong></p>
			</div>
			<div class="modal-footer">
				<button class="cta-btn btn" on:click={destroy}>{@html $t("firstTime.button")}</button>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.modal-overlay {
		z-index: 10000;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.modal {
		position: relative;
		margin: 2rem;
		font-family: 'Larsseit', sans-serif !important;
		background-color: #1d1c29c5;
		backdrop-filter: blur(10px);
		color: #fff;
		padding: 20px;
		border-radius: 1rem;
		border: 0.1px solid $accent-0;
		text-align: center;
		max-width: 500px;
		overflow: hidden;
	}

	.modal-header {
		font-size: larger;
		margin: 1rem 0 1.5rem 0;
		text-align: center;

		:global(svg) {
			font-size: 3rem;
			margin-bottom: 1rem;
			color: $accent-0;
		}
	}

	.modal-body {
		color: $clr-fg-2;
		padding-inline: 2rem;
		margin-bottom: 20px;

		p {
			text-align: center;
			font-family: 'Larsseit', sans-serif !important;
			margin-bottom: 1rem;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}

	.modal-footer {
		display: flex;
		justify-content: flex-end;
	}

	.cta-btn {
		border: 1px solid $accent-0;
		font-style: bold;
		margin: 1rem auto;
		background: transparent;
	}

	.cta-btn:hover {
		background: $accent-0;
		color: black;
	}
	circle {
		transition: transform 0.25s ease-out;
		fill: #444
	}
	
	circle.zh {
		transform: translatex(18px);
	}
	
	path {
		transition: fill 0.4s ease-out;
		fill: #222;
	}
	
	.zh path.zh, .en path.en {
		fill: #eee;
	}
</style>
