import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ChevronLeft, ChevronRight } from "lucide-react";

const whatsappReviews = [
  {
    id: 1,
    src: "wp-1.jpeg",
    alt: "WhatsApp review from Dilip Soni",
    customerName: "Dilip Soni",
    yatraName: "Tirupati Yatra",
    date: "2022",
  },
  {
    id: 2,
    src: "wp-2.jpeg",
    alt: "WhatsApp review from Vijay Oza",
    customerName: "Vijay Oza",
    yatraName: "Tirupati Yatra",
    date: "2022",
  },
  {
    id: 3,
    src: "wp-3.jpeg",
    alt: "WhatsApp review from Rajesh Thakkar (Patan)",
    customerName: "Rajesh Thakkar (Patan)",
    yatraName: "Tirupati Yatra",
    date: "2022",
  },
  {
    id: 4,
    src: "wp-4.jpeg",
    alt: "WhatsApp review from Purnimaben",
    customerName: "Purnimaben",
    yatraName: "Tirupati Yatra",
    date: "2022",
  },
  {
    id: 5,
    src: "wp-5.jpeg",
    alt: "WhatsApp review from Shailendra and Manisha Raj",
    customerName: "Shailendra and Manisha Raj",
    yatraName: "Tirupati Yatra",
    date: "2022",
  },
  {
    id: 6,
    src: "wp-6.jpeg",
    alt: "WhatsApp review from Dilipbhai",
    customerName: "Dilipbhai",
    yatraName: "Tirupati Yatra",
    date: "2022",
  },
  {
    id: 7,
    src: "wp-7.jpeg",
    alt: "WhatsApp review from Madansinh Bhai (Ankleshwar)",
    customerName: "Madansinh Bhai (Ankleshwar)",
    yatraName: "Tirupati Yatra",
    date: "2023",
  },
  {
    id: 8,
    src: "wp-8.jpeg",
    alt: "WhatsApp review from Maheshbhai",
    customerName: "Maheshbhai",
    yatraName: "Tirupati Yatra",
    date: "2023",
  },
  {
    id: 9,
    src: "wp-9.jpeg",
    alt: "WhatsApp review from Surendranagar Yatree",
    customerName: "Surendranagar Yatree",
    yatraName: "Tirupati Yatra",
    date: " 2023",
  },
  {
    id: 10,
    src: "wp-10.jpeg",
    alt: "WhatsApp review from Vasantbhai Patil (Ankleshwar)",
    customerName: "Vasantbhai Patil (Ankleshwar)",
    yatraName: "Tirupati Yatra",
    date: "2023",
  },
  {
    id: 11,
    src: "wp-11.jpeg",
    alt: "WhatsApp review from Akash Sharma",
    customerName: "Akash Sharma",
    yatraName: "Tirupati Yatra",
    date: "2022",
  },
  {
    id: 12,
    src: "wp-12.jpeg",
    alt: "WhatsApp review from Dhruv Patel",
    customerName: "Dhruv Patel",
    yatraName: "Tirupati Yatra",
    date: "2022",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
    },
  },
};
const WhatsappReviews = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (review) => {
    setSelectedReview(review);
    setCurrentIndex(whatsappReviews.findIndex((r) => r.id === review.id));
  };

  const closeLightbox = () => {
    setSelectedReview(null);
  };

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? whatsappReviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedReview(whatsappReviews[newIndex]);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % whatsappReviews.length;
    setCurrentIndex(newIndex);
    setSelectedReview(whatsappReviews[newIndex]);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-green-200/20 rounded-full blur-2xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-16 w-40 h-40 bg-emerald-200/20 rounded-full blur-2xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <motion.div
              className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full shadow-lg"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="h-8 w-8 text-white" />
            </motion.div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              WhatsApp Reviews
            </span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-32 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 mx-auto rounded-full mb-6"
          />

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Real testimonials from our satisfied devotees shared directly
            through WhatsApp
          </motion.p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {whatsappReviews.map((review, index) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(review)}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 border border-green-100">
                {/* WhatsApp-style header */}
                <div className="flex items-center space-x-3 mb-4 p-3 bg-green-500 rounded-t-xl text-white">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">
                      {review.customerName}
                    </h3>
                    <p className="text-xs opacity-90">{review.yatraName}</p>
                  </div>
                  <div className="text-xs opacity-75">{review.date}</div>
                </div>

                {/* Screenshot container */}
                <div className="relative overflow-hidden rounded-xl bg-gray-100">
                  <motion.img
                    src={review.src || "/placeholder.svg"}
                    alt={review.alt}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />

                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      className="bg-white/90 backdrop-blur-sm rounded-full p-3"
                      whileHover={{ scale: 1.1 }}
                    >
                      <svg
                        className="h-6 w-6 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Review info */}
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Click to view full review
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedReview && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-md w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 bg-green-500 text-white">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      {selectedReview.customerName}
                    </h3>
                    <p className="text-sm opacity-90">
                      {selectedReview.yatraName}
                    </p>
                  </div>
                </div>
                <motion.button
                  onClick={closeLightbox}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Modal Image */}
              <div className="relative">
                <img
                  src={selectedReview.src || "/placeholder.svg"}
                  alt={selectedReview.alt}
                  className="w-full h-auto max-h-[70vh] object-contain bg-gray-100"
                />

                {/* Navigation Buttons */}
                <motion.button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="h-5 w-5" />
                </motion.button>

                <motion.button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-gray-50 text-center">
                <p className="text-sm text-gray-600">
                  {currentIndex + 1} of {whatsappReviews.length} reviews
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {selectedReview.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WhatsappReviews;
