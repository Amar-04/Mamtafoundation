import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Socials = () => {
  const { t } = useTranslation();

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
          {/* Instagram QR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-lg text-center"
          >
            <img
              src="/social2.jpeg"
              alt="Instagram QR"
              className="mx-auto w-48 h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-[#1E2E73]">
              {t("socials.instagram")}
            </h3>
            <p className="text-sm text-gray-600">
              {t("socials.instagramText")}
            </p>
          </motion.div>

          {/* Facebook QR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-lg text-center"
          >
            <img
              src="/social1.jpeg"
              alt="Facebook QR"
              className="mx-auto w-48 h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-[#1E2E73]">
              {t("socials.facebook")}
            </h3>
            <p className="text-sm text-gray-600">
              {t("socials.facebookText")}
            </p>
          </motion.div>

          {/* YouTube Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-lg text-center"
          >
            <img
              src="/social3.jpeg"
              alt="YouTube Channel"
              className="mx-auto w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold text-[#1E2E73]">
              {t("socials.youtube")}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {t("socials.youtubeText")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
