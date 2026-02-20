import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-white flex items-center flex-col">
      <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Take Control of Your Money and
            <strong className="text-[#3903ff]"> Maximize </strong>
            Savings
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Managing your finances doesn’t have to be stressful. With our app,
            you can easily track every expense, see where your money goes, and
            stay on top of your budget all in one place.
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <Link
              className="inline-block rounded border border-[#3903ff] bg-[#3903ff] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#3903ff]"
              href="#"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <Image
        className="-mt-9 rounded-xl border-2"
        src="/dashboard.png"
        alt="dashboard"
        width={1000}
        height={600}
      />
    </section>
  );
};

export { Hero };
