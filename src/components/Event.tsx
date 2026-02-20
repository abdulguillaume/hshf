function Event() {
  return (
    <section
      id="event"
      className="px-4 sm:px-6 pt-32 sm:pt-32 lg:pt-32 pb-12 lg:pb-16 max-w-6xl mx-auto"
    >
      <div className="bg-gray-100 border border-gray-200 rounded-3xl shadow-2xl p-10 sm:p-14 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8">
          2026 Induction Event
        </h2>

        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-lg sm:text-xl text-gray-800">
            <span className="font-semibold text-gray-900">Date:</span>{" "}
            August 22, 2026
          </p>

          <p className="text-lg sm:text-xl text-gray-800">
            <span className="font-semibold text-gray-900">Location:</span>{" "}
            To be decided
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            A prestigious evening celebrating Haitian sports excellence,
            featuring inductions, guest speakers, and cultural performances.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Basketball and volleyball games will be scheduled as kickoff of the
            event on the previous day.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 italic">
            More details coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Event;
