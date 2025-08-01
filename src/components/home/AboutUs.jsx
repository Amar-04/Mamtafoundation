import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              {t("aboutUs.title")}
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
                  {t("aboutUs.mamta")}
                </span>{" "}
                {t("aboutUs.mission1")}
                <span className="text-orange-500 font-semibold">
                  {" "}
                  {t("aboutUs.divine")}
                </span>{" "}
                {t("aboutUs.mission2")}
                <span className="text-orange-500 font-semibold">
                  {" "}
                  {t("aboutUs.yatras")}
                </span>{" "}
                {t("aboutUs.mission3")}
                <span className="text-orange-500 font-semibold">
                  {" "}
                  {t("aboutUs.india")}
                </span>{" "}
                {t("aboutUs.experience")}
                <span className="text-orange-500 font-semibold">
                  {" "}
                  {t("aboutUs.dharma")}
                </span>{" "}
                {t("aboutUs.journeys")}
                <span className="text-orange-500 font-semibold">
                  {" "}
                  {t("aboutUs.comfort")}
                </span>{" "}
                <span className="text-orange-500 font-semibold">
                  {t("aboutUs.devotion")}
                </span>
                {t("aboutUs.and")}
                <span className="text-orange-500 font-semibold">
                  {" "}
                  {t("aboutUs.culture")}
                </span>
                {t("aboutUs.support")}
              </blockquote>

              <div className="absolute -bottom-12 -right-2 text-6xl text-orange-300 font-serif leading-none">
                "
              </div>
            </div>
          </div>
        </div>
        <div className="group mt-12 max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-400 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>

            <div className="relative bg-white rounded-3xl p-3 transform -rotate-1 group-hover:rotate-0 transition-transform duration-300">
              <img
                src="partner.jpeg"
                alt="Our Partner"
                className="w-full h-64 sm:h-72 lg:h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
