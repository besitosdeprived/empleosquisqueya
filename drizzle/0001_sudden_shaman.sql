ALTER TABLE "job_post" RENAME TO "job_posts";--> statement-breakpoint
ALTER TABLE "job" RENAME TO "jobs";--> statement-breakpoint
ALTER TABLE "job_posts" DROP CONSTRAINT "job_post_suffix_unique";--> statement-breakpoint
ALTER TABLE "job_posts" DROP CONSTRAINT "job_post_slug_unique";--> statement-breakpoint
ALTER TABLE "job_posts" DROP CONSTRAINT "job_post_job_id_job_id_fk";
--> statement-breakpoint
ALTER TABLE "job_to_location" DROP CONSTRAINT "job_to_location_job_id_job_id_fk";
--> statement-breakpoint
ALTER TABLE "job_to_tag" DROP CONSTRAINT "job_to_tag_job_id_job_id_fk";
--> statement-breakpoint
ALTER TABLE "job_posts" ADD CONSTRAINT "job_posts_job_id_jobs_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."jobs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_to_location" ADD CONSTRAINT "job_to_location_job_id_jobs_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."jobs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_to_tag" ADD CONSTRAINT "job_to_tag_job_id_jobs_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."jobs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_posts" ADD CONSTRAINT "job_posts_suffix_unique" UNIQUE("suffix");--> statement-breakpoint
ALTER TABLE "job_posts" ADD CONSTRAINT "job_posts_slug_unique" UNIQUE("slug");