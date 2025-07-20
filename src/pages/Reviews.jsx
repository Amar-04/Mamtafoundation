
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Star, ChevronLeft, ChevronRight, Quote, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Reviews = () => {
  const { toast } = useToast();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleVideoPlay = (reviewerName) => {
    toast({
      title: "🚧 Video testimonial feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  const videoTestimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Delhi",
      yatra: "Char Dham Yatra 2023",
      rating: 5,
      thumbnail: "Middle-aged man in traditional white clothes speaking to camera with temple background"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Mumbai",
      yatra: "Tirupati Balaji Darshan",
      rating: 5,
      thumbnail: "Smiling woman in saree with temple gopuram in background"
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Ahmedabad",
      yatra: "Dwarka & Somnath Yatra",
      rating: 5,
      thumbnail: "Young man in kurta speaking enthusiastically with ocean temple view"
    },
    {
      id: 4,
      name: "Sunita Devi",
      location: "Kolkata",
      yatra: "Jagannath Puri Yatra",
      rating: 5,
      thumbnail: "Elderly woman with peaceful expression and temple chariot in background"
    }
  ];

  const writtenReviews = [
    {
      id: 1,
      name: "Manoj Gupta",
      location: "Jaipur, Rajasthan",
      yatra: "Kashi Vishwanath Darshan",
      rating: 5,
      date: "February 2024",
      review: "The Kashi Vishwanath darshan organized by Divine Yatra was absolutely divine. The arrangements were perfect, and our guide was very knowledgeable about the spiritual significance of each ritual. The evening Ganga aarti was a life-changing experience. I felt truly blessed and at peace.",
      avatar: "Elderly man with white beard and tilaka on forehead smiling peacefully"
    },
    {
      id: 2,
      name: "Kavita Singh",
      location: "Pune, Maharashtra",
      yatra: "Char Dham Yatra",
      rating: 5,
      date: "May 2023",
      review: "What an incredible spiritual journey! The Char Dham Yatra exceeded all my expectations. Despite the challenging terrain, the team ensured our safety and comfort throughout. The helicopter service to Kedarnath was well-organized. This yatra has brought immense peace and spiritual growth to my life.",
      avatar: "Middle-aged woman in traditional Indian attire with peaceful smile"
    },
    {
      id: 3,
      name: "Dr. Ramesh Iyer",
      location: "Chennai, Tamil Nadu",
      yatra: "Tirupati Balaji Darshan",
      rating: 5,
      date: "January 2024",
      review: "Divine Yatra's organization was impeccable. The VIP darshan arrangements saved us hours of waiting, and we could focus entirely on our prayers and devotion. The accommodation was comfortable, and the food was delicious. The charity work they do alongside the yatras is truly commendable.",
      avatar: "Professional man in glasses with warm smile and temple background"
    },
    {
      id: 4,
      name: "Geeta Agarwal",
      location: "Lucknow, Uttar Pradesh",
      yatra: "Amarnath Cave Yatra",
      rating: 5,
      date: "August 2023",
      review: "The Amarnath yatra was the most challenging yet rewarding experience of my life. The team's support during the trek was exceptional. They ensured we were well-prepared and safe throughout the journey. Seeing the natural ice lingam was a divine blessing I'll cherish forever.",
      avatar: "Woman in trekking gear with mountain background looking accomplished"
    },
    {
      id: 5,
      name: "Vikram Mehta",
      location: "Bangalore, Karnataka",
      yatra: "Dwarka & Somnath Yatra",
      rating: 5,
      date: "March 2024",
      review: "Excellent service from start to finish! The Gujarat yatra was beautifully planned with perfect timing for all temple visits. The historical insights provided by our guide enriched the spiritual experience. The charity initiatives we participated in made the journey even more meaningful.",
      avatar: "Young professional man in casual clothes with coastal temple backdrop"
    },
    {
      id: 6,
      name: "Lakshmi Nair",
      location: "Kochi, Kerala",
      yatra: "Jagannath Puri Yatra",
      rating: 5,
      date: "July 2023",
      review: "Witnessing the Rath Yatra was a dream come true! Divine Yatra arranged everything perfectly - from the best viewing spots to comfortable accommodation. The prasadam arrangements and the opportunity to participate in seva made this yatra truly special. Highly recommended!",
      avatar: "South Indian woman in traditional Kerala saree with temple festival background"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-[#F4C402] fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <>
      <Helmet>
        <title>Reviews & Testimonials - Pilgrim Experiences | Divine Yatra</title>
        <meta name="description" content="Read authentic reviews and watch video testimonials from pilgrims who experienced divine journeys with us. Discover why thousands trust Divine Yatra for their spiritual travels." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#FFF6D8] to-white pt-20">
        {/* Header Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                Pilgrim Testimonials
              </h1>
              <p className="text-lg text-[#1E2E73] max-w-3xl mx-auto">
                Hear from thousands of satisfied pilgrims who experienced divine journeys and 
                spiritual transformation with Divine Yatra. Their stories inspire our mission.
              </p>
            </motion.div>

            {/* Video Testimonials Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-center gradient-text mb-12">
                Video Testimonials
              </h2>
              
              <div className="relative max-w-4xl mx-auto">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      {/* Video Thumbnail */}
                      <div className="relative h-64 md:h-80 overflow-hidden">
                        <img  
                          className="w-full h-full object-cover"
                          alt={`${videoTestimonials[currentTestimonial].name} testimonial`}
                         src="https://images.unsplash.com/photo-1567443024551-f3e3cc2be870" />
                        
                        {/* Play Button Overlay */}
                        <div 
                          className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
                          onClick={() => handleVideoPlay(videoTestimonials[currentTestimonial].name)}
                        >
                          <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                            <Play className="w-10 h-10 text-[#E30613] ml-1" />
                          </div>
                        </div>
                      </div>

                      {/* Testimonial Info */}
                      <div className="p-6 bg-gradient-to-r from-[#1E2E73] to-[#7A1C1C] text-white">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-[#F4C402]">
                              {videoTestimonials[currentTestimonial].name}
                            </h3>
                            <p className="text-gray-300">
                              {videoTestimonials[currentTestimonial].location}
                            </p>
                            <p className="text-sm text-[#7DC3E8]">
                              {videoTestimonials[currentTestimonial].yatra}
                            </p>
                          </div>
                          <div className="flex">
                            {renderStars(videoTestimonials[currentTestimonial].rating)}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevTestimonial}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-[#1E2E73]" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-[#1E2E73]" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-6 space-x-2">
                  {videoTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-[#E30613]' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Written Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center gradient-text mb-12">
                Written Reviews
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {writtenReviews.map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-lg card-hover relative"
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4">
                      <Quote className="w-8 h-8 text-[#F4C402]/30" />
                    </div>

                    {/* Avatar and Info */}
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img  
                          className="w-full h-full object-cover"
                          alt={`${review.name} avatar`}
                         src="https://images.unsplash.com/photo-1590769620285-6926a01c2a58" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1E2E73]">{review.name}</h3>
                        <p className="text-sm text-gray-600">{review.location}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      {renderStars(review.rating)}
                      <span className="ml-2 text-sm text-gray-600">{review.date}</span>
                    </div>

                    {/* Yatra */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-[#7DC3E8]/20 text-[#1E2E73] text-sm rounded-full">
                        {review.yatra}
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 leading-relaxed">
                      "{review.review}"
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-16 p-8 bg-gradient-to-r from-[#1E2E73] to-[#7A1C1C] rounded-2xl text-white"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Create Your Own Divine Story?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Join thousands of satisfied pilgrims and embark on your spiritual journey today.
              </p>
              <Button
                onClick={() => toast({
                  title: "🚧 Booking feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
                  duration: 3000,
                })}
                className="bg-[#F4C402] hover:bg-[#F4C402]/90 text-[#1E2E73] font-semibold px-8 py-3 rounded-full"
              >
                Book Your Yatra Now
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Reviews;
