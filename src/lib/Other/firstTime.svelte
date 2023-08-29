<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

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
</script>

{#if showModal}
	<div class="modal-overlay">
		<div class="modal" transition:slide={{ duration: 200 }}>
			<div class="modal-header">
				<Icon icon="mdi:warning-octagon" />
				<h2>Heads Up</h2>
			</div>
			<div class="modal-body">
				<p>
					你好。 <br />
					非常欢迎你的到来。<br />
					在将所有创作设为公开以前，我作了许久的犹豫和心理建设，本站的成立更是来之不易。 <br />
					历经许久，为了筑成属于自己的房间、挣到我的五百英镑，我还是将它毫无保留地呈现出来了。
				</p>
				<p>
					抄袭与剽窃是所有作者的噩梦。希望你是怀揣着读者的心态一览，窥探我小小的世界。同时我接受意见、建议、小小的憎恶和大大的赞。
				</p>
				<p>Welcome to Very Unpopular Opinion (VUOP). Here keeps my very personal review on books, movies, series and whatever, you name it.</p>
				<p>“By hook or by crook, I hope that you will possess yourselves of money enough to travel and to idle, to contemplate the future or the past of the world, to dream over books and loiter at street corners and let the line of thought dip deep into the stream.”</p>
				<p>Happy exploring. Remember, all rights reserved.</p>
				<p><strong>未经许可传播剽窃抄袭 均属侵权 ©</strong></p>
			</div>
			<div class="modal-footer">
				<button class="cta-btn btn" on:click={destroy}>I UNDERSTAND</button>
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
