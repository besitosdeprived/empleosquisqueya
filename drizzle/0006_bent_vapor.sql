ALTER TABLE "job" ALTER COLUMN "suffix" SET DEFAULT 'gen_random_uuid()';--> statement-breakpoint
ALTER TABLE "job" ALTER COLUMN "suffix" DROP EXPRESSION;