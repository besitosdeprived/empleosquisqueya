import { relations } from "drizzle-orm";
import { userTable } from "./schema/users.schema";
import { jobPostInfoTable, jobTable } from "./schema/jobs.schema";
import { LocationTable } from "./schema/locations.schema";
import { jobToLocationTable } from "./junctions";

export const userRelations = relations(userTable, ({ many }) => ({
	jobs: many(jobTable),
}));

export const jobRelations = relations(jobTable, ({ one, many }) => ({
	jobPostInfo: one(jobPostInfoTable, {
		fields: [jobTable.id],
		references: [jobPostInfoTable.jobId],
	}),
	jobToLocation: many(jobToLocationTable),
}));

export const jobPostInfoRelations = relations(jobPostInfoTable, ({ one }) => ({
	job: one(jobTable),
}));

export const locationRelations = relations(LocationTable, ({ many }) => ({
	jobToLocation: many(jobToLocationTable),
}));

export const jobToLocationsRelations = relations(
	jobToLocationTable,
	({ one }) => ({
		job: one(jobTable, {
			fields: [jobToLocationTable.jobId],
			references: [jobTable.id],
		}),
		location: one(LocationTable, {
			fields: [jobToLocationTable.locationId],
			references: [LocationTable.id],
		}),
	}),
);
