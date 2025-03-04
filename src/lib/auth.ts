import type { RequestEvent } from "@sveltejs/kit";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "$env/static/private"
import type { Cookies } from "@sveltejs/kit";

const COOKIE_ACCESS_TOKEN_NAME = "access_token"
export function setAccessTokenSessionCookie(
	cookies: Cookies,
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	data: any,
	maxAge: number = 60 * 60 * 24 * 7,
) {
	const token = jwt.sign(data, JWT_SECRET_KEY, {
		expiresIn: "7days",
	});
	cookies.set(COOKIE_ACCESS_TOKEN_NAME, token, {
		httpOnly: true,
		sameSite: "lax",
		secure: false, //change to true when production
		maxAge: maxAge,
		path: "/",
	});
}

export function deleteAccessTokenSessionCookie(cookies: Cookies) {
	cookies.delete(COOKIE_ACCESS_TOKEN_NAME, {
		path: "/",
	});
}

export function verifyAccessTokenSessionCookie(cookies: Cookies) {
	try {
		const data = jwt.verify(cookies.get(COOKIE_ACCESS_TOKEN_NAME) ?? "", JWT_SECRET_KEY);
		return data;
	} catch (error) {
		console.error(error);
		return null;
	}
}

