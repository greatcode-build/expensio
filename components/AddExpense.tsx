"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createExpense } from "@/lib/actions/expense";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

const AddExpense = ({
  expenses,
  budgets,
  budgetId,
}: {
  expenses: ExpenseListProps[];
  budgets: BudgetListProps[];
  budgetId: string;
}) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState("");
  const [amountError, setAmountError] = useState("");
  const router = useRouter();

  const budget = budgets.find((budget) => budget.id === Number(budgetId));
  const remainingAmount = budget ? budget.amount - budget.totalSpend : 0;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);

    const expenseExists = expenses?.some(
      (expense) =>
        expense.name.toLowerCase().trim() === value.toLowerCase().trim(),
    );

    if (expenseExists) {
      setNameError("Expense already exists in this budget");
    } else {
      setNameError("");
    }
  };
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericAmount = Number(value);
    setAmount(value);
    let error = "";
    if (numericAmount <= 0) {
      error = "Amount must be greater than 0";
    } else if (numericAmount > remainingAmount) {
      error = "Expense amount exceeds remaining budget";
    }
    setAmountError(error);
  };

  const addExpense = async () => {
    const numericAmount = Number(amount);
    if (numericAmount <= 0 || numericAmount > remainingAmount) return;
    setLoading(true);
    await createExpense({
      name,
      amount: numericAmount,
      budgetId: Number(budgetId),
    });
    toast("New Expense Created!");
    router.refresh();
    setName("");
    setAmount("");
    setLoading(false);
  };

  return (
    <div className="border p-5 rounded-lg">
      <h2 className="text-lg font-bold">Add Expense</h2>
      <div className="mt-2">
        <h2 className="text-black font-medium my-1">Expense Name</h2>
        {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
        <Input
          placeholder="e.g. Rent"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="mt-2">
        <h2 className="text-black font-medium my-1">Expense Amount</h2>
        <p className="text-sm text-gray-500">
          Remaining Budget: ${remainingAmount}
        </p>
        {amountError && (
          <p className="text-red-500 text-sm mt-1">{amountError}</p>
        )}
        <Input
          type="number"
          min="0"
          max={remainingAmount}
          placeholder="e.g. $5000"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <Button
        className="mt-3 w-full bg-[#3903ff] hover:bg-[#2a02c0]"
        disabled={!name || !amount || !!nameError || !!amountError || loading}
        onClick={addExpense}
      >
        {loading ? <Loader className="animate-spin" /> : "Add New Expense"}
      </Button>
    </div>
  );
};

export { AddExpense };
