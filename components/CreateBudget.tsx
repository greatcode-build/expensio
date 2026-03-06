"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import EmojiPicker from "emoji-picker-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { createBudget } from "@/lib/actions/budget";
import { useRouter } from "next/navigation";

const CreateBudget = ({ budgets }: { budgets: BudgetListProps[] }) => {
  const [emojiIcon, setEmojiIcon] = useState("😊");
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [nameError, setNameError] = useState("");
  const [amountError, setAmountError] = useState("");
  const router = useRouter();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    const budgetExists = budgets.some(
      (budget) =>
        budget.name.toLowerCase().trim() === value.toLowerCase().trim(),
    );
    if (budgetExists) {
      setNameError("Budget already exists");
    } else {
      setNameError("");
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericAmount = Number(value);
    setAmount(value);
    if (numericAmount <= 0) {
      setAmountError("Amount must be greater than 0");
    } else {
      setAmountError("");
    }
  };

  const handleCreateBudget = async () => {
    const numericAmount = Number(amount);
    if (numericAmount <= 0 || nameError || amountError) return;
    await createBudget({
      name,
      amount: numericAmount,
      emojiIcon,
    });
    toast("New Budget Created!");
    router.refresh();
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="h-full bg-slate-100 items-center flex flex-col border-2 p-10 rounded-md cursor-pointer border-dashed hover:shadow-md">
            <h1 className="text-3xl">+</h1>
            <h1>Create New Budget</h1>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Budget</DialogTitle>
            <DialogDescription asChild>
              <div className="mt-5">
                <Button
                  variant="outline"
                  onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                  className="text-lg"
                >
                  {emojiIcon}
                </Button>
                <div className="absolute">
                  <EmojiPicker
                    open={openEmojiPicker}
                    onEmojiClick={(e) => {
                      setEmojiIcon(e.emoji);
                      setOpenEmojiPicker(false);
                    }}
                  />
                </div>
                <div className="mt-2">
                  <h2 className="text-black font-medium my-1">Budget Name</h2>
                  {nameError && (
                    <p className="text-red-500 text-sm mt-1">{nameError}</p>
                  )}
                  <Input
                    placeholder="e.g. Groceries"
                    onChange={handleNameChange}
                  />
                </div>
                <div className="mt-2">
                  <h2 className="text-black font-medium my-1">Budget Amount</h2>
                  {amountError && (
                    <p className="text-red-500 text-sm mt-1">{amountError}</p>
                  )}
                  <Input
                    type="number"
                    min="0"
                    placeholder="e.g. $5000"
                    onChange={handleAmountChange}
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                className="mt-5 w-full bg-[#3903ff] hover:bg-[#2a02c0]"
                disabled={!name || !amount}
                onClick={handleCreateBudget}
              >
                Create Budget
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export { CreateBudget };
