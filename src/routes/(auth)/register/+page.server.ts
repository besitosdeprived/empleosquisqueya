import { db } from "$lib/server/db/db";
import { UserTable } from "$lib/server/db/schema/user";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	register: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		const birthDate = formData.get("b_date") as string;
		const newUser = await db.insert(UserTable).values({
			name: name,
			email: email,
			password: password,
			birthDate: birthDate,
		});

		return {
			succ: true,
		};
	},
};

// <!-- id: bigint({ mode: "bigint" }).primaryKey(),
// 	name: varchar({ length: 100 }).notNull(),
// 	email: varchar({ length: 100 }).notNull(),
// 	password: varchar({ length: 255 }).notNull(),
// 	birthDate: date({ mode: "date" }).notNull(), -->
