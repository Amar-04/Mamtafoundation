import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export default function HeroSlider() {
  const { t } = useTranslation();
  const slides = t("slides", { returnObjects: true }); // Get array of slides

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  // Touch/swipe handling
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length, isDragging]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Touch event handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Minimum distance for a swipe

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swiped left - go to next slide
        goToNextSlide();
      } else {
        // Swiped right - go to previous slide
        goToPrevSlide();
      }
    }

    setIsDragging(false);
    // Resume auto-play after a delay
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Mouse event handlers for desktop swipe support
  const handleMouseDown = (e) => {
    touchStartX.current = e.clientX;
    setIsDragging(true);
    setIsAutoPlaying(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        goToNextSlide();
      } else {
        goToPrevSlide();
      }
    }

    setIsDragging(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }
  };

  return (
    <section className="mt-20 p-4 relative w-full min-h-screen bg-gradient-to-br from-orange-100 to-amber-200 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=Pattern')] bg-repeat"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8 lg:py-16">
        <div
          ref={sliderRef}
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ userSelect: "none" }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full absolute inset-0"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
                <div className="order-1 lg:order-1">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <img
                      src={`/Hero${index + 1}.jpeg`}
                      alt={slide.title}
                      className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>

                <div className="order-2 lg:order-2 space-y-6 text-center lg:text-left">
                  <div className="space-y-4">
                    <h1 className="text-2xl lg:text-6xl font-bold text-gray-900">
                      <h1 className="text-2xl lg:text-6xl font-bold text-gray-900">
                        <span
                          className={`bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent ${
                            i18n.language === "gu" ? "leading-snug" : ""
                          }`}
                        >
                          {slide.title}
                        </span>
                      </h1>
                    </h1>
                    <p className="text-lg sm:text-xl font-semibold text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                      {slide.description}
                    </p>
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    <Link to="/yatras">{t("explore_button")}</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows - only visible on hover */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-orange-500 w-12 h-12 rounded-full shadow-lg opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center group-hover:opacity-100 z-10"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-orange-500 w-12 h-12 rounded-full shadow-lg opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center group-hover:opacity-100 z-10"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-orange-500 w-8"
                  : "bg-orange-200 hover:bg-orange-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
