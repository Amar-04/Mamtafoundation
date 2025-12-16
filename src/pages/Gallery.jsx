import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { X, Play, Image as ImageIcon, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import { Calendar, Filter } from "lucide-react";

const galleryData = [
  {
    year: 2025,
    photos: [
      {
        id: 1,
        src: "/2025-1.jpeg",
        alt: "",
        title: "Vaishnodevi And Amritsar",
      },
      {
        id: 2,
        src: "/2025-2.jpeg",
        alt: "",
        title: "Vaishnodevi And Amritsar",
      },
      {
        id: 3,
        src: "/2025-3.jpeg",
        alt: "",
        title: "Vaishnodevi And Amritsar",
      },
      {
        id: 4,
        src: "/2025-4.jpeg",
        alt: "",
        title: "Vaishnodevi And Amritsar",
      },
      {
        id: 5,
        src: "/2025-5.jpeg",
        alt: "",
        title: "Vaishnodevi And Amritsar",
      },
      {
        id: 6,
        src: "/2025-6.jpeg",
        alt: "",
        title: "Vaishnodevi And Amritsar",
      },
      {
        id: 7,
        src: "/2025-7.jpeg",
        alt: "",
        title: "Vaishnodevi And Amritsar",
      },
      {
        id: 8,
        src: "/2025-8.jpeg",
        alt: "",
        title: "Vaishnodevi And Amritsar",
      },
      {
        id: 9,
        src: "/2025-9.jpeg",
        alt: "",
        title: "5 Jyotirlinga and Ashtvinayak",
      },
      {
        id: 10,
        src: "/2025-10.jpeg",
        alt: "",
        title: "5 Jyotirlinga and Ashtvinayak",
      },
      {
        id: 11,
        src: "/2025-11.jpeg",
        alt: "",
        title: "5 Jyotirlinga and Ashtvinayak",
      },
      {
        id: 12,
        src: "/2025-12.jpeg",
        alt: "",
        title: "5 Jyotirlinga and Ashtvinayak",
      },
      {
        id: 13,
        src: "/2025-13.jpeg",
        alt: "",
        title: "5 Jyotirlinga and Ashtvinayak",
      },
      {
        id: 14,
        src: "/2025-14.jpeg",
        alt: "",
        title: "5 Jyotirlinga and Ashtvinayak",
      },
      {
        id: 15,
        src: "/2025-15.jpeg",
        alt: "",
        title: "5 Jyotirlinga and Ashtvinayak",
      },
      {
        id: 16,
        src: "/2025-16.jpeg",
        alt: "",
        title: "5 Jyotirlinga and Ashtvinayak",
      },
      {
        id: 17,
        src: "/2025-17.jpeg",
        alt: "",
        title: "5 Jyotirlinga and Ashtvinayak",
      },
      {
        id: 18,
        src: "/2025-18.jpeg",
        alt: "",
        title: "5 Jyotirlinga and Ashtvinayak",
      },
      {
        id: 19,
        src: "/2025-19.jpg",
        alt: "",
        title: "",
      },
      {
        id: 20,
        src: "/2025-20.jpg",
        alt: "",
        title: "",
      },
      {
        id: 21,
        src: "/2025-21.jpg",
        alt: "",
        title: "",
      },
      {
        id: 22,
        src: "/2025-22.jpg",
        alt: "",
        title: "",
      },
      {
        id: 23,
        src: "/2025-23.jpg",
        alt: "",
        title: "",
      },
      {
        id: 24,
        src: "/2025-24.jpg",
        alt: "",
        title: "",
      },
    ],
    videos: [
      {
        id: 1,
        videoId: "uKQpXEIa2eA",
        title: "Bhimashankar",
        description: "",
      },
      {
        id: 2,
        videoId: "J6o2nizug_M",
        title: "Vaishnodevi and amritsar",
        description: "",
      },
      {
        id: 3,
        videoId: "-xkSo0JVVFM",
        title: "Devotee Testimonials 2025",
        description: "",
      },
      {
        id: 4,
        videoId: "fCXR6NObZk8",
        title: "Vaishnodevi and Amritsar",
        description: "",
      },
      {
        id: 5,
        videoId: "u15XE6JtXjQ",
        title: "Vrindavan, Mathura , Gokul Glimpse",
        description: "",
      },
      {
        id: 6,
        videoId: "RzZVeLnDSls",
        title: "Yatri enjoying Food",
        description: "",
      },
      {
        id: 7,
        videoId: "6lXUjC0EuGQ",
        title: "Yatri enjoying Garba and Railway Station",
        description: "",
      },
    ],
  },
  {
    year: 2024,
    photos: [
      {
        id: 1,
        src: "/2024-1.jpeg",
        alt: "",
        title: "",
      },
      {
        id: 2,
        src: "/2024-2.jpeg",
        alt: "",
        title: "",
      },
      {
        id: 3,
        src: "/2024-3.jpeg",
        alt: "",
        title: "",
      },
      {
        id: 4,
        src: "/2024-4.jpeg",
        alt: "",
        title: "",
      },
      {
        id: 5,
        src: "/2024-5.jpeg",
        alt: "",
        title: "",
      },
      {
        id: 6,
        src: "/2024-6.jpeg",
        alt: "",
        title: "",
      },
    ],
    videos: [
      {
        id: 1,
        videoId: "UFNQIGbjiJ0",
        title: "Tirupati yatra",
        description: "",
      },
      {
        id: 2,
        videoId: "zG2eh2BmL64",
        title: "River Rafting in Rishikesh",
        description: "",
      },
      {
        id: 3,
        videoId: "D2sxLwkwVec",
        title: "chardham yatra bus",
        description: "",
      },
    ],
  },
  {
    year: 2023,
    photos: [
      {
        id: 7,
        src: "/2023-1.jpeg",
        alt: "",
        title: "",
      },
      {
        id: 8,
        src: "/2023-2.jpeg",
        alt: "",
        title: "",
      },
      {
        id: 9,
        src: "/2023-3.jpeg",
        alt: "",
        title: "",
      },
      {
        id: 10,
        src: "/2023-4.jpeg",
        alt: "",
        title: "",
      },
      {
        id: 11,
        src: "/2023-5.jpeg",
        alt: "",
        title: "",
      },
      {
        id: 12,
        src: "/2023-6.jpeg",
        alt: "",
        title: "",
      },
    ],
    videos: [
      {
        id: 4,
        videoId: "6vtKVSOT6YA",
        title: "helicopter ride",
        description: "",
      },
      {
        id: 5,
        videoId: "XG0fDaBKjFM",
        title: "kedarnath yatra",
        description: "",
      },
      {
        id: 6,
        videoId: "WrLiWJlv5X8",
        title: "chardham yatra",
        description: "",
      },
    ],
  },
  {
    year: 2022,
    photos: [
      {
        id: 13,
        src: "/2022-1.jpeg",
        alt: "",
        title: "",
      },
      {
        id: 14,
        src: "/2022-2.jpeg",
        alt: "",
        title: "",
      },
      {
        id: 15,
        src: "/2022-3.jpeg",
        alt: "",
        title: "",
      },
      {
        id: 16,
        src: "/2022-4.jpeg",
        alt: "",
        title: "",
      },
      {
        id: 17,
        src: "/2022-5.jpeg",
        alt: "",
        title: "",
      },
      {
        id: 18,
        src: "/2022-6.jpeg",
        alt: "",
        title: "",
      },
    ],
    videos: [
      {
        id: 7,
        videoId: "RmSNx_M5i0w",
        title: "Tirupati anjaney aarti",
        description: "",
      },
      {
        id: 8,
        videoId: "92QGlU7QmuE",
        title: "Garba in train",
        description: "",
      },
      {
        id: 9,
        videoId: "XaglXjL52Kw",
        title: "2022 Recap",
        description: "",
      },
    ],
  },
  {
    year: 2021,
    photos: [
      {
        id: 19,
        src: "/2021-7.jpeg",
        alt: "",
        title: "Jallianwala Bagh",
      },
      {
        id: 20,
        src: "/2021-2.jpeg",
        alt: "",
        title: "Golden Temple",
      },
      {
        id: 21,
        src: "/2021-3.jpeg",
        alt: "",
        title: "Attari Border",
      },
      {
        id: 22,
        src: "/2021-4.jpeg",
        alt: "Mount Abu 2021",
        title: "Jallianwala Bagh",
      },
      {
        id: 23,
        src: "/2021-5.jpeg",
        alt: "",
        title: "Attari Border",
      },
      {
        id: 24,
        src: "/2021-8.jpeg",
        alt: "",
        title: "Golden Temple",
      },
    ],
    videos: [
      {
        id: 10,
        videoId: "AwnBruvGMWI",
        title: "Attari and Wagha Border Parade.",
        description: "",
      },
      {
        id: 11,
        videoId: "0avgoTkMGUA",
        title: "Horse riding in vaishnodevi",
        description: "",
      },
      {
        id: 12,
        videoId: "3aRrYutLR8Y",
        title: "Aadi kumari night view",
        description: "",
      },
    ],
  },
];

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState(2025);
  const [isLoading, setIsLoading] = useState(false);
  const [currentData, setCurrentData] = useState(galleryData[0]);

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2020 },
    (_, i) => currentYear - i
  );

  useEffect(() => {
    const yearData = galleryData.find((data) => data.year === selectedYear);
    if (yearData) {
      setCurrentData(yearData);
    }
  }, [selectedYear]);

  const handleYearChange = (year) => {
    if (year === selectedYear) return;

    setIsLoading(true);
    setSelectedYear(year);

    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Year Filter Section */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="flex items-center justify-center space-x-3">
            <Filter className="h-5 w-5 text-gray-500" />
            <div className="flex flex-wrap gap-2 justify-center">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearChange(year)}
                  disabled={isLoading}
                  className={`px-5 py-1 rounded-full font-semibold transition-all duration-200 ${
                    selectedYear === year
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-700 hover:bg-orange-50 border border-orange-200 hover:border-orange-300"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-orange-200 border-t-orange-500 mb-4"></div>
              <p className="text-gray-600 text-lg">
                Loading {selectedYear} gallery...
              </p>
            </div>
          </div>
        )}

        {/* Gallery Content */}
        <div
          className={`transition-all duration-700 ${
            isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {/* Selected Year Header */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Calendar className="h-6 w-6 text-orange-500" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {selectedYear}
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Photos Grid */}
          <div className="mb-12 lg:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[...currentData.photos].reverse().map((photo, index) => (
                <div
                  key={photo.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>

                  <div className="relative bg-white rounded-2xl p-2 transform -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                    <img
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.alt}
                      className="w-full h-64 object-cover rounded-xl"
                    />

                    <div className="absolute inset-2 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <h4 className="text-white text-lg font-semibold">
                          {photo.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Videos Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center space-x-3">
              <Play className="h-6 w-6 text-orange-500" />
              <span>Video Highlights</span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {currentData.videos.map((video, index) => (
                <div
                  key={video.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                  style={{ animationDelay: `${(index + 6) * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-orange-400 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>

                  <div className="relative bg-white rounded-2xl p-3 transform -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-3">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
                        title={video.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>

                    <div className="px-2 pb-2">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {video.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
