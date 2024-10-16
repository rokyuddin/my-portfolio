"use client";
import Link from "next/link";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <LampContainer className="pt-60 lg:pt-40 ">
      <motion.p className="mt-16 lg:mt-8 uppercase leading-[140%] tracking-wider text-white text-sm">
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
        className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl sm:text-4xl  lg:text-7xl font-bold tracking-tight text-transparent"
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
        >
          <button className="border text-lg font-medium relative border-neutral-200 text-white  px-8 py-2 rounded-full">
            <span>Resume</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>
        </Link>
      </motion.div>
    </LampContainer>
  );
};

export default Hero;
