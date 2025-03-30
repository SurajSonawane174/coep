import { motion } from "framer-motion";

export default function EducationLanding() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center overflow-hidden">
      {/* Background Wave Animation */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1/2 bg-white"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        style={{ borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}
      />
      
      {/* Content Section */}
      <motion.div 
        className="z-10 text-center text-white px-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">Empower Your Learning Journey</h1>
        <p className="mt-4 text-lg">Access quality notes, previous year papers, and study materials for all branches and years.</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}