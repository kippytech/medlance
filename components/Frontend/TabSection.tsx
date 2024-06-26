import React from "react";
import HomeTabs from "./HomeTabs";

const TabSection = () => {
  return (
    <section className="pb-12 pt-12 dark:bg-dark  text-slate-300 ">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-5xl text-center l:mb-20">
              {/* <span className="mb-2 block text-lg font-semibold">
                Our Services
              </span> */}
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Top-rated online doctors & specialists available now.
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">Choose from thousands of providers at affordable prices. Book online today.</p>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="max-w-6xl mx-auto">
            <HomeTabs />
        </div>
      </div>
    </section>
  );
};

export default TabSection;


