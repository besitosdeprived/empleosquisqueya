<script lang="ts">
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

<div>
  <ul>
    {#each data.locations as { id, name, slug }}
      <li>
        <a href={`/empleos/ubicacion/${slug}`}>
          <p>{name}</p>
        </a>
      </li>
    {/each}
  </ul>
</div>
