<main>
	<h1>ABOUT</h1>
	<hr />
	<img
		src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzc4NWMzMjRhYWQzOTNiOTE2ZGYzOTc5ZGVlZDhmOTIxYjM2NGI2MCZjdD1n/ASd0Ukj0y3qMM/giphy.gif"
		alt="goodbye"
	/>
	<p>Hey there!</p>
	<p />
	<p>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
		When an unknown printer took a galley of type and scrambled it to make a type specimen book.
		It has survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
		sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
		like Aldus PageMaker including versions of Lorem Ipsum.
	</p>
	<p>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
		When an unknown printer took a galley of type and scrambled it to make a type specimen book.
		It has survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
		sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
		like Aldus PageMaker including versions of Lorem Ipsum.
	</p>
	<p>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
		When an unknown printer took a galley of type and scrambled it to make a type specimen book.
		It has survived not only five centuries, but also the leap into electronic typesetting,
		remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
		sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
		like Aldus PageMaker including versions of Lorem Ipsum.
	</p>
	<p>
		Best regards, <br />
		Jermin
	</p>
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
</style>
