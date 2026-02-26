"use client";

import { TrashIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteBudget } from "@/lib/actions/budget";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DeleteBudgetButton = ({ id }: { id: string }) => {
  const router = useRouter();
  const handleDeleteBudget = async () => {
    await deleteBudget({ id });
    toast("Budget deleted successfully");
    router.replace("/dashboard/budgets");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="flex gap-2" variant="destructive">
          <TrashIcon />
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            current budget along with all the expenses associated with it and
            account from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-[#3903ff]! hover:bg-[#2a02c0]!"
            onClick={handleDeleteBudget}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { DeleteBudgetButton };
