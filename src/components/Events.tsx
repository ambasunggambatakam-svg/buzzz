import React from 'react';
import { Calendar, Gift, Trophy, Film } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Events: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const giveaways = [
    {
      title: "Discord Nitro Giveaway",
      description: "Dapatkan kesempatan untuk memenangkan Discord Nitro 1 hingga 3 bulan!",
      icon: <Gift className="h-6 w-6 text-pink-500" />,
      prize: "Discord Nitro",
      style: "bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 border-pink-300 dark:border-pink-800",
    },
    {
      title: "E-Wallet Giveaway",
      description: "Dapatkan kesempatan untuk memenangkan saldo E-Wallet!",
      icon: <Gift className="h-6 w-6 text-blue-500" />,
      prize: "E-Wallet Balance",
      style: "bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-300 dark:border-blue-800",
    },
    {
      title: "Dan masih banyak lagi!",
      description: "Ikuti giveaway kami untuk kesempatan memenangkan hadiah menarik lainnya!",
      icon: <Gift className="h-6 w-6 text-green-500" />,
      prize: "Join Discord info lanjut!",
      style: "bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20 border-green-300 dark:border-green-800",
    },
  ];

  const events = [
    {
      title: "Game Tournament",
      description: "Ikuti turnamen game untuk memenangkan hadiah menarik!",
      date: "Info Lengkap Discord",
      icon: <Trophy className="h-6 w-6 text-amber-500" />,
    },
    {
      title: "Night Podcast",
      description: "Dengarkan podcast malam yang menarik dengan tamu spesial!",
      date: "Info Lengkap Discord",
      icon: <Film className="h-6 w-6 text-indigo-500" />,
    },
    {
      title: "Community Game Night",
      description: "Play party games with other members in a casual, fun environment.",
      date: "Info Lengkap Discord",
      icon: <Calendar className="h-6 w-6 text-purple-500" />,
    },
  ];

  const testimonials = [
    {
      quote: "Cobalah untuk fokus terhadap mimpi mu sendiri. Nothing to lose, or nothing to be. (you're on your own).",
      name: "Near",
      avatar: "https://i.pinimg.com/736x/c9/7d/42/c97d42039abeff996d311fea0e1f5d51.jpg",
    },
    {
      quote: "She’ll probably never read this. But if she does—yes, it was always about you, shrimp buddy.",
      name: "Meepo",
      avatar: "https://ik.imagekit.io/xaa3pofzg/meepo.png?updatedAt=1750786702443",
    },
    {
      quote: "usahamu adalah hasilmu, ubah kelemahanmu menjadi kekuatanmu.",
      name: "ERr_Staff Server",
      avatar: "https://i.pinimg.com/736x/60/e2/86/60e286d92c17c2cff4fdb46e13c3e91e.jpg",
    },
    {
      quote: "愛される為に 愛すのは悲劇 Mencintai agar dicintai adalah sebuah tragedi - Michi Teyu Ku by Fujii Kaze",
      name: "Bryan_Developer Website Server & Staff Server",
      avatar: "https://media1.tenor.com/m/mDnIiloFauUAAAAd/fujii-kaze-matsuri.gif",
    },
    {
      quote: "Kalau memang boleh mencintai, kenapa harus aku yang terjatuh terlalu dalam.",
      name: "Ryrii_Staff Server",
      avatar: "https://i.pinimg.com/736x/64/7c/42/647c42329d09ad361df6daca81cb8281.jpg",
    },
    {
      quote: "Aku nak es krim.",
      name: "Alex Xian Kenzo_Staff Server",
      avatar: "https://i.pinimg.com/736x/51/d6/9b/51d69b890732548e1380d9eed86493b0.jpg",
    },

    {
      quote: "jangan ragu untuk melangkah maju, ambil resikonya, nikmati prosesnya, dan nantikan hasilnyaa.",
      name: "Tyaa-chan_Staff Server",
      avatar: "https://i.pinimg.com/736x/02/b6/9f/02b69f8979be958a58d71521838814cb.jpg",
    },
    {
      quote: "Jika mata adalah cahaya, Maka hati adalah permata, Jika senyum adalah ibadah, Maka mengenalmu adalah anugerah",
      name: "Haru_Staff Server",
      avatar: "https://cdn.discordapp.com/attachments/1333697196159143970/1376094619854573618/leon_senter.gif?ex=68530ebb&is=6851bd3b&hm=43d222d876ebabf46a908b5e22cf679b8b2a402c58abe4b15b14678aab67ad2b&",
    },
    {
      quote: "If loving you is a sin, Then I'll gladly become a sinner. Jiee, My beloved",
      name: "Eumzaa_Staff Server",
      avatar: "https://i.pinimg.com/736x/a6/f6/0a/a6f60a220f30782b4e40aba01189069e.jpg",
    },
  ];

  return (
    <section
      ref={ref}
      id="events"
      className="py-16 md:py-24 bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Events & Giveaways
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "5rem" } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-1.5 bg-indigo-600 mx-auto mb-8 rounded-full"
          />
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Kami menyelenggarakan acara rutin dan memberikan hadiah menarik untuk menjaga komunitas kami tetap solid dan seru.
          </p>
        </motion.div>

        {/* Giveaways */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-indigo-800 dark:text-indigo-300 mb-6"
        >
          Giveaway
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {giveaways.map((giveaway, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`rounded-xl border p-6 hover:shadow-md ${giveaway.style}`}
            >
              <div className="flex justify-between items-start mb-4">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-sm"
                >
                  {giveaway.icon}
                </motion.div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {giveaway.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {giveaway.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium bg-white dark:bg-gray-800 px-3 py-1 rounded-full dark:text-gray-300">
                  Prize: {giveaway.prize}
                </span>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://discord.gg/kazeindo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm font-medium"
                >
                  Enter Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Events */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-indigo-800 dark:text-indigo-300 mb-6"
        >
          Events
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border bg-white dark:bg-gray-800 p-6 hover:shadow-md"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-800/20 rounded-full">
                  {event.icon}
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {event.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {event.description}
              </p>
              <span className="text-sm font-medium bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full dark:text-gray-300">
                {event.date}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Staff Testimonials */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-indigo-800 dark:text-indigo-300 mb-6"
        >
          Staff Testimonials
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border hover:shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h5 className="text-sm font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h5>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                “{testimonial.quote}”
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
