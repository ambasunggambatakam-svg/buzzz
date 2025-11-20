import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, MessageSquare, Crown, Trophy, Award, Volume2, Users } from 'lucide-react';

const Leaderboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'voice' | 'chat'>('voice');

  const topVoiceUsers = [
    {
      rank: 1,
      username: "Wyse The Wise Man",
      avatar: "https://ik.imagekit.io/lhtvft4ai/wyse.png?updatedAt=1761926633647",
      totalHours: 398.2,
      totalDays: 28,
      badge: "Voice Champion"
    },
    {
      rank: 2,
      username: "Ryan",
      avatar: "https://ik.imagekit.io/lhtvft4ai/ryan.png?updatedAt=1761926787109",
      totalHours: 268.42,
      totalDays: 25,
      badge: "Voice Master"
    },
    {
      rank: 3,
      username: "Dapa",
      avatar: "https://ik.imagekit.io/lhtvft4ai/dapaaaa.png?updatedAt=1761926896774",
      totalHours: 194.23,
      totalDays: 22,
      badge: "Voice Expert"
    }
  ];

  const topChatUsers = [
    {
      rank: 1,
      username: "Synokun",
      avatar: "https://ik.imagekit.io/lhtvft4ai/synoo.png?updatedAt=1761927054654",
      totalMessages: 305,
      totalDays: 30,
      badge: "Chat Champion"
    },
    {
      rank: 2,
      username: "𝘛𝘶𝘳𝘺",
      avatar: "https://ik.imagekit.io/lhtvft4ai/tury.png?updatedAt=1761927152835",
      totalMessages: 203,
      totalDays: 28,
      badge: "Chat Master"
    },
    {
      rank: 3,
      username: "Nekoflyy",
      avatar: "https://ik.imagekit.io/lhtvft4ai/nekofly.png?updatedAt=1759307615773",
      totalMessages: 179,
      totalDays: 25,
      badge: "Chat Expert"
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-8 w-8 text-yellow-400" />;
      case 2:
        return <Trophy className="h-7 w-7 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return null;
    }
  };

  const getRankGradient = (rank: number) => {
    switch (rank) {
      case 1:
        return "from-yellow-400 via-yellow-500 to-orange-500";
      case 2:
        return "from-gray-300 via-gray-400 to-gray-500";
      case 3:
        return "from-amber-500 via-amber-600 to-orange-600";
      default:
        return "from-indigo-500 to-purple-600";
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

  const currentData = activeTab === 'voice' ? topVoiceUsers : topChatUsers;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto animate-morph">
              <Trophy className="h-12 w-12 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Top{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Leaderboard
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto"
          >
            Para juara yang paling aktif di komunitas Kaze Serenity bulan ini
          </motion.p>
        </div>
      </section>

      {/* Tab Selector */}
      <section className="py-10 relative">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="glass p-2 rounded-full flex space-x-2">
              <motion.button
                onClick={() => setActiveTab('voice')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'voice'
                    ? 'liquid-button text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Mic className="h-5 w-5" />
                <span>Top Voice</span>
              </motion.button>
              <motion.button
                onClick={() => setActiveTab('chat')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'chat'
                    ? 'liquid-button text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <MessageSquare className="h-5 w-5" />
                <span>Top Chat</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Podium Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-end mb-16 space-x-4 md:space-x-8"
          >
            {/* 2nd Place */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                className="relative mb-4"
              >
                <div className="relative">
                  <motion.img
                    src={currentData[1].avatar}
                    alt={currentData[1].username}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-gray-300 object-cover animate-blob-morph"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-2 -right-2 bg-gray-400 rounded-full p-2 animate-float-morph"
                  >
                    {getRankIcon(2)}
                  </motion.div>
                </div>
              </motion.div>
              <div className={`${getPodiumHeight(2)} bg-gradient-to-t ${getRankGradient(2)} w-24 md:w-32 rounded-t-3xl flex flex-col justify-center items-center text-white font-bold relative overflow-hidden morph-hover`}>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-center"
                >
                  <div className="text-2xl font-black">2</div>
                  <div className="text-xs">
                    {activeTab === 'voice' ? `${currentData[1].totalHours}h` : `${currentData[1].totalMessages} msg`}
                  </div>
                </motion.div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-white font-semibold text-lg">{currentData[1].username}</h3>
                <p className="text-gray-300 text-sm">{currentData[1].badge}</p>
              </div>
            </motion.div>

            {/* 1st Place */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
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
                whileHover={{ scale: 1.15, y: -10 }}
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
                    src={currentData[0].avatar}
                    alt={currentData[0].username}
                    className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-yellow-400 object-cover animate-blob-morph"
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
                    className="absolute -top-3 -right-3 bg-yellow-400 rounded-full p-3 shadow-lg animate-float-morph"
                  >
                    {getRankIcon(1)}
                  </motion.div>
                </div>
              </motion.div>
              <div className={`${getPodiumHeight(1)} bg-gradient-to-t ${getRankGradient(1)} w-28 md:w-36 rounded-t-3xl flex flex-col justify-center items-center text-white font-bold relative overflow-hidden morph-hover`}>
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="text-center"
                >
                  <div className="text-3xl font-black">1</div>
                  <div className="text-sm font-bold">
                    {activeTab === 'voice' ? `${currentData[0].totalHours}h` : `${currentData[0].totalMessages} msg`}
                  </div>
                </motion.div>
                <motion.div
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 animate-blob-morph"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-yellow-300 font-bold text-xl">{currentData[0].username}</h3>
                <p className="text-yellow-200 text-sm font-semibold">{currentData[0].badge}</p>
              </div>
            </motion.div>

            {/* 3rd Place */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                className="relative mb-4"
              >
                <div className="relative">
                  <motion.img
                    src={currentData[2].avatar}
                    alt={currentData[2].username}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-amber-500 object-cover animate-blob-morph"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-2 -right-2 bg-amber-600 rounded-full p-2 animate-float-morph"
                  >
                    {getRankIcon(3)}
                  </motion.div>
                </div>
              </motion.div>
              <div className={`${getPodiumHeight(3)} bg-gradient-to-t ${getRankGradient(3)} w-24 md:w-32 rounded-t-3xl flex flex-col justify-center items-center text-white font-bold relative overflow-hidden morph-hover`}>
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                  className="text-center"
                >
                  <div className="text-2xl font-black">3</div>
                  <div className="text-xs">
                    {activeTab === 'voice' ? `${currentData[2].totalHours}h` : `${currentData[2].totalMessages} msg`}
                  </div>
                </motion.div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-white font-semibold text-lg">{currentData[2].username}</h3>
                <p className="text-gray-300 text-sm">{currentData[2].badge}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {currentData.map((user, index) => (
              <motion.div
                key={user.username}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 rounded-3xl morph-hover"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="w-12 h-12 rounded-full border-2 border-cyan-400 mr-4 object-cover animate-blob-morph"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{user.username}</h4>
                    <p className="text-cyan-300 text-sm">#{user.rank} {activeTab === 'voice' ? 'Voice' : 'Chat'} Champion</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">
                      {activeTab === 'voice' ? 'Total Voice Time:' : 'Total Messages:'}
                    </span>
                    <span className="text-white font-semibold">
                      {activeTab === 'voice' ? `${user.totalHours} jam` : `${user.totalMessages} pesan`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Hari Aktif:</span>
                    <span className="text-white font-semibold">{user.totalDays} hari</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Rata-rata/hari:</span>
                    <span className="text-white font-semibold">
                      {activeTab === 'voice' 
                        ? `${Math.round(user.totalHours / user.totalDays * 10) / 10} jam`
                        : `${Math.round(user.totalMessages / user.totalDays)} pesan`
                      }
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-12 rounded-3xl"
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
              {activeTab === 'voice' ? (
                <Volume2 className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
              ) : (
                <Users className="h-16 w-16 text-purple-400 mx-auto mb-4" />
              )}
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ingin Masuk {activeTab === 'voice' ? 'Top Voice' : 'Top Chat'} Bulan Depan?
            </h3>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              {activeTab === 'voice' 
                ? 'Bergabunglah dengan voice channel kami sekarang! Semakin aktif kamu di voice chat, semakin besar peluang untuk menjadi Top Voice bulan depan!'
                : 'Aktif chat di server kami! Semakin banyak kamu berinteraksi, semakin besar peluang untuk menjadi Top Chat bulan depan!'
              }
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
              className="liquid-button px-8 py-4 text-white text-lg font-semibold rounded-full inline-flex items-center space-x-2"
            >
              {activeTab === 'voice' ? <Mic className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
              <span>{activeTab === 'voice' ? 'Join Voice Sekarang!' : 'Mulai Chat Sekarang!'}</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Leaderboard;