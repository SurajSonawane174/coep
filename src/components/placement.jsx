import React from "react";
import { TextHoverEffect } from "./Texthover";
import TabsDemo from "./TabsDemo";

export default function Placement() {
  return (
    <div className="h-auto flex-col items-center position-absolute justify-center">
      <TextHoverEffect text="PLACEMENT" />
      <TabsDemo />

    </div>
  );
}
