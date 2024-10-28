"use client";

import { ReactLenis } from "lenis/react";
import { LottiePlayer } from "@/components/ui/lottie-player";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Provider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        // smoothTouch: false, //smooth scroll for touch devices
        // smooth: true,
        syncTouch: true,
        syncTouchLerp: 0.1,
        touchMultiplier: 2,
      }}
    >
      <AnimatePresence>
        {isLoading ? (
          <div className="bg-zinc-900  flex justify-center items-center h-svh">
            <LottiePlayer
              src={"/lottie-files/loader.json"}
              style={{
                width: "450px",
                height: "450px",
              }}
            />
          </div>
        ) : (
          children
        )}
      </AnimatePresence>
    </ReactLenis>
  );
}
