import inductee1Img from "../assets/images/inductee1.jpg";
import inductee2Img from "../assets/images/inductee2.jpg";
import inductee3Img from "../assets/images/inductee3.jpg";

function Inductees() {
  const inductees = [
    { name: "Marie Toussaint", sport: "Basketball", img: inductee1Img },
    { name: "Alexandre Jean", sport: "Athletics", img: inductee2Img },
    { name: "Claude Baptiste", sport: "Coaching", img: inductee3Img },
  ];

  return (
    <section
      id="inductees"
      className="px-4 sm:px-6 pt-32 sm:pt-32 lg:pt-32 pb-12 lg:pb-16 max-w-full mx-auto relative overflow-x-hidden"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-12 text-center text-gray-900">
        2026 Inductees
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {inductees.map((inductee) => (
          <div
            key={inductee.name}
            className="group relative p-6 rounded-3xl bg-gradient-to-tr from-white/80 to-gray-50 shadow-2xl border border-gray-200 hover:scale-105 hover:shadow-2xl hover:from-red-50 hover:to-white transition-all duration-500 cursor-pointer overflow-hidden"
          >
            <div className="relative">
              <img
                src={inductee.img}
                alt={inductee.name}
                className="w-56 sm:w-64 lg:w-72 h-auto rounded-2xl mx-auto shadow-2xl transform transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-red-400/20 opacity-0 group-hover:opacity-70 transition-opacity duration-500 mix-blend-multiply blur-2xl"></div>
            </div>

            <p className="mt-6 text-base sm:text-lg lg:text-xl font-semibold text-gray-900 text-center">
              <span className="block text-gray-800 text-xl sm:text-2xl lg:text-3xl font-bold">
                {inductee.name}
              </span>
              <span className="block mt-1 text-gray-600 text-lg sm:text-xl lg:text-2xl font-medium">
                {inductee.sport}
              </span>
            </p>

            {/* Animated underline */}
            <div className="mt-4 h-1 w-20 mx-auto bg-gray-800 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Inductees;
