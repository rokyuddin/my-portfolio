/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SplitWords } from "./ui/split-text";
import { childVariants, parentVariants, slideVariants } from "@/lib/utils";

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
          className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] 3xl:grid-cols-3 place-items-center sm:place-self-stretch  gap-8 md:gap-12"
        >
          {projects.map((item) => (
            <motion.div
              key={item.id}
              variants={slideVariants}
              className="  h-[25rem] lg:min-h-[32.5rem] 3xl:h-[40rem] flex items-center justify-center  w-[80vw] sm:w-[380px] 4xl:w-[650px]"
            >
              <PinContainer title={"visit"} href={item.link}>
                <div className="flex items-center justify-center  w-[80vw] sm:w-[380px] 4xl:w-[650px] overflow-hidden h-[200px] lg:h-[250px] 4xl:h-[400px]">
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 object-cover object-center rounded-lg"
                  />
                </div>

                <h1 className="font-bold text-base  md:text-xl lg:text-xl line-clamp-1 text-white">
                  {item.title}
                </h1>

                <p className="text-sm lg:text-base 3xl:text-lg mt-2 lg:font-normal font-light  line-clamp-3 text-zinc-400">
                  {item.des}
                </p>

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

                  <div className="flex justify-center items-center">
                    <p className="flex text-sm text-blue-500">
                      Check Live Site
                    </p>
                    <IconArrowRight className="ms-3 -rotate-45 text-blue-500" />
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
