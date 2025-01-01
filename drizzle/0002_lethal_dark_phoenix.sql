CREATE TABLE "job_post" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "job_post_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"job_id" bigint NOT NULL,
	"is_published" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
ALTER TABLE "job" ADD COLUMN "suffix" varchar(5) GENERATED ALWAYS AS (substring(gen_random_uuid()::text FROM 1 FOR 5)) STORED NOT NULL;--> statement-breakpoint
ALTER TABLE "job" ADD COLUMN "slug" text GENERATED ALWAYS AS (REGEXP_REPLACE(LOWER(TRIM("job"."title")), 's+', '-', 'g') || '-' || "job"."suffix") STORED NOT NULL;--> statement-breakpoint
ALTER TABLE "job_post" ADD CONSTRAINT "job_post_job_id_job_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."job"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job" ADD CONSTRAINT "job_slug_unique" UNIQUE("slug");