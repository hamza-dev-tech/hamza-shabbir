import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { bus1, bus2, bus3, bus4 } from "../assets";

const appDesigns = [
  { id: 1, image: bus1, title: "E-Commerce App" },
  { id: 2, image: bus2, title: "Finance Dashboard" },
  { id: 3, image: bus3, title: "Social Media UI" },
  { id: 4, image: bus4, title: "Health & Fitness App" },
  { id: 5, image: bus1, title: "Travel Booking App" }, // Extra image added
];

const aiArtifacts = [
  { id: 1, image: "../assets/link.png", title: "Futuristic City" },
  { id: 2, image: "../assets/link.png", title: "AI Portrait" },
  { id: 3, image: "../assets/link.png", title: "Cyberpunk Scene" },
  { id: 4, image: "../assets/link.png", title: "Fantasy Landscape" },
];

const GallerySection = ({ title, items }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mt-20">
      <h3 className="text-3xl font-bold text-white mb-6">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {items.slice(0, 5).map((item) => (
          <motion.img
            key={item.id}
            src={item.image}
            alt={item.title}
            className="rounded-xl object-cover w-full h-56 cursor-pointer shadow-lg"
            whileHover={{ scale: 1.1, rotateY: 10, rotateX: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => setShowModal(true)}
          />
        ))}
      </div>

      <button
        className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-all duration-300"
        onClick={() => setShowModal(true)}
      >
        Explore More Designs →
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-gray-900 p-6 rounded-lg max-w-6xl w-full overflow-y-auto max-h-[85vh] mt-12 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="flex justify-between mb-4 sticky top-0 bg-gray-900 p-2 z-10">
              <h2 className="text-2xl text-white font-semibold">{title}</h2>
              <button onClick={() => setShowModal(false)}>
                <X size={24} className="text-white hover:text-red-400 transition-all" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {items.map((item) => (
                <motion.img
                  key={item.id}
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl object-cover w-full h-auto cursor-pointer shadow-lg"
                  whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const Artifacts = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <GallerySection title="App Designs" items={appDesigns} />
      <GallerySection title="AI Artifacts" items={aiArtifacts} />
    </div>
  );
};

export default Artifacts;
