import { db } from "$lib/server/db/db";
import type { PageServerLoad } from "./$types";
export const load = (async ({ locals }) => {
	try {
		const jobs = await db.query.job.findMany({
			with: {
				jobPost: {
					columns: {
						slug: true,
					},
				},
			},
			columns: {
				jobType: true,
				salary: true,
				id: true,
				title: true,
				createdAt: true,
			},
		});
		return {
			jobs: jobs,
		};
	} catch (error) {
		console.error(error);
	}
}) satisfies PageServerLoad;
