import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, Calendar, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { getYatraById, getYatraStatus } from "@/lib/utils";

const galleryByYatra = {
  1: ["/Hero1.jpeg", "/2025-1.jpeg", "/2025-9.jpeg", "/2025-17.jpeg"],
  2: ["/Hero2.jpeg", "/2025-2.jpeg", "/2025-10.jpeg", "/2025-18.jpeg"],
  3: ["/Hero5.jpeg", "/2025-3.jpeg", "/2025-11.jpeg", "/2025-19.jpg"],
  4: ["/Hero4.jpeg", "/2025-4.jpeg", "/2025-12.jpeg", "/2025-20.jpg"],
  5: ["/Hero3.jpeg", "/2025-5.jpeg", "/2025-13.jpeg", "/2025-21.jpg"],
  6: ["/Hero6.jpeg", "/2025-6.jpeg", "/2025-14.jpeg", "/2025-22.jpg"],
  7: ["/Hero7.jpeg", "/2025-7.jpeg", "/2025-15.jpeg", "/2025-23.jpg"],
};

const reviewsByYatra = {
  1: [
    { name: "Nisha Patel", title: "Memorable pilgrimage", text: "The entire journey was beautifully arranged, and the team guided us with so much care and devotion." },
    { name: "Anand Shah", title: "Very well managed", text: "From travel to darshan arrangements, everything was thoughtfully planned and peaceful." },
    { name: "Smitaben R", title: "Blessed experience", text: "The spiritual atmosphere was amazing, and the hospitality made the entire trip unforgettable." },
  ],
  2: [
    { name: "Jayesh Mehta", title: "Safe and divine", text: "The route, accommodation, and seva arrangements were excellent. We felt spiritually enriched throughout." },
    { name: "Hina Joshi", title: "Highly recommended", text: "The team ensured all yatris were comfortable and supported at every step. A beautiful experience." },
    { name: "Rakesh Vora", title: "Truly blessed", text: "Every moment of the Yatra felt peaceful and well-organized. We would definitely go again." },
  ],
  3: [
    { name: "Manoj Solanki", title: "Comfortable and joyful", text: "The darshan and travel schedule were clear, and the entire trip felt smooth and inspiring." },
    { name: "Kavita Shah", title: "Warm hospitality", text: "We felt welcome and cared for throughout. The team made the journey deeply spiritual and relaxed." },
    { name: "Kalpesh Patil", title: "Well planned", text: "Every detail was handled carefully, and the yatra experience was memorable from start to finish." },
  ],
  4: [
    { name: "Dinesh Chauhan", title: "Wonderful guidance", text: "The itinerary was perfectly timed, and the family felt fully supported throughout the journey." },
    { name: "Sejal Purohit", title: "Beautiful darshan", text: "Every temple stop was arranged thoughtfully, and the team was always kind and helpful." },
    { name: "Mohan Trivedi", title: "Worth every moment", text: "The spiritual energy, comfort, and planning made it a deeply fulfilling yatra." },
  ],
  5: [
    { name: "Rita Parmar", title: "Soulful journey", text: "The team handled everything with patience and care. The entire parikrama felt organised and serene." },
    { name: "Bhavesh Patel", title: "Loved the arrangements", text: "The route and daily planning were excellent, and everything was hassle-free for us." },
    { name: "Monica Dave", title: "Divine and peaceful", text: "We experienced great comfort and a strong spiritual connection throughout the yatra." },
  ],
  6: [
    { name: "Neelam Shah", title: "Very smooth travel", text: "The team coordinated every leg of the trip so well that we could simply enjoy the spiritual experience." },
    { name: "Vijay Mevada", title: "Excellent support", text: "From accommodations to darshan logistics, it was all beautifully managed with a personal touch." },
    { name: "Pooja Shah", title: "Truly blessed", text: "The yatra was peaceful, well-planned, and deeply moving. We will cherish the memories." },
  ],
  7: [
    { name: "Mahesh Mehta", title: "Spiritual and peaceful", text: "The entire journey was planned thoughtfully and truly helped us feel connected to the divine." },
    { name: "Sonal Pandya", title: "Great coordination", text: "Everything from travel comfort to temple darshan was handled with care and professionalism." },
    { name: "Harshad Jain", title: "Beautiful memories", text: "The team made the trip comfortable and spiritually uplifting. We were very happy with the arrangements." },
  ],
};

