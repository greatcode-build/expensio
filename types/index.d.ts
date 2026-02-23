declare interface createBudgetProps {
  name: string;
  amount: number;
  emojiIcon: string;
}

declare interface budgetListProps {
  id: number;
  name: string;
  amount: number;
  icon: string | null;
  createdBy: string;
  totalSpend: number;
  totalItem: number;
}
