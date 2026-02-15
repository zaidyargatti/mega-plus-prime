import aboutPro from "../assets/aboutPro.jpg";
export default function About({ about }: any) {

  const demoText =
    "Infinity Towers is a premium residential development designed for modern urban living. Offering thoughtfully planned apartments, lush green surroundings, and world-class amenities, the project ensures comfort, convenience, and luxury for families. Located in a prime area with excellent connectivity, Infinity Towers brings together elegant architecture and superior construction quality to create a perfect place to call home.";

  return (
    <section className="py-20 bg-gray-100">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">
        About Project
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="h-80 rounded-xl overflow-hidden shadow-lg">
          <img
            src={aboutPro}
            alt="About Project"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <p className="text-gray-700 leading-relaxed text-lg">
            {about || demoText}
          </p>

          <button className="mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800">
            Know More
          </button>
        </div>

      </div>

    </section>
  );
}
