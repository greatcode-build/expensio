"use client";

import { sideNavItems } from "@/constants";
import { UserButton } from "@clerk/nextjs";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen p-5">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={80}
          height={80}
          className="h-12.5 w-auto"
        />
      </Link>
      <div className="mt-5">
        {sideNavItems.map((item) => (
          <Link
            href={item.path}
            key={item.path}
            className={clsx(
              "flex gap-2 items-center  font-medium p-5 mb-2 cursor-pointer rounded-md hover:text-[#3903ff] hover:bg-blue-100",
              pathname === item.path
                ? "bg-blue-100 text-[#3903ff]"
                : "text-gray-500",
            )}
          >
            <item.icon />
            {item.name}
          </Link>
        ))}
      </div>
      <div className="fixed bottom-10 flex p-5 gap-2 items-center">
        <UserButton />
        Profile
      </div>
    </div>
  );
};

export { SideNav };
