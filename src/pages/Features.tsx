import React from 'react';
import { motion } from 'framer-motion';
import { 
  Music, 
  Heart, 
  MessageCircle, 
  Ticket, 
  Palette, 
  Lock, 
  Calendar,
  Bot,
  Sparkles,
  Play,
  Shield,
  Users,
  Zap,
  Star
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Music className="h-8 w-8" />,
      title: 'Bot Musik 24/7',
      description: 'Nyalain lagu favorit kamu kapan aja! Support Spotify, YouTube, dan lainnya. Tinggal ketik, musik langsung play~',
      gradient: 'from-purple-500 to-pink-500',
      emoji: '🎵'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Confess Anonim',
      description: 'Suka sama seseorang di server? Kirim confess tanpa ketahuan identitasmu~ Biar rasa tetap rahasia, tapi tersampaikan 👀',
      gradient: 'from-pink-500 to-rose-500',
      emoji: '💌'
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Bot Quotes',
      description: 'Dapatkan kata-kata bijak, motivasi, atau sekadar candaan tiap hari. Auto semangat tiap buka Discord 💬',
      gradient: 'from-blue-500 to-cyan-500',
      emoji: '🧠'
    },
    {
      icon: <Ticket className="h-8 w-8" />,
      title: 'Sistem Laporan via Ticket',
      description: 'Ada masalah? Laporin aja lewat sistem ticket biar langsung ditangani staff. Cepat, rapi, dan gak ribet! 🛠️',
      gradient: 'from-green-500 to-emerald-500',
      emoji: '🎫'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Custom Role Sesuka Kamu',
      description: 'Tunjukin kepribadian kamu lewat warna dan nama role pilihan sendiri. Karena jadi unik itu penting 💅',
      gradient: 'from-yellow-500 to-orange-500',
      emoji: '🎨'
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: 'Private Channel Role-Based',
      description: 'Ada ruang-ruang rahasia yang cuma bisa diakses berdasarkan role tertentu. Eksklusif banget, kayak VIP lounge 🍷',
      gradient: 'from-indigo-500 to-purple-500',
      emoji: '🔒'
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: 'Event-Event Seru',
      description: 'Dari game bareng, movie night, sampai giveaway. Selalu ada yang seru tiap minggu! 🎉',
      gradient: 'from-teal-500 to-cyan-500',
      emoji: '🧩'
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'Bot Tambahan & Integrasi Ekstra',
      description: 'Kami terus nambahin bot dan fitur baru biar server makin hidup. Kamu punya saran bot? Boleh banget! 👾',
      gradient: 'from-violet-500 to-purple-500',
      emoji: '🤖'
    }
  ];

  const specialFeatures = [
    {
      title: 'Server Bukan Kaleng-Kaleng',
      description: 'Fitur premium dengan kualitas terbaik untuk pengalaman Discord yang tak terlupakan',
      icon: <Star className="h-12 w-12" />,
      gradient: 'from-yellow-600 to-orange-600'
    },
    {
      title: 'Selalu Update & Fresh',
      description: 'Kami terus berinovasi dan menambah fitur baru berdasarkan feedback komunitas',
      icon: <Zap className="h-12 w-12" />,
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'User-Friendly & Cozy',
      description: 'Semua fitur dirancang untuk kemudahan dan kenyamanan member',
      icon: <Users className="h-12 w-12" />,
      gradient: 'from-green-600 to-teal-600'
    }
  ];

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
            <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto animate-morph">
              <Sparkles className="h-12 w-12 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            ✨ Fitur Keren di{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Server Kami
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8"
          >
            Server ini bukan server kaleng-kaleng. Cek deretan fitur yang bikin pengalaman kamu di sini makin seru, produktif, dan pastinya cozy banget! 😎
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <motion.a
              href="https://discord.gg/kazeindo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group liquid-button px-8 py-4 text-white text-lg font-semibold rounded-full flex items-center space-x-3"
            >
              <Play className="h-5 w-5" />
              <span>Coba Fitur-Fiturnya</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              🔧 Fitur-Fitur Unggulan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Setiap fitur dirancang khusus untuk memberikan pengalaman terbaik bagi semua member
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="glass-card p-6 rounded-3xl h-full morph-hover relative overflow-hidden">
                  {/* Animated background blob */}
                  <motion.div
                    className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r ${feature.gradient} opacity-10 animate-blob-morph`}
                    whileHover={{ scale: 1.5, opacity: 0.2 }}
                  />

                  {/* Emoji floating animation */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                    className="text-4xl mb-4 text-center"
                  >
                    {feature.emoji}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-3xl mb-6 flex items-center justify-center text-white shadow-lg animate-float-morph`}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover effect sparkles */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute top-4 right-4"
                  >
                    <Star className="h-5 w-5 text-yellow-400 animate-pulse" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features Highlight */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Kenapa Fitur Kami{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Beda?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bukan cuma sekedar fitur biasa, tapi pengalaman yang memorable
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {specialFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="glass p-10 rounded-3xl text-center h-full morph-hover relative overflow-hidden">
                  {/* Animated background glow */}
                  <motion.div
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 rounded-3xl`}
                  />

                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`w-24 h-24 bg-gradient-to-r ${feature.gradient} rounded-3xl mb-6 flex items-center justify-center text-white shadow-2xl mx-auto animate-float-morph`}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-12 rounded-3xl text-center relative overflow-hidden"
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
                className="text-6xl mb-6"
              >
                🚀
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Siap Merasakan Semua Fitur Keren Ini?
              </h3>
              
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Jangan cuma baca doang! Langsung join dan rasakan sendiri gimana serunya punya akses ke semua fitur premium ini. Gratis dan tanpa ribet! 🎉
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="https://discord.gg/kazeindo"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="liquid-button px-10 py-5 text-white text-xl font-semibold rounded-full inline-flex items-center space-x-3"
                >
                  <Bot className="h-6 w-6" />
                  <span>Join & Coba Sekarang</span>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card px-8 py-4 text-white font-medium rounded-full morph-hover flex items-center space-x-2"
                >
                  <Shield className="h-5 w-5" />
                  <span>Lihat Demo</span>
                </motion.button>
              </div>
              
              <p className="text-gray-400 mt-6 text-sm">
                * Semua fitur gratis untuk semua member. No hidden fees! 💯
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Features;