import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home.jsx";
import Yatras from "@/pages/Yatras.jsx";
import Gallery from "@/pages/Gallery.jsx";
import Reviews from "@/pages/Reviews.jsx";
import Causes from "@/pages/Causes.jsx";
import Contact from "@/pages/Contact.jsx";
import { Toaster } from "@/components/ui/toaster";
import "./i18n";
import i18n from "./i18n";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import SplashScreen from "./components/SplashScreen"; // Import the splash screen

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // splash duration in ms

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative">
        <Helmet>
          <title>Mamta Foundation Seva Samiti</title>
          <meta
            name="description"
            content="Join us on sacred journeys to holy temples and contribute to meaningful charity work. Experience divine yatras with our spiritual travel organization."
          />
        </Helmet>

        <div className="absolute flex gap-4 justify-end right-4 top-20 lg:top-24 z-50 lg:right-8 text-[#1E2E73]">
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

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/yatras" element={<Yatras />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/causes" element={<Causes />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <Toaster />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
