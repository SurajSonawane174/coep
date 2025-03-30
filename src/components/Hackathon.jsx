import React from "react";
import { TextHoverEffect } from "./Texthover";
import { Cover } from "./Cover";
import { HackathonsList } from "./HackathonsList";

const words = `Hackathons are where ideas ignite, challenges fuel growth, and innovation takes flight. Each line of code is a step toward something groundbreaking. The thrill isn't just in winning—it's in building, learning, and pushing limits.
`;
export default function Hackathon() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-6 relative">
        <TextHoverEffect text="Hackathon" />
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-2 relative z-20 py-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Build Bold Ideas at warp speed<br /> with <Cover>Code & Data</Cover>
        </h1>
        <HackathonsList />
      </div>
    );
  }
  
  
