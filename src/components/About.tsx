import React from 'react';
import { Heart, Users, MessageSquare, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: 'Komunitas Positif',
      description: 'Ruang yang ramah dan inklusif di mana setiap orang merasa dihargai dan dihormati.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: 'Koneksi yang Bermakna',
      description: 'Jalinlah persahabatan yang baik dengan orang-orang yang berpikiran sama dan memiliki minat yang sama.'
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-500" />,
      title: 'Percakapan yang Menarik',
      description: 'Berpartisipasilah dalam diskusi menarik tentang permainan, seni, musik, dan banyak lagi.'
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: 'Lingkungan yang Aman',
      description: 'Moderasi & Staff aktif memastikan pengalaman positif bagi semua anggota.'
    }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section ref={ref} id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tentang Kaze Serenity
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "5rem" } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-indigo-600 mx-auto mb-8 rounded-full"
          />
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Kaze Serenity lebih dari sekadar server – ini adalah tempat perlindungan bagi para gamer, kreator, dan pencari ketenangan untuk terhubung, tumbuh, dan bersemangat dalam lingkungan yang ramah dan suportif. Komunitas kami menghargai kebaikan, kreativitas, dan hubungan yang tulus.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-indigo-50 dark:bg-gray-800 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:bg-indigo-100 dark:hover:bg-gray-700"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white dark:bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto shadow-sm"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-10 shadow-sm"
        >
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-indigo-800 dark:text-indigo-300 mb-4">
                Misi Kami
              </h3>
              <p className="text-indigo-900 dark:text-gray-300">
                Untuk menciptakan ruang daring yang dinamis tempat para anggota merasa dihargai, didukung, dan terinspirasi. Kami berusaha untuk membina hubungan yang tulus, merayakan kreativitas, dan memberikan pelarian positif dari tekanan kehidupan sehari-hari.
              </p>
            </div>
            <motion.div
              className="md:w-1/3 flex justify-center"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <img
                  src="https://ik.imagekit.io/psdoxljjy/logo-removebg-preview.png?updatedAt=1748393788409"
                  alt="Kaze Serenity Logo"
                  className="h-12 w-12 text-white"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;