"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { useState } from "react";
import { Variants, motion, AnimatePresence } from "framer-motion";
import { SplitWords } from "./ui/split-text";

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

const Services = () => {
  return (
    <section id="services">
      <div className="container w-full py-20 flex flex-col gap-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={headingAnimationParentVariants}
          viewport={{ once: true, amount: 0.8 }}
          className="flex flex-col lg:justify-center lg:items-center max-w-2xl mx-auto gap-2"
        >
          <motion.p
            variants={slideVariants}
            className="uppercase text-sm text-white"
          >
            Services
          </motion.p>
          <h1 className="text-xl lg:text-3xl font-bold text-white">
            <SplitWords variants={slideVariants}> Top Notch</SplitWords>{" "}
            <span className="text-blue-500">
              <SplitWords variants={slideVariants}>
                Creative Solutions
              </SplitWords>
            </span>
          </h1>
          <motion.p
            variants={slideVariants}
            className="lg:text-center text-sm md:text-base font-normal tracking-wide leading-loose text-zinc-400"
          >
            Delivering high-quality, innovative web development services to meet
            your unique needs. From custom website development and performance
            optimization to comprehensive maintenance and support, I provide
            exceptional solutions that enhance your online presence and drive
            success.
          </motion.p>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={headingAnimationParentVariants}
          viewport={{ once: true, amount: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full"
        >
          <Card
            title="Custom Website Development"
            icon={<AceternityIcon order="Service 1" />}
            des="I offer tailored website development services to meet your specific needs. Whether you need a brand new website or a redesign of an existing one, I use modern technologies to create responsive, user-friendly, and visually appealing websites that enhance your online presence."
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName=" bg-emerald-900 rounded-3xl overflow-hidden"
            />
          </Card>
          <Card
            title="Performance Optimization"
            icon={<AceternityIcon order="Service 2" />}
            des="I provide performance optimization services to improve the speed and efficiency of your website. This includes optimizing images, code, and server configurations, as well as implementing best practices for faster loading times. A faster website enhances user experience and boosts search engine rankings."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName=" bg-purple-900 rounded-3xl overflow-hidden"
              colors={[
                [255, 166, 158],
                [221, 255, 247],
              ]}
              dotSize={2}
            />
          </Card>
          <Card
            title="Website Maintenance and Support"
            icon={<AceternityIcon order="Service 3" />}
            des="Ensure your website runs smoothly with my maintenance and support services. I offer regular updates, security checks, and troubleshooting to keep your site up-to-date and secure. Whether it's fixing bugs, updating content, or implementing new features, I provide reliable support to keep your website in top condition."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName=" bg-sky-600 rounded-3xl overflow-hidden"
              colors={[[125, 211, 252]]}
            />
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

const Card = ({
  title,
  icon,
  children,
  // add this one for the desc
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={slideVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
        w-full p-4 relative lg:h-[35rem] rounded-3xl "
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3  text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3  text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3  text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3  text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className=" text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </motion.div>
  );
};
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
