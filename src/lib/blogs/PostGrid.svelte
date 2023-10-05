<script>
	import PostCard from './PostCard.svelte';
	export let posts;

	let grid;

	function sortPosts(multiplier) {
        posts.sort((a,b) => { 
            if (a.daysAgo.days > b.daysAgo.days) {
                return 1 * multiplier;
            }
            if (a.daysAgo.days < b.daysAgo.days) {
                return -1 * multiplier;
            } 
            return 0;
        })
        posts = posts; // Refresh data
    }
	sortPosts(1);
</script>

<!-- Button for sorting post by date -->
<!-- Hide the button when the screen is small -->
<!-- <div>
	{#if innerWidth > 1070}
	<span class="sort-posts">
		<button class="btn c2a" on:click={() => {sortPosts(1)}}>
			{#if innerWidth > 1300}Sort by date LOW to HIGH{:else}Sort Low{/if}
		</button>
		<button class="btn c2a" on:click={() => {sortPosts(-1)}}>
			{#if innerWidth > 1300}Sort by date HIGH to LOW{:else}Sort High{/if}
		</button>
	</span>
	{/if}
</div> -->

<div class="articles-grid" bind:this={grid}>	
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

	.btn {
		background: rgba(var(--color), 0.1);
		outline: 0.2px solid rgb(var(--color));
	}

	.btn:hover {
		background: rgb(var(--color));
		color: $clr-bg-4;
	}
</style>
