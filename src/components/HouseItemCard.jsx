import { Link } from "react-router-dom";

export default function HouseItemCard({ to, img, alt, title }) {
  return (
    <Link to={to} className="block group">
      <div className="relative h-32 md:h-56 p-4 rounded-xl shadow-lg overflow-hidden flex flex-col justify-end">
        <img
          src={img}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Background overlay*/}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        {/* Title */}
        <h2 className="relative z-10 text-xl font-bold text-white drop-shadow-md">
          {title}
        </h2>
      </div>
    </Link>
  );
}
