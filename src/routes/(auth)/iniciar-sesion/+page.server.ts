import { fail, error, redirect, isRedirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import { db } from "$lib/server/db/db";
import jwt from "jsonwebtoken";
import { setAccessTokenSessionCookie } from "$lib/auth";
export const load = (async ({ cookies }) => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const email = String(formData.get("email"));
		const password = String(formData.get("password"));
		try {
			if (!password) {
				return fail(400, {
					error: {
						password: "",
					},
				});
			}
			if (!email) {
				return fail(400, {
					email: "Email is required",
				});
			}
			const fUser = await db.query.user.findFirst({
				where: (user, { eq }) => eq(user.email, email),
				columns: {
					email: true,
					id: true,
					password_hash: true,
				},
			});
			if (!fUser || fUser.password_hash !== password) {
				return fail(400, {
					user: "Usuario o contrasenia son incorrectos",
				});
			}
			setAccessTokenSessionCookie(event, { id: fUser.id.toString() }, 60 * 5);
			throw redirect(302, "/empleos");
		} catch (error) {
			if (isRedirect(error)) {
				throw redirect(302, "/empleos");
			}
			console.error(error);
		}
	},
};
