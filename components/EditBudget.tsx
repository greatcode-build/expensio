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
import { PenBox } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Input } from "./ui/input";
import EmojiPicker from "emoji-picker-react";
import { updateBudget } from "@/lib/actions/budget";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const EditBudget = ({ budget }: { budget: BudgetListProps }) => {
  const [name, setName] = useState(budget.name);
  const [amount, setAmount] = useState(budget.amount);
  const [emojiIcon, setEmojiIcon] = useState(budget?.icon);
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const router = useRouter();

  const handleUpdate = async () => {
    await updateBudget({
      name,
      amount,
      icon: emojiIcon,
      budget,
    });
    toast("Budget Updated!");
    router.refresh();
  };

  return (
    <div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#3903ff]! hover:bg-[#2a02c0]! flex gap-2">
              <PenBox />
              Edit
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Budget</DialogTitle>
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
                      defaultValue={budget.name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mt-2">
                    <h2 className="text-black font-medium my-1">
                      Budget Amount
                    </h2>
                    <Input
                      type="number"
                      placeholder="e.g. $5000"
                      defaultValue={budget.amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                    />
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button
                  className="bg-[#3903ff]! hover:bg-[#2a02c0]! flex gap-2 w-full"
                  disabled={!name || !amount}
                  onClick={handleUpdate}
                >
                  <PenBox />
                  Update Budget
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export { EditBudget };
