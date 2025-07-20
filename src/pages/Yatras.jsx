
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Calendar, MapPin, Users, IndianRupee, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Yatras = () => {
  const { toast } = useToast();
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleBookNow = (yatraName) => {
    toast({
      title: "🚧 Booking feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    toast({
      title: "🚧 Filter feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  const yatras = [
    {
      id: 1,
      name: "Char Dham Yatra",
      location: "Uttarakhand",
      dates: "May 15 - May 25, 2024",
      price: "₹45,000",
      duration: "10 Days",
      participants: "25 Pilgrims",
      status: "upcoming",
      region: "north",
      description: "Sacred journey to the four holy shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath.",
      image: "Sacred mountain temple with snow-capped peaks in background"
    },
    {
      id: 2,
      name: "Kashi Vishwanath Darshan",
      location: "Varanasi, Uttar Pradesh",
      dates: "March 20 - March 23, 2024",
      price: "₹18,000",
      duration: "4 Days",
      participants: "40 Pilgrims",
      status: "ongoing",
      region: "north",
      description: "Experience the spiritual energy of the holy city of Varanasi and Lord Shiva's sacred temple.",
      image: "Ancient temple on the banks of river Ganges with evening aarti"
    },
    {
      id: 3,
      name: "Tirupati Balaji Darshan",
      location: "Andhra Pradesh",
      dates: "April 10 - April 13, 2024",
      price: "₹22,000",
      duration: "4 Days",
      participants: "35 Pilgrims",
      status: "upcoming",
      region: "south",
      description: "Seek blessings at the richest temple in the world, dedicated to Lord Venkateswara.",
      image: "Magnificent South Indian temple with golden gopuram"
    },
    {
      id: 4,
      name: "Dwarka & Somnath Yatra",
      location: "Gujarat",
      dates: "June 5 - June 10, 2024",
      price: "₹28,000",
      duration: "6 Days",
      participants: "30 Pilgrims",
      status: "upcoming",
      region: "west",
      description: "Visit the kingdom of Lord Krishna and one of the twelve Jyotirlingas.",
      image: "Coastal temple with Arabian Sea waves in the background"
    },
    {
      id: 5,
      name: "Jagannath Puri Yatra",
      location: "Odisha",
      dates: "July 15 - July 18, 2024",
      price: "₹20,000",
      duration: "4 Days",
      participants: "45 Pilgrims",
      status: "upcoming",
      region: "east",
      description: "Witness the grand Rath Yatra and seek blessings of Lord Jagannath.",
      image: "Colorful temple chariot festival with thousands of devotees"
    },
    {
      id: 6,
      name: "Amarnath Cave Yatra",
      location: "Jammu & Kashmir",
      dates: "August 1 - August 8, 2024",
      price: "₹35,000",
      duration: "8 Days",
      participants: "20 Pilgrims",
      status: "upcoming",
      region: "north",
      description: "Challenging trek to the holy cave shrine of Lord Shiva in the Himalayas.",
      image: "Snow-covered mountain cave with natural ice lingam formation"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Yatras' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'ongoing', label: 'Ongoing' },
    { id: 'north', label: 'North India' },
    { id: 'south', label: 'South India' },
    { id: 'east', label: 'East India' },
    { id: 'west', label: 'West India' }
  ];

  return (
    <>
      <Helmet>
        <title>Sacred Yatras - Temple Tours & Spiritual Journeys | Divine Yatra</title>
        <meta name="description" content="Explore our upcoming and ongoing yatras to sacred temples across India. Book your spiritual journey with expert guidance and group travel." />
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
                Embark on transformative spiritual journeys to India's most sacred temples and holy sites. 
                Join fellow pilgrims in experiencing divine blessings and inner peace.
              </p>
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Filter className="w-5 h-5 text-[#1E2E73]" />
                <span className="text-[#1E2E73] font-medium">Filter by:</span>
              </div>
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  onClick={() => handleFilterChange(filter.id)}
                  variant={selectedFilter === filter.id ? "default" : "outline"}
                  className={`rounded-full ${
                    selectedFilter === filter.id
                      ? 'bg-[#E30613] hover:bg-[#E30613]/90 text-white'
                      : 'border-[#1E2E73] text-[#1E2E73] hover:bg-[#1E2E73] hover:text-white'
                  }`}
                >
                  {filter.label}
                </Button>
              ))}
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
                     src="https://images.unsplash.com/photo-1688053010570-8db731d66948" />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        yatra.status === 'upcoming' 
                          ? 'bg-[#F4C402] text-[#1E2E73]' 
                          : 'bg-[#E30613] text-white'
                      }`}>
                        {yatra.status === 'upcoming' ? 'Upcoming' : 'Ongoing'}
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
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2 text-[#7DC3E8]" />
                        {yatra.participants}
                      </div>
                    </div>

                    {/* Price and Book Button */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <IndianRupee className="w-5 h-5 text-[#7A1C1C]" />
                        <span className="text-2xl font-bold text-[#7A1C1C]">
                          {yatra.price.replace('₹', '')}
                        </span>
                        <span className="text-sm text-gray-500 ml-1">per person</span>
                      </div>
                      <Button
                        onClick={() => handleBookNow(yatra.name)}
                        className="bg-[#E30613] hover:bg-[#E30613]/90 text-white rounded-full px-6"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
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
                Can't Find Your Desired Yatra?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Contact us to customize a spiritual journey according to your preferences and schedule.
              </p>
              <Button
                onClick={() => toast({
                  title: "🚧 Custom yatra feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
                  duration: 3000,
                })}
                className="bg-[#F4C402] hover:bg-[#F4C402]/90 text-[#1E2E73] font-semibold px-8 py-3 rounded-full"
              >
                Plan Custom Yatra
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Yatras;
