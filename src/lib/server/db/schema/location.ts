import { pgTable, varchar, smallint } from "drizzle-orm/pg-core";

export const LocationTable = pgTable("location", {
	id: smallint().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 100 }).notNull().unique(),
	slug: varchar({ length: 100 }).notNull().unique(),
});
