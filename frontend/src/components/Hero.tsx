import homeReal from "../assets/homeReal.jpg";
export default function Hero({ hero }: any) {
    return (
        <section className=" text-black py-24">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {hero.title}
                    </h1>

                    <p className="text-lg mb-6">
                        {hero.subtitle}
                    </p>

                    <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold">
                        Enquire Now
                    </button>
                </div>

                <div className="bg-white h-64 rounded-xl shadow-lg overflow-hidden">
                    <img
                        src={homeReal}
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />
                </div>


            </div>
        </section>
    );
}
