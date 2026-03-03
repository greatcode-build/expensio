import { BudgetItem } from "@/components/BudgetItem";
import { CardInfo } from "@/components/CardInfo";
import { Chart } from "@/components/Chart";
import { ExpenseListTable } from "@/components/ExpenseListTable";
import { getBudgetList, userHasBudget } from "@/lib/actions/budget";
import { getAllExpenses } from "@/lib/actions/expense";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const user = await currentUser();
  const hasBudget = await userHasBudget();
  if (!hasBudget) redirect("/dashboard/budgets");

  const budgets = await getBudgetList();
  const allExpenses = await getAllExpenses();

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold">Hi, {user?.fullName} 🖐️ </h2>
      <p className="text-gray-500">
        Here&apos;s is what is happening with your money, Let&apos;s manage your
        expense
      </p>
      <CardInfo budgets={budgets} />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-5">
        <div className="md:col-span-2">
          <Chart budgets={budgets} />
          <ExpenseListTable expenses={allExpenses} />
        </div>
        <div className="grid gap-5">
          <h2 className="font-bold text-lg">Latest Budgets</h2>
          {budgets.map((budget) => (
            <BudgetItem budget={budget} key={budget.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
