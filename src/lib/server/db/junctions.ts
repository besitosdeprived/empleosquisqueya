import { bigint, pgTable, primaryKey } from "drizzle-orm/pg-core";
import { jobTable } from "./schema/jobs.schema";
import { LocationTable } from "./schema/locations.schema";
export const jobToLocationTable = pgTable(
	"job_to_location",
	{
		jobId: bigint("job_id", { mode: "number" })
			.references(() => jobTable.id)
			.notNull(),
		locationId: bigint("location_id", { mode: "number" })
			.references(() => LocationTable.id)
			.notNull(),
	},
	(t) => [primaryKey({ columns: [t.jobId, t.locationId] })],
);
