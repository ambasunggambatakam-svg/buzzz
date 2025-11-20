import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Collaborations: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const collaborations = [
    {
      name: "Wielino",
      image: "https://i.pinimg.com/736x/56/db/0d/56db0d4aef30da75f3cc7acb1f759d7d.jpg",
      subscribers: "1.05M",
      status: "Content Creator",
    },
    {
      name: "AceAnthem",
      image: "https://i.pinimg.com/736x/d0/d8/cb/d0d8cb80bdf6ddddec926e7eda3c4b9a.jpg",
      subscribers: "93.4K",
      status: "Streamer",
    },
    {
      name: "Evos Clover",
      image: "https://i.pinimg.com/736x/c9/7d/42/c97d42039abeff996d311fea0e1f5d51.jpg",
      subscribers: "115K",
      status: "Ex Pro Player",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      ref={ref}
      id="collaborations"
      className="py-16 md:py-24 bg-gray-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Collaborations
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "6rem" } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {collaborations.map((collab, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-gray-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600">
                {/* Profile Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative mb-6 mx-auto w-24 h-24"
                >
                  <img
                    src={collab.image}
                    alt={collab.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-600 group-hover:border-indigo-500 transition-colors duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-800"></div>
                </motion.div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {collab.name}
                </h3>

                {/* Subscriber Count */}
                <div className="text-2xl font-semibold text-indigo-400 mb-3">
                  {collab.subscribers}
                </div>

                {/* Status */}
                <div className="inline-block bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium">
                  {collab.status}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Collaborations;