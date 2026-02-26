import { BudgetList } from "@/components/BudgetList";
import { CreateBudget } from "@/components/CreateBudget";
import { Suspense } from "react";

const Budgets = () => {
  return (
    <div className="p-10">
      <h1 className="font-bold text-3xl">My Budgets</h1>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
            <CreateBudget />
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-full rounded-lg bg-slate-200 animate-pulse h-37.5"
              ></div>
            ))}
          </div>
        }
      >
        <BudgetList />
      </Suspense>
    </div>
  );
};

export default Budgets;
