ALTER TABLE "jobs" RENAME TO "job";--> statement-breakpoint
ALTER TABLE "job_posts" RENAME TO "job_post";--> statement-breakpoint
ALTER TABLE "job_post" DROP CONSTRAINT "job_posts_suffix_unique";--> statement-breakpoint
ALTER TABLE "job_post" DROP CONSTRAINT "job_posts_slug_unique";--> statement-breakpoint
ALTER TABLE "job_post" DROP CONSTRAINT "job_posts_job_id_jobs_id_fk";
--> statement-breakpoint
ALTER TABLE "job_to_location" DROP CONSTRAINT "job_to_location_job_id_jobs_id_fk";
--> statement-breakpoint
ALTER TABLE "job_to_tag" DROP CONSTRAINT "job_to_tag_job_id_jobs_id_fk";
--> statement-breakpoint
ALTER TABLE "job" DROP CONSTRAINT "jobs_author_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "job_post" ADD CONSTRAINT "job_post_job_id_job_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."job"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_to_location" ADD CONSTRAINT "job_to_location_job_id_job_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."job"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_to_tag" ADD CONSTRAINT "job_to_tag_job_id_job_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."job"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job" ADD CONSTRAINT "job_author_id_user_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_post" ADD CONSTRAINT "job_post_suffix_unique" UNIQUE("suffix");--> statement-breakpoint
ALTER TABLE "job_post" ADD CONSTRAINT "job_post_slug_unique" UNIQUE("slug");