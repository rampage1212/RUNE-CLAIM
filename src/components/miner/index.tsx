import Image from "next/image";
export type MinerType = {
  image: string;
  address: string;
  name: string;
  count: string;
  amount: string;
};

export default function Miner({
  image,
  address,
  name,
  count,
  amount,
}: MinerType) {
  return (
    <>
      <div className="flex h-[47px] transform cursor-pointer items-center justify-between rounded-[5px] bg-[#333333] pl-2 pr-4 text-[12px] transition duration-300 ease-in-out hover:scale-x-105 hover:scale-y-110 sm:text-[12px] lg:text-[16px]">
        <Image
          src={image}
          width={38}
          height={38}
          alt="miner-image"
          className="cursor-pointer"
        />
        <div className="flex w-full items-center justify-between pl-3">
          <div>{address}</div>
          <div>{name}</div>
          <div>{count}</div>
          <div>{amount}</div>
        </div>
      </div>
    </>
  );
}
