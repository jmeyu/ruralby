<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { t, locale, locales } from "./firstTime_i18n";
	export let lang = 'en'

	let showModal = false;

	onMount(() => {
		const hasUnderstood = localStorage.getItem('hasUnderstood');
		if (!hasUnderstood)
			setTimeout(() => {
				showModal = true;
				setTimeout(() => {
					showModal = false;
				}, 10000);
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
		<div class="modal" transition:slide={{ duration: 5000 }}>
			<div class="modal-header">
				<Icon icon="mdi:warning-octagon" />
				<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
					width="48.000000pt" height="48.000000pt" viewBox="0 0 48.000000 48.000000"
					preserveAspectRatio="xMidYMid meet">

					<g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
					fill="#000000" stroke="none">
					<path d="M29 444 c-17 -21 -24 -140 -10 -177 6 -15 22 -32 36 -37 22 -8 25
					-16 25 -55 0 -25 3 -45 8 -44 4 0 23 20 42 43 33 40 39 44 93 48 82 6 92 19
					92 122 0 116 0 116 -150 116 -101 0 -125 -3 -136 -16z m141 -28 c0 -10 13 -16
					42 -18 23 -2 43 -9 46 -15 2 -7 -2 -13 -10 -13 -7 0 -23 -16 -36 -36 -22 -34
					-23 -36 -5 -49 26 -19 8 -31 -27 -18 -18 7 -32 7 -36 2 -7 -12 -44 -12 -44 1
					0 5 8 13 17 19 17 9 17 10 0 28 -17 20 -23 43 -10 43 4 0 17 -10 31 -22 l23
					-23 19 25 19 25 -65 3 c-45 2 -64 7 -61 15 2 7 18 13 35 15 20 2 32 9 32 18 0
					8 7 14 15 14 8 0 15 -6 15 -14z"/>
					<path d="M340 270 c0 -42 -30 -68 -90 -76 -47 -6 -50 -8 -50 -36 0 -42 26 -85
					61 -104 17 -8 61 -17 97 -18 37 -2 75 -6 86 -11 16 -7 17 -5 10 16 -4 13 -7
					33 -6 44 15 148 18 132 -26 175 -49 50 -82 53 -82 10z m29 -112 c19 -34 26
					-57 20 -62 -6 -6 -13 -6 -21 2 -7 7 -24 12 -38 12 -14 0 -31 -5 -38 -12 -8 -8
					-15 -8 -21 -2 -11 10 44 114 59 114 5 0 22 -24 39 -52z"/>
					<path d="M320 150 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
					-10 -4 -10 -10z"/>
					</g>
				</svg>
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
</style>
