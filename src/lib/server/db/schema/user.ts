import {
	pgTable,
	bigint,
	smallint,
	timestamp,
	varchar,
	date,
	pgEnum,
} from "drizzle-orm/pg-core";

import { ProvinceTable } from "./location";

export const genreEnum = pgEnum("genre", ["male", "female"]);

export const UserTable = pgTable("user", {
	id: bigint({ mode: "bigint" }).primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 100 }).notNull(),
	email: varchar({ length: 100 }).unique().notNull(),
	password: varchar({ length: 255 }).notNull(),
	birthDate: date({ mode: "string" }).notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const UserProfileInfoTable = pgTable("user_profile_info", {
	id: bigint({ mode: "bigint" }).primaryKey().generatedAlwaysAsIdentity(),
	userId: bigint("user_id", { mode: "bigint" })
		.references(() => UserTable.id)
		.notNull(),
	genre: genreEnum(),
	locationId: smallint("location_id").references(() => ProvinceTable.id),
});
