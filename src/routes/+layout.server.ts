import {
	deleteAccessTokenSessionCookie,
	verifyAccessTokenSessionCookie,
} from "$lib/auth";
import type { Actions, LayoutServerLoad } from "./$types";
export const load = (async ({ cookies }) => {
	const isvalid = verifyAccessTokenSessionCookie(
		cookies.get("access_token") ?? null,
	);
	return {
		isvalid,
	};
}) satisfies LayoutServerLoad;
