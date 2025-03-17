import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set");

export default defineConfig({
	schema: ["./src/lib/server/db/schema/*.ts", "./src/lib/server/db/junctions.ts"],
	dbCredentials: {
		url: process.env.DATABASE_URL as string,
	},
	verbose: true,
	strict: true,
	dialect: "postgresql",
});
