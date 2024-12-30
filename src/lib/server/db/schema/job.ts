import { pgTable, bigint, smallint, timestamp } from "drizzle-orm/pg-core";

export const JobTable = pgTable("job", {
	id: bigint({ mode: "bigint" }).primaryKey().generatedAlwaysAsIdentity(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});
