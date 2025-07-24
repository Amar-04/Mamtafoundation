import {
  Heart,
  Users,
  Utensils,
  Stethoscope,
  BookOpen,
  Home,
} from "lucide-react";
import { motion } from "framer-motion";

const causeEvents = [
  {
    id: 1,
    title: "Blanket Donation Drive - Ayodhya 2022",
    description:
      "During the winter months of our Ayodhya yatra, we distributed warm blankets to over 500 families in need. Our devotees joined hands to ensure no one faced the harsh cold without proper protection, embodying the spirit of seva and compassion.",
    icon: <Home className="h-6 w-6" />,
    images: [
      {
        id: 1,
        src: "/placeholder.svg?height=300&width=400&text=Blanket+Distribution+1",
        alt: "Volunteers distributing blankets",
        title: "Volunteers distributing blankets to families",
      },
      {
        id: 2,
        src: "/placeholder.svg?height=300&width=400&text=Blanket+Distribution+2",
        alt: "Children receiving warm blankets",
        title: "Children receiving warm blankets",
      },
      {
        id: 3,
        src: "/placeholder.svg?height=300&width=400&text=Blanket+Distribution+3",
        alt: "Community gathering for blanket drive",
        title: "Community gathering for blanket drive",
      },
      {
        id: 4,
        src: "/placeholder.svg?height=300&width=400&text=Blanket+Distribution+4",
        alt: "Elderly receiving winter protection",
        title: "Elderly receiving winter protection",
      },
      {
        id: 5,
        src: "/placeholder.svg?height=300&width=400&text=Blanket+Distribution+5",
        alt: "Team organizing blankets",
        title: "Team organizing blankets for distribution",
      },
      {
        id: 6,
        src: "/placeholder.svg?height=300&width=400&text=Blanket+Distribution+6",
        alt: "Grateful families with blankets",
        title: "Grateful families with new blankets",
      },
    ],
  },
  {
    id: 2,
    title: "Free Medical Camp - Haridwar 2023",
    description:
      "Our medical team conducted comprehensive health check-ups for pilgrims and local residents during the Haridwar yatra. Over 800 people received free medical consultation, medicines, and health awareness sessions, making healthcare accessible to all.",
    icon: <Stethoscope className="h-6 w-6" />,
    images: [
      {
        id: 7,
        src: "/placeholder.svg?height=300&width=400&text=Medical+Camp+1",
        alt: "Doctor examining patient",
        title: "Doctor providing free consultation",
      },
      {
        id: 8,
        src: "/placeholder.svg?height=300&width=400&text=Medical+Camp+2",
        alt: "Blood pressure check-up",
        title: "Blood pressure screening for elderly",
      },
      {
        id: 9,
        src: "/placeholder.svg?height=300&width=400&text=Medical+Camp+3",
        alt: "Medicine distribution",
        title: "Free medicine distribution",
      },
      {
        id: 10,
        src: "/placeholder.svg?height=300&width=400&text=Medical+Camp+4",
        alt: "Health awareness session",
        title: "Health awareness session for families",
      },
      {
        id: 11,
        src: "/placeholder.svg?height=300&width=400&text=Medical+Camp+5",
        alt: "Eye examination",
        title: "Free eye examination and glasses",
      },
      {
        id: 12,
        src: "/placeholder.svg?height=300&width=400&text=Medical+Camp+6",
        alt: "Medical team group photo",
        title: "Dedicated medical team volunteers",
      },
    ],
  },
  {
    id: 3,
    title: "Community Kitchen - Kedarnath 2024",
    description:
      "Established a community kitchen serving fresh, nutritious meals to thousands of pilgrims and local workers. Our langar served over 2,000 meals daily, ensuring no devotee went hungry during their sacred journey to Lord Shiva's abode.",
    icon: <Utensils className="h-6 w-6" />,
    images: [
      {
        id: 13,
        src: "/placeholder.svg?height=300&width=400&text=Community+Kitchen+1",
        alt: "Volunteers cooking meals",
        title: "Volunteers preparing fresh meals",
      },
      {
        id: 14,
        src: "/placeholder.svg?height=300&width=400&text=Community+Kitchen+2",
        alt: "Serving food to pilgrims",
        title: "Serving nutritious food to pilgrims",
      },
      {
        id: 15,
        src: "/placeholder.svg?height=300&width=400&text=Community+Kitchen+3",
        alt: "Large cooking vessels",
        title: "Large-scale cooking arrangements",
      },
      {
        id: 16,
        src: "/placeholder.svg?height=300&width=400&text=Community+Kitchen+4",
        alt: "Pilgrims enjoying meals",
        title: "Pilgrims enjoying community meals",
      },
      {
        id: 17,
        src: "/placeholder.svg?height=300&width=400&text=Community+Kitchen+5",
        alt: "Food distribution line",
        title: "Organized food distribution system",
      },
      {
        id: 18,
        src: "/placeholder.svg?height=300&width=400&text=Community+Kitchen+6",
        alt: "Kitchen team working together",
        title: "Dedicated kitchen team in action",
      },
    ],
  },
  {
    id: 4,
    title: "Education Support Program - Varanasi 2023",
    description:
      "Launched an education initiative providing school supplies, books, and scholarships to underprivileged children in Varanasi. We supported 150 children's education, believing that knowledge is the greatest gift we can offer to future generations.",
    icon: <BookOpen className="h-6 w-6" />,
    images: [
      {
        id: 19,
        src: "/placeholder.svg?height=300&width=400&text=Education+Program+1",
        alt: "Children receiving books",
        title: "Children receiving new textbooks",
      },
      {
        id: 20,
        src: "/placeholder.svg?height=300&width=400&text=Education+Program+2",
        alt: "School supplies distribution",
        title: "Distribution of school supplies",
      },
      {
        id: 21,
        src: "/placeholder.svg?height=300&width=400&text=Education+Program+3",
        alt: "Students in classroom",
        title: "Students in their improved classroom",
      },
      {
        id: 22,
        src: "/placeholder.svg?height=300&width=400&text=Education+Program+4",
        alt: "Scholarship ceremony",
        title: "Scholarship award ceremony",
      },
      {
        id: 23,
        src: "/placeholder.svg?height=300&width=400&text=Education+Program+5",
        alt: "Teachers training session",
        title: "Teacher training and development",
      },
      {
        id: 24,
        src: "/placeholder.svg?height=300&width=400&text=Education+Program+6",
        alt: "Happy students with certificates",
        title: "Students celebrating their achievements",
      },
    ],
  },
];

