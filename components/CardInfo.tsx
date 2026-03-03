import { List, ReceiptText, Wallet } from "lucide-react";

const CardInfo = ({ budgets }: { budgets: BudgetListProps[] }) => {
  const totalBudget = budgets.reduce(
    (sum, budget) => sum + (budget.amount || 0),
    0,
  );

  const totalSpend = budgets.reduce(
    (sum, budget) => sum + (budget.totalSpend || 0),
    0,
  );

  return (
    <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <div className="p-7 border rounded-lg flex items-center justify-between">
        <div>
          <h2 className="text-sm">Total Budget</h2>
          <h2 className="font-bold text-2xl">${totalBudget}</h2>
        </div>
        <Wallet className="bg-[#3903ff] p-3 h-12 w-12 rounded-full text-white" />
      </div>
      <div className="p-7 border rounded-lg flex items-center justify-between">
        <div>
          <h2 className="text-sm">Total Spend</h2>
          <h2 className="font-bold text-2xl">${totalSpend}</h2>
        </div>
        <ReceiptText className="bg-[#3903ff] p-3 h-12 w-12 rounded-full text-white" />
      </div>
      <div className="p-7 border rounded-lg flex items-center justify-between">
        <div>
          <h2 className="text-sm">Number of Budget</h2>
          <h2 className="font-bold text-2xl">{budgets.length}</h2>
        </div>
        <List className="bg-[#3903ff] p-3 h-12 w-12 rounded-full text-white" />
      </div>
    </div>
  );
};

export { CardInfo };
