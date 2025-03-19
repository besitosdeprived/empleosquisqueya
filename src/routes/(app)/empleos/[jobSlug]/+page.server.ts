import { db } from "$lib/server/db";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
	const { jobSlug } = params;
	const job = await db.query.jobPostInfoTable.findFirst({
		where: (t, { eq }) => eq(t.slug, jobSlug),
		columns: { slug: true },
		with: {
			job: {
				columns: {
					title: true,
				},
			},
		},
	});
	if (!job) {
		return error(404, "Not found");
	}
	return {
		job,
	};
}) satisfies PageServerLoad;
