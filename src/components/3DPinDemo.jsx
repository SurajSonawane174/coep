import React from "react";
import { PinContainer } from "./3DPin";

export function AnimatedPinDemo({ title, href, imageSrc }) {
  return (
    <div className="min-h-[20rem] w-full flex items-center justify-center pt-4">
      <PinContainer title={title} href={href}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          {/* Using dynamic image source */}
          <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
