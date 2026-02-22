CREATE TABLE "budgets" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "budgets_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar NOT NULL,
	"amount" integer NOT NULL,
	"icon" varchar,
	"created_by" varchar NOT NULL
);
