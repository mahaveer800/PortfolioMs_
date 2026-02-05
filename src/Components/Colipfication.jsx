import React from "react";

const data = [
  {
    side: "left",
    title: "Web Development",
    place: "Online / PW Skills",
    date: "2026 – present",
  },
  {
    side: "right",
    title: "Bachelor of Computer Allication",
    place: "MJPR University",
    date: "2022 – 2025",
  },
  {
    side: "left",
    title: "Intermediate (12th – 68%)",
    place: "SSM Inter College",
    date: "2021",
  },
  {
    side: "right",
    title: "High School (10th – 69%)",
    place: "SV Inter College",
    date: "2019",
  },
];

const Collification = () => {
  return (
    <div className="w-full flex flex-col items-center py-16 px-4">

      {/* header */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-12 text-lg sm:text-xl font-semibold">
        <p className="flex items-center gap-2">
          <i className="fa-solid fa-graduation-cap"></i> Education
        </p>
        <p className="flex items-center gap-2">
          <i className="fa-solid fa-briefcase"></i> Experience
        </p>
      </div>

      {/* timeline */}
      <div className="relative w-full max-w-4xl">

        {/* center line (desktop only) */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gray-400 dark:bg-neutral-700 -translate-x-1/2"></div>

        <div className="flex flex-col gap-10 md:gap-16">

          {data.map((item, index) => (
            <div key={index} className="relative w-full flex">

              {/* LEFT CARD (desktop) */}
              <div className="hidden md:flex w-1/2 justify-end pr-10">
                {item.side === "left" && (
                  <Card item={item} align="right" />
                )}
              </div>

              {/* DOT point (desktop) */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-3">
                <span className="w-3 h-3 rounded-full bg-gray-600"></span>
              </div>

              {/* RIGHT CARD (desktop) */}
              <div className="hidden md:flex w-1/2 justify-start pl-10">
                {item.side === "right" && (
                  <Card item={item} align="left" />
                )}
              </div>

              {/*  MOBILE VIEW – card style */}
              <div className="md:hidden w-full">
                <div className="relative pl-6">

                  {/* left line */}
                  <span className="absolute left-1 top-0 h-full w-[2px] bg-gray-500"></span>

                  {/* dot */}
                  <span className="absolute left-0 top-4 w-3 h-3 bg-gray-600 rounded-full"></span>

                  <div className="ml-4  dark:bg-gray-300 rounded-xl shadow-md px-4 py-3">
                    <Card item={item} align="left" />
                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

const Card = ({ item, align }) => {

  const textAlign =
    align === "right" ? "text-right" : "text-left";

  const justifyAlign =
    align === "right" ? "justify-end" : "justify-start";

  return (
    <div className={`flex flex-col gap-1 ${textAlign}`}>
      <p className="font-semibold text-gray-800 dark:text-white">
        {item.title}
      </p>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        {item.place}
      </p>

      <p
        className={`text-sm flex items-center gap-2 mt-1 ${justifyAlign} text-gray-600 dark:text-gray-400`}
      >
        <i className="fa-regular fa-calendar"></i>
        {item.date}
      </p>
    </div>
  );
};

export default Collification;
