"use client";
import Link from "next/link";
import { LinkPreview } from "./link-preview";
import ProfileImg from "../../../public/myImage/profile.png";
import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { navItems } from "@/data";
import { motion } from "framer-motion";
import { SplitWords } from "./split-text";
import { useLenis } from "lenis/react";
import { parentVariants, slideVariants } from "@/lib/utils";

const Footer = () => {
  const lenis = useLenis();

  return (
    <motion.footer
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
      variants={parentVariants}
      className="min-h-[50svh] flex flex-col items-center justify-center gap-6"
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={parentVariants}
        viewport={{ once: true, amount: 0.5 }}
        className="flex items-center gap-2"
      >
        <motion.div variants={slideVariants}>
          <Image
            src={ProfileImg}
            alt="Arfan Roky"
            width={40}
            height={40}
            className="object-cover rounded-full"
          />
        </motion.div>
        <h4 className="text-lg font-bold text-white">
          <SplitWords variants={slideVariants}>Arfan Roky</SplitWords>
        </h4>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={parentVariants}
        viewport={{ once: true, amount: 0.5 }}
        className="flex items-center gap-12"
      >
        {navItems
          .filter((item) => item.name !== "Home")
          .map((menu) => (
            <Link
              className="text-white text-sm leading-normal tracking-wide"
              key={menu.link}
              href={menu.link}
              onClick={() =>
                lenis?.scrollTo(menu.link, {
                  offset: 0,
                  lerp: 0.1,
                  duration: 0.8,
                  easing: (rawValue: number) => rawValue, // Example easing function
                  immediate: false,
                  lock: false,
                  force: false,
                })
              }
            >
              <motion.span variants={slideVariants}>{menu.name}</motion.span>
            </Link>
          ))}
        <Link
          className="text-white text-sm leading-normal tracking-wide"
          href={"mailto:arfanroky.dev@gmail.com"}
        >
          <motion.span>Contact</motion.span>
        </Link>
      </motion.div>

      {/* Divider */}
      <div className="max-w-sm w-full h-[1px] bg-zinc-800 mt-8"></div>
      <motion.p
        variants={slideVariants}
        className="text-sm leading-[140%] tracking-widest text-slate-300"
      >
        © 2024 Arfan Roky. All rights reserved.
      </motion.p>
      <motion.div variants={slideVariants} className="flex items-center gap-2">
        <LinkPreview url="https://x.com/arfanroky_dev">
          <div className="w-10 h-10 rounded-full bg-zinc-800 backdrop-blur-lg  text-white flex items-center justify-center">
            <IconBrandX size={18} />
          </div>
        </LinkPreview>
        <LinkPreview url="https://linkedin.com/in/arfanroky">
          <div className="w-10 h-10 rounded-full bg-zinc-800 backdrop-blur-lg  text-white flex items-center justify-center">
            <IconBrandLinkedin size={18} />
          </div>
        </LinkPreview>
        <LinkPreview url="https://github.com/arfan-roky">
          <div className="w-10 h-10 rounded-full bg-zinc-800 backdrop-blur-lg  text-white flex items-center justify-center">
            <IconBrandGithub size={18} />
          </div>
        </LinkPreview>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
