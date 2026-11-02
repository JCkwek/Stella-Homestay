import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">
      {/*Main Banner*/}
      <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
        <img
          src="/assets/images/tr-residence.webp"
          alt="TR Residence"
          className="w-full h-full object-cover"
        />

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-wide drop-shadow-md">
            TR Residence
          </h1>
        </div>
      </div>

      {/* Main Content Container (Add your quick access cards here) */}
      <div className="max-w-4xl mx-auto p-6 space-y-6 flex flex-col gap-4">
        <div className="border-b border-gray-400 p-4">
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>3 bed rooms</li>
            <li>3 bed rooms</li>
          </ul>
        </div>

        <Link to="/gallery" className="block group">
          <div className="relative h-32 md:h-56 p-4 rounded-xl shadow-lg overflow-hidden flex flex-col justify-end">
            <img
              src="/assets/images/gallery.webp"
              alt="Gallery"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Background overlay*/}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            {/* Title */}
            <h2 className="relative z-10 text-xl font-bold text-white drop-shadow-md">
              Gallery
            </h2>
          </div>
        </Link>

        <Link to="/services-facilities" className="block group">
          <div className="relative h-32 md:h-56 p-4 rounded-xl shadow-lg overflow-hidden flex flex-col justify-end">
            <img
              src="/assets/images/facilities.webp"
              alt="Gallery"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <h2 className="relative z-10 text-xl font-bold text-white drop-shadow-md">
              Services & Facilities
            </h2>
          </div>
        </Link>

        <div className="relative h-32 md:h-56 p-4 rounded-xl shadow-lg overflow-hidden flex flex-col justify-end">
          <img
            src="/assets/images/checkin.webp"
            alt="Gallery"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <h2 className="relative z-10 text-xl font-bold text-white drop-shadow-md">
            Check-in & Check-out Procedure
          </h2>
        </div>
      </div>
    </div>
  );
}
