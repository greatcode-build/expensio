"use server";

import { db } from "@/db/dbConfig";
import { Budgets } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";

export const createBudgetAction = async ({
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
      createdBy: userId!,
    })
    .returning({ insertedId: Budgets.id });
  return result;
};
