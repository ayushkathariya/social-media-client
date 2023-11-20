import React from "react";

export default function Loading() {
  return (
    <div className="fixed top-0 z-50">
      {/* Navbar */}
      <div className="skeleton w-screen h-14 md:h-20"></div>
      <div className="flex justify-between">
        <div className="skeleton w-48 xl:w-72 h-[85vh] mt-4 hidden lg:block"></div>
        {/* Card */}
        <span>
          <div className="flex ml-3 mt-2 md:mt-6 flex-col gap-4">
            <div className="flex gap-4 items-center">
              <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
              <div className="flex flex-col gap-4">
                <div className="skeleton h-4 w-32 md:h-5 md:w-96 lg:w-[22rem] xl:w-[27rem]"></div>
                <div className="skeleton h-4 w-60 md:h-5 md:w-[35rem] lg:w-[25rem] xl:w-[32rem]"></div>
              </div>
            </div>
            <div className="skeleton h-52 w-[21rem] md:h-60 md:w-[40rem] lg:w-[30rem] xl:w-[37rem]"></div>
          </div>
          <div className="flex ml-3 mt-2 md:mt-6 flex-col gap-4">
            <div className="flex gap-4 items-center">
              <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
              <div className="flex flex-col gap-4">
                <div className="skeleton h-4 w-32 md:h-5 md:w-96 lg:w-[22rem] xl:w-[27rem]"></div>
                <div className="skeleton h-4 w-60 md:h-5 md:w-[35rem] lg:w-[25rem] xl:w-[32rem]"></div>
              </div>
            </div>
            <div className="skeleton h-52 w-[21rem] md:h-56 md:w-[40rem] lg:w-[30rem] xl:w-[37rem]"></div>
          </div>
        </span>
        <div className="skeleton w-48 xl:w-72 h-[85vh] mt-4 hidden lg:block mr-24"></div>
      </div>
    </div>
  );
}
