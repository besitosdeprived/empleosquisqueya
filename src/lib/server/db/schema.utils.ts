import { bigint, smallint, timestamp } from "drizzle-orm/pg-core";

export const bigIntPrimarykey = bigint({ mode: "number" })
	.primaryKey()
	.generatedAlwaysAsIdentity();

export const smallIntPrimarykey = smallint()
	.primaryKey()
	.generatedAlwaysAsIdentity();

export const createdAt = timestamp("created_at", { mode: "date" })
	.notNull()
	.defaultNow();
export const updatedAt = timestamp("updated_at", { mode: "date" })
	.notNull()
	.defaultNow()
	.$onUpdateFn(() => new Date());
