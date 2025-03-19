import { db } from "$lib/server/db";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { SelectJob } from "$lib/server/db/types";
import type { JobResultType } from "$lib/ui/JobPreview.svelte"
export const load = (async ({ url }) => {
  const jobTypeQueryParam = url.searchParams.getAll("job_type") as SelectJob["jobType"][] | null
  const pageQueryParam = url.searchParams.get("page")
  const orderByQueryParam = url.searchParams.get("order_by") as "asc" | "desc" | null
  const job: JobResultType[] = await db.query.jobTable.findMany({
    where: (t, { inArray }) =>
      jobTypeQueryParam?.length ? inArray(t.jobType, [...jobTypeQueryParam]) : undefined,
    columns: {
      title: true,
      salary: true,
      createdAt: true,
      jobType: true,
      id: true
    },
    limit: 10,
    offset: pageQueryParam ? Number.parseInt(pageQueryParam) * 10 : 0,
    orderBy: (t, { desc, asc }) => {
      if (orderByQueryParam === null || orderByQueryParam === "desc") {
        return desc(t.createdAt)
      }
      return asc(t.createdAt)
    },
    with: {
      jobPostInfo: {
        columns: {
          slug: true
        }
      }
    }
  })
  return {
    job
  }
}) satisfies PageServerLoad;
