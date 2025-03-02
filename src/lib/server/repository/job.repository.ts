import {
	type SelectJob,
	type InsertJob,
	job as jobTable,
	type SelectJobPost,
	jobToLocation,
	type SelectJobToLocation,
	jobPost,
} from "$lib/server/db/schema/schema";

import { nanoid } from "nanoid";
import { db } from "../db/db";
import { eq } from "drizzle-orm";
import { fail } from "@sveltejs/kit";

type JobWithJobPost = SelectJob & { jobPost: SelectJobPost | null };

type JobPostWithJob = SelectJobPost & { job: SelectJob | null };

export async function insertJob(
	job: InsertJob,
	locations: SelectJobToLocation["locationId"][],
): Promise<void> {
	const suffix = nanoid(5);
	try {
		const newJob = await db
			.insert(jobTable)
			.values(job)
			.returning({ id: jobTable.id });
		await db.insert(jobPost).values({
			jobId: newJob[0].id,
			suffix,
			slug: `${job.title.toLowerCase().replaceAll(" ", "-")}-${suffix}`,
		});
		await db
			.insert(jobToLocation)
			.values(
				locations.map((locationId) => ({ jobId: newJob[0].id, locationId })),
			);
	} catch (error) {
		if (error instanceof Error) throw error;
	}
}
export async function selectJobs(): Promise<JobWithJobPost[]> {
	return await db.query.job.findMany({
		with: {
			jobPost: true,
		},
	});
}
export async function selectJobById(
	id: SelectJob["id"],
): Promise<JobWithJobPost | null> {
	const fJobs = await db.query.job.findFirst({
		where: eq(jobTable.id, id),
		with: {
			jobPost: true,
		},
	});
	if (!fJobs) {
		return null;
	}
	return fJobs;
}
export async function selectJobBySlug(
	slug: SelectJobPost["slug"],
): Promise<JobPostWithJob | null> {
	const jobs = await db.query.jobPost.findFirst({
		where: eq(jobPost.slug, slug),
		with: {
			job: true,
		},
	});
	if (!jobs) {
		return null;
	}
	return jobs;
}
