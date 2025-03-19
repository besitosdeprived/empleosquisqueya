import type { jobTable } from "./schema/jobs.schema";

export type SelectJob = typeof jobTable.$inferSelect;
export type InsertJob = typeof jobTable.$inferInsert;
