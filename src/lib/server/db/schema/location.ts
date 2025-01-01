import { pgTable, varchar, smallint } from "drizzle-orm/pg-core";

//Planeo hacer una tabla de minucipios que este "relacionada" con las provincias...
export const LocationTable = pgTable("location", {
	id: smallint().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 100 }).notNull().unique(),
	slug: varchar({ length: 100 }).notNull().unique(),
});
