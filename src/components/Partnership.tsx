import React from 'react';
import { Check, Award, Users, Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Partnership: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const partnerBenefits = [
    {
      title: "Role Ekslusif",
      description: "Dapatkan peran eksklusif di server kami",
      supporter: true,
      partner: true
    },
    {
      title: "Prioritas Dukungan",
      description: "Dapatkan dukungan prioritas dari tim kami",
      supporter: true,
      partner: true
    },
    {
      title: "Akses Awal ke Event",
      description: "Dapatkan akses awal ke event kami",
      supporter: true,
      partner: true
    },
    {
      title: "Promosi Server",
      description: "Dapatkan promosi untuk server Anda di saluran kami",
      supporter: false,
      partner: true
    },
    {
      title: "Akses Soundboard",
      description: "Gunakan soundboard eksklusif di server kami",
      supporter: false,
      partner: true
    },
    {
      title: "Giveaway Kolaborasi",
      description: "Buat giveaway kolaborasi bersama kami",
      supporter: false,
      partner: true
    }
  ];

  const steps = [
    {
      icon: <Users className="h-6 w-6 text-indigo-500" />,
      title: "Taruh link undangan server kami",
      description: "Tempatkan tautan undangan server kami di server Discord, situs web, atau bio media sosial Anda"
    },
    {
      icon: <Award className="h-6 w-6 text-indigo-500" />,
      title: "Kirim Tangkapan Layar",
      description: "Kirim tangkapan layar promosi Anda ke staff kemitraan kami"
    },
    {
      icon: <Gift className="h-6 w-6 text-indigo-500" />,
      title: "Nikmati Benefits",
      description: "Terima peran mitra Anda dan buka keuntungan eksklusif"
    }
  ];

  return (
    <section ref={ref} id="partnership" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Partnership & Supporter Program
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "5rem" } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-1.5 bg-indigo-600 mx-auto mb-8 rounded-full"
          />
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Bergabunglah dengan program kemitraan kami untuk tumbuh bersama dan mendapatkan manfaat eksklusif bagi Anda dan komunitas Anda.
          </p>
        </motion.div>

        <div className="relative mb-20">
          <div className="absolute inset-0 flex justify-center">
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 1 }}
              className="w-1 bg-indigo-100 dark:bg-indigo-900"
            />
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative grid gap-8 md:grid-cols-3"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-indigo-100 dark:border-indigo-900 flex flex-col items-center text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center justify-center bg-indigo-500 text-white rounded-full w-10 h-10 font-bold mb-4"
                >
                  {index + 1}
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.3 }}
                  className="flex items-center justify-center mb-4"
                >
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                    {step.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-10"
        >
          <h3 className="text-2xl font-bold text-center text-indigo-800 dark:text-indigo-300 mb-8">
            Benefit yang didapat antara Supporter dan Partner
          </h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="grid grid-cols-3 gap-4 items-center bg-white dark:bg-gray-800 rounded-lg p-4"
              >
                <div className="col-span-1">
                  <p className="font-medium text-gray-800 dark:text-white">{benefit.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{benefit.description}</p>
                </div>
                <div className="col-span-1 text-center">
                  {benefit.supporter ? (
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="flex justify-center"
                    >
                      <Check className="h-6 w-6 text-green-500" />
                    </motion.div>
                  ) : (
                    <div className="h-6 flex items-center justify-center">
                      <span className="block w-4 h-0.5 bg-gray-300 dark:bg-gray-600 rounded"></span>
                    </div>
                  )}
                </div>
                <div className="col-span-1 text-center">
                  {benefit.partner ? (
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="flex justify-center"
                    >
                      <Check className="h-6 w-6 text-green-500" />
                    </motion.div>
                  ) : (
                    <div className="h-6 flex items-center justify-center">
                      <span className="block w-4 h-0.5 bg-gray-300 dark:bg-gray-600 rounded"></span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://forms.gle/7Zhwg7WpSAEgP8xP7"
            className="inline-block bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Ajukan Permohonan Kerjasama
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnership;
