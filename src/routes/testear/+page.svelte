<script lang="ts">
  import PaTestear from "$lib/components/PaTestear.svelte";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

<PaTestear />
