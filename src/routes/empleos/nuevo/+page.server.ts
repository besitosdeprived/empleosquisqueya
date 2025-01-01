import { db } from "$lib/server/db/db";
import { LocationTable } from "$lib/server/db/schema/location";
import type { PageServerLoad } from "./$types";

export const load = (async ({ fetch }) => {
	const locations = await db
		.select({ name: LocationTable.name, id: LocationTable.id })
		.from(LocationTable);
	return {
		locations,
	};
}) satisfies PageServerLoad;
