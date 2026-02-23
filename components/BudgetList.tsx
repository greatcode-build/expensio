import { getBudgetList } from "@/lib/actions/budget";
import { CreateBudget } from "./CreateBudget";
import { BudgetItem } from "./BudgetItem";

const BudgetList = async () => {
  let budgets: budgetListProps[] = [];
  try {
    budgets = await getBudgetList();
  } catch (error) {
    console.error("Error fetching budgets", error);
  }

  return (
    <div className="mt-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <CreateBudget />
        {budgets.map((budget) => (
          <BudgetItem key={budget.id} budget={budget} />
        ))}
      </div>
    </div>
  );
};

export { BudgetList };
