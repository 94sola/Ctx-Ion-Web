import { LuTarget, LuStar, LuEye } from "react-icons/lu";

const About = () => {
  const services = [
    {
      icon: <LuTarget className="w-10 h-10 text-neutral-200" />,
      title: "Aim",
      text: "To deliver accurate, reliable laboratory analysis for soil, water, food, oil, and environmental samples using advanced instrumentation and validated scientific methods.",
    },
    {
      icon: <LuStar className="w-10 h-10 text-neutral-200" />,
      title: "Values",
      text: "Integrity, scientific rigor, and data transparency. We prioritize quality control, compliance, and a culture of continuous improvement in every analysis we perform.",
    },
    {
      icon: <LuEye className="w-10 h-10 text-neutral-200" />,
      title: "Mission & Vision",
      text: "Mission: To support industries and researchers with dependable analytical insights using GC-MS, ICP-OES, and other advanced techniques. Vision: To be a leading analytical research laboratory known for precision, compliance, and innovation.",
    },
  ];

  return (
    <section className="w-full bg-neutral-950 text-neutral-100 py-20 px-4 sm:px-8 lg:px-16 font-manrope">
      <div className="max-w-7xl mx-auto">

        <p className="text-sm font-medium text-neutral-100 mb-3">
          — Purpose
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-14">
          What We Stand For
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer transition-all duration-300"
            >
              <div className="mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-neutral-50">
                {item.title}
              </h3>

              <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                {item.text}
              </p>

              <div className="mt-5 h-[2px] w-0 bg-neutral-400 transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
