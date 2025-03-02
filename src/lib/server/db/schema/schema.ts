import {
	pgTable,
	bigint,
	smallint,
	timestamp,
	varchar,
	pgEnum,
	numeric,
	primaryKey,
	char,
	text,
	boolean,
} from "drizzle-orm/pg-core";

export const jobTypeEnum = pgEnum("jobtype", ["remote", "hybrid", "onsite"]);

export const job = pgTable("job", {
	id: bigint({ mode: "bigint" }).primaryKey().generatedAlwaysAsIdentity(),
	title: varchar({ length: 50 }).notNull(),
	content: text().notNull(),
	jobType: jobTypeEnum("job_type").notNull(),
	salary: numeric({ precision: 10, scale: 2 }).notNull(),
	authorId: bigint("author_id", { mode: "bigint" })
		.references(() => user.id)
		.notNull(),
	createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});

export type SelectJob = typeof job.$inferSelect;
export type InsertJob = typeof job.$inferInsert;

export const jobPostStatusEnum = pgEnum("jobstatus", [
	"published",
	"archived",
	"banned",
]);

export const jobPost = pgTable("job_post", {
	id: bigint({ mode: "bigint" }).primaryKey().generatedAlwaysAsIdentity(),
	jobId: bigint("job_id", { mode: "bigint" })
		.references(() => job.id)
		.notNull(),
	suffix: char({ length: 5 }).unique().notNull(),
	slug: varchar({ length: 255 }).unique().notNull(),
	status: jobPostStatusEnum("status").default("published").notNull(),
});

export type SelectJobPost = typeof jobPost.$inferSelect;
export type InsertJobPost = typeof jobPost.$inferInsert;

export const jobToLocation = pgTable(
	"job_to_location",
	{
		jobId: bigint("job_id", { mode: "bigint" })
			.references(() => job.id)
			.notNull(),
		locationId: smallint("location_id")
			.references(() => location.id)
			.notNull(),
	},
	(t) => [primaryKey({ columns: [t.jobId, t.locationId] })],
);

export type SelectJobToLocation = typeof jobToLocation.$inferSelect;
export type InsertJobToLocation = typeof jobToLocation.$inferInsert;

export const tag = pgTable("tag", {
	id: bigint({ mode: "bigint" }).primaryKey().generatedAlwaysAsIdentity(),
	name: varchar("name", { length: 50 }),
});

export const jobToTag = pgTable(
	"job_to_tag",
	{
		jobId: bigint("job_id", { mode: "bigint" })
			.references(() => job.id)
			.notNull(),
		tagId: bigint("tag_id", { mode: "bigint" })
			.references(() => tag.id)
			.notNull(),
	},
	(t) => [primaryKey({ columns: [t.jobId, t.tagId] })],
);

export const location = pgTable("location", {
	id: smallint().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 100 }).notNull().unique(),
	slug: varchar({ length: 100 }).notNull().unique(),
});

export type SelectLocation = typeof location.$inferSelect;
export type InsertLocation = typeof location.$inferInsert;

export const genreTypeEnum = pgEnum("genretype", ["male", "female"]);

export const user = pgTable("user", {
	id: bigint({ mode: "bigint" }).primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 50 }).notNull(),
	email: varchar({ length: 100 }).unique().notNull(),
	password_hash: text().notNull(),
	createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: "date" })
		.defaultNow()
		.$onUpdate(() => new Date())
		.notNull(),
});

export type SelectUser = typeof user.$inferSelect;
export type InsertUser = typeof user.$inferInsert;

export const userProfileInfo = pgTable("user_profile_info", {
	id: bigint({ mode: "bigint" }).primaryKey().generatedAlwaysAsIdentity(),
	userId: bigint({ mode: "bigint" })
		.references(() => user.id)
		.notNull(),
	dateOfBirth: timestamp({ mode: "date" }),
	verified: boolean().default(false).notNull(),
	createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: "date" })
		.defaultNow()
		.$onUpdate(() => new Date())
		.notNull(),
});

export const userToLocation = pgTable(
	"user_to_location",
	{
		userId: bigint("user_id", { mode: "bigint" })
			.references(() => user.id)
			.notNull(),
		locationId: smallint("location_id")
			.references(() => location.id)
			.notNull(),
	},
	(t) => [primaryKey({ columns: [t.userId, t.locationId] })],
);
