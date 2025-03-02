import { drizzle } from "drizzle-orm/postgres-js";
import { DATABASE_URL } from "$env/static/private"
import postgres from "postgres";
import { env } from "$env/dynamic/private";
import * as schema from "./schema/schema"
import * as relations from "./schema/relations"
if (!env.DATABASE_URL) throw new Error("DATABASE_URL is not set");

const client = postgres(DATABASE_URL);

export const db = drizzle(client, {
	schema: { ...relations, ...schema, },
});
