<script lang="ts">
    import "../../app.css";
    import type { Snippet } from "svelte";
    import type { LayoutData } from "../$types";
    let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<nav class="h-16 flex items-center px-4 gap-4">
    <a class="text-xl hover:border-b-2" href="/">/</a>
    <a class="text-xl hover:border-b-2" href="/empleos">/empleos</a>
</nav>
<hr class="w-100/102 mx-auto" />
<div class="p-2">
    {@render children()}
</div>
