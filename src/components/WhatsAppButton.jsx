const WhatsAppButton = () => {
  const phoneNumber = "919054087296"; // Use your number here
  const message = "Hello, I'm interested in your temple tour services!";
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-colors duration-300"
    >
      <i className="fab fa-whatsapp text-white text-2xl"></i>
    </a>
  );
};

export default WhatsAppButton;
