import { drizzle } from "drizzle-orm/postgres-js";

import postgres from "postgres";
import { env } from "$env/dynamic/private";
import { UserTable } from "./schema/user";
import { JobTable } from "./schema/job";
import { LocationTable } from "./schema/location";
if (!env.DATABASE_URL) throw new Error("DATABASE_URL is not set");

const client = postgres(env.DATABASE_URL);

export const db = drizzle(client, {
	schema: { UserTable, JobTable, LocationTable },
});
