<script lang="ts">
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
</script>

<div>
    <h1>{data.job?.job?.title}</h1>
    <p>Salary: {data.job?.job?.salary}</p>
</div>
