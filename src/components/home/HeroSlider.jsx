import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const yatraSlides = [
  {
    id: 1,
    title: "Khatushyam - Salasar - Savanriya Shet",
    description:
      "Embark on a soulful journey to the most revered shrines of Rajasthan. Seek blessings at Khatushyam Ji, Salasar Balaji, and Savanriya Seth — a divine trail of devotion and faith. Perfect for devotees looking for a quick yet spiritually fulfilling trip.",
    image: "/Hero1.jpeg",
  },
  {
    id: 2,
    title: "Shravan Special 5 Jyotirlingas - Ashtvinayak",
    description:
      "Celebrate the holy month of Shravan with the sacred darshan of 5 Jyotirlingas and the divine Ashtvinayak temples in Maharashtra. A rare opportunity to connect deeply with Lord Shiva and Lord Ganesha on this powerful pilgrimage.",
    image: "/Hero2.jpeg",
  },
  {
    id: 3,
    title: "Tirupati – Madurai – Kanyakumari – Rameshwaram – Trivandrum",
    description:
      "Explore the spiritual gems of South India — from the majestic Tirupati Balaji to the shores of Kanyakumari. Discover ancient temples, oceanfront shrines, and centuries of tradition in this unforgettable yatra through the divine south.",
    image: "/Hero3.jpeg",
  },
  {
    id: 4,
    title: "Char Dham Yatra",
    description:
      "Experience India’s most sacred pilgrimage — the Char Dham Yatra. Journey through the Himalayas to seek blessings at Badrinath, Kedarnath, Gangotri, and Yamunotri. A life-changing spiritual adventure awaits.",
    image: "/Hero4.jpeg",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % yatraSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    const newIndex =
      currentSlide === 0 ? yatraSlides.length - 1 : currentSlide - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentSlide + 1) % yatraSlides.length;
    goToSlide(newIndex);
  };

  return (
    <section className=" mt-20 p-4 relative w-full min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=Pattern')] bg-repeat"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8 lg:py-16">
        {/* Slider Container */}
        <div className="relative">
          {yatraSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full absolute inset-0"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
                {/* Image Section */}
                <div className="order-1 lg:order-1">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="order-2 lg:order-2 space-y-6 text-center lg:text-left">
                  <div className="space-y-4">
                    <h1 className="text-2xl lg:text-6xl font-bold text-gray-900 leading-tight">
                      <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                        {slide.title}
                      </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                      {slide.description}
                    </p>
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    Explore Yatra
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-3">
          {yatraSlides.map((_, index) => (
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
