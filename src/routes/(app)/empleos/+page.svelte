<script lang="ts">
    import FilterSearch from "$lib/ui/FilterSearch.svelte";
    import JobPreview from "$lib/ui/JobPreview.svelte";
    import type { PageData } from "./$types";
    let { data }: { data: PageData } = $props();
</script>

<!-- <FilterSearch /> -->

<div class="flex gap-2">
    <main class="w-2/3">
        {#each data.job as job}
            <JobPreview {job} />
        {/each}
    </main>
    <div class="border-1 min-w-fit flex-1 my-4">
        <FilterSearch />
    </div>
</div>
