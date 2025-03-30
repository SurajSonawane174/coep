import React from "react";
import { AnimatedPinDemo } from "./3DPinDemo";

const hackathons = [
  {
    title: "Hackathon 2025",
    href: "https://example.com/hackathon",
    imageSrc: "https://as1.ftcdn.net/v2/jpg/02/52/35/26/1000_F_252352610_NcFt5bkPTIIFWaryUO8juR5xTK0S6UsJ.jpg",
  },
  {
    title: "AI Innovation Challenge",
    href: "https://example.com/ai-challenge",
    imageSrc: "/src/assets/hackathon2.jpg",
  },
  {
    title: "Blockchain Summit",
    href: "https://example.com/blockchain-summit",
    imageSrc: "/src/assets/hackathon3.jpg",
  },
];

export function HackathonsList() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl">
        {hackathons.map((hackathon, index) => (
          <AnimatedPinDemo 
            key={index}
            title={hackathon.title} 
            href={hackathon.href} 
            imageSrc={hackathon.imageSrc} 
          />
        ))}
      </div>
    </div>
  );
}
