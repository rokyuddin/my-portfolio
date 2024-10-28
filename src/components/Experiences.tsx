"use client";

import { experiences } from "@/data";
import { Spotlight } from "./ui/spotlight";
import { Tabs } from "./ui/tabs";
import { SplitWords } from "./ui/split-text";
import { motion } from "framer-motion";
import { parentVariants, slideVariants } from "@/lib/utils";

export default function Experiences() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      variants={parentVariants}
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col gap-4 relative"
      data-testid="experiences-section"
    >
      <Spotlight
        className="-top-40 left-0 md:right-60 md:-top-10"
        fill="#1F2937"
      />
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={parentVariants}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col gap-2"
      >
        <p className="uppercase text-sm 3xl:text-lg text-white">Experience</p>
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
