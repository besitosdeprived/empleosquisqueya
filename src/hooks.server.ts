import { verifyAccessTokenSessionCookie } from "$lib/auth";
import type { Handle } from "@sveltejs/kit";
export const handle: Handle = async ({ event, resolve }) => {
	const access_token = event.cookies.get("access_token") ?? null;
	const data = verifyAccessTokenSessionCookie(access_token) as {
		id: string;
	} | null;
	if (data) {
		event.locals.userId = data.id;
	}
	const response = await resolve(event);
	return response;
};
