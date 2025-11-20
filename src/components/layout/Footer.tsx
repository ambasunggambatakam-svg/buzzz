import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageSquare, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      href: 'https://discord.gg/kazeindo',
      label: 'Discord',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: 'https://www.instagram.com/kazeindo_/',
      label: 'Instagram',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      href: '#',
      label: 'YouTube',
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  const quickLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/about', label: 'Tentang' },
    { href: '/gallery', label: 'Galeri' },
    { href: '/leaderboard', label: 'Leaderboard' },
    { href: '/boost', label: 'Boost' }
  ];

  return (
    <footer className="relative mt-20">
      {/* Background Blob */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      <div className="relative glass border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center animate-blob-morph"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src="https://ik.imagekit.io/psdoxljjy/logo-removebg-preview.png?updatedAt=1748393788409"
                    alt="Kaze Serenity"
                    className="h-8 w-8"
                  />
                </motion.div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Kaze Serenity
                </span>
              </div>
              <p className="text-gray-300 max-w-md leading-relaxed">
                <span><strong><a href="https://discord.gg/kazeindo">Kaze Serenity | </a></strong>
                  </span><strong>Server Discord Indonesia</strong> yang merupakan tempat nongkrong bagi para gamer, kreator, dan pencari ketenangan untuk terhubung, berkembang, dan bergembira dalam lingkungan yang bersahabat dan suportif
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 morph-hover"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Connect</h3>
              <div className="flex flex-col space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <div className={`p-2 bg-gradient-to-r ${social.gradient} rounded-full animate-blob-morph`}>
                      {social.icon}
                    </div>
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Kaze Serenity. All rights reserved.
            </p>
            <motion.p
              className="text-gray-400 text-sm mt-4 md:mt-0 flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              Made with <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" /> by Kaze Serenity Team
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;