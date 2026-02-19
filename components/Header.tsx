import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <Image
        src="/logo.svg"
        alt="logo"
        width={80}
        height={80}
        className="h-12.5 w-auto"
      />
      <Button>Get Started</Button>
    </div>
  );
};

export { Header };
