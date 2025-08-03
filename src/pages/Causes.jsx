import { Heart, GlassWater, School } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const causeEvents = (t) => [
  {
    id: 1,
    title: t("causes.sharbatVitran.title"),
    description: t("causes.sharbatVitran.description"),
    icon: <GlassWater className="w-6 h-6" />,
    images: [
      { id: 1, src: "/sarbat6.jpeg", alt: t("causes.sharbatVitran.alt1") },
      { id: 2, src: "/causes2.jpeg", alt: t("causes.sharbatVitran.alt2") },
      { id: 3, src: "/sarbat-1.jpeg", alt: t("causes.sharbatVitran.alt3") },
      { id: 4, src: "/causes4.jpeg", alt: t("causes.sharbatVitran.alt4") },
      { id: 5, src: "/sarbat-2.jpeg", alt: t("causes.sharbatVitran.alt5") },
      { id: 6, src: "/causes6.jpeg", alt: t("causes.sharbatVitran.alt6") },
    ],
  },
  {
    id: 2,
    title: t("causes.schoolDrive.title"),
    description: t("causes.schoolDrive.description"),
    icon: <School className="h-6 w-6" />,
    isVideoSection: true,
    videos: [
      { id: "T9oxHzvNjOs", title: t("causes.schoolDrive.video1") },
      { id: "SS6airb4Rdg", title: t("causes.schoolDrive.video2") },
      { id: "1J4CFEEqpS8", title: t("causes.schoolDrive.video3") },
      { id: "OFxcWf0qM6Q", title: t("causes.schoolDrive.video4") },
      { id: "TxMI-Y6-KuI", title: t("causes.schoolDrive.video5") },
      { id: "5hOisDo5P6I", title: t("causes.schoolDrive.video6") },
    ],
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const CauseEventSection = ({ event }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeInVariants}
    className="mb-16"
  >
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-100 p-8 lg:p-12">
      <div className="text-center mb-8 lg:mb-12">
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 rounded-full shadow-lg">
            {event.icon}
          </div>
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
          {event.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
          {event.description}
        </p>
      </div>

      {/* Media Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {event.isVideoSection
          ? event.videos.map((video) => (
              <div
                key={video.id}
                className="h-52 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            ))
          : event.images.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white rounded-2xl p-2 transform -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  </motion.div>
);

export default function CausesPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
      {/* Header Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-amber-100/50"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=Pattern')] opacity-5 bg-repeat"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-orange-200/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-amber-200/20 rounded-full blur-xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="flex justify-center mt-16 mb-8">
              <div className="bg-gradient-to-r from-rose-500 to-orange-500 p-6 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300">
                <Heart className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                {t("causes.title")}
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 mx-auto rounded-full mb-8"></div>
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-100 p-8 lg:p-12">
              <div className="relative">
                <div className="absolute -top-6 -left-4 text-6xl text-orange-300 font-serif leading-none">
                  "
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-gray-800 font-medium pl-8">
                  {t("causes.header")}
                </p>
                <div className="absolute -bottom-4 right-0 text-6xl text-orange-300 font-serif leading-none transform rotate-180">
                  "
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {causeEvents(t).map((event) => (
            <CauseEventSection key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}
