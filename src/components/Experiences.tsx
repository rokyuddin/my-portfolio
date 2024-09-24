"use client";

import { experiences } from "@/data";
import { Spotlight } from "./ui/spotlight";
import { Tabs } from "./ui/tabs";

export default function Experiences() {
  return (
    <section className="flex flex-col gap-4 relative">
      <Spotlight
        className="-top-40 left-0 md:right-60 md:-top-10"
        fill="#1F2937"
      />
      <div className="flex flex-col gap-2">
        <p className="uppercase text-sm text-white">Experience</p>
        <h1 className="text-xl lg:text-3xl font-bold text-white">
          Real <span className="text-blue-500">Problem Solutions</span>{" "}
          Experience
        </h1>
      </div>
      <br className="hidden lg:block" />
      <Tabs tabs={experiences} />
    </section>
  );
}
