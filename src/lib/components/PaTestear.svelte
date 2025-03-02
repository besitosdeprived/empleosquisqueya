<script lang="ts">
  import { customAction } from "$lib/actions.svelte";
  let innetHTML = $state("<p>hola</p>");
</script>

<div
  contenteditable="true"
  bind:innerHTML={innetHTML}
  use:customAction={{ innerHTML: innetHTML, fallBack: "<p>Edita esto...</p>" }}
></div>
