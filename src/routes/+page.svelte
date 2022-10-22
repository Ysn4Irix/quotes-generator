<script>
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'

	let data = { q: '', a: '' }

	const generate = async () => {
		const response = await fetch(`api/generate`)

		if (response.ok) {
			const { quote } = await response.json()
			data = quote
		}
	}

	onMount(async () => await generate())
</script>

<svelte:head>
	<title>{data.a ? data.a : 'Loading...'}</title>
</svelte:head>

<div class="container">
	<div class="quotes-container">
		<div class="inner-quotes-container">
			<p transition:fade={{ duration: 300 }} id="quote">
				{data.q ? data.q : 'Loading...'}
			</p>
			<h3 transition:fade={{ duration: 300 }} id="author">
				{data.a ? data.a : 'Loading...'}
			</h3>
		</div>
		<button on:click={generate} class="quote-btn">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				style="fill: rgba(255, 255, 255, 1);"
			>
				<path
					d="M10 11H7.101l.001-.009a4.956 4.956 0 0 1 .752-1.787 5.054 5.054 0 0 1 2.2-1.811c.302-.128.617-.226.938-.291a5.078 5.078 0 0 1 2.018 0 4.978 4.978 0 0 1 2.525 1.361l1.416-1.412a7.036 7.036 0 0 0-2.224-1.501 6.921 6.921 0 0 0-1.315-.408 7.079 7.079 0 0 0-2.819 0 6.94 6.94 0 0 0-1.316.409 7.04 7.04 0 0 0-3.08 2.534 6.978 6.978 0 0 0-1.054 2.505c-.028.135-.043.273-.063.41H2l4 4 4-4zm4 2h2.899l-.001.008a4.976 4.976 0 0 1-2.103 3.138 4.943 4.943 0 0 1-1.787.752 5.073 5.073 0 0 1-2.017 0 4.956 4.956 0 0 1-1.787-.752 5.072 5.072 0 0 1-.74-.61L7.05 16.95a7.032 7.032 0 0 0 2.225 1.5c.424.18.867.317 1.315.408a7.07 7.07 0 0 0 2.818 0 7.031 7.031 0 0 0 4.395-2.945 6.974 6.974 0 0 0 1.053-2.503c.027-.135.043-.273.063-.41H22l-4-4-4 4z"
				/>
			</svg>
		</button>
		<div class="credit">
			<strong>
				Inspirational quotes provided by
				<a href="https://zenquotes.io/" target="_blank" rel="noreferrer"> ZenQuotes API </a>
			</strong>
		</div>
	</div>
</div>

<style>
	.container {
		width: 1280px;
		margin: auto;
	}
	.quotes-container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: 100vh;
	}
	.inner-quotes-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 700px;
		text-align: center;
		min-height: 320px;
		padding: 0px 30px;
		color: gray;
		background-color: #f4edea;
		border-radius: 1rem;
		transition: 0.4s ease-out;
		box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
			rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	}
	.inner-quotes-container p {
		font-size: 1.5rem;
		color: black;
	}
	.inner-quotes-container h3 {
		font-size: 2rem;
		color: black;
		font-family: 'Dancing Script', cursive;
	}
	#author {
		padding-top: 50px;
	}
	.quote-btn {
		backface-visibility: hidden;
		background: #6d8299;
		border: none;
		border-radius: 15px;
		color: #fff;
		cursor: pointer;
		display: flex;
		padding: 1rem 1.2rem;
		margin-top: 2em;
		transform: translateZ(0) scale(1);
		transition: transform 0.2s;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
	}
	.quote-btn:hover {
		transform: scale(1.05);
	}
	.quote-btn:active {
		transform: translateY(0.125rem);
	}
	.credit {
		text-align: center;
		padding: 40px;
	}
	@media (max-width: 1280px) {
		.container {
			width: 80%;
		}
	}
	@media (max-width: 900px) {
		.inner-quotes-container {
			width: 100%;
		}
	}
	@media (max-width: 480px) {
		.inner-quotes-container p {
			font-size: 1.2rem;
		}
		.inner-quotes-container h3 {
			font-size: 1.5rem;
		}
	}
</style>
