export default function Loading() {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">My Expenses</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-5">
        <div className="p-5 border rounded-lg h-42.5 animate-pulse">
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center w-full">
              <div className="w-15 h-12 rounded-full bg-slate-200"></div>
              <div className="space-y-2 w-full">
                <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                <div className="h-3 bg-slate-200 rounded w-1/3"></div>
              </div>
            </div>
            <div className="h-5 bg-slate-200 rounded w-16"></div>
          </div>
          <div className="mt-5 space-y-3">
            <div className="flex justify-between">
              <div className="h-3 bg-slate-200 rounded w-20"></div>
              <div className="h-3 bg-slate-200 rounded w-20"></div>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full"></div>
          </div>
        </div>

        <div className="border p-5 rounded-lg animate-pulse space-y-4">
          <div className="h-5 bg-slate-200 rounded w-1/3"></div>
          <div className="space-y-2">
            <div className="h-3 bg-slate-200 rounded w-1/4"></div>
            <div className="h-10 bg-slate-200 rounded w-full"></div>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-slate-200 rounded w-1/4"></div>
            <div className="h-10 bg-slate-200 rounded w-full"></div>
          </div>
          <div className="h-10 bg-slate-200 rounded w-full"></div>
        </div>
      </div>

      <div className="mt-6 animate-pulse">
        <div className="grid grid-cols-4 bg-slate-200 p-2 rounded">
          <div className="h-4 bg-slate-300 rounded w-16"></div>
          <div className="h-4 bg-slate-300 rounded w-16"></div>
          <div className="h-4 bg-slate-300 rounded w-16"></div>
          <div className="h-4 bg-slate-300 rounded w-16"></div>
        </div>

        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-4 bg-slate-50 p-2 mt-2 rounded"
          >
            <div className="h-3 bg-slate-200 rounded w-24"></div>
            <div className="h-3 bg-slate-200 rounded w-16"></div>
            <div className="h-3 bg-slate-200 rounded w-20"></div>
            <div className="h-3 bg-slate-200 rounded w-10"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
