<script lang="ts">
  import { page } from "$app/state";
  const jobTypeQueryParams = page.url.searchParams.getAll("job_type");
  const orderByQueryParams = page.url.searchParams.get("order_by") as
    | "asc"
    | "desc"
    | null;
  const elementExist = (param: string) => {
    return jobTypeQueryParams.some((ele) => ele === param);
  };
</script>

<div class="border-1 m-2 min-h-32">
  <form action="" method="get" class="h-full flex-col flex">
    <fieldset class="border m-2 px-2 flex gap-2 p-2">
      <div class="flex items-center gap-1">
        <input
          type="checkbox"
          id="remote"
          value="remote"
          name="job_type"
          checked={elementExist("remote")}
        />
        <label for="remote">remote</label>
      </div>
      <div class="flex items-center gap-1">
        <input
          type="checkbox"
          id="onsite"
          value="onsite"
          name="job_type"
          checked={elementExist("onsite")}
        />
        <label for="onsite">onsite</label>
      </div>
      <div class="flex items-center gap-1">
        <input
          type="checkbox"
          id="hybrid"
          value="hybrid"
          name="job_type"
          checked={elementExist("hybrid")}
        />
        <label for="hybrid">hybrid</label>
      </div>
    </fieldset>
    <fieldset class="mx-2">
      <select name="order_by" class="w-16 border">
        <option value="asc" selected={orderByQueryParams === "asc"}>asc</option>
        <option
          value="desc"
          selected={orderByQueryParams === "desc" ||
            orderByQueryParams === null}>desc</option
        >
      </select>
    </fieldset>
    <div class="flex justify-center items-center my-2">
      <button class="border-1 px-2 cursor-pointer" type="submit">Filtrar</button
      >
    </div>
  </form>
</div>
