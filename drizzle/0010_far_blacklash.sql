CREATE TABLE "job_to_location" (
	"job_id" bigint NOT NULL,
	"location_id" bigint NOT NULL,
	CONSTRAINT "job_to_location_job_id_location_id_pk" PRIMARY KEY("job_id","location_id")
);
--> statement-breakpoint
ALTER TABLE "job_to_location" ADD CONSTRAINT "job_to_location_job_id_job_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."job"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_to_location" ADD CONSTRAINT "job_to_location_location_id_location_id_fk" FOREIGN KEY ("location_id") REFERENCES "public"."location"("id") ON DELETE no action ON UPDATE no action;