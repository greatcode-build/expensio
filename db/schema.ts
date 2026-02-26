import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const Budgets = pgTable("budgets", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name").notNull(),
  amount: integer("amount").notNull(),
  icon: varchar("icon"),
  createdBy: varchar("created_by").notNull(),
});

export const Expenses = pgTable("expenses", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name").notNull(),
  amount: integer("amount").notNull(),
  budgetId: integer("budgetId").references(() => Budgets.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
