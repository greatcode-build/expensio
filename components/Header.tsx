"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <Image
        src="/logo.svg"
        alt="logo"
        width={80}
        height={80}
        className="h-12.5 w-auto"
      />
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href="/sign-in">
          <Button className="bg-[#3903ff] hover:bg-[#2a02c0]">
            Get Started
          </Button>
        </Link>
      )}
    </div>
  );
};

export { Header };
