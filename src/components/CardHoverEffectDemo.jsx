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
    link: "/previous-year-papers",
  },
  {
    title: "📝 Lecture Notes",
    description: "Download well-structured notes for all subjects, prepared by top students and faculty.",
    link: "/notes",
  },
  {
    title: "📚 Books & Study Material",
    description: "Get recommended textbooks, reference books, and extra study materials in one place.",
    link: "/books-and-materials",
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
    link: "/placement-prep",
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
  {
    title: "🚀 Competitive Exam Prep",
    description: "Access resources for GATE, CAT, GRE, and other competitive exams.",
    link: "/exam-prep",
  },
  {
    title: "🏫 College Clubs & Communities",
    description: "Join technical, cultural, and sports clubs to connect with like-minded students.",
    link: "/clubs",
  },
  {
    title: "📌 Study Groups & Doubt Sessions",
    description: "Join or create study groups to discuss doubts, share resources, and collaborate on studies.",
    link: "/study-groups",
  },
];