CREATE TABLE "job_post_info" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "job_post_info_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"slug" uuid DEFAULT gen_random_uuid() NOT NULL,
	"jobId" bigint NOT NULL,
	"status" "job_post_status" DEFAULT 'published' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "job_post" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "job_to_location" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "job_to_tag" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "tag" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "user_profile_info" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "user_to_location" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "job_post" CASCADE;--> statement-breakpoint
DROP TABLE "job_to_location" CASCADE;--> statement-breakpoint
DROP TABLE "job_to_tag" CASCADE;--> statement-breakpoint
DROP TABLE "tag" CASCADE;--> statement-breakpoint
DROP TABLE "user_profile_info" CASCADE;--> statement-breakpoint
DROP TABLE "user_to_location" CASCADE;--> statement-breakpoint
ALTER TABLE "location" DROP CONSTRAINT "location_name_unique";--> statement-breakpoint
ALTER TABLE "location" DROP CONSTRAINT "location_slug_unique";--> statement-breakpoint
ALTER TABLE "job" ALTER COLUMN "title" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "job" ALTER COLUMN "job_type" SET DATA TYPE job_type;--> statement-breakpoint
ALTER TABLE "job" ALTER COLUMN "salary" SET DATA TYPE bigint;--> statement-breakpoint
ALTER TABLE "location" ALTER COLUMN "name" SET DATA TYPE varchar(50);--> statement-breakpoint
ALTER TABLE "location" ALTER COLUMN "slug" SET DATA TYPE varchar(50);--> statement-breakpoint
ALTER TABLE "job" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "password" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "role" "role_type" DEFAULT 'user' NOT NULL;--> statement-breakpoint
ALTER TABLE "job_post_info" ADD CONSTRAINT "job_post_info_jobId_job_id_fk" FOREIGN KEY ("jobId") REFERENCES "public"."job"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "password_hash";--> statement-breakpoint
DROP TYPE "public"."genretype";--> statement-breakpoint
DROP TYPE "public"."jobstatus";--> statement-breakpoint
DROP TYPE "public"."jobtype";