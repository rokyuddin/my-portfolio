"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SplitWords } from "./split-text";

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

type Tab = {
  value: string;
  title: string;
  img: string;
  content: {
    position: string;
    company: string;
    duration: string;
    responsibilities: string[];
    skills: string[];
  };
};
export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setActive(newTabs[0]);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 sm:gap-12 lg:gap-16">
      <motion.div
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true, amount: 0.5 }}
        variants={headingAnimationParentVariants}
        className={cn(
          "w-full md:w-32 flex flex-row lg:flex-col justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <motion.button
            variants={slideVariants}
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-zinc-800 rounded-full ",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative  flex items-center gap-2 text-white">
              {tab.img && (
                <Image
                  src={tab.img}
                  alt={tab.title}
                  width={20}
                  height={20}
                  priority
                />
              )}
              {tab.title}
            </span>
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true, amount: 0.5 }}
        variants={headingAnimationParentVariants}
        className="w-full"
      >
        <h3 className="text-xl font-semibold mb-1 text-white">
          <SplitWords variants={slideVariants}>
            {active.content?.position}
          </SplitWords>{" "}
          <span className="text-primary">
            @
            <SplitWords variants={slideVariants}>
              {active.content?.company}
            </SplitWords>
          </span>
        </h3>
        <motion.p
          variants={slideVariants}
          className="text-sm text-muted-foreground mb-4 text-zinc-400"
        >
          {active.content?.duration}
        </motion.p>
        <motion.ul
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true, amount: 0.5 }}
          variants={headingAnimationParentVariants}
          className="list-none space-y-2"
        >
          {active.content?.responsibilities?.map((responsibility, index) => (
            <Step key={index} title={responsibility} />
          ))}
        </motion.ul>
        <br />
        {active.content?.skills && (
          <motion.div
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true, amount: 0.5 }}
            variants={headingAnimationParentVariants}
            className="flex gap-2 flex-wrap"
          >
            {active.content?.skills.map((skill) => (
              <motion.div
                key={skill}
                variants={slideVariants}
                className="py-[0.125rem] px-2 text-xs font-medium rounded-full bg-zinc-100 text-zinc-950"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

const Step = ({ title }: { title: string }) => {
  return (
    <motion.li variants={slideVariants} className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-zinc-200 text-base">{title}</p>
    </motion.li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
