import { db } from "$lib/server/db/db";
import { location } from "$lib/server/db/schema/schema";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
	const locs = await db.select().from(location);
	return {
		locations: locs,
	};
}) satisfies PageServerLoad;
