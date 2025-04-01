import { HoverEffect } from "./card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "📜 Previous Year Papers",
    description: "Access past exam papers for all branches and years to help with your preparation.",
    link: "/filter",
  },
  {
    title: "📝 Lecture Notes",
    description: "Download well-structured notes for all subjects, prepared by top students and faculty.",
    link: "/filter",
  },
  {
    title: "📚 Books & Study Material",
    description: "Get recommended textbooks, reference books, and extra study materials in one place.",
    link: "/filter",
  },
  {
    title: "💻 Hackathons & Competitions",
    description: "Participate in coding challenges, hackathons, and competitions to sharpen your skills.",
    link: "/hackathons",
  },
  {
    title: "📢 College Notices & Announcements",
    description: "Find important academic and administrative announcements directly from the college.",
    link: "/notices",
  },
  {
    title: "🎓 Internship & Placement Prep",
    description: "Get resources, past interview experiences, and preparation materials for placements.",
    link: "/Placement",
  },
  {
    title: "🎭 College Events & Workshops",
    description: "Stay updated on upcoming college fests, tech events, and educational workshops.",
    link: "/events",
  },
  
  {
    title: "🛠 Final Year Projects & Research Papers",
    description: "Explore project ideas, documentation, and research papers to boost your academics.",
    link: "/projects",
  },
  {
    title: "🏆 Scholarships & Grants",
    description: "Find financial aid, scholarship opportunities, and eligibility criteria for students.",
    link: "/scholarships",
  },
  ,
];