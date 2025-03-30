import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { TextHoverEffect } from "./Texthover";


const notices = [
  { id: 1, text: "Exam Schedule Updated", color: "bg-yellow-200" },
  { id: 2, text: "Hostel Fees Due Date", color: "bg-red-200" },
  { id: 3, text: "Sports Event Registrations Open", color: "bg-green-200" },
  { id: 4, text: "Workshop on AI & ML", color: "bg-blue-200" },
  { id: 5, text: "Library Timings Extended", color: "bg-purple-200" },
];

export default function NoticeBoard() {
  const [selectedNotice, setSelectedNotice] = useState(null);

  return (
    <div className="flex text-black flex-col items-center justify-center min-h-screen bg-black p-6">
      <TextHoverEffect text="NOTICES" />

      {/* Notice Board Title */}
      <h1 className="text-4xl font-extrabold text-white mb-6 tracking-wide uppercase border-b-4 border-gray-400 pb-2 shadow-lg">
        📌 Notice Board
      </h1>

      {/* 3D Glass Notice Board */}
      <div className="relative w-[900px] h-[600px] bg-green-900 bg-opacity-40 backdrop-blur-lg p-6 rounded-lg shadow-2xl border-[12px] border-b-[25px] border-gray-900 transform rotate-x-10 rotate-y-3 perspective-1000">
        {/* Notices with Pins */}
        {notices.map((notice, index) => {
          const gridX = index % 3;
          const gridY = Math.floor(index / 3);
          const posX = 60 + gridX * 180;
          const posY = 50 + gridY * 120;
          const rotate = Math.random() * 10 - 5;
          return (
            <motion.div
              key={notice.id}
              className={cn(
                "absolute w-40 p-2 text-sm font-bold cursor-pointer shadow-md",
                notice.color,
                "rounded transform",
                selectedNotice === notice.id && "z-50 scale-125 bg-white"
              )}
              style={{
                top: `${posY}px`,
                left: `${posX}px`,
                rotate: `${rotate}deg`,
              }}
              onClick={() =>
                setSelectedNotice(
                  notice.id === selectedNotice ? null : notice.id
                )
              }
              whileHover={{ scale: 1.1 }}
            >
              {/* Pin */}
              <div className="absolute w-4 h-4 bg-red-600 rounded-full top-[-8px] left-[50%] transform -translate-x-1/2 border-2 border-gray-800 shadow-xl"></div>
              {notice.text}
            </motion.div>
          );
        })}
      </div>

      {/* Expanded Notice View */}
      {selectedNotice !== null && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setSelectedNotice(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-2">
              {notices.find((n) => n.id === selectedNotice)?.text}
            </h2>
            <p className="text-gray-600">
              Detailed information about this notice.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
