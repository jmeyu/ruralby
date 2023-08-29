<section id="my-story">
	<div class="my-story__content">
		<h1>my story</h1>
		<div class="p__left">
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
				when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				It has survived not only five centuries, but also the leap into electronic typesetting,
				remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
				sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
				like Aldus PageMaker including versions of Lorem Ipsum.
			</p>
		</div>

		<div class="p__right">
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
				when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				It has survived not only five centuries, but also the leap into electronic typesetting,
				remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
				sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
				like Aldus PageMaker including versions of Lorem Ipsum.
			</p>
		</div>

		<div class="p__left">
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
				when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				It has survived not only five centuries, but also the leap into electronic typesetting,
				remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
				sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
				like Aldus PageMaker including versions of Lorem Ipsum.
			</p>
		</div>

		<div class="p__right">
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
				when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				It has survived not only five centuries, but also the leap into electronic typesetting,
				remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
				sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
				like Aldus PageMaker including versions of Lorem Ipsum.
			</p>
		</div>
	</div>
</section>

<style lang="scss">
	#my-story {
		min-height: 120vh;
		background: url('https://raw.githubusercontent.com/jmeyu/ruralby/master/static/img/bg/my-story-bg.webp'); // ?token=
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
	}

	#my-story {
		padding-top: 4%;
		font-family: 'Proxima Nova', sans-serif;

		h1 {
			font-weight: 600;
			font-size: 2rem;
			color: #fcfcfc;
			font-family: 'Nofex', sans-serif;
			text-transform: uppercase;
			margin-bottom: 3rem;
			text-align: center;
		}

		p {
			margin: 0 auto;
			width: 55vw;
			font-size: 1.125rem;
			line-height: 1.6rem;
			color: #e9e9e9;
			font-family: $body-font;
			margin-block: 3%;
		}
		
		.p__left {
			width: 100%;
			p {
				margin-right: auto;
			}
		}
		
		.p__right {
			width: 100%;
			p {
				text-align: right;
			}
		}

		p a {
			color: #e2e2e2;
			text-decoration: underline rgb(221, 192, 255);
		}

		p a:hover {
			color: rgb(255, 208, 0);
			text-decoration-color: rgb(255, 217, 0);
		}
	}

	@media screen and (max-width: $tablet) {
		#my-story {
			padding-top: 10%;
			background-attachment: scroll;
		}

		#my-story {
			p {
				width: 85vw;
				text-align: justify !important;
				text-justify: newspaper;
				hyphens: auto;
				padding-bottom: 3%;
			}
			p {
				text-indent: 2em;
			}
		}
	}
</style>
