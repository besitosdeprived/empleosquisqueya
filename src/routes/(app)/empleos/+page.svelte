<script lang="ts">
    import JobPreview from "$lib/ui/JobPreview.svelte";
    import type { PageData } from "./$types";
    let { data }: { data: PageData } = $props();
    console.log(data.job.at(0)?.jobPostInfo.slug);
</script>

<div class="border-2 h-8">
    <form action="" method="get" class="w-full">
        <input type="text" name="job_type" value="remote" />
        <button>Filter</button>
    </form>
</div>
{#each data.job as job}
    <JobPreview {job} />
{/each}
