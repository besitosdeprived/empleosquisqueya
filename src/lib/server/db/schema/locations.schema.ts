import { pgTable, varchar } from "drizzle-orm/pg-core";
import { smallIntPrimarykey } from "../schema.utils";

export const LocationTable = pgTable("location", {
	id: smallIntPrimarykey,
	name: varchar({ length: 50 }).unique().notNull(),
	slug: varchar({ length: 50 }).unique().notNull(),
});
