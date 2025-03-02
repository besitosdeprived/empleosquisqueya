<script lang="ts">
import type { SelectJob, SelectJobPost } from "$lib/server/db/schema/schema";
type Props = {
	job: Pick<SelectJob, "id" | "title" | "salary" | "jobType" | "createdAt"> & {
		jobPost: Pick<SelectJobPost, "slug">;
	};
};
let { job }: Props = $props();
</script>

<article class="border-2 rounded-lg p-4 max-w-[600px] mb-4">
  <a href={`empleos/${job.jobPost.slug}`} class="no-underline">
    <h3 class="text-xl">{job.title}</h3>
  </a>
  <div class="flex justify-between mt-4">
    <div class="flex gap-x-2">
      <span>{job.jobType}</span>
      <span>•</span>
      <span
        >{new Intl.NumberFormat("es-DO", {
          style: "currency",
          currency: "DOP",
          maximumFractionDigits: 0,
        }).format(Number.parseInt(job.salary))}</span
      >
    </div>
    <div>
      <span class="text-sm"
        >publicado: {new Intl.DateTimeFormat("es-DO", {
          month: "short",
          year: "numeric",
          day: "2-digit",
        }).format(Date.parse(job.createdAt.toDateString()))}</span
      >
    </div>
  </div>
</article>
