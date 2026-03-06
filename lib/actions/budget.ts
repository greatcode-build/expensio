"use server";

import { db } from "@/db/dbConfig";
import { Budgets, Expenses } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { and, desc, eq, getTableColumns, sql } from "drizzle-orm";

export const userHasBudget = async () => {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    const result = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, userId!));
    return result;
  } catch (error) {
    console.error("Error fetching user budgets:", error);
  }
};

export const createBudget = async ({
  name,
  amount,
  emojiIcon,
}: CreateBudgetProps) => {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");
  if (amount <= 0) {
    throw new Error("Amount must be greater than 0");
  }

  const budgetName = name.trim();
  if (!budgetName) throw new Error("Budget name required");

  try {
    const existingBudget = await db
      .select()
      .from(Budgets)
      .where(and(eq(Budgets.createdBy, userId), eq(Budgets.name, budgetName)));

    if (existingBudget.length > 0) {
      throw new Error("Budget already exists");
    }
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
  } catch (error) {
    console.error("Error creating budget:", error);
    throw error;
  }
};

export const getBudgetList = async () => {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    const result = await db
      .select({
        ...getTableColumns(Budgets),
        totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
        totalItem: sql`count(${Expenses.id})`.mapWith(Number),
      })
      .from(Budgets)
      .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, userId))
      .groupBy(Budgets.id)
      .orderBy(desc(Budgets.id));
    return result;
  } catch (error) {
    console.error("Error fetching budget list:", error);
    throw error;
  }
};

export const getBudgetInfo = async (params: { id: string }) => {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");
  try {
    const result = await db
      .select({
        ...getTableColumns(Budgets),
        totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
        totalItem: sql`count(${Expenses.id})`.mapWith(Number),
      })
      .from(Budgets)
      .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(
        and(eq(Budgets.createdBy, userId), eq(Budgets.id, Number(params.id))),
      )
      .groupBy(Budgets.id);

    return result[0];
  } catch (error) {
    console.error("Error fetching budget info:", error);
    throw error;
  }
};

export const deleteBudget = async (params: { id: string }) => {
  try {
    const deleteExpense = await db
      .delete(Expenses)
      .where(eq(Expenses.budgetId, Number(params.id)))
      .returning();

    if (deleteExpense) {
      const deleteBudget = await db
        .delete(Budgets)
        .where(eq(Budgets.id, Number(params.id)))
        .returning();
      return deleteBudget;
    }
  } catch (error) {
    console.error("Error deleting budget:", error);
    throw error;
  }
};

export const updateBudget = async ({
  name,
  amount,
  icon,
  budget,
}: UpdateBudgetProps) => {
  const result = await db
    .update(Budgets)
    .set({ name, amount, icon })
    .where(eq(Budgets.id, budget.id))
    .returning();
  return result;
};
