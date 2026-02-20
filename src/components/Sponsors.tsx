import sponsor1Img from "../assets/images/sponsor1.jpg";
import sponsor2Img from "../assets/images/sponsor2.jpg";
import sponsor3Img from "../assets/images/sponsor3.jpg";

function Sponsors() {
  const sponsors = [
    {
      img: sponsor1Img,
      name: "Elite Sports Foundation",
      description:
        "Supporting Haitian athletes for over 10 years, promoting excellence, training, and community outreach programs.",
    },
    {
      img: sponsor2Img,
      name: "Global Fitness Co.",
      description:
        "Providing top-notch equipment and resources to help athletes reach their peak performance.",
    },
    {
      img: sponsor3Img,
      name: "Community Partners",
      description:
        "Investing in local sports initiatives, empowering young talent, and fostering the next generation of champions.",
    },
  ];

  return (
    <section
      id="sponsors"
      className="px-4 sm:px-6 pt-32 sm:pt-32 lg:pt-32 pb-12 lg:pb-16 max-w-full mx-auto overflow-x-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
          Our Proud Sponsors
        </h2>
        <p className="mt-6 text-gray-700 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          We sincerely thank our sponsors for their unwavering support. Their
          partnership allows us to celebrate Haitian sports excellence and
          inspire generations of athletes.
        </p>
      </div>

      {/* Sponsors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-200 rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center hover:-translate-y-3 transition-all duration-500"
          >
            {/* Logo */}
            <div className="w-52 h-52 sm:w-60 sm:h-60 lg:w-64 lg:h-64 mb-6 overflow-hidden rounded-2xl border-2 border-gray-300 shadow-lg">
              <img
                src={sponsor.img}
                alt={sponsor.name}
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Sponsor Name */}
            <h3 className="text-gray-900 font-bold text-xl sm:text-2xl mb-3">
              {sponsor.name}
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {sponsor.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sponsors;
