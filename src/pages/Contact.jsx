import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t("contact.toast.fillFields"),
        duration: 3000,
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // EmailJS configuration from environment variables (Vite format)
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if all environment variables are available
      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS configuration missing. Please check your environment variables.');
        console.log('Available env vars:', {
          serviceId: serviceId ? 'present' : 'missing',
          templateId: templateId ? 'present' : 'missing',
          publicKey: publicKey ? 'present' : 'missing'
        });
        toast({
          title: "Configuration Error",
          description: "Email service is not properly configured. Please contact support.",
          variant: "destructive",
          duration: 5000,
        });
        setIsSubmitting(false);
        return;
      }

      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject || 'Contact Form Submission',
        message: formData.message,
        time: new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        to_name: 'Mamta FOundation Seva Samiti',
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        // Also save to localStorage as backup
        const contacts = JSON.parse(
          localStorage.getItem("divine-yatra-contacts") || "[]"
        );
        const newContact = {
          ...formData,
          id: Date.now(),
          timestamp: new Date().toISOString(),
        };
        contacts.push(newContact);
        localStorage.setItem("divine-yatra-contacts", JSON.stringify(contacts));

        toast({
          title: t("contact.toast.successTitle"),
          description: t("contact.toast.successDesc"),
          duration: 5000,
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.info.phone.title"),
      details: ["9313840744", "9898779539"],
      description: t("contact.info.phone.desc"),
    },
    {
      icon: Mail,
      title: t("contact.info.email.title"),
      details: ["mamtafoundation1977@gmail.com"],
      description: t("contact.info.email.desc"),
    },
    {
      icon: MapPin,
      title: t("contact.info.address.title"),
      details: [t("contact.info.address.detail")],
      description: t("contact.info.address.desc"),
    },
    {
      icon: Clock,
      title: t("contact.info.hours.title"),
      details: [
        t("contact.info.hours.weekdays"),
        t("contact.info.hours.weekend"),
      ],
      description: t("contact.info.hours.desc"),
    },
  ];

  const subjects = [
    t("contact.form.subjects.booking"),
    t("contact.form.subjects.info"),
    t("contact.form.subjects.feedback"),
    t("contact.form.subjects.other"),
  ];

  return (
    <>
      <Helmet>
        <title>{t("contact.meta.title")}</title>
        <meta name="description" content={t("contact.meta.description")} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#FFF6D8] to-white pt-20">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                {t("contact.header.title")}
              </h1>
              <p className="text-lg text-[#1E2E73] max-w-3xl mx-auto">
                {t("contact.header.subtitle")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 text-[#E30613] mr-3" />
                  <h2 className="text-2xl font-bold text-[#1E2E73]">
                    {t("contact.form.title")}
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#1E2E73] mb-2"
                      >
                        {t("contact.form.nameLabel")} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E30613] focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder={t("contact.form.namePlaceholder")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#1E2E73] mb-2"
                      >
                        {t("contact.form.emailLabel")} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E30613] focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder={t("contact.form.emailPlaceholder")}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#1E2E73] mb-2"
                      >
                        {t("contact.form.phoneLabel")}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E30613] focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder={t("contact.form.phonePlaceholder")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-[#1E2E73] mb-2"
                      >
                        {t("contact.form.subjectLabel")}
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E30613] focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="">
                          {t("contact.form.subjectPlaceholder")}
                        </option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#1E2E73] mb-2"
                    >
                      {t("contact.form.messageLabel")} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E30613] focus:border-transparent transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder={t("contact.form.messagePlaceholder")}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#E30613] hover:bg-[#E30613]/90 text-white py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        {t("contact.form.submitButton")}
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
                <img
                  src="/contact1.jpeg"
                  alt={t("contact.form.imageAlt")}
                  className="w-full h-auto object-cover mt-8"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-[#1E2E73] mb-6">
                    {t("contact.info.title")}
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        className="bg-white rounded-xl p-6 shadow-lg card-hover"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-[#F4C402] to-[#E30613] rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-[#1E2E73] mb-2">
                              {info.title}
                            </h3>
                            {info.details.map((detail, idx) => (
                              <p
                                key={idx}
                                className="text-gray-700 font-medium"
                              >
                                {detail}
                              </p>
                            ))}
                            <p className="text-sm text-gray-600 mt-1">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-[#1E2E73] mb-4">
                    {t("contact.map.title")}
                  </h3>
                  <div className="h-64 rounded-lg overflow-hidden">
                    <iframe
                      title={t("contact.map.iframeTitle")}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.016404435225!2d73.22977237384073!3d22.315219342357295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf72a18b231f%3A0x87de41e4817b54ed!2sMAMTA%20FOUNDATION%20SEVA%20SAMITI!5e0!3m2!1sen!2sin!4v1753606663984!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-16 p-8 bg-gradient-to-r from-[#1E2E73] to-[#7A1C1C] rounded-2xl text-white"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {t("contact.cta.title")}
              </h2>
              <p className="text-lg mb-6 opacity-90">
                {t("contact.cta.subtitle")}
              </p>
              <a
                href="https://wa.me/919313840744?text=Hello%2C%20I'm%20interested%20in%20your%20temple%20tour%20services!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#F4C402] hover:bg-[#F4C402]/90 text-[#1E2E73] font-semibold px-8 py-3 rounded-full">
                  {t("contact.cta.button")}
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;