const YatraDetail = () => {
  const { yatraId } = useParams();
  const { t } = useTranslation();
  const yatra = getYatraById(yatraId);

  if (!yatra) {
    return (
      <div className="min-h-screen pt-28 px-4 text-center">
        <h1 className="text-3xl font-bold text-[#1E2E73]">Yatra not found</h1>
        <Link to="/yatras" className="mt-6 inline-block text-[#E30613] font-semibold">
          Back to yatras
        </Link>
      </div>
    );
  }

  const status = getYatraStatus(yatra);
  const galleryItems = galleryByYatra[yatra.id] || [yatra.image];
  const reviews = reviewsByYatra[yatra.id] || [
    {
      name: "Pilgrim",
      title: "Blessed journey",
      text: "The entire experience was spiritually uplifting and well-organized.",
    },
  ];

  const phoneNumber = "919313840744";
  const statusStyles = {
    upcoming: "bg-[#F4C402] text-[#1E2E73]",
    ongoing: "bg-[#E30613] text-white",
    completed: "bg-[#6B7280] text-white",
  };

  return (
    <>
      <Helmet>
        <title>{t(yatra.nameKey)} | Mamta Foundation</title>
        <meta name="description" content={t(yatra.descriptionKey)} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#FFF6D8] to-white pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/yatras"
            className="inline-flex items-center gap-2 text-[#1E2E73] font-semibold mb-6 hover:text-[#E30613]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Yatras
          </Link>

          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <img src={yatra.image} alt={t(yatra.imageAltKey)} className="w-full h-[360px] md:h-[500px] object-cover" />
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.5fr_0.8fr] gap-8 items-start">
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[status]}`}>
                {t(`yatras.${status}`)}
              </span>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold text-[#1E2E73] leading-tight">
                {t(yatra.nameKey)}
              </h1>

              <div className="mt-6 space-y-3 text-gray-700">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#7DC3E8]" />
                  <span>{t(yatra.locationKey)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#7DC3E8]" />
                  <span>
                    {t(yatra.datesKey)} • {t(yatra.durationKey)}
                  </span>
                </div>
              </div>

              <p className="mt-6 text-lg text-gray-700 leading-8">{t(yatra.descriptionKey)}</p>
            </div>

            <div className="bg-[#FFF6D8] rounded-2xl p-6 shadow-md border border-[#F4C402]/40">
              <h2 className="text-xl font-bold text-[#1E2E73] mb-4">Get Started</h2>

              <a
                href={yatra.pdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 bg-[#E30613] hover:bg-[#c50012] text-white font-semibold py-3 px-4 rounded-xl transition"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </a>

              {status === "upcoming" && (
                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    `Hello, I'm interested in your temple tour services for ${t(yatra.nameKey)}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 block"
                >
                  <Button className="w-full bg-[#1E2E73] hover:bg-[#16275d] text-white rounded-xl">
                    Book Now
                  </Button>
                </a>
              )}
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-[#1E2E73] mb-6">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryItems.map((image, index) => (
                <img
                  key={`${yatra.id}-${index}`}
                  src={image}
                  alt={`${t(yatra.nameKey)} gallery ${index + 1}`}
                  className="h-52 w-full object-cover rounded-2xl shadow-md"
                />
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-[#1E2E73] mb-6">Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div key={review.name} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                  <div className="text-[#F4C402] text-lg mb-2">★★★★★</div>
                  <p className="text-gray-700 leading-7">“{review.text}”</p>
                  <div className="mt-4 border-t pt-4">
                    <p className="font-bold text-[#1E2E73]">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default YatraDetail;
