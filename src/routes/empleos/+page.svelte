<script lang="ts">
import JobPreview from "$lib/components/JobPreview.svelte";
import type { PageData } from "./$types";
// biome-ignore lint/style/useConst: <explanation>
let { data }: { data: PageData } = $props();
</script>

<div class="flex justify-end px-5">
  <a class="text-xl border-2 border-gray-400 px-2 rounded-md" href="/empleos/nuevo">nuevo trabajo</a>
</div>

<div class="flex flex-col items-center py-4">
  {#if data.jobs}
    {#each data.jobs as job}
      <JobPreview {job} />
    {/each}
  {/if}
</div>
