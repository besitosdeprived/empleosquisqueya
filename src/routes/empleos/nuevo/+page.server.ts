import { db } from "$lib/server/db/db";
import { location } from "$lib/server/db/schema/schema";
import type { Actions, PageServerLoad } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { insertJob } from "$lib/server/repository/job.repository";
export const load = (async ({ cookies }) => {
	// const access_token = cookies.get("access_token");
	// if (!access_token) {
	// 	return redirect(300, "/");
	// }
	const locs = await db.select().from(location);
	return {
		locations: locs,
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const title = String(formData.get("title"));
		const content = String(formData.get("content"));
		const salary = String(formData.get("salary"));
		const jobType = String(formData.get("job_type")) as
			| "remote"
			| "hybrid"
			| "onsite";
		const locations = formData.getAll("locations") as unknown as number[];
		// const authorId = BigInt(locals.userId);

		if (!title)
			return fail(400, { error: "El campo titulo no puede es obligatoriio" });
		if (!content)
			return fail(400, { error: "El campo content no puede es obligatoriio" });
		if (!salary)
			return fail(400, { error: "El campo salario no puede es obligatoriio" });
		if (!jobType)
			return fail(400, { error: "El tipo de trabajo no puede estar vacio" });
		if (locations.length === 0)
			return fail(400, { error: "El campo ubicacion no puede estar vacio" });

		return {
			success: true,
		};
	},
};
