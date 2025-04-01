import { useState } from "react";
import { BackgroundBeams } from "./BackGroundBeams";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mqapdwdd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Error sending message, please try again.");
    }
  };

  return (
    <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      {/* Upper Black Shadow Gradient */}
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black via-black to-transparent opacity-90 z-10" />
      {/* Lower Black Shadow Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black to-transparent opacity-90 z-10" />

      {/* Background Beams */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>

      {/* Glassy Transparent Form */}
      <div className="p-8 rounded-xl bg-white/5 backdrop-blur-3xl shadow-lg shadow-white/10 border border-white/20 border-t-white/30 w-full max-w-md relative z-10">
        <h2 className="text-white text-2xl font-semibold text-center mb-6">
          Contact Us
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-xl text-white border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition shadow-inner"
            required
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-xl text-white border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition shadow-inner"
            required
          />

          {/* Message Textarea */}
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-xl text-white border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition shadow-inner"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
