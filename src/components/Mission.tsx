function Mission() {
  return (
    <section
      id="mission"
      className="px-4 sm:px-6 pt-48 sm:pt-48 lg:pt-48 pb-12 lg:pb-16 max-w-full mx-auto relative bg-gradient-to-b from-gray-50 via-gray-100 to-gray-100"
    >
      {/* Decorative Glow Circles */}
      <div className="absolute top-0 -left-10 w-48 h-48 bg-red-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 -right-10 w-60 h-60 bg-yellow-200/20 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6 sm:mb-8 lg:mb-10 text-center text-gray-800 relative">
        Our Mission
      </h2>

      {/* Paragraph */}
      <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-center text-gray-700 max-w-3xl mx-auto px-2 sm:px-0">
      The Haitian Sports Hall of Fame is an honorary institution established to preserve the legacy of Haitian athletes, recognize outstanding individuals who have shaped sports in the country, and promote the values of discipline, integrity, leadership, and excellence.
      The Haitian Sports Hall of Fame aims to inspire future generations, support the growth of Haitian sports, and enhance the national and international reputation of our talents.
      </p>
    </section>
  );
}

export default Mission;
