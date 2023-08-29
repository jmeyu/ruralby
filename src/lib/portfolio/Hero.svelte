<script>
</script>

<section id="hero" data-scroll-section>
	<slot />
	<div class="hero__content" data-scroll>
		<img src="/img/svg/avatar.svg" alt="">
		<p>看点书、看点电影、品茗、小酌，过过日子。</p>
		<p>如电影《死亡诗社》所述：我步入丛林／因为我希望生活得有意义／我希望活得深刻／吸取生命中所有的精华／把非生命的一切都击溃／以免当我生命终结／发现自己从没有活过。</p>
		<p>As stated in the movie, Dead Poet (1989): "I went to the woods because I wished to live deliberately... I wanted to live deep and suck out all the marrow of life! To put to rout all that was not life. And not, when I came to die, discover that I had not lived."</p>
		
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
</style>
