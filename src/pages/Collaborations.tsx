import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Star, 
  Play, 
  Trophy, 
  Crown,
  ExternalLink,
  Youtube,
  Twitch,
  Instagram
} from 'lucide-react';

const Collaborations: React.FC = () => {
  const collaborations = [
    {
      name: "Wielino",
      image: "https://i.pinimg.com/736x/56/db/0d/56db0d4aef30da75f3cc7acb1f759d7d.jpg",
      subscribers: "1.05M",
      status: "Content Creator",
      description: "Content creator terkemuka dengan jutaan subscriber yang aktif berkolaborasi dengan komunitas kami",
      platform: "YouTube",
      gradient: "from-red-500 to-pink-500",
      verified: true
    },
    {
      name: "AceAnthem",
      image: "https://i.pinimg.com/736x/d0/d8/cb/d0d8cb80bdf6ddddec926e7eda3c4b9a.jpg",
      subscribers: "93.4K",
      status: "Streamer",
      description: "Streamer gaming profesional yang sering mengadakan event bersama komunitas Kaze Serenity",
      platform: "YouTube",
      gradient: "from-purple-500 to-indigo-500",
      verified: true
    },
    {
      name: "Evos Clover",
      image: "https://ik.imagekit.io/psdoxljjy/Evos_Clover_S10.png?updatedAt=1752774316387",
      subscribers: "115K",
      status: "Ex Pro Player",
      description: "Mantan pemain profesional yang kini aktif sebagai content creator dan mentor gaming",
      platform: "YouTube",
      gradient: "from-green-500 to-emerald-500",
      verified: true
    },
    {
      name: "Nyomanuk",
      image: "https://ik.imagekit.io/lhtvft4ai/nyoman.png?updatedAt=1757519744612",
      subscribers: "36.3K",
      status: "Editor Ternama",
      description: "Editor profesional yang saat ini aktif sebagai content creator diberbagai Platform",
      platform: "YouTube",
      gradient: "from-blue-500 to-pink-500",
      verified: true
    },
    {
      name: "Even 1344",
      image: "https://ik.imagekit.io/lhtvft4ai/Untitled-epen.png?updatedAt=1757949146363",
      subscribers: "225K",
      status: "Content Creator",
      description: "Seorang content creator perintis yang kini gemar bermain game dan mengedit",
      platform: "YouTube",
      gradient: "from-yellow-500 to-blue-500",
      verified: true
    }
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: '3+', label: 'Active Collaborators' },
    { icon: <Star className="h-6 w-6" />, value: '1.2M+', label: 'Combined Reach' },
    { icon: <Trophy className="h-6 w-6" />, value: '50+', label: 'Joint Events' },
    { icon: <Play className="h-6 w-6" />, value: '24/7', label: 'Content Creation' },
  ];

  const benefits = [
    {
      title: 'Expanded Reach',
      description: 'Jangkauan yang lebih luas melalui kolaborasi dengan creator terkenal',
      icon: <Users className="h-8 w-8" />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Quality Content',
      description: 'Konten berkualitas tinggi dari para profesional di bidangnya',
      icon: <Star className="h-8 w-8" />,
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Exclusive Events',
      description: 'Event eksklusif dan giveaway khusus untuk member komunitas',
      icon: <Trophy className="h-8 w-8" />,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'YouTube':
        return <Youtube className="h-5 w-5" />;
      case 'Twitch':
        return <Twitch className="h-5 w-5" />;
      case 'Instagram':
        return <Instagram className="h-5 w-5" />;
      default:
        return <Play className="h-5 w-5" />;
    }
  };

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
              <Users className="h-12 w-12 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Collaborations
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-2 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 rounded-full"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto"
          >
            Berkolaborasi dengan content creator dan influencer terbaik untuk memberikan pengalaman yang luar biasa bagi komunitas kami
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 rounded-3xl text-center morph-hover"
              >
                <div className="text-purple-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Collaborators Section */}
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
              Meet Our{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Partners
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Para creator dan influencer yang telah mempercayai Kaze Serenity sebagai partner kolaborasi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborations.map((collab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="glass-card p-8 rounded-3xl h-full morph-hover relative overflow-hidden">
                  {/* Animated background blob */}
                  <motion.div
                    className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r ${collab.gradient} opacity-10 animate-blob-morph`}
                    whileHover={{ scale: 1.5, opacity: 0.2 }}
                  />

                  {/* Profile Section */}
                  <div className="relative text-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative mx-auto w-24 h-24 mb-4"
                    >
                      <img
                        src={collab.image}
                        alt={collab.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white/20 group-hover:border-white/40 transition-all duration-300 animate-blob-morph"
                      />
                      {collab.verified && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center"
                        >
                          <Crown className="h-4 w-4 text-white" />
                        </motion.div>
                      )}
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {collab.name}
                    </h3>

                    {/* Subscriber Count */}
                    <div className={`text-3xl font-bold bg-gradient-to-r ${collab.gradient} bg-clip-text text-transparent mb-2`}>
                      {collab.subscribers}
                    </div>

                    {/* Platform & Status */}
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <div className={`p-2 bg-gradient-to-r ${collab.gradient} rounded-full animate-float-morph`}>
                        {getPlatformIcon(collab.platform)}
                      </div>
                      <span className="text-gray-300 font-medium">{collab.status}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {collab.description}
                    </p>

                    {/* Action Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full bg-gradient-to-r ${collab.gradient} text-white py-3 px-6 rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2 morph-hover`}
                    >
                      <span>View Profile</span>
                      <ExternalLink className="h-4 w-4" />
                    </motion.button>
                  </div>

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

      {/* Benefits Section */}
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
              Why We{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Collaborate?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manfaat yang didapat komunitas dari kolaborasi dengan para creator terbaik
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
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
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-20 rounded-3xl`}
                  />

                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`w-20 h-20 bg-gradient-to-r ${benefit.gradient} rounded-3xl mb-6 flex items-center justify-center text-white shadow-2xl mx-auto animate-float-morph`}
                  >
                    {benefit.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
            className="glass p-12 rounded-3xl relative overflow-hidden"
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
                🤝
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ingin Berkolaborasi dengan Kami?
              </h3>
              
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Jika Anda seorang content creator atau influencer yang tertarik untuk berkolaborasi dengan Kaze Serenity, jangan ragu untuk menghubungi kami!
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
                  <Users className="h-6 w-6" />
                  <span>Join Our Community</span>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card px-8 py-4 text-white font-medium rounded-full morph-hover flex items-center space-x-2"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Partnership Inquiry</span>
                </motion.button>
              </div>
              
              <p className="text-gray-400 mt-6 text-sm">
                * Terbuka untuk semua jenis kolaborasi yang saling menguntungkan
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Collaborations;