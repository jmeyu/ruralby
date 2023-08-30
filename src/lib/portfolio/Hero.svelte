<script>
	import { t, locale, locales } from "./Hero_i18n";
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

<section id="hero" data-scroll-section>
	<slot />
	<div class="hero__content" data-scroll>
		<img src="/img/svg/avatar.svg" alt="">

		<svg 
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
				<path class="zh" d="m 146.71798,283.13671 c -0.40149,-1.04728 -0.97113,-2.6831 -1.26585,-3.63517 -0.29473,-0.95206 -0.43733,-27.02684 -0.31689,-57.94395 l 0.21896,-56.21292 -2.32607,-0.39837 c -1.27935,-0.21911 -8.5578,-1.0306 -16.17433,-1.80333 -14.50568,-1.47165 -16.69397,-1.92304 -21.85494,-4.50813 -8.651886,-4.33367 -14.342712,-16.53127 -16.64109,-35.66822 -1.667984,-13.88804 -0.817387,-59.447953 1.231095,-65.940298 1.018078,-3.226645 1.12379,-3.320352 3.514945,-3.115856 2.084352,0.178257 2.689037,0.638817 3.913192,2.980486 1.339114,2.561575 1.447896,3.896483 1.447896,17.768725 0,8.249489 0.155794,15.14485 0.3462,15.323015 0.190415,0.178171 10.472732,0.439259 22.849602,0.580206 l 22.50341,0.256263 0.79078,-4.500681 c 1.04559,-5.950897 1.13201,-21.613253 0.16866,-30.565885 C 143.53349,40.975841 144.18367,27.938614 146.9803,18.521321 147.83968,15.627518 148.30646,15 149.59967,15 c 1.86334,0 4.42798,2.21543 5.33925,4.612248 0.37345,0.982256 0.65,16.375248 0.65,36.180314 v 34.470695 l 21.91401,0.498322 c 17.79882,0.40475 22.0227,0.326916 22.4928,-0.414456 0.31833,-0.502034 0.58356,-6.428095 0.58939,-13.169027 0.0151,-17.387839 1.49926,-22.548769 6.58852,-22.909541 1.84192,-0.130571 2.26276,0.226821 3.71494,3.154817 l 1.63771,3.302071 -0.11036,26.79431 c -0.14215,34.509217 -0.81613,41.618547 -5.35479,56.484127 -1.68416,5.51616 -2.2134,6.42126 -5.52379,9.44677 -7.20466,6.58465 -14.64398,8.92941 -30.71537,9.68095 -6.28364,0.29384 -12.30307,0.8919 -13.3765,1.32902 l -1.9517,0.79477 0.15718,56.94998 c 0.17222,62.39987 0.31441,60.11039 -3.85097,62.00826 -2.86991,1.30763 -4.28262,1.00826 -5.08201,-1.07692 z m -3.62889,-130.26518 1.69463,-0.47291 -0.16862,-23.17319 c -0.0927,-12.74526 -0.34472,-24.18585 -0.55997,-25.42354 l -0.39134,-2.25033 H 121.63637 99.608963 l -0.240536,5.71239 c -0.347802,8.25966 0.580998,21.17444 1.888043,26.2529 1.25571,4.87901 4.63496,12.42693 6.11267,13.65333 1.67888,1.39336 10.68552,4.22932 16.56761,5.21674 6.0333,1.0128 16.32636,1.27324 19.15234,0.48461 z m 36.28263,-1.15007 c 2.60779,-0.52928 6.91459,-1.964 9.57063,-3.18826 8.29213,-3.82209 9.26998,-7.20943 11.41384,-39.53822 l 0.44769,-6.75101 h -16.96371 c -9.33005,0 -19.34762,-0.20151 -22.26128,-0.44782 l -5.29756,-0.4478 v 25.67487 25.67487 l 1.90413,0.32375 c 3.11838,0.5302 16.08971,-0.26596 21.18626,-1.30038 z" />
				<path class="en" d="M11.25,8.4 L12.87,8.4 L15.89,16 L14.27,16 L13.55,14 L10.49,14 L9.76,16 L8.23,16 L11.25,8.4 Z M13.13,12.82 L12.01,9.76 L10.9,12.82 L13.13,12.82 Z" />
			</g>
		</svg>

		<h1>{$t("homepage.title")}</h1>
		<blockquote>
			<p>{@html $t("homepage.body")}</p>
		</blockquote>
		<code>{@html $t("homepage.time", { time })}</code>
		
		<a class="btn" href="/blogs">READ THE BLOG</a>
	</div>
</section>

<style lang="scss">
	#hero {
		min-height: 100vh;
		background-color: rgb(28, 25, 38);
		background-image: linear-gradient(rgba(28, 25, 38, 0.6), rgba(28, 25, 38, 0.3), rgba(28, 25, 38, 0.4)),
			url('https://raw.githubusercontent.com/jmeyu/ruralby/master/static/img/bg/hero-bg.webp'); //token
		background-size: cover;
		background-position: center;
	}

	.hero__content {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2rem;

		img {
			width: 15rem;
			border-radius: 50%;
			transition: all 0.2s ease-in-out;
			&:hover {
				transform: scale(1.05);
			}
		}
	}
	p {
		display: block;
		width: 40vw;
		font-size: 17px;
		line-height: 1.2;
		color: #d5d5ff;
		min-width: 300px;
		text-align: center;
		padding: 1rem;
	}

	main {
    max-width: 24rem;
    margin: 3rem auto;
    padding: 0 1.5rem;
  }
		rect {
		fill: #ccc;
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
