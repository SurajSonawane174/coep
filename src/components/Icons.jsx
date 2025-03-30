import React from "react";
import {
  IconHome,
  IconSearch,
  IconSettings,
  IconUser,
  IconBell,
  IconPlus,
  IconTrash,
  IconEdit,
  IconCheck,
  IconX,
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconMail,
  IconGlobe,
  IconFolder,
  IconFile,
  IconDownload,
  IconUpload,
  IconClipboard,
  IconMenu2,
  IconChevronDown,
  IconChevronUp,
  IconArrowRight,
  IconArrowLeft,
  IconLock,
  IconUnlock,
  IconKey,
  IconShieldCheck,
  IconFingerprint,
  IconChartBar,
  IconChartPie,
  IconCreditCard,
  IconShoppingCart,
  IconCash,
  IconCamera,
  IconMusic,
  IconVideo,
  IconMicrophone,
  IconHeadphones
} from "@tabler/icons-react";

const icons = [
  { name: "Home", icon: <IconHome /> },
  { name: "Search", icon: <IconSearch /> },
  { name: "Settings", icon: <IconSettings /> },
  { name: "User", icon: <IconUser /> },
  { name: "Notifications", icon: <IconBell /> },
  { name: "Add", icon: <IconPlus /> },
  { name: "Delete", icon: <IconTrash /> },
  { name: "Edit", icon: <IconEdit /> },
  { name: "Confirm", icon: <IconCheck /> },
  { name: "Cancel", icon: <IconX /> },
  { name: "GitHub", icon: <IconBrandGithub /> },
  { name: "Twitter", icon: <IconBrandTwitter /> },
  { name: "LinkedIn", icon: <IconBrandLinkedin /> },
  { name: "Email", icon: <IconMail /> },
  { name: "Website", icon: <IconGlobe /> },
  { name: "Folder", icon: <IconFolder /> },
  { name: "File", icon: <IconFile /> },
  { name: "Download", icon: <IconDownload /> },
  { name: "Upload", icon: <IconUpload /> },
  { name: "Copy", icon: <IconClipboard /> },
  { name: "Menu", icon: <IconMenu2 /> },
  { name: "Dropdown", icon: <IconChevronDown /> },
  { name: "Collapse", icon: <IconChevronUp /> },
  { name: "Next", icon: <IconArrowRight /> },
  { name: "Previous", icon: <IconArrowLeft /> },
  { name: "Lock", icon: <IconLock /> },
  { name: "Unlock", icon: <IconUnlock /> },
  { name: "Key", icon: <IconKey /> },
  { name: "Verified", icon: <IconShieldCheck /> },
  { name: "Fingerprint", icon: <IconFingerprint /> },
  { name: "Stats", icon: <IconChartBar /> },
  { name: "Pie Chart", icon: <IconChartPie /> },
  { name: "Payment", icon: <IconCreditCard /> },
  { name: "Cart", icon: <IconShoppingCart /> },
  { name: "Money", icon: <IconCash /> },
  { name: "Camera", icon: <IconCamera /> },
  { name: "Music", icon: <IconMusic /> },
  { name: "Video", icon: <IconVideo /> },
  { name: "Microphone", icon: <IconMicrophone /> },
  { name: "Headphones", icon: <IconHeadphones /> }
];

const UsefulIconsGrid = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-6 gap-4 p-4">
      {icons.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center p-2">
          <div className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-lg">
            {item.icon}
          </div>
          <p className="mt-2 text-sm">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default UsefulIconsGrid;
