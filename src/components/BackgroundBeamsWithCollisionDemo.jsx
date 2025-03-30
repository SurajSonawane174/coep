
import { BackgroundBeamsWithCollision } from "../components/BackgroundBeamsWithCollision";
import { motion } from "framer-motion";
export default function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
        {/* Text Content */}
        <div className="z-10 text-center p-6">
          <h1 className="text-lg md:text-7xl font-normal bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">One-Stop Hub for Academic Success!</h1>
          <p className="text-lg text-blue-700 mt-2">Empowering students with high-quality learning materials for academic excellence.</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Animated Wave SVG */}
        <div className="absolute bottom-0 left-0 w-screen">
          {[
            { color: "#6D28D9", opacity: 0.7, delay: 0, speed: 6, amplitude: 10, startY: 0 },
            { color: "#3B82F6", opacity: 0.5, delay: 0.5, speed: 7, amplitude: 15, startY: 5 },
            { color: "#A855F7", opacity: 0.4, delay: 1, speed: 8, amplitude: 20, startY: -5 },
            { color: "#C084FC", opacity: 0.3, delay: 1.5, speed: 9, amplitude: 25, startY: 10 },
          ].map((wave, index) => (
            <motion.svg
              key={index}
              className="absolute bottom-0 left-0 w-screen"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ y: wave.startY }}
              animate={{
                y: [wave.amplitude + wave.startY, -wave.amplitude + wave.startY, wave.amplitude + wave.startY],
              }}
              transition={{
                repeat: Infinity,
                duration: wave.speed,
                ease: "easeInOut",
                delay: wave.delay,
              }}
            >
              <motion.path
                d="M0,160L80,186.7C160,213,320,267,480,266.7C640,267,800,213,960,181.3C1120,149,1280,139,1360,133.3L1440,128V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z"
                fill={wave.color}
                fillOpacity={wave.opacity}
                stroke="none"
              />
            </motion.svg>
          ))}
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
  