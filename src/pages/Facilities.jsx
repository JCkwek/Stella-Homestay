import { Link } from "react-router-dom";

export default function Facilities() {
  // Group your images/facilities by category sections
  const facilitySections = [
    {
      title: "Swimming Pool",
      description: "Enjoy our swimming pool facilities with stunning views.",
      images: [
        { src: "/assets/images/facilities.webp", alt: "Swimming pool view" },
        { src: "/assets/images/pool2.webp", alt: "Pool at night" },
        { src: "/assets/images/pool3.webp", alt: "Pool at night" },
        { src: "/assets/images/pool4.webp", alt: "Pool at night" },
      ],
    },
    {
      title: "Gym & Fitness",
      description: "Fully equipped gym available for residents to stay active.",
      images: [{ src: "/assets/images/gym.webp", alt: "Gym equipment" }],
    },
    {
      title: "MRT Station",
      description:
        "Conveniently located just minutes away from LRT/MRT Titiwangsa Station.",
      images: [{ src: "/assets/images/mrt.webp", alt: "Nearby MRT station" }],
    },
    {
      title: "Roof Garden & View",
      description: "Relaxing outdoor spaces and resident lounges.",
      images: [
        { src: "/assets/images/checkin.webp", alt: "Roof garden" },
        { src: "/assets/images/roof2.webp", alt: "Roof garden" },
        { src: "/assets/images/roofview1.webp", alt: "Roof garden" },
        { src: "/assets/images/roofview2.webp", alt: "Roof garden" },
        { src: "/assets/images/roofview3.webp", alt: "Roof garden" },
        { src: "/assets/images/roofview4.webp", alt: "Roof garden" },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Back Button */}
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
        >
          &larr; Back
        </Link>
      </div>

      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Services & Facilities
        </h1>
        <p className="mt-2 text-gray-600">
          Explore the amenities and convenient location features available at TR
          Residence.
        </p>
      </div>

      {/* Sections Loop */}
      <div className="space-y-12">
        {facilitySections.map((section, sectionIdx) => (
          <div key={sectionIdx} className="space-y-4">
            {/* Section Header */}
            <div className="border-b border-gray-200 pb-3">
              <h2 className="text-2xl font-semibold text-gray-900">
                {section.title}
              </h2>
              {section.description && (
                <p className="text-sm text-gray-600 mt-1">
                  {section.description}
                </p>
              )}
            </div>

            {/* Image Grid for this specific section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {section.images.map((image, imageIdx) => (
                <div
                  key={imageIdx}
                  className="relative overflow-hidden rounded-xl shadow-lg group h-64 bg-gray-100"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient overlay with label */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-sm drop-shadow-md">
                      {image.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
