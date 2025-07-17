"use client";
import ProfileImg from "../../public/myImage/Roky_main.png";
import Image from "next/image";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import { LinkPreview } from "./ui/link-preview";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { Spotlight } from "./ui/spotlight";
import Experiences from "./Experiences";
import { motion } from "framer-motion";
import { SplitWords } from "./ui/split-text";
import { parentVariants, slideVariants } from "@/lib/utils";

const About = () => {
  // Function to generate a simple blur data URL
  const generateBlurPlaceholder = (w: number, h: number) => {
    const svg = `
      <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <linearGradient id="g">
            <stop stop-color="#333" offset="20%" />
            <stop stop-color="#222" offset="50%" />
            <stop stop-color="#333" offset="70%" />
          </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="#333" />
        <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
        <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
      </svg>`;
    const toBase64 = (str: string) =>
      typeof window === "undefined"
        ? Buffer.from(str).toString("base64")
        : window.btoa(str);

    return `data:image/svg+xml;base64,${toBase64(svg)}`;
  };
  return (
    <section data-testid="about-section" id="about" className="relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="white"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="grey" />
      </div>
      <BackgroundBeamsWithCollision>
        <article className="container w-full py-20 flex flex-col gap-10 lg:gap-4">
          <div className="flex flex-col-reverse lg:flex-row gap-10">
            <div className="flex-1 flex flex-col gap-2">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.8 }}
                variants={parentVariants}
                className="flex flex-col  gap-2"
              >
                <motion.p
                  variants={slideVariants}
                  className="uppercase text-sm 3xl:text-lg  text-white"
                >
                  About
                </motion.p>
                <h1 className="text-xl lg:text-3xl font-bold text-white">
                  <SplitWords variants={slideVariants}>Learn To</SplitWords>{" "}
                  <span className="text-blue-500">
                    <SplitWords variants={slideVariants}>
                      Develop Sites
                    </SplitWords>
                  </span>{" "}
                  <SplitWords variants={slideVariants}>
                    With Expertise Developer
                  </SplitWords>
                </h1>
                <motion.p
                  variants={slideVariants}
                  className="mt-4 text-sm md:text-base 3xl:text-lg font-normal tracking-wide leading-loose text-zinc-400"
                >
                  Meet Md Rokyuddin, the self-taught frontend enthusiast who can
                  transform ideas into sleek, responsive web applications. His
                  dedication to crafting clean, intuitive user experiences is
                  matched only by his drive to learn the latest web technologies
                  and trends. When he&apos;s not coding, you’ll find him
                  perfecting design details or streamlining workflows with his
                  keen eye for efficiency.
                </motion.p>
              </motion.div>

              <div className="flex flex-col lg:flex-row  gap-8">
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={parentVariants}
                  className="flex flex-col gap-2"
                >
                  <motion.h4
                    variants={slideVariants}
                    className="text-white font-medium tracking-wide leading-loose"
                  >
                    Contact
                  </motion.h4>
                  <motion.div
                    variants={slideVariants}
                    className="flex items-center gap-2"
                  >
                    <IconMail size={18} className="text-blue-500" />
                    <Link
                      href={"mailto:rokyuddin.dev@gmail.com"}
                      className="text-zinc-400 text-sm 3xl:text-lg font-light"
                    >
                      rokyuddin.dev@gmail.com
                    </Link>
                  </motion.div>
                  <motion.div
                    variants={slideVariants}
                    className="flex items-center gap-2"
                  >
                    <IconPhone size={18} className="text-blue-500" />
                    <Link
                      href={"to:+8801611695544"}
                      className="text-zinc-400 text-sm 3xl:text-lg font-light"
                    >
                      +8801611695544
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={parentVariants}
                  className="flex flex-col gap-2"
                >
                  <motion.h4
                    variants={slideVariants}
                    className="text-white font-medium tracking-wide leading-loose"
                  >
                    Social
                  </motion.h4>
                  <motion.div
                    variants={slideVariants}
                    className="flex items-center gap-2"
                  >
                    <LinkPreview url="https://x.com/rokyuddin_dev">
                      <div className="w-8 h-8 rounded-full bg-zinc-700 backdrop-blur-lg  text-white flex items-center justify-center">
                        <IconBrandX size={16} />
                      </div>
                    </LinkPreview>
                    <LinkPreview url="https://linkedin.com/in/rokyuddin">
                      <div className="w-8 h-8 rounded-full bg-zinc-700 backdrop-blur-lg  text-white flex items-center justify-center">
                        <IconBrandLinkedin size={16} />
                      </div>
                    </LinkPreview>
                    <LinkPreview url="https://github.com/rokyuddin">
                      <div className="w-8 h-8 rounded-full bg-zinc-700 backdrop-blur-lg  text-white flex items-center justify-center">
                        <IconBrandGithub size={16} />
                      </div>
                    </LinkPreview>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={parentVariants}
                  className="flex flex-col gap-2"
                >
                  <motion.h4
                    variants={slideVariants}
                    className="text-white font-medium tracking-wide leading-loose"
                  >
                    My Stack
                  </motion.h4>

                  <motion.ul
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={slideVariants}
                    className="flex items-center flex-wrap gap-2"
                  >
                    {[
                      "Javascript",
                      "Typescript",
                      "React",
                      "React Query",
                      "Next.js",
                      "Redux",
                      "Tailwind",
                      "Material UI",
                    ].map((item, i) => (
                      <motion.li
                        variants={slideVariants}
                        key={i}
                        className="py-1 px-4 rounded-full border border-blue-500 text-sm  text-white"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="lg:basis-[35%] flex items-center  justify-center lg:justify-end "
            >
              <Image
                src={ProfileImg}
                alt="Md Rokyuddin Profile Image"
                width={450}
                height={300}
                quality={100}
                priority
                style={{ width: "auto", height: "auto" }}
                className="object-cover bg-gradient-to-t from-blue-300 via-blue-500 to-blue-300 rounded-full"
                placeholder="blur"
                blurDataURL={generateBlurPlaceholder(450, 300)}
              />
            </motion.div>
          </div>
          <Experiences />
        </article>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default About;
