
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { X, Play, Image as ImageIcon, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Gallery = () => {
  const { toast } = useToast();
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [filter, setFilter] = useState('all');

  const handleMediaClick = (media) => {
    if (media.type === 'video') {
      toast({
        title: "🚧 Video playback feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        duration: 3000,
      });
    } else {
      setSelectedMedia(media);
    }
  };

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      title: 'Char Dham Yatra 2023',
      category: 'yatra',
      description: 'Pilgrims at Kedarnath Temple during the sacred Char Dham journey',
      image: 'Group of pilgrims in white clothes at mountain temple with snow peaks'
    },
    {
      id: 2,
      type: 'video',
      title: 'Ganga Aarti at Varanasi',
      category: 'ceremony',
      description: 'Evening prayer ceremony at the holy ghats of Varanasi',
      thumbnail: 'Evening aarti ceremony with oil lamps at river Ganges ghats'
    },
    {
      id: 3,
      type: 'image',
      title: 'Charity Food Distribution',
      category: 'charity',
      description: 'Volunteers serving free meals to underprivileged communities',
      image: 'Volunteers in orange clothes serving food to children and families'
    },
    {
      id: 4,
      type: 'image',
      title: 'Tirupati Balaji Darshan',
      category: 'yatra',
      description: 'Devotees seeking blessings at the sacred Tirupati temple',
      image: 'Magnificent South Indian temple with golden dome and devotees'
    },
    {
      id: 5,
      type: 'video',
      title: 'Temple Construction Project',
      category: 'charity',
      description: 'Building a new temple for the local community',
      thumbnail: 'Construction workers building traditional temple architecture'
    },
    {
      id: 6,
      type: 'image',
      title: 'Dwarka Temple Visit',
      category: 'yatra',
      description: 'Pilgrims at the sacred Dwarkadhish temple in Gujarat',
      image: 'Ancient temple by the sea with colorful flags and devotees'
    },
    {
      id: 7,
      type: 'image',
      title: 'Medical Camp',
      category: 'charity',
      description: 'Free medical checkup camp organized in rural areas',
      image: 'Doctors examining patients in outdoor medical camp setting'
    },
    {
      id: 8,
      type: 'video',
      title: 'Jagannath Rath Yatra',
      category: 'ceremony',
      description: 'The grand chariot festival of Lord Jagannath in Puri',
      thumbnail: 'Massive temple chariot with thousands of devotees pulling ropes'
    },
    {
      id: 9,
      type: 'image',
      title: 'Education Initiative',
      category: 'charity',
      description: 'Teaching underprivileged children in rural schools',
      image: 'Teacher with children in outdoor classroom under tree'
    },
    {
      id: 10,
      type: 'image',
      title: 'Amarnath Cave Yatra',
      category: 'yatra',
      description: 'Trekking to the holy Amarnath cave in Kashmir',
      image: 'Pilgrims trekking on mountain path with snow-capped peaks'
    },
    {
      id: 11,
      type: 'video',
      title: 'Community Kitchen',
      category: 'charity',
      description: 'Preparing meals for thousands of devotees daily',
      thumbnail: 'Large community kitchen with volunteers cooking in big pots'
    },
    {
      id: 12,
      type: 'image',
      title: 'Somnath Temple',
      category: 'yatra',
      description: 'Sunset view of the magnificent Somnath Jyotirlinga',
      image: 'Temple silhouette against orange sunset sky by the ocean'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Media', icon: ImageIcon },
    { id: 'yatra', label: 'Yatras', icon: ImageIcon },
    { id: 'charity', label: 'Charity Work', icon: ImageIcon },
    { id: 'ceremony', label: 'Ceremonies', icon: Video }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <>
      <Helmet>
        <title>Gallery - Sacred Moments & Charity Work | Divine Yatra</title>
        <meta name="description" content="Explore our gallery of sacred yatra moments, temple visits, charity work, and spiritual ceremonies. Witness the divine journey through images and videos." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#FFF6D8] to-white pt-20">
        {/* Header Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                Sacred Moments Gallery
              </h1>
              <p className="text-lg text-[#1E2E73] max-w-3xl mx-auto">
                Witness the divine journey through our collection of sacred yatra moments, 
                temple visits, charity initiatives, and spiritual ceremonies.
              </p>
            </motion.div>

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  variant={filter === category.id ? "default" : "outline"}
                  className={`rounded-full flex items-center space-x-2 ${
                    filter === category.id
                      ? 'bg-[#E30613] hover:bg-[#E30613]/90 text-white'
                      : 'border-[#1E2E73] text-[#1E2E73] hover:bg-[#1E2E73] hover:text-white'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </Button>
              ))}
            </motion.div>

            {/* Gallery Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence>
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="relative group cursor-pointer"
                    onClick={() => handleMediaClick(item)}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg card-hover">
                      {/* Media Container */}
                      <div className="relative h-64 overflow-hidden">
                        <img  
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          alt={item.title}
                         src="https://images.unsplash.com/photo-1694878982378-4fc7fb9ca415" />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          {item.type === 'video' ? (
                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                              <Play className="w-8 h-8 text-[#E30613] ml-1" />
                            </div>
                          ) : (
                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                              <ImageIcon className="w-8 h-8 text-[#E30613]" />
                            </div>
                          )}
                        </div>

                        {/* Media Type Badge */}
                        <div className="absolute top-3 right-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            item.type === 'video' 
                              ? 'bg-[#E30613] text-white' 
                              : 'bg-[#F4C402] text-[#1E2E73]'
                          }`}>
                            {item.type === 'video' ? 'Video' : 'Photo'}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="font-semibold text-[#1E2E73] mb-1 line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* No Results */}
            {filteredItems.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No media found</h3>
                <p className="text-gray-500">Try selecting a different category</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedMedia(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Image */}
                <img  
                  className="w-full h-auto max-h-[70vh] object-contain"
                  alt={selectedMedia.title}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1E2E73] mb-2">
                    {selectedMedia.title}
                  </h3>
                  <p className="text-gray-600">
                    {selectedMedia.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Gallery;
