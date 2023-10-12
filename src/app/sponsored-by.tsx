"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const SPONSORS = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

export function SponsoredBy() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          SPONSORED BY
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {SPONSORS.map((logo, key) => (
            <Image
              width={256}
              height={256}
              key={key}
              src={`/logos/logo-${logo}.svg`}
              alt={logo}
              className="w-40"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
