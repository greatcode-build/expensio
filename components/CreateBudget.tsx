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
import { createBudgetAction } from "@/lib/actions/budget";

const CreateBudget = () => {
  const [emojiIcon, setEmojiIcon] = useState("😊");
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleCreateBudget = async () => {
    try {
      await createBudgetAction({
        name,
        amount: Number(amount),
        emojiIcon,
      });
      toast("New Budget Created");
    } catch (error) {
      console.error("Budget not Created", error);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-slate-100 items-center flex flex-col border-2 p-10 rounded-md cursor-pointer border-dashed hover:shadow-md">
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
                  <Input
                    placeholder="e.g. Groceries"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-2">
                  <h2 className="text-black font-medium my-1">Budget Amount</h2>
                  <Input
                    type="number"
                    placeholder="e.g. $5000"
                    onChange={(e) => setAmount(e.target.value)}
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
