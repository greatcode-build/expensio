const BudgetItemSkeleton = () => {
  return (
    <div className="p-5 border rounded-lg h-42.5 animate-pulse">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center w-full">
          <div className="h-12 w-15 bg-slate-300 rounded-full"></div>

          <div className="space-y-2 w-full">
            <div className="h-4 bg-slate-300 rounded w-1/2"></div>
            <div className="h-3 bg-slate-200 rounded w-1/3"></div>
          </div>
        </div>

        <div className="h-5 w-16 bg-slate-300 rounded"></div>
      </div>

      <div className="mt-5 space-y-3">
        <div className="flex justify-between">
          <div className="h-3 w-16 bg-slate-200 rounded"></div>
          <div className="h-3 w-16 bg-slate-200 rounded"></div>
        </div>

        <div className="w-full h-2 bg-slate-300 rounded-full"></div>
      </div>
    </div>
  );
};

export { BudgetItemSkeleton };
