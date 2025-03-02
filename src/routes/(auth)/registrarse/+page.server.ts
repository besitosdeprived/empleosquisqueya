import { validateUser } from "$lib/utils";
import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import { inserUser } from "$lib/server/repository/user.repository";

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = String(formData.get("name"));
		const email = String(formData.get("email"));
		const password = String(formData.get("password"));

		if (!name) return fail(400, { error: "El nombre es obligatorio" });
		if (!email) return fail(400, { error: "El correo es obligatorio" });
		if (!password) return fail(400, { error: "La contrasenia es obligatoria" });
		return {
			success: true,
		};
	},
};
