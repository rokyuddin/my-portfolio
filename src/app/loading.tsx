"use client";
import { LottiePlayer } from "@/components/ui/lottie-player";

const LoadingPage = () => {
  return (
    <div className="bg-zinc-900  flex justify-center items-center h-svh">
      <LottiePlayer
        src={"/lottie-files/loader.json"}
        style={{
          width: "450px",
          height: "450px",
        }}
      />
    </div>
  );
};

export default LoadingPage;
