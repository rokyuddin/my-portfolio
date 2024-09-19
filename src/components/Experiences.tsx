"use client";

import { Tabs } from "./ui/tabs";

const tabs = [
  {
    title: "Product",
    value: "product",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Product Tab</p>
      </div>
    ),
  },
];

const Experiences = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-white">Experiences</h1>
      {/* <Tabs tabs={tabs} /> */}
    </div>
  );
};

export default Experiences;
