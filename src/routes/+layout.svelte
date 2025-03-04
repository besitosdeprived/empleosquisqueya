<script lang="ts">
import "../app.css";
import type { Snippet } from "svelte";
import type { LayoutData } from "./$types";
import NavigationBar, { type Path } from "$lib/components/NavigationBar.svelte";
type Props = {
	data: LayoutData;
	children: Snippet;
};
let { data, children }: Props = $props();
let { isValid: isLogged } = data;
</script>

{#snippet NavLink({isLogged}: {isLogged:boolean})}
    {#if isLogged}
        <NavigationBar paths={[
            { href: "/", name: "inicio" },
            { href: "/empleos", name: "empleos" },
            { href: "/dashboard", name: "dashboard" },
        ]}/>
        {:else}
        <NavigationBar paths={[
            { href: "/", name: "inicio" },
            { href: "/empleos", name: "empleos" },
            { href: "/iniciar-sesion", name: "iniciar sesion" },
        ]}/>
    {/if}
{/snippet}

{@render NavLink({isLogged: isLogged})}
<hr class="border-1 border-gray-400 mx-auto w-8/9 mt-2"/>
<div class="min-h-svh w-full px-4 h-1/2">
        {@render children()}
</div>
