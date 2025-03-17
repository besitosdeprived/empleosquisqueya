<script module lang="ts">
  export type JobResultType = Pick<
    SelectJob,
    "title" | "jobType" | "salary" | "createdAt" | "id"
  > & { jobPostInfo: { slug: string } };
</script>

<script lang="ts">
  import type { SelectJob } from "$lib/server/db/types";
  type Props = {
    job: JobResultType;
  };
  let { job }: Props = $props();
</script>

<div class="border h-32 rounded-md hover:outline-2 my-4">
  <div class="flex flex-col h-full justify-between py-2 px-1">
    <a href={`/empleos/${job.jobPostInfo.slug}`}>
      <h3 class="text-xl">{job.title}</h3>
    </a>
    <div class="p-0.5 flex">
      <div class="flex-1">
        <span class="border-1 rounded-sm px-1">{job.jobType}</span>
        <span class="border-1 rounded-sm px-1">
          {new Intl.NumberFormat("es-DO", {
            style: "currency",
            currency: "DOP",
            minimumFractionDigits: 0,
          }).format(job.salary)}
        </span>
      </div>
      <span class="border-1 rounded-sm px-1"
        >pub: {Intl.DateTimeFormat("es-DO", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }).format(job.createdAt)}</span
      >
    </div>
  </div>
</div>

<!-- Pick<
      SelectJob,
      "title" | "jobType" | "salary" | "createdAt" | "id"
    > & { jobPostInfo: string }; -->
