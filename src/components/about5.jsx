import  { useState } from "react";
import bgImage from "../assets/image/labwox2.jpg"; // Background image

// Extended Testimonials
const reviews = [
  {
    org: "Lagos State Environmental Protection Agency",
    role: "Regulatory Partner",
    text:
      "Ctx-ion has been instrumental in strengthening our digital analysis infrastructure. Their team supports our operations with high-precision methodologies, fast response times, and unmatched technical reliability.",
    name: "Adenike Salami",
    position: "Senior Environmental Analyst",
  },
  {
    org: "Standards Organisation of Nigeria (SON)",
    role: "National Quality Authority",
    text:
      "Ctx-ion played a pivotal role in helping us adopt globally compliant data systems and digital frameworks. Their methodological precision and technical depth have significantly improved our service delivery.",
    name: "David Ikenebome",
    position: "Lead Quality Systems Engineer",
  },

  ...Array(8).fill({
    org: "Global Tech Innovations",
    role: "Industry Partner",
    text:
      "Ctx-ion delivers premium-grade digital engineering support with consistent performance. Their commitment to excellence is simply elite.",
    name: "Amara Kingsley",
    position: "Product Strategy Lead",
  }),

  {
    org: "EcoWatch Labs International",
    role: "Environmental Intelligence Partner",
    text:
      "Ctx-ion has consistently delivered ultra-reliable data processing support. Their analytical precision and system accuracy have transformed our operational workflows.",
    name: "Dr. Kelvin Morayo",
    position: "Head of Environmental Systems",
  },
  {
    org: "Prime Data Utilities",
    role: "Technology Partner",
    text:
      "The Ctx-ion engineering framework is world-class. Their rapid deployment speed and attention to mission-critical details make them an indispensable partner.",
    name: "Jessica Umeh",
    position: "Digital Infrastructure Lead",
  },
  {
    org: "National Research Hub",
    role: "Innovation Partner",
    text:
      "Ctx-ion’s technical competency remains unmatched. Their solutions are not only precise but bring long-term stability to our research-intensive digital ecosystem.",
    name: "Prof. Ibrahim Majeed",
    position: "Director of Research Operations",
  }
];

export default function CtxTestimonials() {
  const [index, setIndex] = useState(0);

  const goForward = () =>
    setIndex((prev) => (prev + 1) % reviews.length);


  const goBackward = () =>
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="relative w-full font-manrope py-20 md:py-28 bg-white overflow-hidden">

      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">

        <div className="text-center mb-14">
          <p className="text-gray-600 tracking-wide mb-2">— Testimonial</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
            Client Stories and Success Experiences
          </h2>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="bg-white shadow-2xl rounded-2xl max-w-3xl p-10 md:p-14 text-center border border-gray-200 backdrop-blur-md">

            <div className="text-4xl text-gray-800 mb-6">“</div>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              {reviews[index].text}
            </p>

            <div className="flex flex-col items-center gap-3">
              <div>
                <h4 className="text-gray-900 font-semibold text-lg">
                  {reviews[index].name}
                </h4>
                <p className="text-gray-500 text-sm italic">
                  {reviews[index].position}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={goForward}
            className="absolute left-0 -bottom-20 md:-bottom-24 bg-white border border-gray-300 w-12 h-12 rounded-full shadow hover:scale-110 transition flex items-center justify-center"
          >
            <span className="text-xl">←</span>
          </button>

          <button
            onClick={goBackward}
            className="absolute right-0 -bottom-20 md:-bottom-24 bg-white border border-gray-300 w-12 h-12 rounded-full shadow hover:scale-110 transition flex items-center justify-center"
          >
            <span className="text-xl">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
