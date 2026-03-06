import { AddExpense } from "@/components/AddExpense";
import { BudgetItem } from "@/components/BudgetItem";
import { DeleteBudget } from "@/components/DeleteBudget";
import { EditBudget } from "@/components/EditBudget";
import { ExpenseListTable } from "@/components/ExpenseListTable";
import { getBudgetInfo, getBudgetList } from "@/lib/actions/budget";
import { getExpenseList } from "@/lib/actions/expense";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const ExpensePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const [budgetInfo, expenseList, budgets] = await Promise.all([
    getBudgetInfo({ id }),
    getExpenseList({ budgetId: parseInt(id) }),
    getBudgetList(),
  ]);

  if (!budgetInfo) {
    return notFound();
  }

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/dashboard/budgets">
            <ArrowLeft className="cursor-pointer" />
          </Link>
          My Expenses
        </div>
        <div className="flex gap-2">
          <EditBudget budget={budgetInfo} />
          <DeleteBudget id={id} />
        </div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-5">
        <BudgetItem budget={budgetInfo} />
        <AddExpense budgetId={id} budgets={budgets} expenses={expenseList} />
      </div>
      <div className="mt-4">
        <ExpenseListTable expenses={expenseList} />
      </div>
    </div>
  );
};

export default ExpensePage;
