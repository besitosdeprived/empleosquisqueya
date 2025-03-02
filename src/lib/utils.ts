import { fail, isActionFailure } from "@sveltejs/kit";

export function hyphenizeString(string: string) {
	return string.toLowerCase().trim().replaceAll(" ", "-");
}

export function validateJob({
	title,
	content,
	salary,
	jobType,
	locations,
}: {
	title: string;
	content: string;
	salary: string;
	jobType: "remote" | "hybrid" | "onsite";
	locations: number[];
}) {
	if (!title) throw new ValidationError("Title is required");
	if (!content) throw new ValidationError("Content is required");
	if (!salary) throw new ValidationError("Salary is required");
	if (!jobType) throw new ValidationError("Job Type is required");
	if (locations.length === 0)
		throw new ValidationError("Location can't be empty");
}

export function validateUser({
	name,
	email,
	password,
}: { name: string; email: string; password: string }) {
	if (!name) throw new ValidationError("Name is required");
	if (!email) throw new ValidationError("E-mail is required");
	if (!password) throw new ValidationError("Password is required");
}

export class ValidationError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "ValidationError";
	}
}
