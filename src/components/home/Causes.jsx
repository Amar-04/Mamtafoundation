import { Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

const Causes = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-rose-200 via-orange-200 to-amber-200 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-rose-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-orange-200/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-amber-200/20 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-rose-500 to-orange-500 p-4 rounded-full shadow-lg">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
              {t("cause.title")}
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 mx-auto rounded-full mb-8"></div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-700 font-medium mb-6">
              {t("cause.p1.prefix")}{" "}
              <span className="font-bold text-orange-700">
                {t("cause.p1.orgName")}
              </span>
              {" "} {t("cause.p1.rest")}
            </p>

            <p className="text-lg sm:text-xl leading-relaxed text-gray-600">
              {t("cause.p2")}
            </p>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Food Distribution Image */}
          <div className="group">
            <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-400 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>

              <div className="relative bg-white rounded-3xl p-3 transform -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                <img
                  src="homeseva-1.jpeg"
                  alt={t("cause.foodImageAlt")}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Health Check-up Image */}
          <div className="group">
            <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-orange-400 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>

              <div className="relative bg-white rounded-3xl p-3 transform -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                <img
                  src="/homeseva-2.jpeg"
                  alt={t("cause.healthImageAlt")}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Causes;
