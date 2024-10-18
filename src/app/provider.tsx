"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { ReactLenis } from "lenis/react";
import { LottiePlayer } from "@/components/ui/lottie-player";
import { AnimatePresence } from "framer-motion";

export function Provider({ children, ...props }: ThemeProviderProps) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate some async task
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <NextThemesProvider {...props}>
        <ReactLenis root>
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
      </NextThemesProvider>
    </>
  );
}
