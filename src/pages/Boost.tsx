import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Crown, 
  Volume2, 
  Shield, 
  Star, 
  Users, 
  MessageSquare,
  Check,
  X,
  ArrowRight
} from 'lucide-react';

const Boost: React.FC = () => {
  const [activeView, setActiveView] = useState<'boosted' | 'regular'>('boosted');

  const benefits = [
    {
      feature: 'Custom Role',
      boosted: true,
      regular: false,
      icon: <Crown className="h-5 w-5" />,
      description: 'Role khusus dengan warna dan nama sesuai keinginan'
    },
    {
      feature: 'Akses Soundboard',
      boosted: true,
      regular: false,
      icon: <Volume2 className="h-5 w-5" />,
      description: 'Gunakan soundboard eksklusif di voice channel'
    },
    {
      feature: 'Badge Eksklusif',
      boosted: true,
      regular: false,
      icon: <Star className="h-5 w-5" />,
      description: 'Badge khusus yang menunjukkan status booster'
    },
    {
      feature: 'Channel Rahasia',
      boosted: true,
      regular: false,
      icon: <Shield className="h-5 w-5" />,
      description: 'Akses ke channel khusus booster'
    },
    {
      feature: 'Ping Prioritas',
      boosted: true,
      regular: false,
      icon: <MessageSquare className="h-5 w-5" />,
      description: 'Prioritas dalam mendapat respon dari staff'
    },
    {
      feature: 'Voting Hak Khusus',
      boosted: true,
      regular: false,
      icon: <Users className="h-5 w-5" />,
      description: 'Hak voting lebih dalam keputusan server'
    },
    {
      feature: 'Chat Umum',
      boosted: true,
      regular: true,
      icon: <MessageSquare className="h-5 w-5" />,
      description: 'Akses ke semua channel chat umum'
    },
    {
      feature: 'Voice Channel',
      boosted: true,
      regular: true,
      icon: <Volume2 className="h-5 w-5" />,
      description: 'Bergabung dengan voice channel publik'
    },
    {
      feature: 'Event Participation',
      boosted: true,
      regular: true,
      icon: <Star className="h-5 w-5" />,
      description: 'Ikut serta dalam event dan giveaway'
    }
  ];

  const exclusiveBenefits = benefits.filter(b => b.boosted && !b.regular);
  const commonBenefits = benefits.filter(b => b.boosted && b.regular);

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
              <Zap className="h-12 w-12 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Server{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Boost Benefits
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto"
          >
            Bandingkan keuntungan antara Boosted User dan Regular User
          </motion.p>
        </div>
      </section>

      {/* Comparison Toggle */}
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
                onClick={() => setActiveView('boosted')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeView === 'boosted'
                    ? 'liquid-button text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Zap className="h-5 w-5" />
                <span>Boosted User</span>
              </motion.button>
              <motion.button
                onClick={() => setActiveView('regular')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeView === 'regular'
                    ? 'liquid-button text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Users className="h-5 w-5" />
                <span>Regular User</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Side by Side Comparison */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Boosted User */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`glass p-8 rounded-3xl relative overflow-hidden morph-hover ${
                activeView === 'boosted' ? 'ring-2 ring-purple-400' : ''
              }`}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-pink-500 animate-gradient"
              />
              
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-float-morph">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Boosted User</h3>
                <p className="text-purple-300">Pengalaman premium dengan fitur eksklusif</p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center space-x-3 p-3 rounded-2xl transition-all duration-300 ${
                      benefit.boosted 
                        ? 'bg-green-500/10 border border-green-500/20' 
                        : 'bg-red-500/10 border border-red-500/20'
                    }`}
                  >
                    <div className={`p-2 rounded-full ${
                      benefit.boosted 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {benefit.boosted ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{benefit.feature}</div>
                      <div className="text-gray-300 text-sm">{benefit.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Regular User */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`glass p-8 rounded-3xl relative overflow-hidden morph-hover ${
                activeView === 'regular' ? 'ring-2 ring-blue-400' : ''
              }`}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-cyan-500 animate-gradient"
              />
              
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-float-morph">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Regular User</h3>
                <p className="text-blue-300">Akses standar ke fitur komunitas</p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center space-x-3 p-3 rounded-2xl transition-all duration-300 ${
                      benefit.regular 
                        ? 'bg-green-500/10 border border-green-500/20' 
                        : 'bg-red-500/10 border border-red-500/20'
                    }`}
                  >
                    <div className={`p-2 rounded-full ${
                      benefit.regular 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {benefit.regular ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{benefit.feature}</div>
                      <div className="text-gray-300 text-sm">{benefit.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Exclusive Benefits Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-12 rounded-3xl text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Keuntungan Eksklusif{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Booster
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {exclusiveBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.feature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-3xl morph-hover"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-float-morph">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{benefit.feature}</h4>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://discord.gg/kazeindo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="liquid-button px-12 py-5 text-white text-xl font-semibold rounded-full inline-flex items-center space-x-3"
            >
              <Zap className="h-6 w-6" />
              <span>Boost Server Sekarang</span>
              <ArrowRight className="h-6 w-6" />
            </motion.a>
            
            <p className="text-gray-300 mt-6 text-sm">
              * Boost server untuk mendapatkan semua keuntungan eksklusif
            </p>
          </motion.div>
        </div>
      </section>

      {/* Animated Comparison */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transformasi dengan Boost
            </h3>
            <p className="text-xl text-gray-300">
              Lihat bagaimana pengalaman Anda berubah dengan server boost
            </p>
          </motion.div>

          <motion.div
            className="glass p-8 rounded-3xl relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-center space-x-8">
              {/* Before */}
              <motion.div
                animate={activeView === 'regular' ? { scale: 1.1, opacity: 1 } : { scale: 0.9, opacity: 0.6 }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-blob-morph">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Regular User</h4>
                <p className="text-gray-300 text-sm">Akses terbatas</p>
              </motion.div>

              {/* Arrow */}
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-purple-400"
              >
                <ArrowRight className="h-8 w-8" />
              </motion.div>

              {/* After */}
              <motion.div
                animate={activeView === 'boosted' ? { scale: 1.1, opacity: 1 } : { scale: 0.9, opacity: 0.6 }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-blob-morph">
                  <Zap className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Boosted User</h4>
                <p className="text-purple-300 text-sm">Akses premium</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Boost;