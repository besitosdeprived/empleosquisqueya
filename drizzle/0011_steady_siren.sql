ALTER TABLE "job" drop column "slug";--> statement-breakpoint
ALTER TABLE "job" ADD COLUMN "slug" varchar(255) GENERATED ALWAYS AS ((REPLACE(LOWER(TRIM(title)), ' ', '-') || '-' || gen_random_uuid())) STORED NOT NULL;--> statement-breakpoint
ALTER TABLE "job" DROP COLUMN "suffix";