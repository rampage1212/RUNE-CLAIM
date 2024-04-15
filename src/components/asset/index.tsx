import { useState, useEffect } from "react";
import Image from "next/image";

export type AssetType = {
  inscriptionId: string;
  sum: number;
  contentType: string;
};

const TOTAL_BALANCE = 12000;

export default function Asset({ inscriptionId, sum, contentType }: AssetType) {
  const [fadeIn, setFadeIn] = useState(false);
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  useEffect(() => {
    setPercent(Number(((sum * 100) / TOTAL_BALANCE).toFixed(2)));
  }, [sum]);
  return (
    <>
      <div
        className={`mt-3 w-[276px] transform cursor-pointer rounded-xl bg-[#1E1E1E] pb-3 transition-opacity duration-1000 ${fadeIn ? "opacity-100" : "opacity-0"}`}
      >
        {contentType === "text/html;charset=utf-8" ||
        contentType === "text/html" ? (
          <iframe
            src={`https://ordinals.com/content/${inscriptionId}`}
            width={276}
            height={276}
            loading="lazy"
            className="rounded-t-xl"
          />
        ) : (
          <Image
            src={`https://ordinals.com/content/${inscriptionId}`}
            width={276}
            height={276}
            alt="Asset"
          />
        )}
        <div className="flex flex-col items-center justify-start gap-2 p-2">
          <div className="flex w-full items-center justify-between">
            <div>Total</div>
            <div>{TOTAL_BALANCE}</div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div>Mined Balance:</div>
            <div>{sum}</div>
          </div>
          <div>
            <div className="mt-2 h-7 w-[248px] rounded-[14px] bg-[#333333]">
              <div
                className={`z-10 h-7 min-w-10 rounded-[14px] bg-[#CA540F] text-center text-[13px] leading-7`}
                style={{ width: `${((248 * percent) / 100).toFixed(0)}px` }}
              >
                {percent}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
