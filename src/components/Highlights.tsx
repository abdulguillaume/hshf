import { Link } from "react-router-dom";
import highlightsImg from "../assets/images/2025-1.jpg";

function Highlights() {
  return (
    <section
      id="highlights"
      className="px-4 sm:px-6 pt-32 sm:pt-32 lg:pt-32 pb-12 lg:pb-16 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12 text-center text-gray-900">
        2025 Highlights
      </h2>

      <div className="group bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Image */}
          <div className="lg:w-1/2 w-full flex justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200">
              <img
                src={highlightsImg}
                alt="2025 Inductee"
                className="w-full h-auto max-h-[420px] object-contain transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Jean Claude Dorcelet – Coach JoJo
            </h3>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-5">
              Jean Claude Dorcelet has dedicated over 30 years to coaching and
              developing Haitian athletes across multiple sports disciplines.
              His contributions to Haitian sports excellence have inspired
              generations.
            </p>

            <p className="text-gray-800 text-base sm:text-lg mb-2">
              <span className="font-semibold text-gray-900">
                Date of Induction:
              </span>{" "}
              August 30, 2025
            </p>

            <p className="text-gray-800 text-base sm:text-lg mb-5">
              <span className="font-semibold text-gray-900">
                Event Location:
              </span>{" "}
              170 Post Ave, Westbury, NY 11590
            </p>

            <div className="flex gap-6">
              <Link
                to="/gallery2025"
                className="text-gray-900 font-semibold underline hover:opacity-70 transition"
              >
                Photo Gallery
              </Link>

              <Link
                to="/committee2025"
                className="text-gray-900 font-semibold underline hover:opacity-70 transition"
              >
                Committee
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
