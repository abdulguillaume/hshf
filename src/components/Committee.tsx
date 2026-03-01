const committeeImages = import.meta.glob<{ default: string }>(
  "../assets/images/committee/*.{jpg,jpeg,png}",
  { eager: true }
);

const getCommitteeImage = (slug: string) => {
  const key = Object.keys(committeeImages).find((path) =>
    path.replace(/^.*\//, "").replace(/\.[^.]+$/, "") === slug
  );
  return key ? (committeeImages[key] as { default: string }).default : null;
};

function Committee() {
  const toImageSlug = (name: string) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");

  const committeeMembers = [
    { name: "Jacky Philemon", title: "President" },
    { name: "Wesly Borgella", title: "Vice-President" },
    { name: "Abdul J. James", title: "Treasurer & Tech Advisor" },
    { name: "Claude Jean-Louis", title: "Senior Advisor" },
    { name: "Jord Mike Norgaisse", title: "Secretary General" },
    { name: "Joseph Kary Julien", title: "Senior Advisor" },
    { name: "Claudianie Dorcelet", title: "Head of Protocol" },
    { name: "Alain M. Laverne", title: "Head of Marketing" },
    { name: "Tony Valbrun ", title: "Senior Advisor" },
    { name: "Georges Toussaint ", title: "Senior Advisor" },
  ];

  return (
    <section
      id="committee"
      className="px-4 sm:px-6 pt-32 sm:pt-32 lg:pt-32 pb-12 lg:pb-16 max-w-full mx-auto overflow-x-hidden"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-14 text-center text-gray-900">
        2026 Selection Committee
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {committeeMembers.map((member, i) => (
          <div
            key={i}
            className="group bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 hover:-translate-y-3 transition-all duration-500 w-full max-w-sm"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={getCommitteeImage(toImageSlug(member.name)) ?? ""}
                alt={member.name}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900">
                {member.name}
              </h3>

              <p className="mt-2 text-gray-600 text-lg">
                {member.title}
              </p>

              <div className="mt-4 h-1 w-16 mx-auto bg-gray-900 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Committee;
