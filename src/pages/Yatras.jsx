import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Calendar, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Yatras = () => {
  const { t } = useTranslation();
  const phoneNumber = "919313840744"; // Use your number here

  const yatras = [
    {
      id: 1,
      nameKey: "yatras.yatra1.name",
      locationKey: "yatras.yatra1.location",
      datesKey: "yatras.yatra1.dates",
      durationKey: "yatras.yatra1.duration",
      descriptionKey: "yatras.yatra1.description",
      imageAltKey: "yatras.yatra1.imageAlt",
      image: "/Hero1.jpeg",
      pdf: "/yatra-1.pdf",
    },
    {
      id: 2,
      nameKey: "yatras.yatra2.name",
      locationKey: "yatras.yatra2.location",
      datesKey: "yatras.yatra2.dates",
      durationKey: "yatras.yatra2.duration",
      descriptionKey: "yatras.yatra2.description",
      imageAltKey: "yatras.yatra2.imageAlt",
      image: "/Hero2.jpeg",
      pdf: "/yatra-2.pdf",
    },
    {
      id: 3,
      nameKey: "yatras.yatra3.name",
      locationKey: "yatras.yatra3.location",
      datesKey: "yatras.yatra3.dates",
      durationKey: "yatras.yatra3.duration",
      descriptionKey: "yatras.yatra3.description",
      imageAltKey: "yatras.yatra3.imageAlt",
      image: "/Hero3.jpeg",
      pdf: "/yatra-3.pdf",
    },
    {
      id: 4,
      nameKey: "yatras.yatra4.name",
      locationKey: "yatras.yatra4.location",
      datesKey: "yatras.yatra4.dates",
      durationKey: "yatras.yatra4.duration",
      descriptionKey: "yatras.yatra4.description",
      imageAltKey: "yatras.yatra4.imageAlt",
      image: "/Hero4.jpeg",
      pdf: "/yatra-4.pdf",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("yatras.pageTitle")}</title>
        <meta name="description" content={t("yatras.metaDescription")} />
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
              <h1 className="text-4xl md:text-3xl font-bold gradient-text mb-4">
                {t("yatras.title")}
              </h1>
              <p className="text-lg text-[#1E2E73] max-w-3xl mx-auto font-bold">
                {t("yatras.subtitle")}
              </p>
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
                      alt={t(yatra.imageAltKey)}
                      src={yatra.image}
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          yatra.status === "upcoming"
                            ? "bg-[#F4C402] text-[#1E2E73]"
                            : "bg-[#E30613] text-white"
                        }`}
                      >
                        {yatra.status === "upcoming"
                          ? t("yatras.upcoming")
                          : t("yatras.ongoing")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1E2E73] mb-2">
                      {t(yatra.nameKey)}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {t(yatra.descriptionKey)}
                    </p>

                    {/* Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-[#7DC3E8]" />
                        {t(yatra.locationKey)}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-[#7DC3E8]" />
                        {t(yatra.datesKey)} • {t(yatra.durationKey)}
                      </div>
                    </div>

                    {/* Price and Book Button */}
                    <div className="flex items-center justify-between">
                      <a
                        href={yatra.pdf}
                        download
                        className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold p-2 lg:px-3 lg:py-1
                         rounded-xl shadow hover:bg-orange-600 transition"
                      >
                        <Download className="w-5 h-5" />
                        {t("yatras.viewDetails")}
                      </a>
                      <a
                        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                          `Hello, I'm interested in your temple tour services for ${t(
                            yatra.nameKey
                          )}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat on WhatsApp"
                      >
                        <Button className="bg-[#E30613] hover:bg-[#E30613]/90 text-white rounded-xl lg:rounded-full lg:px-6">
                          {t("yatras.bookNow")}
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Yatras;
