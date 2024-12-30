CREATE TYPE "public"."genre" AS ENUM('male', 'female');--> statement-breakpoint
CREATE TABLE "job" (
	"id" bigint PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "province" (
	"id" smallint PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"slug" varchar(100) NOT NULL,
	CONSTRAINT "province_name_unique" UNIQUE("name"),
	CONSTRAINT "province_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "user_profile_info" (
	"id" bigint PRIMARY KEY NOT NULL,
	"user_id" bigint NOT NULL,
	"genre" "genre",
	"location_id" smallint
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" bigint PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" varchar(100) NOT NULL,
	"password" varchar(255) NOT NULL,
	"birthDate" date NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "user_profile_info" ADD CONSTRAINT "user_profile_info_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_profile_info" ADD CONSTRAINT "user_profile_info_location_id_province_id_fk" FOREIGN KEY ("location_id") REFERENCES "public"."province"("id") ON DELETE no action ON UPDATE no action;