import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Instagram, 
  Mail, 
  MapPin, 
  Clock, 
  Users,
  Send,
  ExternalLink
} from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Discord Server',
      description: 'Cara tercepat untuk menghubungi kami',
      link: 'https://discord.gg/kazeindo',
      linkText: 'Join Server',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Instagram className="h-8 w-8" />,
      title: 'Instagram',
      description: 'Follow untuk update terbaru',
      link: 'https://www.instagram.com/kazeindo_/',
      linkText: '@kazeindo_',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Email',
      description: 'Untuk pertanyaan formal',
      link: 'mailto:contact@kazeserenity.com',
      linkText: 'contact@kazeserenity.com',
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  const teamMembers = [
    {
      name: 'Near_Developer',
      role: 'Owner & Developer',
      avatar: 'https://i.pinimg.com/736x/c9/7d/42/c97d42039abeff996d311fea0e1f5d51.jpg',
      description: 'Founder dan developer utama server',
      socials: {
        instagram: 'https://instagram.com/near.dev'
      }
    },
    {
      name: 'Meepo_CO',
      role: 'Co-Owner',
      avatar: 'https://cdn.discordapp.com/avatars/1116236451244421182/a_dfdc8097dc86df4575558e8dc6ece2b6.gif?size=4096',
      description: 'Co-owner yang membantu mengelola komunitas',
      socials: {
        instagram: 'https://instagram.com/meepo.co'
      }
    },
    {
      name: 'Bryan_Developer',
      role: 'Developer',
      avatar: 'https://media1.tenor.com/m/mDnIiloFauUAAAAd/fujii-kaze-matsuri.gif',
      description: 'Developer website dan sistem bot',
      socials: {
        instagram: 'https://instagram.com/bryan.dev'
      }
    }
  ];

  const quickInfo = [
    {
      icon: <Users className="h-6 w-6" />,
      label: 'Active Members',
      value: '5,000+'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      label: 'Response Time',
      value: '< 1 Hour'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: 'Timezone',
      value: 'WIB (GMT+7)'
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        {/* Animated Background */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5 backdrop-blur-sm"
            style={{
              width: Math.random() * 150 + 75,
              height: Math.random() * 150 + 75,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="mb-8"
          >
            <MessageSquare className="h-20 w-20 text-blue-400 mx-auto" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Hubungi{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Kami
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-2 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 rounded-full"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto"
          >
            Punya pertanyaan, saran, atau ingin berkolaborasi? Kami siap membantu dan mendengar dari Anda!
          </motion.p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {quickInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-3 flex justify-center">
                  {info.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {info.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {info.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
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
              Cara Menghubungi Kami
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Pilih cara yang paling nyaman untuk Anda berkomunikasi dengan tim kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl blur-xl"
                     style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
                
                <div className="relative bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 h-full transition-all duration-300 group-hover:border-indigo-300 dark:group-hover:border-indigo-600 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg mx-auto`}
                  >
                    {method.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {method.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {method.description}
                  </p>
                  
                  <motion.a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center bg-gradient-to-r ${method.gradient} text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <span>{method.linkText}</span>
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Tim Kami
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Kenali orang-orang di balik Kaze Serenity yang siap membantu Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-xl text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative mb-6"
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-indigo-200 dark:border-indigo-800"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                
                <div className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                  {member.role}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                  {member.description}
                </p>
                
                <div className="flex justify-center space-x-3">
                  {Object.entries(member.socials).map(([platform, url]) => (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full hover:shadow-lg transition-all duration-300"
                    >
                      <Instagram className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
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
              Siap Terhubung dengan Kami?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Jangan ragu untuk menghubungi kami kapan saja. Tim kami siap membantu dan menjawab semua pertanyaan Anda!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="https://discord.gg/kazeindo"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Join Discord
              </motion.a>
              
              <motion.a
                href="https://www.instagram.com/kazeindo_/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center border-2 border-white/30 hover:border-white/60 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                <Instagram className="h-5 w-5 mr-2" />
                Follow Instagram
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;