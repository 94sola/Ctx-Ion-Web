const About = () => {
  const awards = [
    {
      title: "ISO 17025 Accreditation",
      year: "2024",
      issuer: "International Laboratory Accreditation Council",
    },
    {
      title: "NAFDAC / SON Compliance",
      year: "2023",
      issuer: "National Regulatory Authorities",
    },
    {
      title: "Industry Partnership Program",
      year: "2022",
      issuer: "Top Industrial Partners",
    },
    {
      title: "Published Research Grants",
      year: "2021",
      issuer: "Scientific Research Foundation",
    },
  ];

  return (
    <section className="w-full bg-neutral-100 font-manrope py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">

        <p className="text-sm font-medium text-neutral-700 mb-3">
          — Recognitions
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6">
          Certifications & Industry Credentials
        </h2>

        <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-3xl mb-14">
          CTX-ION is committed to maintaining the highest standards of laboratory quality,
          compliance, and scientific excellence. Our certifications and partnerships reflect
          our dedication to accuracy, transparency, and industry leadership.
        </p>

        <div className="hidden md:block border-t border-neutral-400/60">
          {awards.map((award, index) => (
            <div
              key={index}
              className="grid grid-cols-3 py-6 border-b border-neutral-400/60 text-neutral-900 text-base"
            >
              <span>{award.title}</span>
              <span className="text-neutral-700">{award.year}</span>
              <span className="text-neutral-700">{award.issuer}</span>
            </div>
          ))}
        </div>

        <div className="block md:hidden space-y-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-300 rounded-xl p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {award.title}
              </h3>

              <div className="flex items-center justify-between mt-3 text-sm">
                <span className="font-medium text-neutral-700">Year:</span>
                <span className="text-neutral-600">{award.year}</span>
              </div>

              <div className="flex items-center justify-between mt-2 text-sm">
                <span className="font-medium text-neutral-700">Issuer:</span>
                <span className="text-neutral-600 text-right">
                  {award.issuer}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
