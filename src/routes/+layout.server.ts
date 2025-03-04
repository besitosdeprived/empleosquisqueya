import {
	deleteAccessTokenSessionCookie,
	verifyAccessTokenSessionCookie,
} from "$lib/auth";
import type { Actions, LayoutServerLoad } from "./$types";
export const load = (async ({ cookies }) => {
	const isValid = verifyAccessTokenSessionCookie(cookies) !== null
	return {
		isValid: isValid
	};
}) satisfies LayoutServerLoad;
