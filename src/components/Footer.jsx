import { FloatingDock } from "./FloatingDock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconTerminal2,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export default function Footer() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-blue-500 transition-colors duration-300" />,
      href: "/",
    },
    {
      title: "Services",
      icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-purple-500 transition-colors duration-300" />,
      href: "/services",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-black transition-colors duration-300" />,
      href: "https://twitter.com",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-gray-800 transition-colors duration-300" />,
      href: "https://github.com",
    },
    {
      title: "WhatsApp",
      icon: <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-green-500 transition-colors duration-300" />,
      href: "https://wa.me/your-number",
    },
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-pink-500 transition-colors duration-300" />,
      href: "https://instagram.com/your-profile",
    },
    {
      title: "Facebook",
      icon: <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-blue-600 transition-colors duration-300" />,
      href: "https://facebook.com/your-profile",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-blue-700 transition-colors duration-300" />,
      href: "https://linkedin.com/in/your-profile",
    },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-red-500 transition-colors duration-300" />,
      href: "mailto:someone@example.com",
    },
  ];

  return (
    <footer className="bg-black text-white py-6 text-center">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-center h-auto w-full">
          <FloatingDock mobileClassName="translate-y-20" items={links} />
        </div>
        <p className="mt-4">&copy; 2025 COEP. All rights reserved.</p>
      </div>
    </footer>
  );
}
