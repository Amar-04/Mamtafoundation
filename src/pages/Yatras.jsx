import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  Calendar,
  MapPin,
  Users,
  IndianRupee,
  Filter,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Yatras = () => {
  const yatras = [
    {
      id: 1,
      name: "Char Dham Yatra",
      location: "Uttarakhand",
      dates: "May 15 - May 25, 2024",
      duration: "10 Days",
      description:
        "Sacred journey to the four holy shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath.",
      image: "Sacred mountain temple with snow-capped peaks in background",
      pdf: "/admissionletter.pdf",
    },
    {
      id: 2,
      name: "Kashi Vishwanath Darshan",
      location: "Varanasi, Uttar Pradesh",
      dates: "March 20 - March 23, 2024",
      duration: "4 Days",
      description:
        "Experience the spiritual energy of the holy city of Varanasi and Lord Shiva's sacred temple.",
      image: "Ancient temple on the banks of river Ganges with evening aarti",
      pdf: "/admissionletter.pdf",
    },
    {
      id: 3,
      name: "Tirupati Balaji Darshan",
      location: "Andhra Pradesh",
      dates: "April 10 - April 13, 2024",
      duration: "4 Days",
      description:
        "Seek blessings at the richest temple in the world, dedicated to Lord Venkateswara.",
      image: "Magnificent South Indian temple with golden gopuram",
      pdf: "/admissionletter.pdf",
    },
    {
      id: 4,
      name: "Dwarka & Somnath Yatra",
      location: "Gujarat",
      dates: "June 5 - June 10, 2024",
      duration: "6 Days",
      description:
        "Visit the kingdom of Lord Krishna and one of the twelve Jyotirlingas.",
      image: "Coastal temple with Arabian Sea waves in the background",
      pdf: "/admissionletter.pdf",
    },
    {
      id: 5,
      name: "Jagannath Puri Yatra",
      location: "Odisha",
      dates: "July 15 - July 18, 2024",
      duration: "4 Days",
      description:
        "Witness the grand Rath Yatra and seek blessings of Lord Jagannath.",
      image: "Colorful temple chariot festival with thousands of devotees",
      pdf: "/admissionletter.pdf",
    },
    {
      id: 6,
      name: "Amarnath Cave Yatra",
      location: "Jammu & Kashmir",
      dates: "August 1 - August 8, 2024",
      duration: "8 Days",
      description:
        "Challenging trek to the holy cave shrine of Lord Shiva in the Himalayas.",
      image: "Snow-covered mountain cave with natural ice lingam formation",
      pdf: "/admissionletter.pdf",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Sacred Yatras - Temple Tours & Spiritual Journeys | Divine Yatra
        </title>
        <meta
          name="description"
          content="Explore our upcoming and ongoing yatras to sacred temples across India. Book your spiritual journey with expert guidance and group travel."
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
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                Sacred Yatras
              </h1>
              <p className="text-lg text-[#1E2E73] max-w-3xl mx-auto">
                Embark on transformative spiritual journeys to India's most
                sacred temples and holy sites. Join fellow pilgrims in
                experiencing divine blessings and inner peace.
              </p>
            </motion.div>

            {/* Yatras Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {yatras.map((yatra, index) => (
                <motion.div
                  key={yatra.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt={`${yatra.name} temple tour`}
                      src="https://images.unsplash.com/photo-1688053010570-8db731d66948"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          yatra.status === "upcoming"
                            ? "bg-[#F4C402] text-[#1E2E73]"
                            : "bg-[#E30613] text-white"
                        }`}
                      >
                        {yatra.status === "upcoming" ? "Upcoming" : "Ongoing"}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1E2E73] mb-2">
                      {yatra.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {yatra.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-[#7DC3E8]" />
                        {yatra.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-[#7DC3E8]" />
                        {yatra.dates} • {yatra.duration}
                      </div>
                    </div>

                    {/* Price and Book Button */}
                    <div className="flex items-center justify-between">
                      <a
                        href={yatra.pdf} // Replace with your actual file path
                        download
                        className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-3 py-1
                         rounded-xl shadow hover:bg-orange-600 transition"
                      >
                        <Download className="w-5 h-5" />
                        View Details (PDF)
                      </a>
                      <Button className="bg-[#E30613] hover:bg-[#E30613]/90 text-white rounded-full px-6">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Yatras;
