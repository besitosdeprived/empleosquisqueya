<script lang="ts">
import JobPreview from "$lib/components/JobPreview.svelte";
import type { PageData } from "./$types";
// biome-ignore lint/style/useConst: <explanation>
let { data }: { data: PageData } = $props();
</script>

<a href="/empleos/nuevo">create new job</a>

<div>
  {#if data.jobs}
    {#each data.jobs as job}
      <JobPreview {job} />
    {/each}
  {/if}
</div>
