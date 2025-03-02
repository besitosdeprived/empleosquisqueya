import type { RequestEvent } from "@sveltejs/kit";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "$env/static/private"
export function setAccessTokenSessionCookie(
	event: RequestEvent,
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	data: any,
	maxAge: number = 60 * 60 * 24 * 7,
) {
	const token = jwt.sign(data, JWT_SECRET_KEY, {
		expiresIn: "7days",
	});
	event.cookies.set("access_token", token, {
		httpOnly: true,
		sameSite: "lax",
		secure: false, //change to true when production
		maxAge: maxAge,
		path: "/",
	});
}

export function deleteAccessTokenSessionCookie(event: RequestEvent) {
	event.cookies.set("access_token", "", {
		httpOnly: true,
		sameSite: "lax",
		maxAge: 0,
		path: "/",
	});
}

export function verifyAccessTokenSessionCookie(token: string | null) {
	if (!token) return null;
	try {
		const data = jwt.verify(token, "SECRET_KEY");
		return data;
	} catch (error) {
		console.error(error);
		return null;
	}
}
