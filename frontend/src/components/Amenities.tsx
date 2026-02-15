export default function Amenities({ amenities }: any) {

  // ✅ Fallback demo amenities
  const demoAmenities = [
    { title: "Swimming Pool", desc: "Large modern swimming pool" },
    { title: "Gymnasium", desc: "Fully equipped fitness center" },
    { title: "Club House", desc: "Community hall & lounge area" },
    { title: "Children's Play Area", desc: "Safe play zone for kids" },
    { title: "Jogging Track", desc: "Open jogging & walking track" },
    { title: "Garden Area", desc: "Green landscaped garden" },
    { title: "Indoor Games", desc: "Table tennis, chess & more" },
    { title: "24x7 Security", desc: "CCTV & gated security" }
  ];

  const amenitiesData = amenities?.length ? amenities : demoAmenities;

  return (
    <section className="py-20 bg-gray-100">

      <h2 className="text-3xl font-bold text-center mb-12">
        Amenities
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">

        {amenitiesData.map((a: any, i: number) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow text-center hover:shadow-xl transition"
          >

            {/* Icon Circle */}
            <div className="w-14 h-14 bg-green-700 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-xl">
              ✓
            </div>

            <h4 className="font-semibold mb-1">
              {a.title}
            </h4>

            <p className="text-sm text-gray-500">
              {a.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
