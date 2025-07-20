const AboutUs = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              About Us
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Deity Images Collage */}
        <div className="mb-12 lg:mb-16">
          <img src="/AboutUs.png" alt="" className="rounded-2xl" />
        </div>

        {/* Content Block */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg border border-orange-100 p-8 lg:p-12">
            <div className="relative">
              {/* Decorative quote mark */}
              <div className="absolute -top-4 -left-2 text-6xl text-orange-300 font-serif leading-none">
                "
              </div>

              <blockquote className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-700 font-medium italic pl-8">
                <span className="text-orange-500 font-semibold">
                  Mamta Foundation Seva Samiti's
                </span>{" "}
                mission is to help devotees experience the
                <span className="text-orange-500 font-semibold">
                  {" "}
                  divine
                </span>{" "}
                through
                <span className="text-orange-500 font-semibold">
                  {" "}
                  well-organized, spiritual yatras
                </span>{" "}
                to sacred destinations across
                <span className="text-orange-500 font-semibold"> India</span>.
                With years of experience and a deep-rooted passion for
                <span className="text-orange-500 font-semibold"> dharma</span>,
                we curate journeys that blend
                <span className="text-orange-500 font-semibold"> comfort</span>,
                <span className="text-orange-500 font-semibold"> devotion</span>
                , and
                <span className="text-orange-500 font-semibold">
                  {" "}
                  cultural immersion
                </span>
                . We also proudly support
                <span className="text-orange-500 font-semibold">
                  {" "}
                  social causes
                </span>{" "}
                that uplift
                <span className="text-orange-500 font-semibold">
                  {" "}
                  underprivileged communities
                </span>{" "}
                along the routes we travel.
              </blockquote>

              <div className="absolute -bottom-12 -right-2 text-6xl text-orange-300 font-serif leading-none">
                "
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
