<script lang="ts" module>
export type Path = {
	name: string;
	href: string;
};
</script>
<script lang="ts">
type Props = {
	paths: Path[];
};
let { paths }: Props = $props();
</script>

<nav class="flex h-16  items-center justify-center px-4 gap-4">
	{#each paths as {href, name}, index }
		{#if index < 2}
		<a class="text-xl border-2 border-gray-400 px-2 rounded-md" href={href}>{name}</a>
		{:else }
		<div class="flex-1 flex justify-end">
			<a class="text-xl border-2 border-gray-400 px-2 rounded-md" href={href}>{name}</a>
		</div>
		{/if}
	{/each}
</nav>