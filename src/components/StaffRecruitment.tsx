import React from 'react';
import { Shield, PartyPopper, Handshake, Users, CheckCircle, Rocket, Zap, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StaffRecruitment: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const positions = [
    {
      icon: <Shield className="h-8 w-8 text-cyan-400" />,
      title: "Staff Moderator",
      description: "Jaga ketertiban server, bantu jawab pertanyaan member, dan pantau aktivitas.",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-500/10 to-blue-600/10",
      borderColor: "border-cyan-400/30",
      hoverBorder: "hover:border-cyan-400/60"
    },
    {
      icon: <PartyPopper className="h-8 w-8 text-pink-400" />,
      title: "Event Organizer",
      description: "Rancang & jalankan event seru di server (giveaway, games, diskusi, dll).",
      gradient: "from-pink-500 to-purple-600",
      bgGradient: "from-pink-500/10 to-purple-600/10",
      borderColor: "border-pink-400/30",
      hoverBorder: "hover:border-pink-400/60"
    },
    {
      icon: <Handshake className="h-8 w-8 text-emerald-400" />,
      title: "Partnership Manager",
      description: "Buka peluang kolaborasi dengan server lain & brand keren!",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-500/10 to-teal-600/10",
      borderColor: "border-emerald-400/30",
      hoverBorder: "hover:border-emerald-400/60"
    }
  ];

  const requirements = [
    "Minimal aktif 3 hari seminggu",
    "Punya komunikasi yang baik",
    "Siap kerja sama bareng tim",
    "Member kaze serenity selama beberapa bulan * khusus pelamar Staff Moderator"
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{
              duration: 3,
              delay: index * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating Discord-style elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 text-6xl opacity-20"
        >
          🎮
        </motion.div>
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 3, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-32 right-20 text-5xl opacity-20"
        >
          💬
        </motion.div>
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-20 text-4xl opacity-20"
        >
          🔊
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-20 right-10 text-5xl opacity-20"
        >
          ⚡
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              🚀 Join Tim Staff Kaze Serenity!
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "8rem" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
          >
            Kami lagi cari anggota tim yang solid, aktif, dan kreatif buat bantu ngembangin komunitas Discord kami. 
            Kalau kamu suka berinteraksi, ngatur event, atau jago cari koneksi, kamu mungkin yang kami cari!
          </motion.p>
        </motion.div>

        {/* Positions Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center text-white mb-12 flex items-center justify-center gap-3"
          >
            <Zap className="h-8 w-8 text-yellow-400" />
            Posisi yang Dibuka
            <Zap className="h-8 w-8 text-yellow-400" />
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className={`relative bg-gradient-to-br ${position.bgGradient} backdrop-blur-md rounded-2xl p-8 border-2 ${position.borderColor} ${position.hoverBorder} transition-all duration-300 group overflow-hidden`}
              >
                {/* Animated background glow */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${position.gradient} opacity-20 rounded-2xl`}
                />
                
                <div className="relative z-10">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.7
                    }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${position.gradient} rounded-2xl mb-6 shadow-lg`}
                  >
                    {position.icon}
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {position.title}
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {position.description}
                  </p>
                  
                  {/* Hover effect sparkles */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute top-4 right-4"
                  >
                    <Star className="h-6 w-6 text-yellow-400" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Requirements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 mb-16"
        >
          <motion.h3
            animate={{
              textShadow: [
                "0 0 10px rgba(34, 197, 94, 0.5)",
                "0 0 20px rgba(34, 197, 94, 0.8)",
                "0 0 10px rgba(34, 197, 94, 0.5)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-3xl font-bold text-center text-emerald-400 mb-8 flex items-center justify-center gap-3"
          >
            <CheckCircle className="h-8 w-8" />
            Syarat Umum
            <CheckCircle className="h-8 w-8" />
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="flex-shrink-0"
                >
                  <CheckCircle className="h-6 w-6 text-emerald-400" />
                </motion.div>
                <span className="text-gray-200 font-medium">{requirement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 backdrop-blur-md rounded-2xl p-12 border border-white/10 relative overflow-hidden"
        >
          {/* Animated background pattern */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 opacity-10 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
            style={{
              backgroundSize: "200% 200%"
            }}
          />
          
          <div className="relative z-10">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-6"
            >
              <Users className="h-20 w-20 text-purple-400 mx-auto" />
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Siap Jadi Bagian dari Tim Kami?
            </h3>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Bergabunglah dengan tim yang passionate dan bantu kami menciptakan pengalaman terbaik untuk komunitas Kaze Serenity!
            </p>
            
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              href="https://forms.gle/Rs1xbmz7LzNrpMvt9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 shadow-2xl group relative overflow-hidden"
            >
              {/* Button shine effect */}
              <motion.div
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
              
              <Rocket className="h-6 w-6 mr-3 group-hover:animate-bounce" />
              <span className="relative z-10">Daftar Sekarang</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="ml-3"
              >
                <Star className="h-6 w-6" />
              </motion.div>
            </motion.a>
            
            <p className="text-sm text-gray-400 mt-6">
              * Form akan mengarahkan ke Google Form atau channel Discord rekrutmen
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StaffRecruitment;