import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, MessageSquare, Trophy, Sparkles, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const stats = [
    { icon: <Users className="h-6 w-6" />, value: '1,600+', label: 'Members' },
    { icon: <MessageSquare className="h-6 w-6" />, value: '500+', label: 'Online' },
    { icon: <Trophy className="h-6 w-6" />, value: '50+', label: 'Events' },
    { icon: <Sparkles className="h-6 w-6" />, value: '24/7', label: 'Active' },
  ];

  const features = [
    {
      title: 'Komunitas Aktif',
      description: 'Ribuan member aktif setiap hari dengan diskusi yang menarik',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Event Rutin',
      description: 'Giveaway, tournament, dan acara seru lainnya setiap minggu',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Lingkungan Aman',
      description: 'Moderasi aktif dan aturan yang jelas untuk kenyamanan bersama',
      gradient: 'from-green-500 to-emerald-500',
    },
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="mb-8"
          >
            <div className="relative">
              <motion.div
                className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto animate-morph"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src="https://ik.imagekit.io/psdoxljjy/logo-removebg-preview.png?updatedAt=1748393788409"
                  alt="Kaze Serenity"
                  className="h-20 w-20"
                />
              </motion.div>
              {/* Floating particles around logo */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
          >
            Welcome to{' '}
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Kaze Serenity
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            <a href="https://discord.gg/kazeindo"><strong>Kaze Serenity |</strong></a> <strong>Server Discord Indonesia</strong> yang merupakan tempat nongkrong bagi para gamer, kreator, dan pencari ketenangan untuk terhubung, berkembang, dan bergembira dalam lingkungan yang bersahabat dan suportif.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
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
              <span>Join Community</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <Link
              to="/about"
              className="group glass-card px-8 py-4 text-white text-lg font-semibold rounded-full flex items-center space-x-3 morph-hover"
            >
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 rounded-3xl text-center morph-hover"
              >
                <div className="text-cyan-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 glass-card rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Preview */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Mengapa Memilih{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Kaze Serenity?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Komunitas yang berkembang dengan fitur-fitur menarik dan lingkungan yang mendukung
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="glass-card p-8 rounded-3xl h-full morph-hover relative overflow-hidden">
                  {/* Animated background blob */}
                  <motion.div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-r ${feature.gradient} opacity-20 animate-blob-morph`}
                    whileHover={{ scale: 1.5, opacity: 0.3 }}
                  />
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-3xl mb-6 flex items-center justify-center animate-float-morph`}>
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Siap Bergabung dengan Kami?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Jangan tunggu lagi! Bergabunglah sekarang dan rasakan pengalaman komunitas Discord yang luar biasa
            </p>
            
            <motion.a
              href="https://discord.gg/kazeindo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="liquid-button px-12 py-5 text-white text-xl font-semibold rounded-full inline-flex items-center space-x-3"
            >
              <MessageSquare className="h-6 w-6" />
              <span>Join Discord Sekarang</span>
              <ArrowRight className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;