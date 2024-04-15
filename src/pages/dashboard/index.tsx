import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "~/components/header";
import Footer from "~/components/footer";

export default function Dashboard() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [address, setAddress] = useState<string>("");
  const router = useRouter();

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    if (event.key === "Enter") {
      // Call your function to handle the Enter key press here
      handleEnterKeyPress();
    }
  };

  const handleEnterKeyPress = (): void => {
    // Your logic to handle the Enter key press goes here
    console.log("Enter key pressed!", address);
    // Navigate to another page with address as parameter
    router.push(`/home?address=${address}`);
  };

  useEffect(() => {
    setStartAnimation(true);
  }, []);
  return (
    <>
      <div className="min-h-screen w-full bg-[url('/assets/images/background-1.svg')] bg-cover font-poppins">
        <Header />
        <div
          className={`absolute top-[261px] flex w-full flex-col items-center justify-start ${startAnimation ? "animate-slide-up" : ""}`}
        >
          <div className="text-[24px] text-white lg:text-[40px]">
            Mother Clucking Mining Checker
          </div>
          <div className="mt-8 text-[22px] text-white lg:text-[32px]">
            Enter your eligible address
          </div>
          <input
            className="mt-12 h-[89px] rounded-full bg-white px-10 text-2xl text-[#1E1E1E] placeholder-[#1E1E1E] outline-none lg:mt-4 lg:w-[600px] xl:w-[770px]"
            placeholder="Enter ordinals address"
            onChange={(e) => setAddress(e.target.value)}
            onKeyPress={handleKeyPress}
          ></input>
        </div>
        <div className="absolute bottom-28 flex w-full items-center justify-end px-4 md:px-16 lg:px-32 xl:px-64 2xl:px-96">
          <Footer />
        </div>
      </div>
    </>
  );
}
