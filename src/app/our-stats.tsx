"use client";

import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "1,500+",
    title: "Participants",
  },
  {
    count: "50",
    title: "Speakers",
  },
  {
    count: "20+",
    title: "Workshops",
  },
  {
    count: "3",
    title: "Days",
  },
];

export function OurStats() {
  return (
    <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        <Typography variant="h6" color="orange" className="mb-6 font-medium">
          Our Stats
        </Typography>
        <Typography
          className="text-5xl font-bold leading-tight lg:w-3/4"
          color="blue-gray"
        >
          Conference Highlights
        </Typography>
        <Typography
          variant="lead"
          className="mt-3 w-full !text-gray-500 lg:w-9/12"
        >
          This three-day extravaganza brings together the brightest minds,
          leading innovators, and top companies in the field of Artificial
          Intelligence.
        </Typography>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-28">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
