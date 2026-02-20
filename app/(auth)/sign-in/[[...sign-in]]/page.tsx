import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 pt-30">
        <Image src="/auth.webp" alt="dashboard" width={1000} height={600} />
        <SignIn />
      </div>
    </div>
  );
}
