// Features.jsx
import React from "react";

const Features = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Features</h2>
      <div className="flex justify-center space-x-8">
        <div className="p-6 bg-gray-200 rounded-md">Feature 1</div>
        <div className="p-6 bg-gray-200 rounded-md">Feature 2</div>
        <div className="p-6 bg-gray-200 rounded-md">Feature 3</div>
      </div>
    </section>
  );
};

export default Features;
