"use client";
import Link from "next/link";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";
import { slideVariants } from "@/lib/utils";

const Hero = () => {
  return (
    <section data-testid="hero-section">
      <LampContainer className="pt-60 lg:pt-40 3xl:pt-10">
        <motion.p className="mt-16 lg:mt-8 uppercase leading-[140%] tracking-wider text-white text-base 3xl:text-lg">
          Dynamic Web Magic with Next.js
        </motion.p>
        <motion.h1
          variants={slideVariants}
          style={{
            lineHeight: "1.2em",
          }}
          className="bg-gradient-to-br from-slate-50 lg:from-slate-300 to-slate-50 lg:to-slate-500 py-4 bg-clip-text text-center text-2xl sm:text-4xl  lg:text-7xl 3xl:text-8xl font-bold tracking-tight leading-10 text-transparent"
        >
          Transforming Concepts into <br /> Seamless{" "}
          <span className="lg:text-blue-800">User Experiences</span>
        </motion.h1>
        <motion.p
          variants={slideVariants}
          className="text-zinc-400 mx-auto text-center leading-[140%] text-lg 3xl:text-xl"
        >
          Hi! I&apos;m Arfan Roky, a Frontend Developer based in Bangladesh.
        </motion.p>
        <motion.div
          variants={slideVariants}
          className="flex gap-4 justify-center mt-8"
        >
          <Link
            href={
              "https://drive.google.com/file/d/1ty60fQiA24zbXcfbyeKRr92JsWt_1MrG/view?usp=sharing"
            }
            target="_blank"
          >
            <button className="border text-lg font-medium relative border-neutral-200 text-white  px-8 py-2 rounded-full">
              <span>Resume</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </button>
          </Link>
        </motion.div>
      </LampContainer>
    </section>
  );
};

export default Hero;
