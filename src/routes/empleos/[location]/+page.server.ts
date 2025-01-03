import { db } from "$lib/server/db/db";
import { LocationTable } from "$lib/server/db/schema/location";
import { eq } from "drizzle-orm";
import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load = (async ({ params }) => {
	const location = await db
		.select({ name: LocationTable.name, slug: LocationTable.slug })
		.from(LocationTable)
		.where(eq(LocationTable.slug, params.location))
		.limit(1);
	if (location.at(0) === undefined) {
		return error(404, { message: "Not found" });
	}
	return {
		location: location.at(0),
	};
}) satisfies PageServerLoad;
