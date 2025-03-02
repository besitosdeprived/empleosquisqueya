<script lang="ts">
  import { enhance } from "$app/forms";
  import FailAlert from "$lib/FailAlert.svelte";
  import type { PageData, ActionData } from "./$types";

  let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

<div class="p-4 max-w-[600px]">
  <form
    action=""
    method="post"
    class="flex flex-col justify-center p-4 border border-gray-400 rounded-sm"
  >
    <div>
      <label for="email" class="block text-sm">Correo</label>
      <input
        type="text"
        id="email"
        name="email"
        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
    <div>
      <label for="password" class="block text-sm">Contrasenia</label>
      <input
        type="password"
        id="password"
        name="password"
        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
    {#if form?.error}
      <FailAlert message="" />
    {/if}
    <div class="flex justify-center">
      <button
        class="p-2 font-bold text-white bg-primary-lime rounded-md cursor-pointer mt-2"
        type="submit">Iniciar sesion</button
      >
    </div>
  </form>
</div>
