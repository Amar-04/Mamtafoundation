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
import './i18n';
import WhatsAppButton from "./components/WhatsappButton";


function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Helmet>
          <title>Divine Yatra - Spiritual Travel & Charity Organization</title>
          <meta
            name="description"
            content="Join us on sacred journeys to holy temples and contribute to meaningful charity work. Experience divine yatras with our spiritual travel organization."
          />
        </Helmet>

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
