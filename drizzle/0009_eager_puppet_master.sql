ALTER TABLE "location" ADD CONSTRAINT "location_name_unique" UNIQUE("name");--> statement-breakpoint
ALTER TABLE "location" ADD CONSTRAINT "location_slug_unique" UNIQUE("slug");