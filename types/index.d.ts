declare interface CreateBudgetProps {
  name: string;
  amount: number;
  emojiIcon: string;
}

declare interface BudgetListProps {
  id: number;
  name: string;
  amount: number;
  icon: string | null;
  createdBy: string;
  totalSpend: number;
  totalItem: number;
}

declare interface ExpenseProps {
  name: string;
  amount: number;
  budgetId: number;
}

declare interface ExpenseListProps {
  id: number;
  name: string;
  amount: number;
  budgetId: number | null;
  createdAt: Date;
}
