<script lang="ts">
	type Path = {
		name: string;
		href: string;
	};
	type Props = {
		paths?: Path[];
	};
	const defaultNav: Path[] = [
		{ href: "/", name: "home" },
		{ href: "/empleos", name: "empleos" },
		{ href: "/iniciar-sesion", name: "iniciar sesion" },
		{ href: "/registrarse", name: "registrarse" },
	];
	// biome-ignore lint/style/useConst: <explanation>
	let { paths = defaultNav }: Props = $props();
</script>

<nav class="h-20 flex items-center justify-center gap-4 p-4">
	{#each paths as { href, name }}
		<a class="text-xl hover:text-blue-400" {href}>{name}</a>
	{/each}
</nav>
