import React from 'react';
import { Crown, Shield, Code, PartyPopper, Users, Star, Github, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TeamMember {
  username: string;
  avatar: string;
  bio?: string;
  additionalRole?: string;
  socials?: {
    github?: string;
    instagram?: string;
    twitter?: string;
  };
}

interface TeamSection {
  title: string;
  icon: React.ReactNode;
  gradient: string;
  bgGradient: string;
  borderColor: string;
  members: TeamMember[];
}

const TeamStructure: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamStructure: TeamSection[] = [
    {
      title: "Owner",
      icon: <Crown className="h-8 w-8 text-yellow-400" />,
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      bgGradient: "from-yellow-500/20 via-orange-500/20 to-red-500/20",
      borderColor: "border-yellow-400/50",
      members: [
        {
          username: "Near",
          avatar: "https://i.pinimg.com/736x/c9/7d/42/c97d42039abeff996d311fea0e1f5d51.jpg",
          bio: "Owner Server & Google Analytics",
          additionalRole: "Website Server & Owner Server",
          socials: {
            github: "https://github.com/near-developer",
            instagram: "https://instagram.com/near.dev"
          }
        },
        {
          username: "Meepo_CO",
          avatar: "https://cdn.discordapp.com/avatars/1116236451244421182/a_dfdc8097dc86df4575558e8dc6ece2b6.gif?size=4096",
          bio: "Co-Owner & Community Leader",
          additionalRole: "Owner Server",
          socials: {
            instagram: "https://instagram.com/meepo.co"
          }
        }
      ]
    },
    {
      title: "Developer Team",
      icon: <Code className="h-8 w-8 text-cyan-400" />,
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      bgGradient: "from-cyan-500/20 via-blue-500/20 to-indigo-600/20",
      borderColor: "border-cyan-400/50",
      members: [
        {
          username: "Bryan_Developer",
          avatar: "https://media1.tenor.com/m/mDnIiloFauUAAAAd/fujii-kaze-matsuri.gif",
          bio: "Full Stack Developer",
          additionalRole: "Website Server & Staff Server",
          socials: {
            github: "https://github.com/bryan-dev",
            instagram: "https://instagram.com/bryan.dev"
          }
        }
      ]
    },
    {
      title: "Staff Moderator",
      icon: <Shield className="h-8 w-8 text-emerald-400" />,
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      bgGradient: "from-emerald-500/20 via-green-500/20 to-teal-600/20",
      borderColor: "border-emerald-400/50",
      members: [
        {
          username: "ERr_Staff",
          avatar: "https://i.pinimg.com/736x/60/e2/86/60e286d92c17c2cff4fdb46e13c3e91e.jpg",
          bio: "Senior Moderator",
          additionalRole: "Staff Server",
          socials: {
            instagram: "https://instagram.com/err.staff"
          }
        },
        {
          username: "Ryrii_Staff",
          avatar: "https://i.pinimg.com/736x/64/7c/42/647c42329d09ad361df6daca81cb8281.jpg",
          bio: "Community Moderator",
          additionalRole: "Staff Server",
          socials: {
            instagram: "https://instagram.com/ryrii.staff"
          }
        },
        {
          username: "Alex Xian Kenzo",
          avatar: "https://i.pinimg.com/736x/51/d6/9b/51d69b890732548e1380d9eed86493b0.jpg",
          bio: "Active Moderator",
          additionalRole: "Staff Server",
          socials: {
            instagram: "https://instagram.com/alex.kenzo"
          }
        },
        {
          username: "Tyaa-chan",
          avatar: "https://i.pinimg.com/736x/02/b6/9f/02b69f8979be958a58d71521838814cb.jpg",
          bio: "Community Helper",
          additionalRole: "Staff Server",
          socials: {
            instagram: "https://instagram.com/tyaa.chan"
          }
        },
        {
          username: "Haru_Staff",
          avatar: "https://cdn.discordapp.com/attachments/1333697196159143970/1376094619854573618/leon_senter.gif?ex=68530ebb&is=6851bd3b&hm=43d222d876ebabf46a908b5e22cf679b8b2a402c58abe4b15b14678aab67ad2b&",
          bio: "Friendly Moderator",
          additionalRole: "Staff Server",
          socials: {
            instagram: "https://instagram.com/haru.staff"
          }
        },
        {
          username: "Eumzaa_Staff",
          avatar: "https://i.pinimg.com/736x/a6/f6/0a/a6f60a220f30782b4e40aba01189069e.jpg",
          bio: "Dedicated Staff",
          additionalRole: "Staff Server",
          socials: {
            instagram: "https://instagram.com/eumzaa.staff"
          }
        }
      ]
    },
    {
      title: "Event Organizer",
      icon: <PartyPopper className="h-8 w-8 text-pink-400" />,
      gradient: "from-pink-400 via-purple-500 to-violet-600",
      bgGradient: "from-pink-500/20 via-purple-500/20 to-violet-600/20",
      borderColor: "border-pink-400/50",
      members: [
        {
          username: "EventMaster_Kaze",
          avatar: "https://i.pinimg.com/736x/d0/d8/cb/d0d8cb80bdf6ddddec926e7eda3c4b9a.jpg",
          bio: "Creative Event Planner",
          additionalRole: "Event Coordinator",
          socials: {
            instagram: "https://instagram.com/eventmaster.kaze"
          }
        }
      ]
    },
    {
      title: "Active Members",
      icon: <Users className="h-8 w-8 text-indigo-400" />,
      gradient: "from-indigo-400 via-purple-500 to-pink-500",
      bgGradient: "from-indigo-500/20 via-purple-500/20 to-pink-500/20",
      borderColor: "border-indigo-400/50",
      members: [
        {
          username: "yooooeeeeee",
          avatar: "https://ik.imagekit.io/1yqrowr2y/d63fc8a540bb0bf2dc4c32f722dccf6f.png?updatedAt=1750202278242",
          bio: "Top Voice Champion",
          additionalRole: "Community Leader"
        },
        {
          username: "ky",
          avatar: "https://ik.imagekit.io/xaa3pofzg/ki.png?updatedAt=1750789205242",
          bio: "Top 2 Voice",
          additionalRole: "Active Member"
        },
        {
          username: "reyzenzou",
          avatar: "https://ik.imagekit.io/1yqrowr2y/a89708e7485323efb36b16d44cee1c48.png?updatedAt=1750202278749",
          bio: "Top 3 Voice",
          additionalRole: "Community Member"
        }
      ]
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <Github className="h-4 w-4" />;
      case 'instagram':
        return <Instagram className="h-4 w-4" />;
      case 'twitter':
        return <Twitter className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <section
      ref={ref}
      id="team"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{
              duration: 3,
              delay: index * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            animate={{
              textShadow: [
                "0 0 20px rgba(99, 102, 241, 0.5)",
                "0 0 40px rgba(168, 85, 247, 0.8)",
                "0 0 20px rgba(99, 102, 241, 0.5)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
          >
            🏛️ Tim Kaze Serenity
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "8rem" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"
          />
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Kenali tim luar biasa yang membuat komunitas Kaze Serenity menjadi tempat yang istimewa untuk semua anggota.
          </p>
        </motion.div>

        {/* Team Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {teamStructure.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              variants={sectionVariants}
              className="relative"
            >
              {/* Section Header */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`flex items-center justify-center mb-12 bg-gradient-to-r ${section.bgGradient} backdrop-blur-md rounded-2xl p-6 border-2 ${section.borderColor} relative overflow-hidden`}
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: sectionIndex * 0.5
                  }}
                  className={`p-4 bg-gradient-to-br ${section.gradient} rounded-2xl mr-4 shadow-lg`}
                >
                  {section.icon}
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {section.title}
                </h3>
                <motion.div
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-4 right-4"
                >
                  <Star className="h-6 w-6 text-yellow-400" />
                </motion.div>
              </motion.div>

              {/* Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {section.members.map((member, memberIndex) => (
                  <motion.div
                    key={member.username}
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    className={`relative bg-gradient-to-br ${section.bgGradient} backdrop-blur-md rounded-2xl p-6 border-2 ${section.borderColor} hover:border-opacity-80 transition-all duration-300 group overflow-hidden`}
                  >
                    {/* Card glow effect */}
                    <motion.div
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: memberIndex * 0.3
                      }}
                      className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-20 rounded-2xl`}
                    />

                    <div className="relative z-10">
                      {/* Avatar */}
                      <motion.div
                        whileHover={{ rotate: 5 }}
                        className="relative mb-4 mx-auto w-20 h-20"
                      >
                        <motion.img
                          animate={{
                            boxShadow: [
                              `0 0 20px rgba(99, 102, 241, 0.3)`,
                              `0 0 40px rgba(168, 85, 247, 0.6)`,
                              `0 0 20px rgba(99, 102, 241, 0.3)`
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          src={member.avatar}
                          alt={member.username}
                          className="w-20 h-20 rounded-full object-cover border-4 border-white/20 group-hover:border-white/40 transition-all duration-300"
                        />
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center"
                        >
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </motion.div>
                      </motion.div>

                      {/* Username */}
                      <h4 className="text-xl font-bold text-white mb-2 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {member.username}
                      </h4>

                      {/* Bio */}
                      {member.bio && (
                        <p className="text-gray-300 text-sm text-center mb-2">
                          {member.bio}
                        </p>
                      )}

                      {/* Additional Role */}
                      {member.additionalRole && (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-center text-gray-200 mb-4 border border-white/20"
                        >
                          {member.additionalRole}
                        </motion.div>
                      )}

                      {/* Social Links */}
                      {member.socials && (
                        <div className="flex justify-center space-x-3 mt-4">
                          {Object.entries(member.socials).map(([platform, url]) => (
                            <motion.a
                              key={platform}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                            >
                              {getSocialIcon(platform)}
                            </motion.a>
                          ))}
                        </div>
                      )}

                      {/* Hover sparkle effect */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute top-2 right-2"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Star className="h-4 w-4 text-yellow-400" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 backdrop-blur-md rounded-2xl p-12 border border-white/10 relative overflow-hidden"
        >
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
              className="inline-block mb-6"
            >
              <Users className="h-20 w-20 text-purple-400 mx-auto" />
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ingin Bergabung dengan Tim Kami?
            </h3>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Kami selalu mencari anggota baru yang passionate dan ingin berkontribusi untuk komunitas. Lihat posisi yang tersedia dan bergabunglah dengan keluarga Kaze Serenity!
            </p>
            
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              href="#staff-recruitment"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 shadow-2xl group relative overflow-hidden"
            >
              <motion.div
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
              
              <Shield className="h-6 w-6 mr-3 group-hover:animate-bounce" />
              <span className="relative z-10">Lihat Posisi Tersedia</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamStructure;