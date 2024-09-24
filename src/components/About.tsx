"use client";
import ProfileImg from "../../public/Roky_main.png";
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
    <section id="about" className="relative">
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
              <div className="flex flex-col  gap-2">
                <p className="uppercase text-sm text-white">About</p>
                <h1 className="text-xl lg:text-3xl font-bold text-white">
                  Learn To <span className="text-blue-500">Develop Sites</span>{" "}
                  With Expertise Developer
                </h1>
                <p className="mt-4 text-sm md:text-base font-normal tracking-wide leading-loose text-zinc-400">
                  Meet Arfan Roky, the self-taught frontend enthusiast who can
                  transform ideas into sleek, responsive web applications. His
                  dedication to crafting clean, intuitive user experiences is
                  matched only by his drive to learn the latest web technologies
                  and trends. When he&apos;s not coding, you’ll find him
                  perfecting design details or streamlining workflows with his
                  keen eye for efficiency.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row  gap-8">
                <div className="flex flex-col gap-2">
                  <h4 className="text-white font-medium tracking-wide leading-loose">
                    Contact
                  </h4>
                  <div className="flex items-center gap-2">
                    <IconMail size={18} className="text-blue-500" />
                    <Link
                      href={"mailto:arfanroky.dev@gmail.com"}
                      className="text-zinc-400 text-sm font-light"
                    >
                      arfanroky.dev@gmail.com
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconPhone size={18} className="text-blue-500" />
                    <Link
                      href={"to:+8801611695544"}
                      className="text-zinc-400 text-sm font-light"
                    >
                      +8801611695544
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-white font-medium tracking-wide leading-loose">
                    Social
                  </h4>
                  <div className="flex items-center gap-2">
                    <LinkPreview url="https://x.com/arfanroky_dev">
                      <div className="w-8 h-8 rounded-full bg-zinc-700 backdrop-blur-lg  text-white flex items-center justify-center">
                        <IconBrandX size={16} />
                      </div>
                    </LinkPreview>
                    <LinkPreview url="https://linkedin.com/in/arfanroky">
                      <div className="w-8 h-8 rounded-full bg-zinc-700 backdrop-blur-lg  text-white flex items-center justify-center">
                        <IconBrandLinkedin size={16} />
                      </div>
                    </LinkPreview>
                    <LinkPreview url="https://github.com/arfan-roky">
                      <div className="w-8 h-8 rounded-full bg-zinc-700 backdrop-blur-lg  text-white flex items-center justify-center">
                        <IconBrandGithub size={16} />
                      </div>
                    </LinkPreview>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-white font-medium tracking-wide leading-loose">
                    My Stack
                  </h4>
                  <ul className="flex items-center flex-wrap gap-2">
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
                      <li
                        key={i}
                        className="py-1 px-4 rounded-full border border-blue-500 text-sm text-white"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="basis-2/5 flex justify-end ">
              <Image
                src={ProfileImg}
                alt="Arfan Roky"
                width={450}
                height={300}
                quality={100}
                priority
                className="object-cover bg-blue-500 rounded-full"
                placeholder="blur"
                blurDataURL={generateBlurPlaceholder(450, 300)}
              />
            </div>
          </div>
          <Experiences />
        </article>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default About;
