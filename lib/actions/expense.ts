"use server";

import { db } from "@/db/dbConfig";
import { Budgets, Expenses } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";

export const createExpense = async ({
  name,
  amount,
  budgetId,
}: ExpenseProps) => {
  try {
    const result = await db
      .insert(Expenses)
      .values({
        name,
        amount,
        budgetId,
      })
      .returning({ insertedId: Budgets.id });
    return result;
  } catch (error) {
    console.error("Error creating expense", error);
    throw error;
  }
};

export const getExpenseList = async ({ budgetId }: { budgetId: number }) => {
  try {
    const result = await db
      .select()
      .from(Expenses)
      .where(eq(Expenses.budgetId, budgetId))
      .orderBy(desc(Expenses.id));
    return result;
  } catch (error) {
    console.error("Error fetching expense list", error);
    throw error;
  }
};

export const deleteExpense = async ({ expenseId }: { expenseId: number }) => {
  try {
    const result = await db
      .delete(Expenses)
      .where(eq(Expenses.id, expenseId))
      .returning();
    return result;
  } catch (error) {
    console.error("Error deleting expense:", error);
    throw error;
  }
};

export const getAllExpenses = async () => {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");
  try {
    const result = await db
      .select({
        id: Expenses.id,
        name: Expenses.name,
        amount: Expenses.amount,
        budgetId: Expenses.budgetId,
        createdAt: Expenses.createdAt,
      })
      .from(Budgets)
      .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, userId!))
      .orderBy(desc(Expenses.id));
    return result;
  } catch (error) {
    console.error("Error fetching all expenses:", error);
    throw error;
  }
};
