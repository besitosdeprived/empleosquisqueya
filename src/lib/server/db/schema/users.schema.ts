import { pgEnum, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { bigIntPrimarykey, createdAt, updatedAt } from "../schema.utils";

export const roleTypeEnum = pgEnum("role_type", ["user", "admin"])
export const userTable = pgTable("user", {
  id: bigIntPrimarykey,
  name: varchar({ length: 50 }).notNull(),
  email: varchar({ length: 100 }).unique().notNull(),
  password: text().notNull(),
  role: roleTypeEnum().default("user").notNull(),
  createdAt,
  updatedAt
})
