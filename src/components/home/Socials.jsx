import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Socials = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      href: "https://www.instagram.com",
      image: "/social2.jpeg",
      alt: "Instagram QR",
      title: t("socials.instagram"),
      text: t("socials.instagramText"),
    },
    {
      href: "https://www.facebook.com",
      image: "/social1.jpeg",
      alt: "Facebook QR",
      title: t("socials.facebook"),
      text: t("socials.facebookText"),
    },
    {
      href: "https://www.youtube.com",
      image: "/social3.jpeg",
      alt: "YouTube Channel",
      title: t("socials.youtube"),
      text: t("socials.youtubeText"),
    },
  ];

  return (
    <section className="py-20 bg-[#FFF6D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#1E2E73] mb-4">
            {t("socials.title")}
          </h2>
          <p className="text-lg text-gray-700">
            {t("socials.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              viewport={{ once: true }}
              className="block bg-white rounded-xl p-6 shadow-lg text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={link.image}
                alt={link.alt}
                className={`mx-auto mb-4 object-contain ${
                  link.alt === "YouTube Channel"
                    ? "w-full h-48 rounded object-cover"
                    : "w-48 h-48"
                }`}
              />
              <h3 className="text-lg font-semibold text-[#1E2E73]">
                {link.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{link.text}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;
