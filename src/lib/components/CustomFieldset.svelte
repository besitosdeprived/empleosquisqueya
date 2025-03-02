<script lang="ts">
  import { customAction, type FallBackType } from "$lib/actions.svelte";
  import type { Snippet } from "svelte";
  type Props = {
    legend: string;
    fallBack: FallBackType;
  };
  let { legend, fallBack }: Props = $props();
  let innerHTML = $state(fallBack);
</script>

<fieldset>
  <legend>{legend}</legend>
  <div
    contenteditable="true"
    class="min-h-32 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 prose"
    bind:innerHTML
    use:customAction={{ innerHTML: innerHTML, fallBack: fallBack }}
  ></div>
</fieldset>
