<script>
	import PostCard from './PostCard.svelte';
	export let posts;

	let grid;

	function sortPosts(multiplier) {
        posts.sort((a,b) => { 
            if (a.daysAgo > b.daysAgo) {
                return 1 * multiplier;
            }
            if (a.daysAgo < b.daysAgo) {
                return -1 * multiplier;
            } 
            return 0;
        })
        posts = posts; // Refresh data
    }
</script>

<div class="articles-grid" bind:this={grid}>
	<button on:click={() => {sortPosts(1)}}>
		Sort by name LOW to HIGH
	</button>
	<button on:click={() => {sortPosts(-1)}}>
		Sort by name HIGH to LOW
	</button>
	{#each posts as post, i}
		<PostCard {post} {i} />
	{/each}
</div>

<style lang="scss">
	.articles-grid {
		display: grid;
		grid-auto-columns: 100px;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 3rem 1rem;
		transition: all 200ms ease-in-out;
		@media screen and (max-width: $tablet) {
			margin-inline: -1rem;
		}
	}
</style>
