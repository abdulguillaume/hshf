import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ceremonyImages = import.meta.glob<{ default: string }>(
  "../assets/images/gallery2025/ceremony/*.{jpg,jpeg,png}",
  { eager: true }
);

const basketballImages = import.meta.glob<{ default: string }>(
  "../assets/images/gallery2025/basketball/*.{jpg,jpeg,png}",
  { eager: true }
);

/** Base URL for assets (needed for GitHub Pages subpath, e.g. /hshf/). */
const assetBase = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

/** Returns image URLs sorted by filename (path) so order is consistent. */
const imageListSorted = (glob: Record<string, { default: string }>) => {
  const entries = Object.entries(glob).map(([path, mod]) => ({
    path,
    src: (mod as { default: string }).default
  }));
  entries.sort((a, b) => a.path.localeCompare(b.path));
  return entries.map((e) => e.src);
};

/** Ensures asset URL works on GitHub Pages (prefix with base when needed). */
const withBase = (url: string) =>
  url.startsWith("http") ? url : `${assetBase}${url.startsWith("/") ? url : `/${url}`}`;

function Carousel({
  photos,
  altPrefix,
  emptyMessage
}: {
  photos: string[];
  altPrefix: string;
  emptyMessage: string;
}) {
  const [index, setIndex] = useState(0);

  if (photos.length === 0) {
    return (
      <p className="text-gray-500 py-8 text-center">{emptyMessage}</p>
    );
  }

  const goPrev = () =>
    setIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  const goNext = () =>
    setIndex((i) => (i === photos.length - 1 ? 0 : i + 1));

  return (
    <div className="relative flex flex-col items-center mx-auto max-w-4xl">
      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100 aspect-video max-h-[480px] w-full flex items-center justify-center">
        <img
          src={photos[index]}
          alt={`${altPrefix} ${index + 1} of ${photos.length}`}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex items-center justify-between gap-4 mt-4 w-full max-w-sm">
        <button
          type="button"
          onClick={goPrev}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 font-medium transition"
          aria-label="Previous photo"
        >
          ← Previous
        </button>
        <span className="text-sm text-gray-600">
          {index + 1} / {photos.length}
        </span>
        <button
          type="button"
          onClick={goNext}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 font-medium transition"
          aria-label="Next photo"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

function Gallery2025() {
  const navigate = useNavigate();
  const ceremonyPhotos = imageListSorted(ceremonyImages).map(withBase);
  const basketballPhotos = imageListSorted(basketballImages).map(withBase);

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold mb-10 transition"
        >
          <span aria-hidden>←</span> Back to main page
        </button>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-12 text-center">
          2025 Photo Gallery
        </h1>

        {/* Ceremony section */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200">
            Ceremony
          </h2>
          <p className="text-gray-600 mb-6">
            Photos from the 2025 induction ceremony.
          </p>
          <Carousel
            photos={ceremonyPhotos}
            altPrefix="Ceremony"
            emptyMessage="Ceremony photos coming soon."
          />
        </section>

        {/* Basketball game section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200">
            Basketball Game
          </h2>
          <p className="text-gray-600 mb-6">
            Kickoff basketball game the day before the event.
          </p>
          <Carousel
            photos={basketballPhotos}
            altPrefix="Basketball game"
            emptyMessage="Basketball game photos coming soon."
          />
        </section>
      </div>
    </div>
  );
}

export default Gallery2025;
