import { sql } from "drizzle-orm";
import {
  check,
  integer,
  pgTable,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const Budgets = pgTable(
  "budgets",
  {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    name: varchar("name").notNull(),
    amount: integer("amount").notNull(),
    icon: varchar("icon"),
    createdBy: varchar("created_by").notNull(),
  },
  (table) => [
    check("budgets_amount_positive", sql`${table.amount} > 0`),
    uniqueIndex("user_budget_unique").on(table.createdBy, table.name),
  ],
);

export const Expenses = pgTable(
  "expenses",
  {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    name: varchar("name").notNull(),
    amount: integer("amount").notNull(),
    budgetId: integer("budgetId").references(() => Budgets.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    check("expenses_amount_positive", sql`${table.amount} > 0`),
    sql`unique(${table.budgetId}, ${table.name})`,
  ],
);
