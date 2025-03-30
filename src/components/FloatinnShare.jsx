import { useState } from "react";
import { motion } from "framer-motion";
import { FaShareAlt, FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const FloatingSocialShare = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-2 z-50">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="flex flex-col space-y-2"
        >
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="bg-green-500 p-3 rounded-full shadow-lg text-white hover:bg-green-600">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="bg-pink-500 p-3 rounded-full shadow-lg text-white hover:bg-pink-600">
            <FaInstagram size={24} />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 p-3 rounded-full shadow-lg text-white hover:bg-blue-600">
            <FaFacebook size={24} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-blue-700 p-3 rounded-full shadow-lg text-white hover:bg-blue-800">
            <FaLinkedin size={24} />
          </a>
        </motion.div>
      )}
      <button
        onClick={toggleMenu}
        className="bg-gray-800 p-4 rounded-full text-white shadow-lg hover:bg-gray-900"
      >
        <FaShareAlt size={24} />
      </button>
    </div>
  );
};

export default FloatingSocialShare;
