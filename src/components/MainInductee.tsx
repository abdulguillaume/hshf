import mainInducteeImg from "../assets/images/main-inductee.jpg";

function MainInductee() {
  return (
    <section className="px-4 sm:px-6 pt-32 sm:pt-32 lg:pt-32 pb-12 lg:pb-16 max-w-4xl mx-auto relative">
      
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-10 text-center text-gray-900">
        2026 Inductee
      </h2>

      <div className="flex flex-col items-center">
        {/* Inductee Image */}
        <div className="group">
          <img
            src={mainInducteeImg}
            alt="Main Inductee"
            className="w-64 sm:w-72 md:w-80 lg:w-96 rounded-3xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Card under photo */}
        <div className="mt-8 w-full max-w-2xl bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 text-center border border-gray-100">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 text-gray-900">
            Friedrich Verna - Coach FeFe
          </h3>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
            Renowned for his vision, leadership, and dedication, he has left an
            enduring legacy in Haitian basketball and inspired generations of
            players and coaches.
          </p>
          <div className="mt-6 text-left">
            <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">
              Sporting Career
            </h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700">
              <li>Player, Haiti U17 and U19 National Teams (1976–1977)</li>
              <li>Player, Haiti Senior National Team (1978–1980)</li>
              <li>Head Coach, Haiti U15 National Team (1983)</li>
              <li>Head Coach, Haiti U19 National Team (1997)</li>
              <li>Head Coach, Haiti Senior National Team (1998)</li>
              <li>National Technical Director (1992–1998)</li>
              <li>Consultant and Basketball Analyst for TNH and Telemax</li>
              <li>Coach of the Cadet and Junior teams at Saint-Louis de Gonzague Institution (1982–1999)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainInductee;
