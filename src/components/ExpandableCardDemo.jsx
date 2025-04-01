
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./UseOutsideClick";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10" />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}>
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-auto dark:text-neutral-400 scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded-full scrollbar-track-black">
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-contain object-top" />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200">
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400">
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white">
                    {"Download"}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full h-auto gap-4 overflow-none">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-fit    object-top" />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left">
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left">
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0">
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Software Engineer Intern",
    title: "Google",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    ctaText: "see more",
    ctaLink: "https://careers.google.com/jobs/results/",
    content: () => {
      return (
        <p>Google is one of the most sought-after companies for CSE students. As a Software Engineer Intern at Google, you will work on solving complex problems, building scalable systems, and making a meaningful impact on the tech world. Google hires students from top-tier universities worldwide for their summer internships, providing hands-on experience with cutting-edge technologies.</p>
      );
    },
  },
  {
    description: "Software Developer",
    title: "Microsoft",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    ctaText: "See more",
    ctaLink: "https://careers.microsoft.com/",
    content: () => {
      return (
        <p>Microsoft is a global leader in software development, known for its products like Windows, Office, and Azure. As a Software Developer, you will be tasked with creating innovative solutions that solve real-world problems. Microsoft offers both internship and full-time opportunities for CSE students, focusing on both technical and leadership skills.</p>
      );
    },
  },
  {
    description: "Data Scientist",
    title: "Amazon",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    ctaText: "See more",
    ctaLink: "https://www.amazon.jobs/en/",
    content: () => {
      return (
        <p>Amazon, a leader in e-commerce and cloud computing, recruits CSE and ESE students for data science roles. As a Data Scientist, you'll use machine learning algorithms, statistical modeling, and big data techniques to analyze large datasets and provide actionable insights. Amazon's data-driven approach makes it an excellent place for anyone passionate about data science.</p>
      );
    },
  },
  {
    description: "Embedded Systems Engineer",
    title: "Qualcomm",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Qualcomm_Logo.svg",
    ctaText: "See more",
    ctaLink: "https://www.qualcomm.com/company/careers",
    content: () => {
      return (
        <p>Qualcomm is a multinational corporation known for its semiconductor and telecommunications equipment. As an Embedded Systems Engineer at Qualcomm, you'll work on developing cutting-edge mobile technologies, including designing hardware and software for smartphones and IoT devices. Qualcomm recruits from ESE and CSE backgrounds for roles in embedded systems, wireless technologies, and more.</p>
      );
    },
  },
  {
    description: "Full Stack Developer",
    title: "Facebook (Meta)",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    ctaText: "See more",
    ctaLink: "https://www.metacareers.com/",
    content: () => {
      return (
        <p>Facebook (Meta) offers exciting opportunities for CSE students to work as Full Stack Developers. Meta focuses on creating powerful social platforms and virtual experiences. As a Full Stack Developer at Meta, you will work on building scalable web applications, from the front-end UI to back-end server-side logic, impacting billions of users worldwide.</p>
      );
    },
  },
  {
    description: "Machine Learning Engineer",
    title: "NVIDIA",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e3/NVIDIA_logo.svg",
    ctaText: "See more",
    ctaLink: "https://www.nvidia.com/en-us/about-nvidia/careers/",
    content: () => {
      return (
        <p>NVIDIA is a global leader in GPU-accelerated computing. As a Machine Learning Engineer at NVIDIA, you'll work on building and deploying AI models for high-performance computing applications. This role is perfect for CSE and ESE students who want to work on deep learning, computer vision, and other advanced AI applications in industries like gaming, autonomous vehicles, and data centers.</p>
      );
    },
  },  
  
];

