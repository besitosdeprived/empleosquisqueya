<script lang="ts">
import { enhance } from "$app/forms";
import CustomFieldset from "$lib/components/CustomFieldset.svelte";
import FailAlert from "$lib/FailAlert.svelte";
import type { PageData, ActionData } from "./$types";
// biome-ignore lint/style/useConst: <explanation>
let { data, form }: { data: PageData; form: ActionData } = $props();
// biome-ignore lint/style/useConst: <explanation>
let divContent = $state<string>();
</script>

<div class="flex justify-center items-center min-h-screen bg-gray-50">
  <div class="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
    <!-- <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">
      Publicar trabajo
    </h2> -->
    <form method="post" use:enhance class="space-y-6">
      <!-- Título -->
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700"
          >Título</label
        >
        <input
          type="text"
          name="title"
          id="title"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Título del trabajo..."
        />
      </div>
      <!-- Descripción, Requisitos y Beneficios -->
      <!-- <fieldset>
        <div
          contenteditable="true"
          bind:innerHTML={divContent}
          class="prose p-4 border border-gray-300 rounded-md focus:border-indigo-500"
        >
          <h2 contenteditable="false" class="font-medium text-gray-800">
            Descripción
          </h2>
          <p>Edita este texto de <span class="italic">descripción</span></p>
          <h2 contenteditable="false" class="font-medium text-gray-800">
            Requisitos
          </h2>
          <ul>
            <li>
              <p>Edita este <span class="italic">requisito</span></p>
            </li>
          </ul>
          <h2 contenteditable="false" class="font-medium text-gray-800">
            Beneficios
          </h2>
          <ul>
            <li>
              <p>Edita este <span class="italic">beneficio</span></p>
            </li>
          </ul>
        </div>
        <input type="text" name="content" bind:value={divContent} hidden />
      </fieldset> -->

      <CustomFieldset legend="Descripción" fallBack="<p>Edita esto...</p>" />

      <CustomFieldset
        legend="Beneficios"
        fallBack="<ul><li>Edita esto...</li></ul>"
      />
      <CustomFieldset
        legend="Requisitos"
        fallBack="<ul><li>Edita esto...</li></ul>"
      />

      <!-- Salario -->
      <div>
        <label for="salary" class="block text-sm font-medium text-gray-700"
          >Salario</label
        >
        <input
          type="number"
          placeholder="20,000"
          name="salary"
          id="salary"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <!-- Tipo de empleo -->
      <fieldset class="border border-gray-300 p-4 rounded-md">
        <legend class="text-lg font-medium text-gray-800">Tipo de empleo</legend
        >
        <div class="space-x-4">
          <div>
            <input type="radio" name="job_type" value="remote" id="remote" />
            <label for="remote" class="text-sm text-gray-700">Remoto</label>
          </div>
          <div>
            <input type="radio" name="job_type" value="hybrid" id="hybrid" />
            <label for="hybrid" class="text-sm text-gray-700">Híbrido</label>
          </div>
          <div>
            <input type="radio" name="job_type" value="onsite" id="onsite" />
            <label for="onsite" class="text-sm text-gray-700">Presencial</label>
          </div>
        </div>
      </fieldset>

      <!-- Ubicación -->
      <fieldset class="border p-4 rounded-md border-gray-300">
        <legend class="text-lg font-medium text-gray-800">Ubicación</legend>
        <div class="grid grid-cols-2">
          <!-- Ejemplo de ubicación (reemplazar con tu lista de ubicaciones) -->
          {#each data.locations as { id, name, slug }}
            <div>
              <input type="checkbox" name="locations" id={slug} value={id} />
              <label for={slug}>{name}</label>
            </div>
          {/each}
        </div>
      </fieldset>

      <!-- Error de formulario (si existe) -->
      {#if form?.error}
        <!-- <div class="bg-red-100 text-red-800 p-4 rounded-md">
          <p>{form.error}</p>
        </div> -->
        <FailAlert message={form.error} />
      {/if}

      <!-- Botón de Publicar -->
      <div>
        <button
          type="submit"
          class="w-full py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Publicar trabajo
        </button>
      </div>
    </form>
  </div>
</div>
