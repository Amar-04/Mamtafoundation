import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { Star, ChevronLeft, ChevronRight, Quote, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Reviews = () => {
  const { toast } = useToast();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleVideoPlay = (reviewerName) => {
    toast({
      title:
        "🚧 Video testimonial feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
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
      thumbnail:
        "Middle-aged man in traditional white clothes speaking to camera with temple background",
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Mumbai",
      yatra: "Tirupati Balaji Darshan",
      rating: 5,
      thumbnail: "Smiling woman in saree with temple gopuram in background",
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Ahmedabad",
      yatra: "Dwarka & Somnath Yatra",
      rating: 5,
      thumbnail:
        "Young man in kurta speaking enthusiastically with ocean temple view",
    },
    {
      id: 4,
      name: "Sunita Devi",
      location: "Kolkata",
      yatra: "Jagannath Puri Yatra",
      rating: 5,
      thumbnail:
        "Elderly woman with peaceful expression and temple chariot in background",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % videoTestimonials.length);
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
          i < rating ? "text-[#F4C402] fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <>
      <Helmet>
        <title>
          Reviews & Testimonials - Pilgrim Experiences | Divine Yatra
        </title>
        <meta
          name="description"
          content="Read authentic reviews and watch video testimonials from pilgrims who experienced divine journeys with us. Discover why thousands trust Divine Yatra for their spiritual travels."
        />
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
                Testimonials
              </h1>
              <p className="text-lg text-[#1E2E73] max-w-3xl mx-auto">
                Hear from thousands of satisfied pilgrims who experienced divine
                journeys and spiritual transformation with Divine Yatra. Their
                stories inspire our mission.
              </p>
            </motion.div>

            {/* Video Testimonials Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-20"
            >
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
                        <iframe
                          className="w-full h-full"
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1"
                          title="YouTube video testimonial"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
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
                            {renderStars(
                              videoTestimonials[currentTestimonial].rating
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-6 space-x-2">
                  {videoTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial
                          ? "bg-[#E30613]"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Text Reviews Slider */}
            <div className="mt-20 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1E2E73] mb-8">
                What Our Pilgrims Say
              </h2>

              <div className="relative bg-white shadow-xl rounded-2xl p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-lg text-gray-700 italic mb-4">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed fringilla efficitur orci, a fermentum lorem lacinia
                      non."
                    </p>
                    <div className="text-right">
                      <p className="font-bold text-[#1E2E73]">Ramesh Bhai</p>
                      <p className="text-sm text-gray-500">
                        Ayodhya Ram Mandir Yatra
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Slider Controls */}
                <div className="flex justify-between mt-6">
                  <button
                    onClick={() =>
                      setCurrentTestimonial(
                        (prev) =>
                          (prev - 1 + videoTestimonials.length) %
                          videoTestimonials.length
                      )
                    }
                    className="text-[#1E2E73] hover:text-[#7A1C1C] transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="text-[#1E2E73] hover:text-[#7A1C1C] transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

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
                Join thousands of satisfied pilgrims and embark on your
                spiritual journey today.
              </p>
              <Button
                onClick={() =>
                  toast({
                    title:
                      "🚧 Booking feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
                    duration: 3000,
                  })
                }
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
