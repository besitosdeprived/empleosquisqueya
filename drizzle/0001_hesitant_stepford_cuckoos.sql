CREATE TABLE "job_to_tag" (
	"job_id" bigint NOT NULL,
	"tag_id" bigint,
	CONSTRAINT "job_to_tag_job_id_tag_id_pk" PRIMARY KEY("job_id","tag_id")
);
--> statement-breakpoint
CREATE TABLE "tag" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "tag_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"text" varchar(50) NOT NULL,
	"slug" varchar GENERATED ALWAYS AS (REGEXP_REPLACE(LOWER(TRIM("tag"."text")), 's+', '-', 'g')) STORED,
	CONSTRAINT "tag_text_unique" UNIQUE("text"),
	CONSTRAINT "tag_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "job_to_tag" ADD CONSTRAINT "job_to_tag_job_id_job_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."job"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_to_tag" ADD CONSTRAINT "job_to_tag_tag_id_tag_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tag"("id") ON DELETE no action ON UPDATE no action;