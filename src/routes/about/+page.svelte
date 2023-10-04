<script>
	import { t, locale, locales } from "./About_i18n.js";
	export let lang = 'en';
	// Create a locale specific timestamp
	$: time = new Date().toLocaleDateString(lang, {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	function toggle(event) {
		lang = lang === 'en' ? 'zh' : 'en';
		$locale = lang;
	}
</script>

<main>
	<p align="right">中文点我（实在修不过来了，凑合点吧）：
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
	</p>
	<h1>{$t("about.title")}</h1>
	<hr />
	<!-- <img
		src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzc4NWMzMjRhYWQzOTNiOTE2ZGYzOTc5ZGVlZDhmOTIxYjM2NGI2MCZjdD1n/ASd0Ukj0y3qMM/giphy.gif"
		alt="goodbye"
	/> -->
	<p />
	<p>{@html $t("about.body", { time })}</p>
	<p>{@html $t("about.footer")}</p>
</main>

<style lang="scss">
	main {
		min-height: 100vh;
		height: 100%;
		max-width: 800px;
	}

	@font-face {
		font-family: 'Monument Extended';
		src: url('/fonts/Monument/MonumentExtended-Regular.woff2') format('woff2'), url('/fonts/Monument/MonumentExtended-Regular.woff') format('woff');
		font-weight: bold;
		font-style: normal;
		font-display: swap;
	}

	h1 {
		font-size: 2rem;
		margin-bottom: 3rem;
		text-align: center;
		font-family: 'Monument Extended', sans-serif !important;
		width: 100%;
		display: block;
		color: hsl(170, 36%, 55%);
	}

	hr {
		border-color: $clr-fg-5;
		margin-block: 2rem;
		width: 100%;
	}

	img {
		float: right;
		margin: 0 1.5rem 1.5rem 1.5rem;
		border-radius: 3rem;
		@media screen and (max-width: $tablet) {
			float: none;
			border-radius: 1rem;
			margin-inline: auto;
		}
	}

	s {
		text-decoration: line-through wavy;
		text-decoration-color: $accent-05;
	}

	p {
		display: block;
		font-size: 1.25rem;
		margin-bottom: 1.6rem;
		hyphens: auto;
		color: $clr-fg-4;
		filter: brightness(1.1);
		line-height: 1.5;
		font-family: 'Larsseit', $body-font, sans-serif;
		span {
			color: $clr-fg-450;
		}
	}

	p {
		font-size: 19px;
		font-family: $body-font;

		@media screen and (max-width: $tablet) {
			font-size: 17px;
		}
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
