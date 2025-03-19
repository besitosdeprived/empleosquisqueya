import {
	bigint,
	pgEnum,
	pgTable,
	text,
	uuid,
	varchar,
} from "drizzle-orm/pg-core";
import { bigIntPrimarykey, createdAt, updatedAt } from "../schema.utils";
import { userTable } from "./users.schema";

export const jobTypeEnum = pgEnum("job_type", ["remote", "onsite", "hybrid"]);
export const jobTable = pgTable("job", {
	id: bigIntPrimarykey,
	title: varchar({ length: 100 }).notNull(),
	content: text().notNull(),
	salary: bigint({ mode: "number" }).notNull(),
	jobType: jobTypeEnum("job_type").notNull(),
	authorId: bigint("author_id", { mode: "number" })
		.references(() => userTable.id)
		.notNull(),
	createdAt,
	updatedAt,
});

export const jobPostStatusEnum = pgEnum("job_post_status", [
	"published",
	"archived",
	"pending",
]);

export const jobPostInfoTable = pgTable("job_post_info", {
	id: bigIntPrimarykey,
	slug: uuid().defaultRandom().notNull(),
	jobId: bigint({ mode: "number" })
		.references(() => jobTable.id)
		.notNull(),
	status: jobPostStatusEnum().default("published").notNull(), // on prod default is pending...
	createdAt,
	updatedAt,
});
