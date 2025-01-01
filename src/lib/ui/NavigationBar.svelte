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
        { href: "/ingresar", name: "ingresar" },
        { href: "/registrarse", name: "registrarse" },
    ];
    // biome-ignore lint/style/useConst: <explanation>
    let { paths = defaultNav }: Props = $props();
</script>

<nav>
    {#each paths as { href, name }}
        <a {href}>{name}</a>
    {/each}
</nav>

<style>
    nav {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        height: 75px;
        font-size: 1.3rem;
        border: 1px solid black;
        & a {
            text-decoration: none;
            color: inherit;
        }
        & a:hover {
            color: rgb(122, 122, 240);
        }
    }
</style>
