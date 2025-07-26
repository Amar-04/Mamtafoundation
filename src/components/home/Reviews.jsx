import { useState, useEffect } from "react";
import { Star, Play } from "lucide-react";
import { useTranslation } from "react-i18next";

const staticReviewData = [
  {
    id: 1,
    videoId: "tmkP1rAoKU0", // Placeholder YouTube video ID
    rating: 5,
  },
  {
    id: 2,
    videoId: "YFA3B1T2bag", // Placeholder YouTube video ID
    rating: 5,
  },
  {
    id: 3,
    videoId: "ScMzIvxBSi4", // Placeholder YouTube video ID
    rating: 5,
  },
  {
    id: 4,
    videoId: "jNQXAC9IVRw",
    rating: 5,
  },
];

export default function ReviewsSection() {
  const { t, i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Combine static data with translated content
  const reviews = staticReviewData.map((item, index) => ({
    ...item,
    reviewerName: t(`reviews.reviewData.${index}.reviewerName`),
    yatraName: t(`reviews.reviewData.${index}.yatraName`),
    review: t(`reviews.reviewData.${index}.review`),
  }));

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 15 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-8 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-12 w-40 h-40 bg-orange-200/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-rose-200/20 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 rounded-full shadow-lg">
              <Play className="h-8 w-8 text-white" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">
              {t("reviews.title")}
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 mx-auto rounded-full mb-6"></div>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t("reviews.subtitle")}
          </p>
        </div>

        {/* Reviews Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full absolute inset-0"
                }`}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-100 p-6 lg:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Video Section */}
                    <div className="order-1 lg:order-1">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>

                        <div className="relative bg-white rounded-2xl p-3 transform -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                            <iframe
                              src={`https://www.youtube.com/embed/${review.videoId}?rel=0&modestbranding=1`}
                              title={`${review.reviewerName} - ${review.yatraName}`}
                              className="w-full h-full"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="order-2 lg:order-2 space-y-6">
                      {/* Rating */}
                      <div className="flex justify-center lg:justify-start">
                        <div className="flex space-x-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>

                      {/* Reviewer Info */}
                      <div
                        className={`text-center lg:text-left ${
                          i18n.language === "gu" ? "font-gujarati" : ""
                        }`}
                      >
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                          {review.reviewerName}
                        </h3>
                        <p className="text-lg text-orange-600 font-semibold mb-4">
                          {review.yatraName}
                        </p>
                      </div>

                      {/* Review Text */}
                      <div className="relative">
                        <div className="absolute -top-4 -left-2 text-4xl text-orange-300 font-serif leading-none">
                          "
                        </div>
                        <blockquote className="text-lg leading-relaxed text-gray-700 pl-6 italic">
                          {review.review}
                        </blockquote>
                        <div className="absolute -bottom-2 right-0 text-4xl text-orange-300 font-serif leading-none transform rotate-180">
                          "
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="flex justify-center lg:justify-start">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? "bg-orange-500 w-8 h-3"
                  : "bg-orange-200 hover:bg-orange-300 w-3 h-3"
              } rounded-full`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
