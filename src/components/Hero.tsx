"use client";
import Link from "next/link";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <LampContainer className="pt-40 ">
      <motion.p className="mt-8 uppercase leading-[140%] tracking-wider text-white text-sm">
        Dynamic Web Magic with Next.js
      </motion.p>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
      >
        Transforming Concepts into <br /> Seamless{" "}
        <span className="text-blue-800">User Experiences</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9, ease: "easeInOut" }}
        className="text-zinc-400 mx-auto text-center leading-[140%]"
      >
        Hi! I&apos;m Arfan Roky, a Frontend Developer based in Bangladesh.
      </motion.p>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.1, ease: "easeInOut" }}
        className="flex gap-4 justify-center mt-8"
      >
        <Link
          href={
            "https://drive.google.com/file/d/1hfr9Hq1b3xCFHaSFpTAF0Ahks02iCNi6/view?usp=sharing"
          }
          target="_blank"
        >
          <button
            type="button"
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Resume
          </button>
        </Link>
      </motion.div>
    </LampContainer>
  );
};

export default Hero;
