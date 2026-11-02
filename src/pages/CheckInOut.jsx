import { Link } from "react-router-dom";

export default function CheckInOut() {
  const steps = [
    {
      number: "1",
      title: "Go to Block A",
      description:
        "Inform any security guards on duty that you want to collect keys from the mailbox.",
      images: ["/assets/images/checkin1.webp"],
      alt: ["Tower A Security"],
    },
    {
      number: "2",
      title: "Access Mailbox Area",
      description: "Access the mailbox area through the glass door.",
      images: ["/assets/images/checkin2.webp"],
      alt: ["Glass door entrance"],
    },
    {
      number: "3",
      title: "Locate Mailbox A-23-5",
      description:
        "Look for mailbox A-23-5. Password will be provided separately.",
      images: [
        "/assets/images/checkin3a.webp",
        "/assets/images/checkin3b.webp",
      ],
      alt: ["Mailbox compartment", "Mailbox passcode lock"],
    },
    {
      number: "4",
      title: "Collect Access Cards",
      description:
        "Collect the cards for carpark and door access from the mailbox.",
      images: ["/assets/images/checkin4.webp"],
      alt: ["Access and carpark cards"],
    },
    {
      number: "5",
      title: "Access Carpark",
      description:
        "Access the carpark through this entrance. Your designated carpark is located at Level 4, No. 39.",
      images: [
        "/assets/images/checkin5a.webp",
        "/assets/images/checkin5b.webp",
      ],
      alt: ["Carpark entrance J3/4", "Level 4 parking bay"],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Back Button */}
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
        >
          &larr; Back
        </Link>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Check-in Guide</h1>
      </div>

      {/* Roadmap Container */}
      <div className="relative wrap overflow-hidden p-4 md:p-10">
        {/* Vertical Dashed Line*/}
        <div className="my-4 absolute border-2 border-dashed border-gray-300 h-full left-1/2 transform -translate-x-1/2 z-0"></div>

        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          const hasMultipleImages = step.images.length > 1;

          return (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row items-center justify-between w-full relative z-10 ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Empty space for alternating layout on desktop */}
              <div className="hidden md:block w-5/12"></div>

              <div className="flex items-center justify-center mb-4 md:mb-0 md:ml-0">
                {hasMultipleImages ? (
                  // Layout for 2 pictures: side-by-side overlapping or stacked circles
                  <div className="flex items-center -space-x-6 md:-space-x-8">
                    {step.images.map((imgSrc, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-amber-400 shadow-xl overflow-hidden bg-white group flex-shrink-0 transition-transform hover:scale-105 hover:z-20"
                      >
                        <img
                          src={imgSrc}
                          alt={step.alt[imgIdx] || step.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  // Layout for 1 picture
                  <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-amber-400 shadow-xl overflow-hidden bg-white group flex-shrink-0">
                    <img
                      src={step.images[0]}
                      alt={step.alt[0]}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                )}
              </div>

              {/* Content Card (Text & Step Number) */}
              <div className="w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-md border border-gray-100 relative ml-12 md:ml-0">
                <div className="flex items-start gap-4">
                  {/* Large Step Number */}
                  <span className="text-4xl md:text-5xl font-black text-pink-600 leading-none">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
