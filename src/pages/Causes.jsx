
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Heart, Users, GraduationCap, Home, Utensils, Stethoscope, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Causes = () => {
  const { toast } = useToast();

  const handleDonate = (causeName) => {
    toast({
      title: "🚧 Donation feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  const handleGetInvolved = () => {
    toast({
      title: "🚧 Volunteer registration isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  const causes = [
    {
      id: 1,
      title: "Free Yatra for Underprivileged",
      description: "Sponsor spiritual journeys for those who cannot afford temple visits and yatras.",
      icon: Heart,
      raised: "₹15,00,000",
      goal: "₹25,00,000",
      progress: 60,
      beneficiaries: "500+ Pilgrims",
      image: "Elderly people in simple clothes receiving yatra tickets with joy",
      impact: "Enabled 500+ underprivileged devotees to visit sacred temples and experience spiritual bliss."
    },
    {
      id: 2,
      title: "Temple Construction & Renovation",
      description: "Support the construction of new temples and renovation of ancient sacred sites.",
      icon: Home,
      raised: "₹45,00,000",
      goal: "₹75,00,000",
      progress: 60,
      beneficiaries: "12 Temples",
      image: "Traditional temple construction with workers and devotees participating",
      impact: "Completed 8 temple renovations and 4 new temple constructions in rural areas."
    },
    {
      id: 3,
      title: "Community Kitchen (Annadaan)",
      description: "Provide free meals to pilgrims, devotees, and underprivileged communities.",
      icon: Utensils,
      raised: "₹8,50,000",
      goal: "₹12,00,000",
      progress: 71,
      beneficiaries: "10,000+ Daily",
      image: "Large community kitchen with volunteers serving food to long queues of people",
      impact: "Serves over 10,000 free meals daily across multiple temple locations."
    },
    {
      id: 4,
      title: "Education for Rural Children",
      description: "Establish schools and provide educational resources in remote temple villages.",
      icon: GraduationCap,
      raised: "₹22,00,000",
      goal: "₹35,00,000",
      progress: 63,
      beneficiaries: "2,500+ Students",
      image: "Children in rural school uniforms studying under trees with volunteer teachers",
      impact: "Educated 2,500+ children in 15 rural villages near sacred temple sites."
    },
    {
      id: 5,
      title: "Medical Camps & Healthcare",
      description: "Organize free medical checkups and healthcare services in remote areas.",
      icon: Stethoscope,
      raised: "₹18,75,000",
      goal: "₹30,00,000",
      progress: 63,
      beneficiaries: "5,000+ Patients",
      image: "Doctors examining patients in outdoor medical camp with temple backdrop",
      impact: "Provided free medical care to 5,000+ patients in 25 remote villages."
    },
    {
      id: 6,
      title: "Elderly Care & Support",
      description: "Care for elderly devotees and provide them with shelter and medical support.",
      icon: Users,
      raised: "₹12,25,000",
      goal: "₹20,00,000",
      progress: 61,
      beneficiaries: "300+ Elderly",
      image: "Elderly people being cared for by volunteers in peaceful ashram setting",
      impact: "Providing daily care and support to 300+ elderly devotees in our ashrams."
    }
  ];

  const stats = [
    { number: "₹2.5Cr+", label: "Total Donations" },
    { number: "50,000+", label: "Lives Impacted" },
    { number: "100+", label: "Active Projects" },
    { number: "1,000+", label: "Volunteers" }
  ];

  return (
    <>
      <Helmet>
        <title>Charity Causes - Making a Difference | Divine Yatra</title>
        <meta name="description" content="Support our charitable initiatives including free yatras for underprivileged, temple construction, community kitchens, education, and healthcare. Make a difference today." />
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
                Our Charitable Causes
              </h1>
              <p className="text-lg text-[#1E2E73] max-w-3xl mx-auto">
                Beyond spiritual journeys, we're committed to serving humanity through various 
                charitable initiatives. Join us in making a meaningful difference in people's lives.
              </p>
            </motion.div>

            {/* Impact Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 p-8 bg-gradient-to-r from-[#1E2E73] to-[#7A1C1C] rounded-2xl text-white"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#F4C402] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Causes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {causes.map((cause, index) => (
                <motion.div
                  key={cause.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img  
                      className="w-full h-full object-cover"
                      alt={cause.title}
                     src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <cause.icon className="w-6 h-6 text-[#E30613]" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1E2E73] mb-2">
                      {cause.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {cause.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-[#1E2E73] font-medium">Progress</span>
                        <span className="text-[#E30613] font-semibold">{cause.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${cause.progress}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className="bg-gradient-to-r from-[#F4C402] to-[#E30613] h-2 rounded-full"
                        />
                      </div>
                      <div className="flex justify-between text-sm mt-2">
                        <span className="text-gray-600">Raised: {cause.raised}</span>
                        <span className="text-gray-600">Goal: {cause.goal}</span>
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="mb-4 p-3 bg-[#FFF6D8] rounded-lg">
                      <div className="text-sm text-[#1E2E73] font-medium mb-1">
                        Beneficiaries: {cause.beneficiaries}
                      </div>
                      <div className="text-xs text-gray-600">
                        {cause.impact}
                      </div>
                    </div>

                    {/* Donate Button */}
                    <Button
                      onClick={() => handleDonate(cause.title)}
                      className="w-full bg-[#E30613] hover:bg-[#E30613]/90 text-white rounded-full"
                    >
                      Donate Now
                      <Heart className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* How You Can Help Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#7DC3E8]/20 to-[#F4C402]/20 rounded-2xl p-8 md:p-12"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                  How You Can Help
                </h2>
                <p className="text-lg text-[#1E2E73] max-w-2xl mx-auto">
                  There are many ways to contribute to our charitable causes and make a lasting impact
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#E30613] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E2E73] mb-3">Make a Donation</h3>
                  <p className="text-gray-600 mb-4">
                    Contribute financially to any of our causes and help us reach our goals faster.
                  </p>
                  <Button
                    onClick={() => handleDonate('General')}
                    variant="outline"
                    className="border-[#E30613] text-[#E30613] hover:bg-[#E30613] hover:text-white"
                  >
                    Donate Now
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#F4C402] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E2E73] mb-3">Volunteer</h3>
                  <p className="text-gray-600 mb-4">
                    Join our team of volunteers and contribute your time and skills to serve others.
                  </p>
                  <Button
                    onClick={handleGetInvolved}
                    variant="outline"
                    className="border-[#F4C402] text-[#1E2E73] hover:bg-[#F4C402] hover:text-white"
                  >
                    Get Involved
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#7DC3E8] rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E2E73] mb-3">Spread the Word</h3>
                  <p className="text-gray-600 mb-4">
                    Share our mission with friends and family to help us reach more people in need.
                  </p>
                  <Button
                    onClick={() => toast({
                      title: "🚧 Share feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
                      duration: 3000,
                    })}
                    variant="outline"
                    className="border-[#7DC3E8] text-[#1E2E73] hover:bg-[#7DC3E8] hover:text-white"
                  >
                    Share Mission
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-16 p-8 bg-gradient-to-r from-[#1E2E73] to-[#7A1C1C] rounded-2xl text-white"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Together, We Can Make a Difference
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Every contribution, no matter how small, creates ripples of positive change in someone's life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => handleDonate('Emergency Fund')}
                  className="bg-[#F4C402] hover:bg-[#F4C402]/90 text-[#1E2E73] font-semibold px-8 py-3 rounded-full"
                >
                  Donate Today
                </Button>
                <Button
                  onClick={handleGetInvolved}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#1E2E73] px-8 py-3 rounded-full"
                >
                  Become a Volunteer
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Causes;
