import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        duration: 3000,
      });
      return;
    }

    // Store in localStorage for now
    const contacts = JSON.parse(
      localStorage.getItem("divine-yatra-contacts") || "[]"
    );
    const newContact = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    };
    contacts.push(newContact);
    localStorage.setItem("divine-yatra-contacts", JSON.stringify(contacts));

    toast({
      title: "Message sent successfully! 🙏",
      description: "We'll get back to you within 24 hours.",
      duration: 5000,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@divineyatra.com", "bookings@divineyatra.com"],
      description: "Send us your queries anytime",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Temple Street", "Sacred City, India 110001"],
      description: "Visit our office for personal consultation",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sun: 10:00 AM - 5:00 PM"],
      description: "We're here to help during business hours",
    },
  ];

  const subjects = [
    "Yatra Booking Inquiry",
    "Charity & Donation",
    "Volunteer Opportunity",
    "General Information",
    "Feedback & Suggestions",
    "Other",
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch | Divine Yatra</title>
        <meta
          name="description"
          content="Contact Divine Yatra for yatra bookings, charity inquiries, or general information. We're here to help you plan your spiritual journey."
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
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-[#1E2E73] max-w-3xl mx-auto">
                Have questions about our yatras or want to contribute to our
                charitable causes? We're here to help you on your spiritual
                journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 text-[#E30613] mr-3" />
                  <h2 className="text-2xl font-bold text-[#1E2E73]">
                    Send us a Message
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#1E2E73] mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E30613] focus:border-transparent transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#1E2E73] mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E30613] focus:border-transparent transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#1E2E73] mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E30613] focus:border-transparent transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-[#1E2E73] mb-2"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E30613] focus:border-transparent transition-colors"
                      >
                        <option value="">Select a subject</option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#1E2E73] mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E30613] focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#E30613] hover:bg-[#E30613]/90 text-white py-3 rounded-lg font-semibold"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-[#1E2E73] mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        className="bg-white rounded-xl p-6 shadow-lg card-hover"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-[#F4C402] to-[#E30613] rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-[#1E2E73] mb-2">
                              {info.title}
                            </h3>
                            {info.details.map((detail, idx) => (
                              <p
                                key={idx}
                                className="text-gray-700 font-medium"
                              >
                                {detail}
                              </p>
                            ))}
                            <p className="text-sm text-gray-600 mt-1">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-[#1E2E73] mb-4">
                    Find Us
                  </h3>
                  <div className="h-64 rounded-lg overflow-hidden">
                    <iframe
                      title="Divine Yatra Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0462486211624!2d85.3123291150617!3d27.708955882793074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198d1c75dfc3%3A0xc74d59fa640d187f!2sPashupatinath%20Temple!5e0!3m2!1sen!2sin!4v1615990022546!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-16 p-8 bg-gradient-to-r from-[#1E2E73] to-[#7A1C1C] rounded-2xl text-white"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Create Your Own Divine Story?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Join thousands of satisfied pilgrims and embark on your
                spiritual journey today.
              </p>
              <Button
                onClick={() =>
                  toast({
                    title:
                      "🚧 Booking feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
                    duration: 3000,
                  })
                }
                className="bg-[#F4C402] hover:bg-[#F4C402]/90 text-[#1E2E73] font-semibold px-8 py-3 rounded-full"
              >
                Book Your Yatra Now
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
