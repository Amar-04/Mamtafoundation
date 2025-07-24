import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { X, Play, Image as ImageIcon, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import { Calendar, Filter } from "lucide-react";

const galleryData = [
  {
    year: 2024,
    photos: [
      {
        id: 1,
        src: "/placeholder.svg?height=300&width=400&text=Char+Dham+2024",
        alt: "Char Dham Yatra 2024",
        title: "Kedarnath Temple Visit",
      },
      {
        id: 2,
        src: "/placeholder.svg?height=300&width=400&text=Kailash+2024",
        alt: "Kailash Mansarovar 2024",
        title: "Mount Kailash Darshan",
      },
      {
        id: 3,
        src: "/placeholder.svg?height=300&width=400&text=Amarnath+2024",
        alt: "Amarnath Yatra 2024",
        title: "Sacred Ice Lingam",
      },
      {
        id: 4,
        src: "/placeholder.svg?height=300&width=400&text=Vaishno+Devi+2024",
        alt: "Vaishno Devi 2024",
        title: "Mata Vaishno Devi Shrine",
      },
      {
        id: 5,
        src: "/placeholder.svg?height=300&width=400&text=Badrinath+2024",
        alt: "Badrinath 2024",
        title: "Badrinath Temple",
      },
      {
        id: 6,
        src: "/placeholder.svg?height=300&width=400&text=Gangotri+2024",
        alt: "Gangotri 2024",
        title: "Gangotri Glacier",
      },
    ],
    videos: [
      {
        id: 1,
        videoId: "dQw4w9WgXcQ",
        title: "Char Dham Yatra 2024 Highlights",
        description: "Complete journey to the four sacred shrines",
      },
      {
        id: 2,
        videoId: "9bZkp7q19f0",
        title: "Kailash Mansarovar Experience",
        description: "Spiritual journey to the abode of Lord Shiva",
      },
      {
        id: 3,
        videoId: "ScMzIvxBSi4",
        title: "Devotee Testimonials 2024",
        description: "Heartfelt experiences from our pilgrims",
      },
    ],
  },
  {
    year: 2023,
    photos: [
      {
        id: 7,
        src: "/placeholder.svg?height=300&width=400&text=Tirupati+2023",
        alt: "Tirupati 2023",
        title: "Lord Venkateswara Temple",
      },
      {
        id: 8,
        src: "/placeholder.svg?height=300&width=400&text=Shirdi+2023",
        alt: "Shirdi 2023",
        title: "Sai Baba Samadhi",
      },
      {
        id: 9,
        src: "/placeholder.svg?height=300&width=400&text=Dwarka+2023",
        alt: "Dwarka 2023",
        title: "Dwarkadhish Temple",
      },
      {
        id: 10,
        src: "/placeholder.svg?height=300&width=400&text=Somnath+2023",
        alt: "Somnath 2023",
        title: "Somnath Jyotirlinga",
      },
      {
        id: 11,
        src: "/placeholder.svg?height=300&width=400&text=Rameshwaram+2023",
        alt: "Rameshwaram 2023",
        title: "Ramanathaswamy Temple",
      },
      {
        id: 12,
        src: "/placeholder.svg?height=300&width=400&text=Kanyakumari+2023",
        alt: "Kanyakumari 2023",
        title: "Southernmost Tip of India",
      },
    ],
    videos: [
      {
        id: 4,
        videoId: "jNQXAC9IVRw",
        title: "South India Temple Tour 2023",
        description: "Sacred temples of Tamil Nadu and Karnataka",
      },
      {
        id: 5,
        videoId: "dQw4w9WgXcQ",
        title: "Gujarat Pilgrimage 2023",
        description: "Dwarka and Somnath spiritual journey",
      },
      {
        id: 6,
        videoId: "9bZkp7q19f0",
        title: "Devotional Moments 2023",
        description: "Beautiful moments from our 2023 yatras",
      },
    ],
  },
  {
    year: 2022,
    photos: [
      {
        id: 13,
        src: "/placeholder.svg?height=300&width=400&text=Haridwar+2022",
        alt: "Haridwar 2022",
        title: "Ganga Aarti at Har Ki Pauri",
      },
      {
        id: 14,
        src: "/placeholder.svg?height=300&width=400&text=Rishikesh+2022",
        alt: "Rishikesh 2022",
        title: "Yoga Capital of the World",
      },
      {
        id: 15,
        src: "/placeholder.svg?height=300&width=400&text=Mathura+2022",
        alt: "Mathura 2022",
        title: "Krishna Janmabhoomi",
      },
      {
        id: 16,
        src: "/placeholder.svg?height=300&width=400&text=Vrindavan+2022",
        alt: "Vrindavan 2022",
        title: "Banke Bihari Temple",
      },
      {
        id: 17,
        src: "/placeholder.svg?height=300&width=400&text=Ayodhya+2022",
        alt: "Ayodhya 2022",
        title: "Ram Janmabhoomi",
      },
      {
        id: 18,
        src: "/placeholder.svg?height=300&width=400&text=Varanasi+2022",
        alt: "Varanasi 2022",
        title: "Kashi Vishwanath Temple",
      },
    ],
    videos: [
      {
        id: 7,
        videoId: "ScMzIvxBSi4",
        title: "Spiritual Cities of India 2022",
        description: "Journey through Haridwar, Rishikesh, and Varanasi",
      },
      {
        id: 8,
        videoId: "jNQXAC9IVRw",
        title: "Krishna Circuit 2022",
        description: "Mathura and Vrindavan pilgrimage",
      },
      {
        id: 9,
        videoId: "dQw4w9WgXcQ",
        title: "Ganga Aarti Moments",
        description: "Divine evening prayers by the holy river",
      },
    ],
  },
  {
    year: 2021,
    photos: [
      {
        id: 19,
        src: "/placeholder.svg?height=300&width=400&text=Golden+Temple+2021",
        alt: "Golden Temple 2021",
        title: "Harmandir Sahib",
      },
      {
        id: 20,
        src: "/placeholder.svg?height=300&width=400&text=Ajmer+2021",
        alt: "Ajmer Sharif 2021",
        title: "Ajmer Sharif Dargah",
      },
      {
        id: 21,
        src: "/placeholder.svg?height=300&width=400&text=Pushkar+2021",
        alt: "Pushkar 2021",
        title: "Brahma Temple",
      },
      {
        id: 22,
        src: "/placeholder.svg?height=300&width=400&text=Mount+Abu+2021",
        alt: "Mount Abu 2021",
        title: "Dilwara Jain Temples",
      },
      {
        id: 23,
        src: "/placeholder.svg?height=300&width=400&text=Nathdwara+2021",
        alt: "Nathdwara 2021",
        title: "Shrinathji Temple",
      },
      {
        id: 24,
        src: "/placeholder.svg?height=300&width=400&text=Udaipur+2021",
        alt: "Udaipur 2021",
        title: "City of Lakes",
      },
    ],
    videos: [
      {
        id: 10,
        videoId: "9bZkp7q19f0",
        title: "Rajasthan Spiritual Tour 2021",
        description: "Sacred sites across the royal state",
      },
      {
        id: 11,
        videoId: "ScMzIvxBSi4",
        title: "Golden Temple Experience",
        description: "Peaceful moments at the holiest Sikh shrine",
      },
      {
        id: 12,
        videoId: "jNQXAC9IVRw",
        title: "Desert Pilgrimage 2021",
        description: "Spiritual journey through Rajasthan",
      },
    ],
  },
];

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState(2024);
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 pt-20">
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
              {currentData.photos.map((photo, index) => (
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
