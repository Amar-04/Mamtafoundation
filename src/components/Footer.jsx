import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Yatras", path: "/yatras" },
    { name: "Gallery", path: "/gallery" },
    { name: "Reviews", path: "/reviews" },
    { name: "Causes", path: "/causes" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#1E2E73] to-[#7A1C1C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#F4C402] to-[#E30613] flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="lg:text-2xl font-bold text-[#F4C402]">
                Mamta Foundation Seva Samiti
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Embark on sacred journeys to holy temples and contribute to
              meaningful charity work. Experience divine yatras with our
              spiritual travel organization dedicated to serving humanity.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-[#7DC3E8] rounded-full flex items-center justify-center hover:bg-[#F4C402] transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-[#1E2E73]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold text-[#F4C402] mb-4 block">
              Quick Links
            </span>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#F4C402] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-lg font-semibold text-[#F4C402] mb-4 block">
              Contact Info
            </span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#7DC3E8]" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#7DC3E8]" />
                <span className="text-gray-300">info@divineyatra.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#7DC3E8] mt-1" />
                <span className="text-gray-300">
                  123 Temple Street, Sacred City, India 110001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Eternal web solutions. All rights reserved. | Spreading spirituality
            and compassion worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
