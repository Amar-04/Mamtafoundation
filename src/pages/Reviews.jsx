import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { Star, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from "react-i18next";
import WhatsappReviews from "../components/WhatsappReviews";

//test

const Reviews = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const playerRef = useRef(null);

  const videoTestimonials = [
    {
      id: 1,
      name: t("testimonials.names.yatree"),
      location: t("testimonials.locations.usa"),
      yatra: t("testimonials.yatra.south"),
      rating: 5,
      videoId: "OtYR5UiTNtM",
    },
    {
      id: 2,
      name: t("testimonials.names.father"),
      location: "",
      yatra: t("testimonials.yatra.south"),
      rating: 5,
      videoId: "CerQO0EHkvg",
    },
    {
      id: 3,
      name: t("testimonials.names.vinod"),
      location: "",
      yatra: t("testimonials.yatra.south"),
      rating: 5,
      videoId: "jT369Ww38bo",
    },
    {
      id: 4,
      name: t("testimonials.names.nandkishore"),
      location: t("testimonials.locations.anand"),
      yatra: t("testimonials.yatra.jyotirling"),
      rating: 5,
      videoId: "vEYWL8cyoqA",
    },
    {
      id: 5,
      name: t("testimonials.names.binita"),
      location: t("testimonials.locations.navsari"),
      yatra: t("testimonials.yatra.jyotirling"),
      rating: 5,
      videoId: "Diq2WEXWqPU",
    },
    {
      id: 6,
      name: t("testimonials.names.yatree"),
      location: t("testimonials.locations.anand"),
      yatra: t("testimonials.yatra.vrindavan"),
      rating: 5,
      videoId: "0KFrXdf-hh4",
    },
    {
      id: 7,
      name: t("testimonials.names.yatree"),
      location: t("testimonials.locations.anand"),
      yatra: t("testimonials.yatra.vrindavan"),
      rating: 5,
      videoId: "qXbwdDZlwKc",
    },
    
  ];

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

  // Load and handle YouTube API
  useEffect(() => {
    let player;

    const interval = setInterval(() => {
      const iframe = document.getElementById(`yt-player-${currentTestimonial}`);
      if (iframe && window.YT && window.YT.Player) {
        clearInterval(interval);

        player = new window.YT.Player(`yt-player-${currentTestimonial}`, {
          events: {
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.ENDED) {
                setTimeout(() => {
                  setCurrentTestimonial(
                    (prev) => (prev + 1) % videoTestimonials.length
                  );
                }, 1000);
              }
            },
          },
        });
      }
    }, 300);

    return () => {
      clearInterval(interval);
      if (player && typeof player.destroy === "function") {
        player.destroy();
      }
    };
  }, [currentTestimonial]);

  return (
    <>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta
          name="description"
          content={t("meta.description")}
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#FFF6D8] to-white pt-20">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                {t("page.title")}
              </h1>
              <p className="text-lg text-[#1E2E73] max-w-3xl mx-auto">
                {t("page.subtitle")}
              </p>
            </motion.div>

            {/* Video Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-20"
            >
              <div className="relative max-w-4xl mx-auto">
                <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative h-64 md:h-80 overflow-hidden">
                        <iframe
                          id={`yt-player-${currentTestimonial}`}
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${videoTestimonials[currentTestimonial].videoId}?enablejsapi=1&autoplay=1&rel=0&modestbranding=1`}
                          title={t("video.title")}
                          frameBorder="0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        />
                      </div>

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

                {/* Dots */}
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
                      aria-label={t("navigation.testimonial", { number: index + 1 })}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-16 p-8 bg-gradient-to-r from-[#1E2E73] to-[#7A1C1C] rounded-2xl text-white"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {t("cta.title")}
              </h2>
              <p className="text-lg mb-6 opacity-90">
                {t("cta.subtitle")}
              </p>
              <a
                href={`https://wa.me/919313840744?text=${encodeURIComponent(t("whatsapp.message"))}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#F4C402] hover:bg-[#F4C402]/90 text-[#1E2E73] font-semibold px-8 py-3 rounded-full">
                  {t("cta.button")}
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
        <WhatsappReviews />
      </div>
    </>
  );
};

export default Reviews;