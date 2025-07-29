import { projects } from "@/data";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SplitWords } from "./ui/split-text";
import { childVariants, parentVariants, slideVariants } from "@/lib/utils";
import Link from "next/link";

const Projects = () => {
  return (
    <section data-testid="projects-section" id="projects">
      <div className="container w-full py-20 flex flex-col gap-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={parentVariants}
          viewport={{ once: true, amount: 0.8 }}
          className="flex flex-col lg:justify-center lg:items-center max-w-2xl mx-auto gap-2"
        >
          <motion.p
            variants={slideVariants}
            className="uppercase text-sm 3xl:text-lg text-white"
          >
            Projects
          </motion.p>
          <h1 className="text-xl lg:text-3xl font-bold text-white">
            <SplitWords variants={slideVariants}>
              Innovative Solutions
            </SplitWords>{" "}
            <span className="text-blue-500">
              <SplitWords variants={slideVariants}>
                Across Industries
              </SplitWords>
            </span>
          </h1>
          <motion.p
            variants={slideVariants}
            className="lg:text-center text-sm md:text-base 3xl:text-lg font-normal tracking-wide leading-loose text-zinc-400"
          >
            A collection of diverse projects showcasing my expertise in
            developing dynamic, user-focused websites. From a portfolio for a
            motion designer, a chauffeur service booking platform, to an auto
            parts product showcase, each project demonstrates my ability to
            create tailored solutions that drive engagement and deliver results.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={childVariants}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {projects.map((item) => (
            <motion.div key={item.id} variants={slideVariants}>
              <div className="relative shadow-3xl bg-grad p-4 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
                <div className="w-full h-[280px] relative overflow-hidden rounded-lg">
                  <Image
                    src={item.img}
                    alt="cover"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="mt-4">
                  <h1 className="font-bold text-base  md:text-xl lg:text-xl line-clamp-1 text-white">
                    {item.title}
                  </h1>

                  <p className="text-sm lg:text-base 3xl:text-lg mt-2 lg:font-normal font-light  line-clamp-3 text-zinc-400">
                    {item.des}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-zinc-700 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt={index.toString()}
                          width={20}
                          height={20}
                          style={{ width: "auto", height: "auto" }}
                        />
                      </div>
                    ))}
                  </div>

                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex justify-center items-center"
                  >
                    <p className="flex text-sm text-blue-500">
                      Check Live Site
                    </p>
                    <IconArrowRight className="ms-3 -rotate-45 text-blue-500" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
