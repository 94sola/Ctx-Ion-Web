import { useState } from "react";

const faqs = [
  {
    question: "What types of samples do you analyze?",
    answer:
      "CTX-ION analyzes a wide range of samples including soil, water, food, oil, and environmental matrices using validated laboratory methods.",
  },
  {
    question: "Which instruments do you use for analysis?",
    answer:
      "We utilize advanced instrumentation such as GC-MS, ICP-OES, and other analytical platforms to deliver accurate and reliable results.",
  },
  {
    question: "What kinds of tests can you perform?",
    answer:
      "We provide elemental analysis, pesticide residue testing, heavy metal determination, and other specialized analytical investigations based on client needs.",
  },
  {
    question: "How long does it take to receive results?",
    answer:
      "Turnaround time depends on sample type and test scope, but most routine analyses are completed within 5 to 10 business days.",
  },
  {
    question: "Do you follow quality and compliance standards?",
    answer:
      "Yes. CTX-ION maintains strict quality control practices and operates in compliance with ISO 17025 standards and relevant regulatory requirements.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-20 xl:px-32 font-manrope">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">

        <div className="max-w-lg">
          <p className="uppercase tracking-wide text-gray-500 text-sm mb-3">
            FAQ
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900 mb-6">
            Common Questions <br /> About Our Laboratory Services
          </h2>

          <p className="text-gray-600 leading-relaxed text-base">
            Below are answers to common questions about CTX-ION’s analytical process,
            instrumentation, and quality standards. If you need a specific test or
            custom analysis, our team is ready to assist.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((item, i) => (
            <div key={i} className="border-b border-gray-200 pb-4">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggle(i)}
              >
                <span className="text-lg text-gray-900 font-medium">
                  {item.question}
                </span>

                <span className="text-2xl font-light text-gray-800 leading-none">
                  {openIndex === i ? "–" : "+"}
                </span>
              </button>

              {openIndex === i && (
                <p className="mt-3 text-gray-600 text-base leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
