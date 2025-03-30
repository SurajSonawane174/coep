import {
    TextRevealCard,
    // TextRevealCardDescription,
    TextRevealCardTitle,
  } from "./TextRevealCard";
import { TextHoverEffect } from "./Texthover";
import { HeroParallaxDemo } from "./HeroParallexDemo";

  
  export default function Events() {
    
    return (
      <div className="flex flex-col items-center justify-center bg-black min-h-[40rem] w-full p-6 sm:p-10 rounded-2xl overflow-x-hidden">
        <TextHoverEffect text="FESTIVALS" />
        <TextRevealCard text="You Said FESTIVAL & EVENTS" revealText="I heard COEP – The Tradition Lives!">
          <TextRevealCardTitle className="text-xl sm:text-2xl md:text-3xl leading-tight text-center break-words">
          Think you've seen the best fests?
          </TextRevealCardTitle>
          {/* <TextRevealCardDescription className="text-sm sm:text-base md:text-lg text-center px-4 break-words">
            This is a text reveal card. Hover over the card to reveal the hidden text.
          </TextRevealCardDescription> */}
        </TextRevealCard>
        <HeroParallaxDemo />
      </div>
    );
  }
  