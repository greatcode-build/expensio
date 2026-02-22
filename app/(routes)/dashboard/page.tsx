import { db } from "@/db/dbConfig";
import { Budgets } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

const dashboard = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const userBudgets = await db
    .select()
    .from(Budgets)
    .where(eq(Budgets.createdBy, userId!));

  if (userBudgets.length === 0) redirect("/dashboard/budgets");

  return <div>Dashboard</div>;
};

export default dashboard;
