"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createExpense } from "@/lib/actions/expense";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

const AddExpense = ({ budgetId }: { budgetId: string }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const addExpense = async () => {
    setLoading(true);
    await createExpense({
      name,
      amount: Number(amount),
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
        <Input
          placeholder="e.g. Rent"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <h2 className="text-black font-medium my-1">Expense Amount</h2>
        <Input
          type="number"
          placeholder="e.g. $5000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <Button
        className="mt-3 w-full bg-[#3903ff] hover:bg-[#2a02c0]"
        disabled={!name || !amount || loading}
        onClick={addExpense}
      >
        {loading ? <Loader className="animate-spin" /> : "Add New Expense"}
      </Button>
    </div>
  );
};

export { AddExpense };
