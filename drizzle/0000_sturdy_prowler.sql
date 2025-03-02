CREATE TYPE "public"."jobstatus" AS ENUM('published', 'archived', 'banned');--> statement-breakpoint
CREATE TYPE "public"."jobtype" AS ENUM('remote', 'hybrid', 'onsite');--> statement-breakpoint
CREATE TABLE "job_post" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "job_post_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"job_id" bigint NOT NULL,
	"suffix" char(5) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"status" "jobstatus" DEFAULT 'published' NOT NULL,
	CONSTRAINT "job_post_suffix_unique" UNIQUE("suffix"),
	CONSTRAINT "job_post_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "job" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "job_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"title" varchar(50) NOT NULL,
	"content" text NOT NULL,
	"job_type" "jobtype" NOT NULL,
	"salary" numeric(10, 2) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "job_to_location" (
	"job_id" bigint NOT NULL,
	"location_id" smallint NOT NULL,
	CONSTRAINT "job_to_location_job_id_location_id_pk" PRIMARY KEY("job_id","location_id")
);
--> statement-breakpoint
CREATE TABLE "job_to_tag" (
	"job_id" bigint NOT NULL,
	"tag_id" bigint NOT NULL,
	CONSTRAINT "job_to_tag_job_id_tag_id_pk" PRIMARY KEY("job_id","tag_id")
);
--> statement-breakpoint
CREATE TABLE "tag" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "tag_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"name" varchar(50)
);
--> statement-breakpoint
CREATE TABLE "location" (
	"id" smallint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "location_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 32767 START WITH 1 CACHE 1),
	"name" varchar(100) NOT NULL,
	"slug" varchar(100) NOT NULL,
	CONSTRAINT "location_name_unique" UNIQUE("name"),
	CONSTRAINT "location_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "job_post" ADD CONSTRAINT "job_post_job_id_job_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."job"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_to_location" ADD CONSTRAINT "job_to_location_job_id_job_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."job"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_to_location" ADD CONSTRAINT "job_to_location_location_id_location_id_fk" FOREIGN KEY ("location_id") REFERENCES "public"."location"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_to_tag" ADD CONSTRAINT "job_to_tag_job_id_job_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."job"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_to_tag" ADD CONSTRAINT "job_to_tag_tag_id_tag_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tag"("id") ON DELETE no action ON UPDATE no action;