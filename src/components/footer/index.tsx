import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex justify-between gap-2">
        <Link href="https://ordvision.io/">
          <Image
            src="/assets/images/icon-internet.svg"
            width={30}
            height={30}
            alt="internet"
            className="transform cursor-pointer transition duration-300 ease-in-out hover:scale-125"
          />
        </Link>
        <Link href="https://twitter.com/OrdinalEggs">
          <Image
            src="/assets/images/icon-x.svg"
            width={30}
            height={30}
            alt="x"
            className="transform cursor-pointer transition duration-300 ease-in-out hover:scale-125"
          />
        </Link>
        <Link href="https://discord.gg/OrdinalEggs">
          <Image
            src="/assets/images/icon-discord.svg"
            width={30}
            height={30}
            alt="discord"
            className="transform cursor-pointer transition duration-300 ease-in-out hover:scale-125"
          />
        </Link>
      </div>
    </>
  );
}
