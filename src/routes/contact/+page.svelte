<script>
	import Toast from '$lib/Other/toast.svelte';
	import { fly } from 'svelte/transition';
	import { t, locale, locales } from "./Contact_i18n";
	export let lang = 'en';

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

	let button;

	function onSubmit(e) {
		button.innerText = 'Sending...';
		button.classList.add('loading');
		button.classList.remove('c2a');
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://formspree.io/f/mpzgdgkl');
		xhr.send(new FormData(e.target));
		setTimeout(() => {
			button.classList.add('c2a');
			button.classList.remove('loading');
			button.innerText = 'Send Message';
			button.disabled = true;
			e.target.parentNode.querySelectorAll('input, textarea').forEach((e) => {
				const label = e.parentNode.parentNode.querySelector('label');
				label.style.color = '#bfc0cc';
				e.style.borderColor = '#302d421a';
			});
			showToast = true;
			setTimeout(() => (showToast = false), 3000);
			e.target.reset();
		}, Math.random() * (1500 - 500) + 500);
		// I'm seriously laughing at this xD
	}

	function validateEmail(mail) {
		var re = /\S+@\S+\.\S+/;
		return re.test(mail);
	}

	function updateInput(e, valid) {
		const label = e.target.parentNode.parentNode.querySelector('label');
		if (valid) {
			e.target.setAttribute('valid', 'true');
			e.target.style.borderColor = '#A599FF';
			label.style.color = '#A599FF';
		} else {
			e.target.removeAttribute('valid');
			e.target.style.borderColor = '#FF4CA6';
			label.style.color = '#FF4CA6';
		}
	}

	function validateInput(e) {
		// Empty check
		if (e.target.value) {
			updateInput(e, true);
		} else {
			updateInput(e, false);
		}

		// Mail Check
		if (e.target.type == 'email') {
			if (validateEmail(e.target.value)) {
				updateInput(e, true);
			} else {
				updateInput(e, false);
			}
		}

		// Check if all fields are valid
		const form = e.target.parentNode.parentNode.parentNode;
		if (form.querySelectorAll('[valid="true"]').length == 3) {
			button.disabled = false;
		} else {
			button.disabled = true;
		}
	}

	let showToast = false;
</script>

