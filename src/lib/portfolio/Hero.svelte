<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js">
	document.querySelector('#togBtn').addEventListener('input', (event) => {
  document.querySelector('.title').textContent = data[event.currentTarget.checked ? 'japanese' : 'english'].title;
});

var data = {
  "english": {
    "title": "Hello World"
  },
  "japanese": {
    "title": "ハロー・ワールド"
  }
</script>

<section id="hero" data-scroll-section>
	<slot />
	<label class="switch">
	<input type="checkbox" id="togBtn">
	<div class="slider round">
		<span language='japanese' class="on">JPN</span>
		<span language='english' class="off">ENG</span>
	</div>
	</label>

	<ul class="nav-items">
	<div class="content">
		<h2 class="title">Hello World</h2>
	</div>
	</ul>

	<div class="hero__content" data-scroll>
		<img src="/img/svg/avatar.svg" alt="">
		<p>看点书、看点电影、品茗、小酌，过过日子。</p>
		<p>如电影《死亡诗社》所述：我步入丛林／因为我希望生活得有意义／我希望活得深刻／吸取生命中所有的精华／把非生命的一切都击溃／以免当我生命终结／发现自己从没有活过。</p>
		
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

	.switch {
  position: relative;
  display: inline-block;
  width: 90px;
  height: 34px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ca2222;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked+.slider {
  background-color: #2ab934;
}

input:focus+.slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
  -webkit-transform: translateX(55px);
  -ms-transform: translateX(55px);
  transform: translateX(55px);
}


/*------ ADDED CSS ---------*/

.on {
  display: none;
}

.on,
.off {
  color: white;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  font-size: 10px;
  font-family: Verdana, sans-serif;
}

input:checked+.slider .on {
  display: block;
}

input:checked+.slider .off {
  display: none;
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
