<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageData } from "./$types";

    // biome-ignore lint/style/useConst: <explanation>
    let { data }: { data: PageData } = $props();
</script>

<form action="?/register" method="post" use:enhance>
    <input type="text" name="name" placeholder="Name: " />
    <input type="email" name="email" placeholder="Email: " />
    <input type="password" name="password" placeholder="Password: " />
    <input type="date" name="b_date" placeholder="BDate: " />
    <button type="submit">Crear</button>
</form>