{#if showToast}
	<Toast message={$t("contact.messageSent")} description={$t("contact.messageSentDesc")} show={showToast} />
{/if}

<div class="contact">
	<form action="https://formspree.io/f/mpzgdgkl" method="POST" on:submit|preventDefault={onSubmit}>
		<header in:fly={{ y: -10, duration: 500, delay: 100 }}>
			<h2>{@html $t("contact.header")}</h2>
			<p>{@html $t("contact.disclaimer")}</p>
			<p align="right">
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
						<path class="zh" d="M31.25,10.13 L32.38,10.45 C32.34,10.53 32.34,10.53 32.26,10.74 C32.16,11.02 32.15,11.03 32.12,11.12 C32.53,11.22 32.82,11.36 33.16,11.61 C33.8,12.09 34.11,12.71 34.11,13.5 C34.11,14.59 33.52,15.44 32.39,16 C31.8,16.29 31.23,16.44 30.35,16.53 C30.24,16.1 30.15,15.92 29.82,15.4 C30.63,15.39 31.14,15.28 31.73,15 C32.53,14.62 32.9,14.13 32.9,13.44 C32.9,12.81 32.49,12.3 31.78,12.06 C31.23,13.25 30.76,13.97 30.04,14.72 C29.14,15.67 28.25,16.16 27.42,16.16 C26.49,16.16 25.86,15.45 25.86,14.41 C25.86,13.59 26.21,12.8 26.85,12.17 C27.25,11.78 27.62,11.53 28.22,11.27 C28.22,10.95 28.24,10.55 28.26,10.07 C28.15,10.07 27.61,10.06 26.64,10.03 L26.45,10.03 C26.42,10.03 26.33,10.03 26.22,10.04 L26.22,8.92 C26.67,9.02 27.26,9.07 28.09,9.07 L28.31,9.07 C28.32,8.87 28.32,8.87 28.35,8.47 C28.36,8.34 28.37,8.09 28.37,7.9 C28.37,7.86 28.37,7.82 28.35,7.74 L29.59,7.8 C29.51,8.07 29.47,8.33 29.41,9.03 C31.01,8.94 32.43,8.74 33.2,8.5 L33.25,9.65 C33.11,9.66 33.07,9.66 32.86,9.69 C31.76,9.87 30.14,10.02 29.34,10.04 C29.31,10.47 29.3,10.79 29.29,11 C29.83,10.89 30.06,10.87 30.67,10.87 C30.79,10.87 30.87,10.87 31.05,10.89 C31.16,10.57 31.22,10.36 31.25,10.13 Z M28.24,12.41 C27.8,12.7 27.63,12.85 27.43,13.1 C27.13,13.49 26.98,13.9 26.98,14.32 C26.98,14.77 27.2,15.05 27.55,15.05 C27.83,15.05 28.1,14.93 28.42,14.67 C28.29,14.02 28.24,13.38 28.24,12.41 Z M29.37,13.92 L29.39,13.93 C29.43,13.87 29.43,13.87 29.5,13.79 C29.97,13.26 30.37,12.62 30.74,11.79 C30.63,11.78 30.58,11.78 30.48,11.78 C30.04,11.78 29.68,11.83 29.28,11.96 C29.29,12.88 29.29,12.98 29.35,13.68 C29.36,13.74 29.36,13.74 29.36,13.81 C29.36,13.86 29.36,13.87 29.37,13.92 Z" />
						<path class="en" d="M11.25,8.4 L12.87,8.4 L15.89,16 L14.27,16 L13.55,14 L10.49,14 L9.76,16 L8.23,16 L11.25,8.4 Z M13.13,12.82 L12.01,9.76 L10.9,12.82 L13.13,12.82 Z" />
					</g>
				</svg>
			</p>
		</header>
		<div class="input-wrapper" in:fly={{ y: 10, duration: 500, delay: 200 }}>
			<div class="input-wrapper__label">
				<label for="name" class="input__label">{@html $t("contact.name")}</label>
			</div>
			<div class="input-container">
				<input name="Name" type="text" placeholder="{$t("contact.annonymous")}" on:input={validateInput} />
			</div>
		</div>
		<div class="input-wrapper" in:fly={{ y: 10, duration: 500, delay: 250 }}>
			<div class="input-wrapper__label">
				<label for="email" class="input__label">{$t("contact.email")}</label>
			</div>
			<div class="input-container">
				<input name="Email" type="email" placeholder="mail@example.com" on:input={validateInput} />
			</div>
		</div>
		<div class="input-wrapper" in:fly={{ y: 10, duration: 500, delay: 300 }}>
			<div class="input-wrapper__label">
				<label for="name" class="input__label">{$t("contact.message")}</label>
			</div>
			<div class="input-container">
				<textarea
					name="Message"
					placeholder="{$t("contact.messageBody")}"
					rows="8"
					on:input={validateInput}
				/>
			</div>
		</div>

		<button type="submit" in:fly={{ y: 10, duration: 500, delay: 350 }} disabled="false" bind:this={button} class="btn btn-primary c2a"
			>{$t("contact.send")}</button
		>
	</form>
</div>

<style lang="scss">
	.contact {
		width: 70%;
		margin-block: 1rem;
		padding-inline: 10vw;
	}

	.input-wrapper {
		padding-top: 2.5rem;
		box-sizing: border-box;
		width: 100%;
	}

	h2 {
		color: #a599ff;

		font-weight: 500;
		font-size: 2rem;
		line-height: 1.7;
	}

	.contact p {
		font-family: $body-font;
		font-weight: 400;
		line-height: 1.5;
		color: rgba(186, 184, 212, 0.884);
		letter-spacing: 0.0313em;
		margin-bottom: 1rem;
	}

	label {
		font-family: $body-font;
		font-size: 10px;
		line-height: 2.4;
		color: #bfc0cc;
		text-transform: uppercase;
		letter-spacing: 0.125em;
		user-select: none;
	}

	input,
	textarea {
		color: rgb(171, 166, 202);
		font-family: $body-font;
		background: transparentize($clr-bg-350, 0.5);
		width: 100%;
		height: 56px;
		border: 1px solid #302d4248;
		padding: 16px 56px 16px 16px;
		font-size: 16px;
		border-radius: 8px;
		transition: box-shadow 0.2s ease-in-out;
	}

	input::placeholder,
	textarea::placeholder {
		color: $clr-fg-450;
	}

	input:-webkit-autofill {
		-webkit-text-fill-color: $clr-fg-4 !important;
		-webkit-box-shadow: 0 0 0px 300px #1E1A2C inset !important;
		border: 1px solid $accent-0 !important;
	}

	textarea {
		resize: vertical;
		height: auto;
	}

	.btn.btn-primary {
		background: #8b4cff;
		margin-inline: auto;
		@include hover {
			filter: brightness(1.1);
		}
		margin-top: 3rem;
	}

	input:focus,
	textarea:focus {
		box-shadow: 0px 0px 0px 2px $clr-fg-5;
	}

	@media only screen and (max-width: $tablet) {
		.input-wrapper {
			padding-top: 1rem;
		}

		.contact {
			margin-inline: 0;
			padding-inline: 3vmin;
			width: 100%;
		}

		button {
			width: 100%;
		}
	}

	@media only screen and (max-width: $mobile) {
		textarea {
			height: 10rem;
		}
		input {
			height: 2.8rem;
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
