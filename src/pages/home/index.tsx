import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Header from "~/components/header";
import Footer from "~/components/footer";
import Link from "next/link";

const runeBackendBaseAPI =
  "https://rune-backend-production.up.railway.app/api/v1/";

const Fees = [
  {
    name: "Low",
    size: 10,
  },
  {
    name: "Medium",
    size: 15,
  },
  ,
  {
    name: "High",
    size: 20,
  },
];

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full bg-[url('/assets/images/background-1.png')] bg-cover font-poppins">
        <div className="fixed h-full w-full bg-black opacity-30"></div>
        <ToastContainer />
        <Header />
        <div className="relative flex w-full justify-center font-poppins text-white">
          <div className="flex w-11/12 flex-col items-center justify-start lg:w-9/12">
            <div className="w-fullsm:flex sm:items-center sm:justify-center">
              <div className="text-center text-[36px] font-semibold lg:text-[40px]">
                Mother Clucking Rune Claim
              </div>
            </div>
            <div className="mt-12 w-full text-[26px]">Adjust Fees</div>
            <div className="mt-4 flex w-full flex-col items-center justify-between gap-8 sm:flex-row">
              {Fees.map((fee) => (
                <>
                  <div className="w-full transform cursor-pointer rounded-[15px] border-[0.3px] border-solid border-white border-opacity-30 bg-[#191A1A] py-4 text-center text-[32px] transition duration-300 ease-in-out hover:scale-105">
                    <div>{fee?.name}</div>
                    <div>{fee?.size} sats/vB</div>
                  </div>
                </>
              ))}
            </div>
            <div className="mt-4 flex w-full items-center justify-between">
              <div className="mr-8 h-1 w-full bg-[#191A1A]">
                <div
                  className="flex h-1 items-center justify-end bg-white text-[35px]"
                  style={{ width: `${10}%` }}
                >
                  <div className="h-[22px] w-[22px] rounded-full border-[3px] border-solid border-white bg-[#191A1A]"></div>
                </div>
              </div>
              <div className="w-[120px] transform cursor-pointer rounded-[10px] border-[0.3px] border-solid border-white border-opacity-30 bg-[#191A1A] py-2 text-center transition duration-300 ease-in-out hover:scale-110">
                {10}
              </div>
            </div>
            <div className="flex w-full items-center justify-between pr-[136px] text-[24px]">
              <div>Low</div>
              <div>High</div>
            </div>
            <div className="mb-2 text-[40px] font-semibold">Runes Mined</div>
            <div className="flex w-full items-start justify-center gap-8 text-[28px]">
              <div className="flex flex-col items-end justify-center gap-2">
                <div>Service Fee :</div>
                <div>Fee Rate :</div>
                <div>Total amount :</div>
                <div>
                  To Inscribe your item send exactly
                  <br /> 0.000 btc to the following address :
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <div>X sats/vB</div>
                <div>xxxx sats</div>
                <div>0.000 btc ( 0$ )</div>
                <div className="mt-5">bc1q73939283929229288393933993</div>
              </div>
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
