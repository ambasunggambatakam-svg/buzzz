import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Users, 
  Shield, 
  Heart, 
  CheckCircle, 
  ArrowRight,
  Gift,
  Trophy,
  Star
} from 'lucide-react';

const Join: React.FC = () => {
  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Komunitas Aktif',
      description: 'Bergabung dengan 1000+ member aktif dari seluruh dunia',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: 'Giveaway Rutin',
      description: 'Kesempatan memenangkan Discord Nitro, game, dan hadiah menarik lainnya',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Event Seru',
      description: 'Tournament, movie night, dan berbagai acara menarik setiap minggu',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Lingkungan Aman',
      description: 'Moderasi aktif 24/7 untuk menjaga kenyamanan semua member',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Persahabatan',
      description: 'Temukan teman baru dengan minat dan hobi yang sama',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Role Eksklusif',
      description: 'Dapatkan role khusus berdasarkan aktivitas dan kontribusi',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Klik Join Discord',
      description: 'Klik tombol join untuk masuk ke server Discord kami',
      icon: <MessageSquare className="h-8 w-8" />
    },
    {
      number: '02',
      title: 'Baca Rules',
      description: 'Pastikan untuk membaca dan memahami peraturan server',
      icon: <Shield className="h-8 w-8" />
    },
    {
      number: '03',
      title: 'Perkenalkan Diri',
      description: 'Perkenalkan diri di channel introduction untuk berkenalan',
      icon: <Users className="h-8 w-8" />
    },
    {
      number: '04',
      title: 'Mulai Berinteraksi',
      description: 'Mulai chat, join voice channel, dan nikmati komunitasnya!',
      icon: <Heart className="h-8 w-8" />
    }
  ];

  const faqs = [
    {
      question: 'Apakah gratis untuk bergabung?',
      answer: 'Ya, bergabung dengan Kaze Serenity sepenuhnya gratis! Tidak ada biaya tersembunyi.'
    },
    {
      question: 'Apa saja syarat untuk bergabung?',
      answer: 'Tidak ada syarat khusus. Yang penting adalah bersikap sopan dan mengikuti aturan server.'
    },
    {
      question: 'Bagaimana cara mendapatkan role?',
      answer: 'Role diberikan berdasarkan aktivitas, kontribusi, dan partisipasi dalam event-event server.'
    },
    {
      question: 'Apakah ada batasan umur?',
      answer: 'Server kami ramah untuk semua umur, namun beberapa channel mungkin memiliki batasan tertentu.'
    },
    {
      question: 'Bagaimana jika saya mengalami masalah?',
      answer: 'Tim moderator kami siap membantu 24/7. Hubungi staff melalui DM atau mention di server.'
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        {/* Animated Background */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5 backdrop-blur-sm"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="mb-8"
          >
            <img
              src="https://ik.imagekit.io/psdoxljjy/logo-removebg-preview.png?updatedAt=1748393788409"
              alt="Kaze Serenity"
              className="h-24 w-24 mx-auto"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Bergabung dengan{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Kaze Serenity
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-2 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mb-8 rounded-full"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12"
          >
            Jadilah bagian dari komunitas yang berkembang dan rasakan pengalaman Discord yang tak terlupakan
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="https://discord.gg/kazeindo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 shadow-2xl flex items-center space-x-3"
            >
              <MessageSquare className="h-6 w-6" />
              <span>Join Discord Sekarang</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Mengapa Bergabung dengan Kami?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Dapatkan berbagai keuntungan dan pengalaman menarik sebagai member Kaze Serenity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl blur-xl"
                     style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
                
                <div className="relative bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 h-full transition-all duration-300 group-hover:border-indigo-300 dark:group-hover:border-indigo-600">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg`}
                  >
                    {benefit.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Steps */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-indigo-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Cara Bergabung
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ikuti langkah-langkah sederhana ini untuk menjadi bagian dari komunitas kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-xl">
                  <div className="text-6xl font-bold text-indigo-200 dark:text-indigo-800 mb-4">
                    {step.number}
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg mx-auto"
                  >
                    {step.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Temukan jawaban untuk pertanyaan umum tentang bergabung dengan komunitas kami
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        {/* Animated Background */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Siap Bergabung dengan Keluarga Besar Kami?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Jangan tunggu lagi! Bergabunglah sekarang dan rasakan pengalaman komunitas Discord yang luar biasa
            </p>
            
            <motion.a
              href="https://discord.gg/kazeindo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white px-12 py-5 rounded-full text-xl font-semibold transition-all duration-300 shadow-2xl"
            >
              <MessageSquare className="h-6 w-6 mr-3" />
              Join Discord Sekarang
              <ArrowRight className="h-6 w-6 ml-3" />
            </motion.a>
            
            <p className="text-gray-300 mt-6 text-sm">
              * Gratis selamanya, tidak ada biaya tersembunyi
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Join;