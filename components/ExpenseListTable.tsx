"use client";

import { deleteExpense } from "@/lib/actions/expense";
import { TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const ExpenseListTable = ({
  expenses,
}: {
  expenses: ExpenseListProps[];
}) => {
  const router = useRouter();
  const handleDeleteExpense = async (expense: ExpenseListProps) => {
    await deleteExpense({ expenseId: expense.id });
    toast("Expense Deleted!");
    router.refresh();
  };

  return (
    <div className="mt-3">
      <div className="grid grid-cols-4 bg-slate-200 p-2">
        <h2 className="font-bold">Name</h2>
        <h2 className="font-bold">Amount</h2>
        <h2 className="font-bold">Date</h2>
        <h2 className="font-bold">Action</h2>
      </div>
      {expenses.map((expense) => (
        <div key={expense.id} className="grid grid-cols-4 bg-slate-50 p-2">
          <h2>{expense.name}</h2>
          <h2>{expense.amount}</h2>
          <h2>{expense.createdAt.toLocaleDateString()}</h2>
          <h2>
            <TrashIcon
              className="text-red-600 cursor-pointer"
              onClick={() => handleDeleteExpense(expense)}
            />
          </h2>
        </div>
      ))}
    </div>
  );
};

export { ExpenseListTable };
