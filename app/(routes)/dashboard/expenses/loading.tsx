export default function Loading() {
  return (
    <div className="p-10 animate-pulse">
      {/* Title Skeleton */}
      <div className="h-7 bg-gray-300 rounded w-1/4 mb-6" />

      {/* Table Header Skeleton */}
      <div className="grid grid-cols-4 bg-gray-200 p-2 mb-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-4 bg-gray-300 rounded w-3/4" />
        ))}
      </div>

      {/* Table Rows Skeleton */}
      {[1, 2, 3, 4, 5].map((row) => (
        <div key={row} className="grid grid-cols-4 bg-gray-100 p-2 mt-2 gap-2">
          {[1, 2, 3, 4].map((col) => (
            <div key={col} className="h-4 bg-gray-300 rounded w-3/4" />
          ))}
        </div>
      ))}
    </div>
  );
}
