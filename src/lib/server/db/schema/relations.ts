// import { relations } from "drizzle-orm";
// import { jobPosts, jobs, jobToLocation, locations } from "./schema";

// export const jobsRelations = relations(jobs, ({ one, many }) => ({
// 	jobPost: one(jobPosts),
// 	jobsToLocations: many(jobToLocation)
// }));

// export const LocationRelations = relations(locations, ({ many }) => ({
// 	locationsToJobs: many(jobToLocation)
// }));

// export const jobToLocationRelations = relations(jobToLocation, ({ one }) => ({
// 	job: one(jobs, {
// 		fields: [jobToLocation.jobId],
// 		references: [jobs.id]
// 	}),
// 	location: one(locations, {
// 		fields: [jobToLocation.locationId],
// 		references: [locations.id]
// 	})
// }))

// export const jobPostRelations = relations(jobPosts, ({ one }) => ({
// 	job: one(jobs, {
// 		fields: [jobPosts.jobId],
// 		references: [jobs.id]
// 	})
// }));

import { relations } from "drizzle-orm";
import {
	jobPost,
	job,
	jobToLocation,
	jobToTag,
	location,
	tag,
	user,
	userProfileInfo,
	userToLocation,
} from "./schema";

export const jobsRelations = relations(job, ({ one, many }) => ({
	jobPost: one(jobPost, {
		fields: [job.id],
		references: [jobPost.jobId],
	}),
	jobsToLocations: many(jobToLocation),
	jobsToTags: many(jobToTag),
	author: one(user, {
		fields: [job.authorId],
		references: [user.id],
	}),
}));

export const locationsRelations = relations(location, ({ many, one }) => ({
	jobsToLocations: many(jobToLocation),
	userToLocation: one(userToLocation),
}));

export const tagRelations = relations(tag, ({ many }) => ({
	jobsToTags: many(jobToTag),
}));

export const jobToLocationRelations = relations(jobToLocation, ({ one }) => ({
	job: one(job, {
		fields: [jobToLocation.jobId],
		references: [job.id],
	}),
	location: one(location, {
		fields: [jobToLocation.locationId],
		references: [location.id],
	}),
}));

export const jobToTagRelations = relations(jobToTag, ({ one }) => ({
	job: one(job, {
		fields: [jobToTag.jobId],
		references: [job.id],
	}),
	tag: one(tag, {
		fields: [jobToTag.tagId],
		references: [tag.id],
	}),
}));

export const jobPostRelations = relations(jobPost, ({ one }) => ({
	job: one(job, {
		fields: [jobPost.jobId],
		references: [job.id],
	}),
}));

export const userRelations = relations(user, ({ one, many }) => ({
	profileInfo: one(userProfileInfo),
	jobs: many(job),
}));

export const userProfileInfoRelations = relations(
	userProfileInfo,
	({ one }) => ({
		user: one(user, {
			fields: [userProfileInfo.userId],
			references: [user.id],
		}),
	}),
);

export const userToLocationRelations = relations(userToLocation, ({ one }) => ({
	user: one(user, {
		fields: [userToLocation.userId],
		references: [user.id],
	}),
	location: one(location, {
		fields: [userToLocation.locationId],
		references: [location.id], //ERROR user can be from remote
	}),
}));
