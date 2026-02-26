import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
          Page not found
        </h1>

        <p className="mt-3 text-gray-500">
          The resource you’re looking for doesn’t exist or may have been
          removed.
        </p>

        <div className="mt-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-md bg-[#3903ff] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#2a02c0] transition-colors"
          >
            Back to dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
