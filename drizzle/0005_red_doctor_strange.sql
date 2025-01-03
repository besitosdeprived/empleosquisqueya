ALTER TABLE "job" ALTER COLUMN "slug" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "job" drop column "slug";--> statement-breakpoint
ALTER TABLE "job" ADD COLUMN "slug" varchar(255) GENERATED ALWAYS AS ((REPLACE(LOWER(TRIM(title)), ' ', '-') || '-' || suffix)) STORED NOT NULL;--> statement-breakpoint
ALTER TABLE "job" ADD COLUMN "suffix" varchar(5) GENERATED ALWAYS AS (gen_random_uuid()) STORED;--> statement-breakpoint
ALTER TABLE "job" ADD CONSTRAINT "job_slug_unique" UNIQUE("slug");