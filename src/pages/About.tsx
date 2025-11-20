import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Shield, Code, Users, Star } from 'lucide-react';

const About: React.FC = () => {
  const teamStructure = [
    {
      title: "Owner",
      icon: <Crown className="h-8 w-8" />,
      gradient: "from-yellow-400 to-orange-500",
      members: [
        {
          username: "Near_Developer",
          avatar: "https://i.pinimg.com/736x/c9/7d/42/c97d42039abeff996d311fea0e1f5d51.jpg",
          role: "Owner Server & Google Analytics",
          description: "Pemimpin komunitas yang membangun visi Kaze Serenity",
        },
        {
          username: "Meepo",
          avatar: "https://ik.imagekit.io/lhtvft4ai/mepoo.png?updatedAt=1761928272398",
          role: "Co-Owner & Community Leader",
          description: "Membantu mengelola dan mengembangkan komunitas",
        }
      ]
    },
    {
      title: "Developer",
      icon: <Code className="h-8 w-8" />,
      gradient: "from-cyan-400 to-blue-500",
      members: [
        {
          username: "Bryan_Developer",
          avatar: "https://media1.tenor.com/m/mDnIiloFauUAAAAd/fujii-kaze-matsuri.gif",
          role: "Frontend & Mobile Developer",
          description: "Mengembangkan website server",
        },
        {
          username: "Near_Developer",
          avatar: "https://i.pinimg.com/736x/c9/7d/42/c97d42039abeff996d311fea0e1f5d51.jpg",
          role: "Owner Server & Google Analytics",
          description: "Pemimpin komunitas yang membangun visi Kaze Serenity",
        },
        {
          username: "Haruka_Senhiora",
          avatar: "https://ik.imagekit.io/lhtvft4ai/leon_senter.gif?updatedAt=1751304790424",
          role: "Junior Web Developer",
          description: "Melakukan maintenance Website Kaze Serenity",
        }
      ]
    },
    {
      title: "Staff",
      icon: <Shield className="h-8 w-8" />,
      gradient: "from-emerald-400 to-green-500",
      members: [
        {
          username: "ERr",
          avatar: "https://ik.imagekit.io/lhtvft4ai/err.png?updatedAt=1759307947338",
          role: "Moderator",
          description: "Aktif dalam moderasi dan event",
        },{
          username: "Haruka",
          avatar: "https://ik.imagekit.io/xaa3pofzg/leon_senter.gif?updatedAt=1750787323762",
          role: "Moderator",
          description: "Aktif dalam moderasi dan event",
        },
        {
          username: "Alex Xian Kenzo",
          avatar: "https://i.pinimg.com/736x/51/d6/9b/51d69b890732548e1380d9eed86493b0.jpg",
          role: "Moderator",
          description: "Aktif dalam moderasi dan event",
        },
        {
          username: "Tyaa-Chan",
          avatar: "https://ik.imagekit.io/lhtvft4ai/tya.png?updatedAt=1761927692149",
          role: "Moderator",
          description: "Aktif dalam moderasi dan event",
        },
        {
          username: "Ryrii",
          avatar: "https://ik.imagekit.io/lhtvft4ai/ryriii.png?updatedAt=1761927392712",
          role: "Moderator",
          description: "Aktif dalam moderasi dan event",
        },
        {
          username: "Eumzaa",
          avatar: "https://ik.imagekit.io/lhtvft4ai/umzaaa.png?updatedAt=1762438892670",
          role: "Moderator",
          description: "Aktif dalam moderasi dan event",
        },
        {
          username: "Elsi",
          avatar: "https://ik.imagekit.io/lhtvft4ai/elsi.png?updatedAt=1761927692070",
          role: "Moderator",
          description: "Aktif dalam moderasi dan event",
        },
        {
          username: "Frawn",
          avatar: "https://ik.imagekit.io/lhtvft4ai/ada%20eyetalk.gif?updatedAt=1761928134760",
          role: "General Manager",
          description: "Aktif dalam moderasi dan event",
        },
        {
          username: "Aisha",
          avatar: "https://ik.imagekit.io/lhtvft4ai/shaa.jpg?updatedAt=1762438820595",
          role: "General Manager",
          description: "Aktif dalam moderasi dan event",
        }
      ]
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
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto animate-morph">
              <img
                src="https://ik.imagekit.io/psdoxljjy/logo-removebg-preview.png?updatedAt=1748393788409"
                alt="Kaze Serenity"
                className="h-16 w-16"
              />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Tentang{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Kaze Serenity
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto"
          >
            Struktur organisasi dan tim yang membuat komunitas kami berkembang
          </motion.p>
        </div>
      </section>

      {/* Team Structure */}
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
              Struktur Tim
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Kenali tim luar biasa yang membuat komunitas Kaze Serenity menjadi tempat yang istimewa
            </p>
          </motion.div>

          <div className="space-y-20">
            {teamStructure.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
                className="relative"
              >
                {/* Section Header */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass p-8 rounded-3xl mb-12 text-center relative overflow-hidden"
                >
                  <motion.div
                    className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${section.gradient} animate-gradient`}
                  />
                  
                  <div className="flex items-center justify-center mb-4">
                    <motion.div
                      className={`p-4 bg-gradient-to-r ${section.gradient} rounded-3xl mr-4 animate-float-morph`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      {section.icon}
                    </motion.div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                      {section.title}
                    </h3>
                  </div>
                </motion.div>

                {/* Members Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.members.map((member, memberIndex) => (
                    <motion.div
                      key={member.username}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: memberIndex * 0.1 }}
                      className="relative group"
                    >
                      <div className="glass-card p-8 rounded-3xl h-full morph-hover relative overflow-hidden">
                        {/* Animated background blob */}
                        <motion.div
                          className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r ${section.gradient} opacity-10 animate-blob-morph`}
                          whileHover={{ scale: 1.5, opacity: 0.2 }}
                        />

                        {/* Avatar */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="relative mb-6 mx-auto w-24 h-24"
                        >
                          <img
                            src={member.avatar}
                            alt={member.username}
                            className="w-24 h-24 rounded-full object-cover border-4 border-white/20 animate-blob-morph"
                          />
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                            className="absolute -top-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center"
                          >
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </motion.div>
                        </motion.div>

                        {/* Info */}
                        <div className="text-center">
                          <h4 className="text-xl font-bold text-white mb-2">
                            {member.username}
                          </h4>
                          <div className={`text-sm font-medium mb-4 bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}>
                            {member.role}
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {member.description}
                          </p>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass p-10 rounded-3xl relative overflow-hidden morph-hover"
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-blue-500 animate-gradient"
              />
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center mr-4 animate-float-morph">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">
                  Misi Kami
                </h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Untuk menciptakan ruang daring yang dinamis tempat para anggota merasa dihargai, 
                didukung, dan terinspirasi. Kami berusaha untuk membina hubungan yang tulus, 
                merayakan kreativitas, dan memberikan pelarian positif dari tekanan kehidupan sehari-hari.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass p-10 rounded-3xl relative overflow-hidden morph-hover"
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-pink-500 animate-gradient"
              />
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center mr-4 animate-float-morph">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">
                  Visi Kami
                </h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Menjadi komunitas Discord terdepan yang dikenal karena kehangatan, inklusivitas, 
                dan inovasinya. Kami membayangkan masa depan di mana setiap anggota dapat berkembang, 
                mengekspresikan diri dengan bebas, dan menemukan rumah kedua mereka di dunia digital.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;