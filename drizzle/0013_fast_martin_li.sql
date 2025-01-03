ALTER TABLE "job" drop column "slug";--> statement-breakpoint
ALTER TABLE "job" ADD COLUMN "slug" varchar(255) GENERATED ALWAYS AS ((REPLACE(LOWER(TRIM(title)), ' ', '-') || '-' || suffix) STORED NOT NULL;--> statement-breakpoint
ALTER TABLE "job" ADD COLUMN "suffix" char(5) DEFAULT 'nanoid(5))';