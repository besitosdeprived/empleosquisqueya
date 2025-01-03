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
	char,
	text,
	uuid,
} from "drizzle-orm/pg-core";
import { LocationTable } from "./location";
import { type SQL, sql } from "drizzle-orm";
import { UserTable } from "./user";

export const jobTypeEnum = pgEnum("jobtype", ["remote", "hybrid", "onsite"]);

export const JobTable = pgTable("job", {
	id: bigint({ mode: "bigint" }).primaryKey().generatedAlwaysAsIdentity(),
	title: varchar({ length: 50 }).notNull(),
	suffix: char({ length: 5 }).default(sql`nanoid(5)`),
	slug: varchar({ length: 255 })
		.generatedAlwaysAs(
			"(REPLACE(LOWER(TRIM(unaccent(title))), ' ', '-') || '-' || suffix)",
		)
		.unique()
		.notNull(),
	jobType: jobTypeEnum("job_type").notNull(),
	salary: numeric({ precision: 10, scale: 2 }),
	authorId: bigint("author_id", { mode: "bigint" })
		.references(() => UserTable.id)
		.notNull(),
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
		tagId: bigint("tag_id", { mode: "bigint" })
			.references(() => TagTable.id)
			.notNull(),
	},
	(t) => [primaryKey({ columns: [t.jobId, t.tagId] })],
);
