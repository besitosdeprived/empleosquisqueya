import { validateUser } from "$lib/utils";
import { db } from "../db/db";
import type { InsertUser, SelectUser } from "../db/schema/schema";
import { userProfileInfo, user as userTable } from "../db/schema/schema";

export async function inserUser(user: InsertUser): Promise<void> {
	try {
		const newUser = await db
			.insert(userTable)
			.values(user)
			.returning({ id: userTable.id });
		await db.insert(userProfileInfo).values({ userId: newUser[0].id });
	} catch (error) {
		if (error instanceof Error) throw error;
	}
}
export async function selectUserByEmail(
	email: SelectUser["email"],
): Promise<Pick<SelectUser, "id" | "password_hash">> {
	const fUser = await db.query.user.findFirst({
		where: (user, { eq }) => eq(user.email, email),
		columns: {
			id: true,
			password_hash: true,
		},
	});
	if (!fUser) {
		throw new Error("User Not Found");
	}
	return fUser;
}
