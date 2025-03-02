<script lang="ts">
    import "../app.css";
    import type { Snippet } from "svelte";
    import type { LayoutData } from "./$types";
    import NavigationBar from "$lib/components/NavigationBar.svelte";
    let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<NavigationBar />
<div class="min-h-svh p-4 m-0">
    {@render children()}
</div>
