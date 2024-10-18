"use client";

import { LottiePlayer } from "@/components/ui/lottie-player";

const NotFoundPage = () => {
  return (
    <div className="bg-zinc-900  flex justify-center items-center h-svh">
      <LottiePlayer
        src={"/lottie-files/404.json"}
        style={{
          width: "450px",
          height: "450px",
        }}
      />
    </div>
  );
};

export default NotFoundPage;
