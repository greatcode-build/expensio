export default function Loading() {
  return (
    <div className="p-8 animate-pulse">
      {/* Greeting */}
      <div className="h-7 bg-gray-300 rounded w-1/4 mb-3" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-8" />

      {/* CardInfo Skeleton */}
      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="p-7 border rounded-lg flex items-center justify-between"
          >
            <div className="space-y-3 w-full">
              <div className="h-4 bg-gray-200 rounded w-1/2" />
              <div className="h-6 bg-gray-300 rounded w-1/3" />
            </div>
            <div className="h-12 w-15 bg-gray-300 rounded-full" />
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-5">
        {/* Left Side (Chart + Expenses) */}
        <div className="md:col-span-2 space-y-6">
          {/* Chart Skeleton */}
          <div className="border rounded-lg p-5">
            <div className="h-5 bg-gray-300 rounded w-1/4 mb-5" />
            <div className="h-75 bg-gray-200 rounded" />
          </div>

          {/* Expense Table Skeleton */}
          <div className="mt-3">
            <div className="h-5 bg-gray-300 rounded w-1/4 mb-4" />

            {/* Table Header */}
            <div className="grid grid-cols-4 bg-gray-200 p-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-4 bg-gray-300 rounded w-3/4" />
              ))}
            </div>

            {/* Table Rows */}
            {[1, 2, 3, 4].map((row) => (
              <div key={row} className="grid grid-cols-4 bg-gray-100 p-2 mt-2">
                {[1, 2, 3, 4].map((col) => (
                  <div key={col} className="h-4 bg-gray-300 rounded w-3/4" />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side (Latest Budgets) */}
        <div className="grid gap-5">
          <div className="h-5 bg-gray-300 rounded w-1/2 mb-2" />

          {[1, 2, 3].map((item) => (
            <div key={item} className="p-5 border rounded-lg space-y-4">
              {/* Top Row */}
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <div className="h-12 w-12 bg-gray-300 rounded-full" />
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-24" />
                    <div className="h-3 bg-gray-200 rounded w-16" />
                  </div>
                </div>
                <div className="h-5 bg-gray-300 rounded w-16" />
              </div>

              {/* Progress Section */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <div className="h-3 bg-gray-200 rounded w-16" />
                  <div className="h-3 bg-gray-200 rounded w-16" />
                </div>
                <div className="h-2 bg-gray-300 rounded-full w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
