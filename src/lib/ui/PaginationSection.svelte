<script lang="ts">
  import type { page as PageType } from "$app/state";
  type Props = {
    page: typeof PageType;
  };
  let { page }: Props = $props();
  const pageQueryParam = page.url.searchParams.get("page") || "0";
</script>

<div class="border h-8">
  <form
    method="get"
    class="w-full h-full p-2 flex items-center justify-between"
  >
    <button
      name="page"
      value={Number.parseInt(pageQueryParam) - 1}
      type="submit"
    >
      Previews
    </button>
    <button
      name="page"
      value={Number.parseInt(pageQueryParam) + 1}
      type="submit"
    >
      Next
    </button>
  </form>
</div>
