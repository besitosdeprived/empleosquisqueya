// import { seedThis } from '$lib/server/db/seed';
import type { PageServerLoad } from "./$types";

export const load = (async () => {
	// await seedThis()
	return {};
}) satisfies PageServerLoad;
