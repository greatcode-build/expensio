import { AddExpense } from "@/components/AddExpense";
import { BudgetItem } from "@/components/BudgetItem";
import { DeleteBudgetButton } from "@/components/DeleteBudgetButton";
import { ExpenseListTable } from "@/components/ExpenseListTable";
import { getBudgetInfo } from "@/lib/actions/budget";
import { getExpenseList } from "@/lib/actions/expense";
import { notFound } from "next/navigation";

const Expenses = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const [budgetInfo, expenseList] = await Promise.all([
    getBudgetInfo({ id }),
    getExpenseList({ budgetId: parseInt(id) }),
  ]);

  if (!budgetInfo) {
    return notFound();
  }

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold flex items-center justify-between">
        My Expenses
        <DeleteBudgetButton id={id} />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-5">
        <BudgetItem budget={budgetInfo} />
        <AddExpense budgetId={id} />
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-lg">Latest Expenses</h2>
        <ExpenseListTable expenses={expenseList} />
      </div>
    </div>
  );
};

export default Expenses;
