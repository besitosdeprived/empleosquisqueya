import {
	pgTable,
	bigint,
	smallint,
	timestamp,
	varchar,
	pgEnum,
	numeric,
	primaryKey,
	boolean,
	text,
} from "drizzle-orm/pg-core";
import { LocationTable } from "./location";
import { type SQL, sql } from "drizzle-orm";

export const jobTypeEnum = pgEnum("jobtype", ["remote", "hybrid", "onsite"]);

export const JobTable = pgTable("job", {
	id: bigint({ mode: "bigint" }).primaryKey().generatedAlwaysAsIdentity(),
	title: varchar({ length: 50 }).notNull(),
	suffix: varchar({ length: 5 })
		.generatedAlwaysAs(
			(): SQL => sql`substring(gen_random_uuid()::text FROM 1 FOR 5)`,
		)
		.notNull(),
	slug: text()
		.generatedAlwaysAs(
			(): SQL =>
				sql`REGEXP_REPLACE(LOWER(TRIM(${JobTable.title})), '\s+', '-', 'g') || '-' || ${JobTable.suffix}`,
		)
		.unique()
		.notNull(),
	jobType: jobTypeEnum("job_type").notNull(),
	salary: numeric({ scale: 6, precision: 2 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const JobPostTable = pgTable("job_post", {
	id: bigint({ mode: "bigint" }).primaryKey().generatedAlwaysAsIdentity(),
	jobId: bigint("job_id", { mode: "bigint" })
		.references(() => JobTable.id)
		.notNull(),
	isPublished: boolean("is_published").default(true).notNull(),
});

export const JobRequirementTable = pgTable("job_requirement", {
	id: bigint({ mode: "bigint" }).primaryKey().generatedAlwaysAsIdentity(),
	jobId: bigint("job_id", { mode: "bigint" })
		.references(() => JobTable.id)
		.notNull(),
	text: varchar({ length: 100 }).notNull(),
});

export const JobToLocationJunctionTable = pgTable(
	"job_to_location",
	{
		jobId: bigint("job_id", { mode: "bigint" })
			.references(() => JobTable.id)
			.notNull(),
		locationId: smallint("location_id")
			.references(() => LocationTable.id)
			.notNull(),
	},
	(t) => [primaryKey({ columns: [t.jobId, t.locationId] })],
);

export const TagTable = pgTable("tag", {
	id: bigint({ mode: "bigint" }).primaryKey().generatedAlwaysAsIdentity(),
	text: varchar({ length: 50 }).unique().notNull(),
	slug: varchar()
		.unique()
		.generatedAlwaysAs(
			(): SQL =>
				sql`REGEXP_REPLACE(LOWER(TRIM(${TagTable.text})), '\s+', '-', 'g')`,
		),
});

export const JobToTagJunctionTable = pgTable(
	"job_to_tag",
	{
		jobId: bigint("job_id", { mode: "bigint" })
			.references(() => JobTable.id)
			.notNull(),
		tagId: bigint("tag_id", { mode: "bigint" }).references(() => TagTable.id),
	},
	(t) => [primaryKey({ columns: [t.jobId, t.tagId] })],
);
