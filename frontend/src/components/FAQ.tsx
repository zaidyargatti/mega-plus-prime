export default function FAQ({ faqs }: any) {
  return (
    <section className="py-20">

      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto px-6 space-y-4">

        {faqs.map((f: any, i: number) => (
          <div
            key={i}
            className="border rounded-lg p-4"
          >
            <h4 className="font-semibold mb-2">
              {f.question}
            </h4>
            <p className="text-gray-600">
              {f.answer}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
