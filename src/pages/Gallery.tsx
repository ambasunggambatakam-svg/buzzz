import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, Upload } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'events', label: 'Events' },
    { id: 'community', label: 'Community' },
    { id: 'moments', label: 'Moments' },
  ];

  const galleryItems = [
    {
      id: 1,
      src: 'https://i.pinimg.com/736x/d0/d8/cb/d0d8cb80bdf6ddddec926e7eda3c4b9a.jpg',
      title: 'Community Event',
      category: 'events',
      description: 'Salah satu event seru yang kami adakan'
    },
    {
      id: 2,
      src: 'https://i.pinimg.com/736x/56/db/0d/56db0d4aef30da75f3cc7acb1f759d7d.jpg',
      title: 'Member Spotlight',
      category: 'community',
      description: 'Member aktif dalam komunitas kami'
    },
    {
      id: 3,
      src: 'https://i.pinimg.com/736x/c9/7d/42/c97d42039abeff996d311fea0e1f5d51.jpg',
      title: 'Server Owner',
      category: 'community',
      description: 'Founder dan owner server Kaze Serenity'
    },
    {
      id: 4,
      src: 'https://ik.imagekit.io/lhtvft4ai/meepooo.png?updatedAt=1751305418412',
      title: 'Co-Owner',
      category: 'community',
      description: 'Co-owner yang membantu mengelola server'
    },
    {
      id: 5,
      src: 'https://i.pinimg.com/736x/60/e2/86/60e286d92c17c2cff4fdb46e13c3e91e.jpg',
      title: 'Staff Team',
      category: 'community',
      description: 'Tim staff yang berdedikasi'
    },
    {
      id: 6,
      src: 'https://media1.tenor.com/m/mDnIiloFauUAAAAd/fujii-kaze-matsuri.gif',
      title: 'Developer Team',
      category: 'community',
      description: 'Tim developer website dan bot'
    },
    {
      id: 7,
      src: 'https://ik.imagekit.io/psdoxljjy/logo-removebg-preview.png?updatedAt=1748393788409',
      title: 'Server Logo',
      category: 'moments',
      description: 'Logo resmi Kaze Serenity'
    },
    {
      id: 8,
      src: 'https://i.pinimg.com/736x/64/7c/42/647c42329d09ad361df6daca81cb8281.jpg',
      title: 'Active Member',
      category: 'community',
      description: 'Salah satu member aktif kami'
    },
    {
      id: 9,
      src: 'https://ik.imagekit.io/xaa3pofzg/leon_senter.gif?updatedAt=1750787323762',
      title: 'Active Staff',
      category: 'community',
      description: 'Staff Yang Bersemangat'
    },
    {
      id: 10,
      src: 'https://ik.imagekit.io/lhtvft4ai/nyoman.png?updatedAt=1757519744612',
      title: 'Editor Verified',
      category: 'community',
      description: 'Komunitas Terbaik Buat Kaze Serenity'
    },
    {
      id: 11,
      src: 'https://ik.imagekit.io/lhtvft4ai/Untitled-epen.png?updatedAt=1757949146363',
      title: 'Content Creator',
      category: 'community',
      description: 'Geloo Buat Komunitas Kaze Serenity'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

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
              <ImageIcon className="h-12 w-12 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Galeri{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Komunitas
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto"
          >
            Koleksi momen-momen berharga dari perjalanan komunitas Kaze Serenity
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 morph-hover ${
                  selectedCategory === category.id
                    ? 'liquid-button text-white'
                    : 'glass-card text-gray-300 hover:text-white'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Add Memory Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card px-6 py-3 rounded-full text-white font-medium morph-hover flex items-center space-x-2 mx-auto"
            >
              <Upload className="h-5 w-5" />
              <span>Tambah Kenangan</span>
            </motion.button>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative overflow-hidden rounded-3xl glass-card aspect-square morph-hover">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-200 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-blob-morph"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 glass-card p-3 rounded-full text-white"
              >
                <X className="h-6 w-6" />
              </motion.button>

              {/* Navigation Buttons */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 glass-card p-3 rounded-full text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 glass-card p-3 rounded-full text-white"
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>

              {/* Image */}
              <div className="relative glass rounded-3xl overflow-hidden">
                <img
                  src={filteredItems[selectedImage].src}
                  alt={filteredItems[selectedImage].title}
                  className="w-full h-full object-contain max-h-[70vh]"
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {filteredItems[selectedImage].title}
                  </h3>
                  <p className="text-gray-200">
                    {filteredItems[selectedImage].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;