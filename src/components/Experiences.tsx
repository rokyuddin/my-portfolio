"use client";

import { experiences } from "@/data";
import { Spotlight } from "./ui/spotlight";
import { Tabs } from "./ui/tabs";
import { SplitWords } from "./ui/split-text";
import { motion, Variants } from "framer-motion";

const headingAnimationParentVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const slideVariants: Variants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

export default function Experiences() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      variants={headingAnimationParentVariants}
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col gap-4 relative"
    >
      <Spotlight
        className="-top-40 left-0 md:right-60 md:-top-10"
        fill="#1F2937"
      />
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={headingAnimationParentVariants}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col gap-2"
      >
        <p className="uppercase text-sm text-white">Experience</p>
        <h1 className="text-xl lg:text-3xl font-bold text-white">
          <SplitWords variants={slideVariants}>Real</SplitWords>{" "}
          <span className="text-blue-500">
            <SplitWords variants={slideVariants}>Problem Solutions</SplitWords>
          </span>{" "}
          <SplitWords variants={slideVariants}> Experience</SplitWords>
        </h1>
      </motion.div>
      <br className="hidden lg:block" />
      <Tabs tabs={experiences} />
    </motion.section>
  );
}
