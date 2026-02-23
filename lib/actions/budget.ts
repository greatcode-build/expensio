"use server";

import { db } from "@/db/dbConfig";
import { Budgets, Expenses } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq, getTableColumns, sql } from "drizzle-orm";

export const createBudget = async ({
  name,
  amount,
  emojiIcon,
}: createBudgetProps) => {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");
  const result = await db
    .insert(Budgets)
    .values({
      name,
      amount,
      icon: emojiIcon,
      createdBy: userId,
    })
    .returning({ insertedId: Budgets.id });
  return result;
};

export const getBudgetList = async () => {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const result = await db
    .select({
      ...getTableColumns(Budgets),
      totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
      totalItem: sql`count(${Expenses.id})`.mapWith(Number),
    })
    .from(Budgets)
    .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
    .where(eq(Budgets.createdBy, userId))
    .groupBy(Budgets.id);
  return result;
};
