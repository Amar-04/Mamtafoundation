

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <img src="/splash.png" alt="Logo" className="w-[80vw] h-[40vh] lg:h-[80vh] animate-pulse" />
    </div>
  );
};

export default SplashScreen;
