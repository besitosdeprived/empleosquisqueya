<script lang="ts">
import "../app.css";
import type { Snippet } from "svelte";
import type { LayoutData } from "./$types";
let defaultPaths: Path[] = [
	{ href: "/", name: "inicio" },
	{ href: "/empleos", name: "empleos" },
	{ href: "/iniciar-sesion", name: "iniciar sesion" },
];
import NavigationBar, { type Path } from "$lib/components/NavigationBar.svelte";
let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>


<NavigationBar paths={defaultPaths}/>
<hr class="border-1 border-gray-400 mx-auto w-8/9 mt-2"/>
<div class="min-h-svh p-4 m-0">
    {@render children()}
</div>
