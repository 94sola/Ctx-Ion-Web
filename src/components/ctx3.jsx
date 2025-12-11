import icp from "../assets/image/ICP-OES.png";
import gcms from "../assets/image/gc-ms.jpg";
import gcfid from "../assets/image/gc-fid.webp";

const instruments = [
  {
    id: 1,
    image: gcms,
    title: "GC-MS (Gas Chromatography – Mass Spectrometry)",
    description:
      "Combines gas chromatography separation with mass spectrometric detection. Used for complex organic compound profiling, pesticide residue analysis, and advanced chemical identification.",
  },

  {
    id: 2,
    image: icp,
    title: "ICP-OES (Inductively Coupled Plasma Optical Emission Spectroscopy)",
    description:
      "A high-performance analytical instrument used for precise multi-element detection. Ideal for environmental, food, and phytochemical analysis requiring accurate trace metal quantification.",
  },

  {
    id: 3,
    image: gcfid,
    title: "GC-FID (Gas Chromatography – Flame Ionization Detector)",
    description:
      "A robust analytical tool for detecting hydrocarbons and volatile organic compounds. Known for reliability, sensitivity, and accuracy in environmental and petrochemical testing.",
  },
];

export default function InstrumentSection() {
  return (
    <section className="w-full py-20 px-6 lg:px-12 font-manrope bg-white">

      <div className=" max-w-7xl pb-20 px-6 lg:px-12 mx-auto">
        <p className="text-sm text-gray-600 flex items-center gap-2 mb-2">
          <span className="h-2 w-2 bg-[#0e8dc7] rounded-full"></span>
          Laboratory Equipment
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Instruments We Use
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {instruments.map((item) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >

              <div className="h-64 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold text-gray-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto bg-[#eef3fa] py-14 px-6">
        <div className=" text-center">

          <p className="text-base md:text-lg font-normal text-gray-500 leading-snug">
            Your next big opportunity starts here.
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 font-semibold mt-4 mb-14">
           Let’s Create Together!
          </h2>
        
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

            <a
              href="tel:2349034956049"
              className="flex items-center gap-2 text-gray-800 text-base font-medium hover:text-gray-900 hover:underline"
            >
              Contact Us
              <span className="text-xl">📞</span>
            </a>
            <a
              href="mailto:info@example.com"
              className="flex items-center gap-2 text-gray-800 text-base font-medium hover:text-gray-900 hover:underline"
            >
              Send Email
              <span className="text-xl">✉️</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
