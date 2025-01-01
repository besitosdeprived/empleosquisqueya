<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageData } from "./$types";
    // biome-ignore lint/style/useConst: <explanation>
    let { data }: { data: PageData } = $props();
</script>

<form action="?/nuevo" method="post" use:enhance>
    <div>
        <label for="title">Titulo</label>
        <input type="text" name="title" id="title" />
    </div>
    <div>
        <fieldset>
            <legend>Tipo de trabajo</legend>
            <div>
                <input
                    type="radio"
                    name="job_type"
                    id="remote"
                    value="remote"
                />
                <label for="remote">Remoto</label>
            </div>
            <div>
                <input
                    type="radio"
                    name="job_type"
                    id="hybrid"
                    value="hybrid"
                />
                <label for="hybrid">Hibrido</label>
            </div>
            <div>
                <input
                    type="radio"
                    name="job_type"
                    id="onsite"
                    value="onsite"
                />
                <label for="onsite">Presencial</label>
            </div>
        </fieldset>
    </div>
    <div>
        <fieldset>
            <!-- <legend>Ubicacion</legend> -->
            <div id="location">
                {#each data.locations as { id, name }}
                    <div>
                        <input
                            type="checkbox"
                            name="location"
                            id={name}
                            value={id}
                        />
                        <label for={name}>{name}</label>
                    </div>
                {/each}
            </div>
        </fieldset>
    </div>
</form>

<style>
    form {
        padding: 2rem;
        border: 1px solid black;
        width: 500px;
    }

    div#location {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>
