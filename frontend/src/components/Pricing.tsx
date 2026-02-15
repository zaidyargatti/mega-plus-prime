import bhk1 from "../assets/bhk1.jpg";
import bhk2 from "../assets/bhk2.jpg";
import bhk3 from "../assets/bhk3.jpg";
export default function Pricing({ pricing }: any) {

    const mockPricing = [
        { title: "Smart 1 BHK Apartment", price: "₹ 69.99 Lacs*" },
        { title: "Premium 2 BHK Apartment", price: "₹ 96.99 Lacs*" },
        { title: "Luxury 3 BHK Apartment", price: "₹ 1.29 Cr*" }
    ];

    const pricingData = pricing?.length ? pricing : mockPricing;

    return (
        <section className="py-20">

            <h2 className="text-3xl font-bold text-center mb-12">
                Pricing
            </h2>

            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">

                {pricingData.map((p: any, i: number) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
                    >

                        {/* Image Placeholder */}
                        <div className="h-40 overflow-hidden">
                            <img
                                src={i === 0 ? bhk1 : i === 1 ? bhk2 : bhk3}
                                className="w-full h-full object-cover"
                                alt="apartment"
                            />
                        </div>


                        {/* Content */}
                        <div className="p-5 text-center">
                            <h3 className="text-lg font-semibold mb-2">
                                {p.title}
                            </h3>

                            <p className="text-green-600 text-xl font-bold">
                                {p.price}
                            </p>

                            <button className="mt-4 bg-green-700 text-white px-5 py-2 rounded hover:bg-green-800">
                                Enquire Now
                            </button>
                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}
