import { useNavigate } from "react-router-dom";

const committee2025Images = import.meta.glob<{ default: string }>(
  "../assets/images/committee2025/*.{jpg,jpeg,png}",
  { eager: true }
);

const getCommitteeImage = (slug: string) => {
  const key = Object.keys(committee2025Images).find(
    (path) =>
      path.replace(/^.*\//, "").replace(/\.[^.]+$/, "") === slug
  );
  return key
    ? (committee2025Images[key] as { default: string }).default
    : null;
};

const toImageSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

const committeeMembers = [
  { name: "Jacky Philemon", title: "President" },
  { name: "Wesly Borgella", title: "Vice-President" },
  { name: "Abdul J. James", title: "Tech Advisor" }
];

function Committee2025() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold mb-10 transition"
        >
          <span aria-hidden>←</span> Back to main page
        </button>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-14 text-center">
          2025 Committee
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {committeeMembers.map((member, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 hover:-translate-y-3 transition-all duration-500 w-full max-w-sm"
            >
              <div className="overflow-hidden">
                <img
                  src={getCommitteeImage(toImageSlug(member.name)) ?? ""}
                  alt={member.name}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-2 text-gray-600 text-lg">{member.title}</p>
                <div className="mt-4 h-1 w-16 mx-auto bg-gray-900 rounded-full group-hover:w-24 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Committee2025;
