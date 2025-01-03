<script lang="ts">
  import type { PageData } from "./$types";

  // biome-ignore lint/style/useConst: <explanation>
  let { data }: { data: PageData } = $props();
</script>

<h1>{data.location?.name}</h1>