// Simplified animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  },
};

const CauseEventSection = ({ event, index }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInVariants}
      className="mb-16"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-100 p-8 lg:p-12">
        {/* Event Header */}
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

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {event.images.map((image, imageIndex) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl transform rotate-1"></div>

              <div className="relative bg-white rounded-2xl p-2 transform -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-4 w-full">
                      <p className="text-white text-sm font-medium">
                        {image.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function CausesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
      {/* Introductory Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-amber-100/50"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=Pattern')] opacity-5 bg-repeat"></div>

        {/* Static decorative elements */}
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
            {/* Header Icon */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-rose-500 to-orange-500 p-6 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300">
                <Heart className="h-12 w-12 text-white" />
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                Our Sacred Causes
              </span>
            </h1>

            {/* Decorative Line */}
            <div className="w-32 h-1 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 mx-auto rounded-full mb-8"></div>

            {/* Main Description */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-100 p-8 lg:p-12">
              <div className="relative">
                <div className="absolute -top-6 -left-4 text-6xl text-orange-300 font-serif leading-none">
                  "
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-gray-800 font-medium pl-8">
                  We at{" "}
                  <span className="font-bold text-orange-700">
                    Mamta Foundation
                  </span>{" "}
                  believe that true spirituality is reflected in the service of
                  humanity. Through our causes, we aim to bring positive change
                  to lives across India by supporting those in need during our
                  spiritual yatras.
                </p>
                <div className="absolute -bottom-4 right-0 text-6xl text-orange-300 font-serif leading-none transform rotate-180">
                  "
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cause Events Sections */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {causeEvents.map((event, index) => (
            <CauseEventSection key={event.id} event={event} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}