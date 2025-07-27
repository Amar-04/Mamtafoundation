import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export default function HeroSlider() {
  const { t } = useTranslation();
  const slides = t("slides", { returnObjects: true }); // Get array of slides

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className=" mt-20 p-4 relative w-full min-h-screen bg-gradient-to-br from-orange-100 to-amber-200 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=Pattern')] bg-repeat"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8 lg:py-16">
        <div className="absolute flex gap-4 justify-end right-0 top-0 lg:top-1 lg:right-1 text-[#1E2E73]">
          <button
            onClick={() => i18n.changeLanguage("en")}
            className=" px-1 font-bold"
          >
            English
          </button>
          <p className="text-[#1E2E73] font-bold">|</p>
          <button
            onClick={() => i18n.changeLanguage("gu")}
            className=" px-1 font-bold"
          >
            ગુજરાતી
          </button>
        </div>

        <div className="relative">
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
