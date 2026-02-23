import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

const SignInPage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="relative hidden md:block md:w-1/2">
        <Image
          src="/auth.webp"
          alt="dashboard"
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw"
          priority
        />
      </div>
      <div className="flex w-full items-center justify-center md:w-1/2">
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
