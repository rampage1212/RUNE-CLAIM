import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Asset, { type AssetType } from "~/components/asset";
import Header from "~/components/header";
import Footer from "~/components/footer";
// import Miner, { type MinerType } from "~/components/miner";
import Link from "next/link";

const runeBackendBaseAPI =
  "https://rune-backend-production.up.railway.app/api/v1/";

// const miners = [
//   {
//     image: "/assets/images/miner-icon.svg",
//     address: "bc1pwcpl6r14s....96z93mau3qql8xlp",
//     name: "Clucker",
//     count: "1",
//     amount: "10,000",
//   },
//   {
//     image: "/assets/images/miner-icon.svg",
//     address: "bc1pwcpl6r14s....96z93mau3qql8xlp",
//     name: "Clucker",
//     count: "1",
//     amount: "10,000",
//   },
//   {
//     image: "/assets/images/miner-icon.svg",
//     address: "bc1pwcpl6r14s....96z93mau3qql8xlp",
//     name: "Clucker",
//     count: "1",
//     amount: "10,000",
//   },
//   {
//     image: "/assets/images/miner-icon.svg",
//     address: "bc1pwcpl6r14s....96z93mau3qql8xlp",
//     name: "Clucker",
//     count: "1",
//     amount: "10,000",
//   },
//   {
//     image: "/assets/images/miner-icon.svg",
//     address: "bc1pwcpl6r14s....96z93mau3qql8xlp",
//     name: "Clucker",
//     count: "1",
//     amount: "10,000",
//   },
// ];

export default function Home() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [remainingBalance, setRemainingBalance] = useState("0");
  const [assets, setAssets] = useState<AssetType[]>([]);
  const router = useRouter();

  const ActivateMining = async () => {
    const { address } = router.query;
    if (address) {
      await fetch(`${runeBackendBaseAPI}transaction/ative`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          toast.success("Successfully activated this address.");
        })
        .catch(() => {
          toast.error("Error activated address");
        });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { address } = router.query;

      if (address) {
        await fetch(
          `${runeBackendBaseAPI}transaction/point?address=${String(address)}`,
        )
          .then(async (response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            setRemainingBalance(String(await response.json()));
          })
          .catch(() => {
            console.error("Error fetching data");
          });

        await fetch(
          `${runeBackendBaseAPI}transaction/assets?address=${String(address)}`,
        )
          .then(async (response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const responseData = (await response.json()) as AssetType[];
            if (responseData) {
              setAssets(responseData);
            }
          })
          .catch(() => {
            console.error("Error fetching data");
          });
      }
    };
    void fetchData();
  }, [router]);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  return (
    <>
      <div className="min-h-screen w-full bg-[url('/assets/images/background-1.svg')] bg-cover font-poppins">
        <ToastContainer />
        <Header />
        <div className="flex w-full justify-center border-solid border-white border-opacity-70 font-poppins text-white sm:border-t-[0.4px]">
          <div className="flex w-11/12 flex-col items-center justify-start lg:w-9/12">
            <div className="mt-4 w-full sm:mt-14 sm:flex sm:items-center sm:justify-between">
              <Link href="/">
                <div className="m-auto hidden w-2/3 sm:block sm:w-[270px]">
                  <button className="h-10 w-full transform rounded-[20px] bg-[#CA540F] transition duration-300 ease-in-out hover:scale-110 sm:w-[108px]">
                    Home
                  </button>
                </div>
              </Link>
              <div className="text-center text-[36px] lg:text-[40px]">
                Rune Miner
              </div>
              <div className="m-auto hidden w-2/3 sm:m-0 sm:block sm:w-[270px]">
                <button
                  className="h-10 w-full transform rounded-[20px] bg-[#CA540F] transition duration-300 ease-in-out hover:scale-110"
                  onClick={() => ActivateMining()}
                >
                  Activate Mother Clucking Mining
                </button>
              </div>
            </div>
            <div className="text-[18px] sm:mt-4">
              For Mother Cluckers, By Mother Cluckers
            </div>
            <div className="m-auto block w-2/3 sm:m-0 sm:hidden sm:w-[270px]">
              <button
                className="mt-2 h-10 w-full transform rounded-[20px] bg-[#CA540F] transition duration-300 ease-in-out hover:scale-110"
                onClick={() => ActivateMining()}
              >
                Activate Mother Clucking Mining
              </button>
            </div>
            <div
              className={`mt-6 w-full items-center justify-between gap-4 sm:mt-10 md:flex ${startAnimation ? "animate-slide-up" : ""}`}
            >
              <div className="flex h-[240px] w-full justify-between gap-4 rounded-xl bg-[#1E1E1E] p-6 md:w-1/2 lg:h-[380px] lg:p-8">
                <div className="flex h-full items-center justify-center">
                  <Image
                    src={"/assets/images/token-1.jpg"}
                    width={246}
                    height={246}
                    alt=""
                    className="h-[140px] w-[140px] cursor-pointer rounded-full lg:h-[180px] lg:w-[180px] 2xl:h-[246px] 2xl:w-[246px]"
                  />
                </div>
                <div className="">
                  <div className="flex justify-end text-[18px] lg:text-[24px] 2xl:text-[32px]">
                    Token Stats
                  </div>
                  <div className="mt-2 flex flex-col gap-3 text-[12px] lg:text-[16px] 2xl:text-[20px]">
                    <div className="flex justify-between gap-2 2xl:gap-8">
                      <div>Rune Mined:</div>
                      <div>{remainingBalance}</div>
                    </div>
                    <div className="flex justify-between gap-2 2xl:gap-8">
                      <div>Total Supply:</div>
                      <div>240,000,000</div>
                    </div>
                    <div className="flex justify-between gap-2 2xl:gap-8">
                      <div>Holders:</div>
                      <div>124,380,000 (50%)</div>
                    </div>
                    <div className="flex justify-between gap-2 2xl:gap-8">
                      <div>Partner:</div>
                      <div>76,350,000 (36%)</div>
                    </div>
                    <div className="flex justify-between gap-2 2xl:gap-8">
                      <div>Team:</div>
                      <div>39,270,000 (14%)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex h-[240px] w-full flex-col justify-start gap-2 overflow-y-auto rounded-xl bg-[#1E1E1E] p-4 md:mt-0 md:w-1/2 lg:h-[380px] lg:p-8">
                <div className="flex justify-end text-[18px] lg:text-[24px] 2xl:text-[32px]">
                  Top Miners
                </div>
                <div className="flex flex-col justify-start gap-2">
                  {/* {miners.map((miner: MinerType) => {
                    return (
                      <>
                        <Miner
                          image={miner.image}
                          address={miner.address}
                          name={miner.name}
                          count={miner.count}
                          amount={miner.amount}
                        />
                      </>
                    );
                  })} */}
                </div>
              </div>
            </div>
            <div className="mt-8 text-[36px] lg:mt-14 lg:text-[40px]">
              Your Assets
            </div>
            <div className="mt-4 grid w-full grid-cols-1 place-items-center text-[13px] sm:grid-cols-2 lg:grid-cols-3 lg:text-[16px]	2xl:grid-cols-5">
              {assets && (
                <>
                  {assets.map((asset: AssetType) => {
                    return (
                      <>
                        <Asset
                          inscriptionId={asset.inscriptionId}
                          sum={asset.sum}
                          contentType={asset.contentType}
                        />
                      </>
                    );
                  })}
                </>
              )}
            </div>
            <div className="m-14 flex w-full items-center justify-end">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
