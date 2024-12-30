<script lang="ts">
    import "../app.css";
    import type { Snippet } from "svelte";
    import type { LayoutData } from "./$types";
    import NavigationBar from "$lib/ui/NavigationBar.svelte";
    // biome-ignore lint/style/useConst: <explanation>
    let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<NavigationBar />
{@render children()}
