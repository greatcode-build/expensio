import { BudgetList } from "@/components/BudgetList";

const budgets = () => {
  return (
    <div className="p-10">
      <h1 className="font-bold text-3xl">My Budgets</h1>
      <BudgetList />
    </div>
  );
};

export default budgets;
