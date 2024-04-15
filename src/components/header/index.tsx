import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="sm:fl flex h-28 w-full items-center justify-between md:h-36">
        <div className="pl-2 md:pl-24 xl:pl-60">
          <Image
            src="/logo.webp"
            width={238}
            height={84}
            alt="Ordivision Mark"
          />
        </div>
        <Link href="/">
          <div className="mr-4 block text-white sm:hidden">
            <button className="h-10 w-[90px] transform rounded-[20px] bg-[#CA540F] transition duration-300 ease-in-out hover:scale-110">
              Home
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}
