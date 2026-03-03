import { ExpenseListTable } from "@/components/ExpenseListTable";
import { getAllExpenses } from "@/lib/actions/expense";

const AllExpensesPage = async () => {
  const allExpenses = await getAllExpenses();

  return (
    <div className="p-10">
      <h1 className="font-bold text-2xl mt-5">My Expenses</h1>
      <ExpenseListTable expenses={allExpenses} />
    </div>
  );
};

export default AllExpensesPage;
