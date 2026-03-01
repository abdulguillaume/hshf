import secondInducteeImg from "../assets/images/drbernardnau.jpg";

function SecondInductee() {
  return (
    <section className="px-4 sm:px-6 pt-32 sm:pt-32 lg:pt-32 pb-12 lg:pb-16 max-w-4xl mx-auto relative">
      
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-10 text-center text-gray-900">
        2026 Inductee
      </h2>

      <div className="flex flex-col items-center">
        {/* Inductee Image */}
        <div className="group">
          <img
            src={secondInducteeImg}
            alt="Main Inductee"
            className="w-64 sm:w-72 md:w-80 lg:w-96 rounded-3xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Card under photo */}
        <div className="mt-8 w-full max-w-2xl bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 text-center border border-gray-100">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 text-gray-900">
            Dr Bernard Nau
          </h3>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
          Trained in medicine at the State University of Haiti and specialized in orthopedics, he combined a career as an orthopedic surgeon, educator, and national volleyball athlete. 
          After postdoctoral training abroad, he returned to Haiti to serve his country through medical teaching, volunteer care for the underserved, and sports development, gaining broad leadership experience across medical, sports, and administrative roles.
          </p>
          <div className="mt-6 text-left">
            <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">
              Sporting Career
            </h4>
            <p><strong>Highlights of some of his most significant national and international volleyball accomplishments include:</strong></p>

            <ul className="space-y-2 text-sm sm:text-base text-gray-700">
  <li>
    Starting volleyball player for Institution Saint-Louis de Gonzague youth teams (1970–1976), achieving multiple national interscholastic championships and two consecutive interscholastic Olympic titles.
  </li>
  <li>
    Starting player for Haiti’s youth and senior national teams (1975–1986), earning NORCECA runner-up honors, qualifying for the Under-20 World Championships, and competing successfully in major international tournaments across the Americas and Europe.
  </li>
  <li>
    Starting player for Club KOREA (1976–1978), finishing national runner-up for two consecutive years.
  </li>
  <li>
    Starting player for the multisport club ESTUDIANTES (1978–1980), consistently finishing as national champion or runner-up.
  </li>
  <li>
    International tournament success with ESTUDIANTES, including multiple titles at the Caribbean Invitational of Miami and an MVP award.
  </li>
              </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondInductee;
