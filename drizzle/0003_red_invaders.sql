ALTER TABLE "job" drop column "slug";--> statement-breakpoint
ALTER TABLE "job" ADD COLUMN "slug" varchar(255) GENERATED ALWAYS AS ((LOWER(TRIM(title)))) STORED;--> statement-breakpoint
ALTER TABLE "job" DROP COLUMN "info";