<script lang="ts">
  // biome-ignore lint/style/useConst: <explanation>
  let requirements = $state<string[]>([]);
  let input: HTMLInputElement;
  function addItem() {
    if (input.value === "") {
      return;
    }
    requirements.push(input.value);
    input.value = "";
  }
</script>

<div>
  <div>
    <input type="text" bind:this={input} />
    <button type="button" onclick={addItem}>Add</button>
  </div>
  <ul>
    {#each requirements as requirement}
      <li>{requirement}</li>
      <input
        type="checkbox"
        value={requirement}
        name="requirements"
        checked
        hidden
      />
    {/each}
  </ul>
</div>
