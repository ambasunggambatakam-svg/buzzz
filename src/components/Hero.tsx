import React from 'react';
import { motion } from 'framer-motion';

// Bola latar konsisten
const floatingBalls = Array.from({ length: 8 }, (_, index) => ({
  id: index,
  width: Math.random() * 150 + 50,
  height: Math.random() * 150 + 50,
  top: Math.random() * 90,
  left: Math.random() * 90,
}));

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900">
      {/* Background Floating Balls */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {floatingBalls.map((ball) => (
          <motion.div
            key={ball.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{
              duration: 2,
              delay: ball.id * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${ball.width}px`,
              height: `${ball.height}px`,
              top: `${ball.top}%`,
              left: `${ball.left}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 sm:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Welcome to <span className="text-indigo-300">Kaze Serenity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-indigo-100 mb-10"
        >
          Tempat perlindungan bagi para gamer, kreator, dan pencari ketenangan
          untuk terhubung, berkembang, dan bergembira dalam lingkungan yang
          bersahabat dan suportif.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://discord.gg/kazeindo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-800 hover:bg-indigo-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-md"
          >
            Join the Community
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#about"
            className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="cursor-pointer absolute bottom-6 left-0 right-0 flex justify-center z-10"
      >
        <div className="w-8 h-14 rounded-full border-2 border-white/50 flex justify-center items-start pt-2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-2 h-4 bg-white/70 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
