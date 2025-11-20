import React from 'react';
import { Mic, Trophy, Crown, Award, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TopVoice: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Sample data - replace with real Discord user data
  const topVoiceUsers = [
    {
      rank: 1,
      username: "yooooeeeeee",
      avatar: "https://ik.imagekit.io/1yqrowr2y/d63fc8a540bb0bf2dc4c32f722dccf6f.png?updatedAt=1750202278242",
      totalHours: 194.48,
      totalDays: 28,
      badge: "Top Voice 1st"
    },
    {
      rank: 2,
      username: "ky",
      avatar: "https://ik.imagekit.io/1yqrowr2y/3aa2ee91c3387847de8306f3965ba817.png?updatedAt=1750202274862",
      totalHours: 139.75,
      totalDays: 25,
      badge: "Top Voice 2nd"
    },
    {
      rank: 3,
      username: "reyzenzou",
      avatar: "https://ik.imagekit.io/1yqrowr2y/a89708e7485323efb36b16d44cee1c48.png?updatedAt=1750202278749",
      totalHours: 72.35,
      totalDays: 22,
      badge: "Top Voice 3rd"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-8 w-8 text-yellow-400" />;
      case 2:
        return <Trophy className="h-7 w-7 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <Mic className="h-6 w-6 text-indigo-400" />;
    }
  };

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 shadow-2xl shadow-yellow-500/30 scale-110";
      case 2:
        return "bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 shadow-xl shadow-gray-400/20 scale-105";
      case 3:
        return "bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 shadow-lg shadow-amber-500/20";
      default:
        return "bg-gradient-to-br from-indigo-500 to-purple-600";
    }
  };

  const getPodiumHeight = (rank: number) => {
    switch (rank) {
      case 1:
        return "h-32";
      case 2:
        return "h-24";
      case 3:
        return "h-20";
      default:
        return "h-16";
    }
  };

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{
              duration: 3,
              delay: index * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute rounded-full bg-gradient-to-r from-indigo-400 to-purple-400"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Top Voice Bulan Ini 🔊
            </h2>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "8rem" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-2 bg-gradient-to-r from-yellow-400 to-purple-600 mx-auto mb-8 rounded-full"
          />
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Para juara voice chat yang paling aktif bulan ini! Mereka adalah tulang punggung kehangatan komunitas kita.
          </p>
        </motion.div>

        {/* Podium Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex justify-center items-end mb-16 space-x-4 md:space-x-8"
        >
          {/* 2nd Place */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative mb-4"
            >
              <div className="relative">
                <img
                  src={topVoiceUsers[1].avatar}
                  alt={topVoiceUsers[1].username}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-gray-300 object-cover"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-2 bg-gray-400 rounded-full p-2"
                >
                  {getRankIcon(2)}
                </motion.div>
              </div>
            </motion.div>
            <div className={`${getPodiumHeight(2)} ${getRankStyle(2)} w-24 md:w-32 rounded-t-lg flex flex-col justify-center items-center text-white font-bold relative overflow-hidden`}>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center"
              >
                <div className="text-2xl font-black">2</div>
                <div className="text-xs">{topVoiceUsers[1].totalHours}h</div>
              </motion.div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-white font-semibold text-lg">{topVoiceUsers[1].username}</h3>
              <p className="text-gray-300 text-sm">{topVoiceUsers[1].badge}</p>
              <p className="text-indigo-300 text-xs">{topVoiceUsers[1].totalDays} hari aktif</p>
            </div>
          </motion.div>

          {/* 1st Place */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center relative"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-8 text-6xl"
            >
              👑
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.15, rotate: -5 }}
              className="relative mb-4 mt-8"
            >
              <div className="relative">
                <motion.img
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(255, 215, 0, 0.5)",
                      "0 0 40px rgba(255, 215, 0, 0.8)",
                      "0 0 20px rgba(255, 215, 0, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  src={topVoiceUsers[0].avatar}
                  alt={topVoiceUsers[0].username}
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-yellow-400 object-cover"
                />
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                  className="absolute -top-3 -right-3 bg-yellow-400 rounded-full p-3 shadow-lg"
                >
                  {getRankIcon(1)}
                </motion.div>
              </div>
            </motion.div>
            <div className={`${getPodiumHeight(1)} ${getRankStyle(1)} w-28 md:w-36 rounded-t-lg flex flex-col justify-center items-center text-white font-bold relative overflow-hidden`}>
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="text-center"
              >
                <div className="text-3xl font-black">1</div>
                <div className="text-sm font-bold">{topVoiceUsers[0].totalHours}h</div>
              </motion.div>
              <motion.div
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-300 font-bold text-xl">{topVoiceUsers[0].username}</h3>
              <p className="text-yellow-200 text-sm font-semibold">{topVoiceUsers[0].badge}</p>
              <p className="text-yellow-100 text-sm">{topVoiceUsers[0].totalDays} hari aktif</p>
            </div>
          </motion.div>

          {/* 3rd Place */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="relative mb-4"
            >
              <div className="relative">
                <img
                  src={topVoiceUsers[2].avatar}
                  alt={topVoiceUsers[2].username}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-amber-500 object-cover"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-2 bg-amber-600 rounded-full p-2"
                >
                  {getRankIcon(3)}
                </motion.div>
              </div>
            </motion.div>
            <div className={`${getPodiumHeight(3)} ${getRankStyle(3)} w-24 md:w-32 rounded-t-lg flex flex-col justify-center items-center text-white font-bold relative overflow-hidden`}>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="text-center"
              >
                <div className="text-2xl font-black">3</div>
                <div className="text-xs">{topVoiceUsers[2].totalHours}h</div>
              </motion.div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-white font-semibold text-lg">{topVoiceUsers[2].username}</h3>
              <p className="text-gray-300 text-sm">{topVoiceUsers[2].badge}</p>
              <p className="text-indigo-300 text-xs">{topVoiceUsers[2].totalDays} hari aktif</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {topVoiceUsers.map((user) => (
            <motion.div
              key={user.username}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-indigo-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-12 h-12 rounded-full border-2 border-indigo-400 mr-4 object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{user.username}</h4>
                  <p className="text-indigo-300 text-sm">#{user.rank} Voice Champion</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Total Voice Time:</span>
                  <span className="text-white font-semibold">{user.totalHours} jam</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Hari Aktif:</span>
                  <span className="text-white font-semibold">{user.totalDays} hari</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Rata-rata/hari:</span>
                  <span className="text-white font-semibold">{Math.round(user.totalHours / user.totalDays * 10) / 10} jam</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-8 border border-white/10"
        >
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Volume2 className="h-16 w-16 text-indigo-400 mx-auto mb-4" />
          </motion.div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ingin Masuk Top Voice Bulan Depan?
          </h3>
          <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan voice channel kami sekarang! Semakin aktif kamu di voice chat, semakin besar peluang untuk menjadi Top Voice bulan depan dan mendapatkan badge eksklusif!
          </p>
          <motion.a
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            href="https://discord.gg/kazeindo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg"
          >
            <Mic className="h-5 w-5 mr-2" />
            Join Voice Sekarang!
          </motion.a>
          <p className="text-sm text-gray-400 mt-4">
            * Data diperbarui setiap bulan berdasarkan aktivitas voice chat
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TopVoice;