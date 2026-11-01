import { Link } from "react-router-dom"; 

export default function GalleryPage() {
  const galleryImages = [
    { src: "/assets/images/gallery.webp", alt: "Living Room" },
    { src: "/assets/images/master.webp", alt: "Master Bedroom" },
    { src: "/assets/images/bedroom1.webp", alt: "Bedroom" },
    { src: "/assets/images/bedroom1a.webp", alt: "Bedroom" },
    { src: "/assets/images/bedroom1b.webp", alt: "Bedroom" },
    { src: "/assets/images/bedroom2.webp", alt: "Bedroom" },
    { src: "/assets/images/balcony.webp", alt: "Balcony" },
    { src: "/assets/images/Washing.webp", alt: "Washing machine" },

  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Back Button */}
      <div>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
        >
          &larr; Back
        </Link>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
        <p className="text-gray-600 mt-2">Take a visual tour inside TR Residence.</p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-xl shadow-lg group h-64 bg-gray-100"
          >
            {/* Image with smooth zoom effect on hover */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Optional gradient overlay with caption that slides/fades in on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white font-medium text-sm drop-shadow-md">
                {image.alt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}