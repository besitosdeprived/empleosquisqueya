<script lang="ts">
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
  const { jobs } = data;
</script>

<div>
  {#each jobs as { name, slug, jobsToLocations }}
    <p>{jobsToLocations[0].job}</p>
  {/each}
</div>
