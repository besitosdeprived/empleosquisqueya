import { drizzle } from "drizzle-orm/postgres-js";
import { DATABASE_URL } from "$env/static/private";
import postgres from "postgres";
import { env } from "$env/dynamic/private";
import * as jobs from "./schema/jobs.schema";
import * as locations from "./schema/locations.schema";
import * as users from "./schema/users.schema";
import * as junctions from "./junctions";
import * as relations from "./relations";
if (!env.DATABASE_URL) throw new Error("DATABASE_URL is not set");

const client = postgres(DATABASE_URL);

export const db = drizzle(client, {
	schema: { ...relations, ...locations, ...users, ...jobs, ...junctions },
});
