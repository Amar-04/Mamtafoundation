import HeroSlider from "../components/home/HeroSlider";
import AboutUs from "../components/home/AboutUs";
import Causes from "../components/home/Causes";
import ReviewsSection from "../components/home/Reviews";
import Socials from "../components/home/Socials";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-amber-200"></div>

        <HeroSlider />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#F4C402]/20 rounded-full floating-animation"></div>
        <div
          className="absolute bottom-20 right-10 w-16 h-16 bg-[#7DC3E8]/20 rounded-full floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>
      <AboutUs />
      <Causes />
      <ReviewsSection />
      <Socials />
    </>
  );
};

export default Home;
