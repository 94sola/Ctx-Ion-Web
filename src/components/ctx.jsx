import { Link } from "react-router-dom";
import imgTopRight from "../assets/image/labwox2.jpg";
import imgBottomLeft from "../assets/image/trainner.jpg";

const BuildingIcon = () => (
  <svg width="48" height="48" fill="none" stroke="black" strokeWidth="2">
    <rect x="10" y="14" width="28" height="24" rx="2" />
    <path d="M18 14v-6h12v6" />
    <path d="M20 22h2M20 28h2M26 22h2M26 28h2" />
  </svg>
);

const HandshakeIcon = () => (
  <svg width="58" height="58" fill="none" stroke="black" strokeWidth="2">
    <path d="M12 30l10 10l10-10l10 10" />
    <path d="M22 40l10-10" />
  </svg>
);

const Ctx = () => {
  return (
    <section className="w-full font-manrope bg-white py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="flex items-center gap-2 mb-10">
          <span className="w-2 h-2 bg-[#0e8dc7] rounded-full"></span>
          <span className="text-gray-600 text-sm">About CTX-ION</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 items-start">
          <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px]">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl leading-[1.2] font-medium tracking-tight mb-4">
              Delivering trusted analytical science with precision and integrity
            </h2>
          </div>

          <div className="md:col-span-1">
            <img
              src={imgTopRight}
              className="w-full h-[240px] sm:h-[300px] md:h-[350px] lg:h-[340px] object-cover rounded-xl shadow-sm"
              alt="CTX-ION laboratory analysis"
            />
          </div>

          <div className="p-8 sm:p-10 lg:p-12 bg-[#eef3fa] rounded-xl border border-gray-200 flex flex-col">
            <div className="mb-6 sm:mb-8">
              <BuildingIcon />
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              Sectors we support
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              CTX-ION provides advanced analytical testing services across
              environmental, food, pharmaceutical, agricultural, and industrial
              sectors, ensuring accuracy, compliance, and regulatory confidence.
            </p>

            <Link to="/about">
              <button className="text-[#0e8dc7] font-medium text-sm sm:text-base flex items-center gap-2 hover:underline">
                Learn more about CTX-ION →
              </button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 mt-14">
          <div className="md:col-span-1">
            <img
              src={imgBottomLeft}
              className="w-full h-[240px] sm:h-[300px] md:h-[330px] object-cover rounded-xl shadow-sm"
              alt="Laboratory collaboration"
            />
          </div>

          <div className="md:col-span-1 lg:col-span-2 rounded-xl border max-w-sm border-gray-200 p-3 sm:p-6 lg:p-8 bg-cover bg-center flex flex-col">
            <div className="mb-8 sm:mb-10">
              <HandshakeIcon />
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Strategic partnerships and research collaboration
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6 sm:mb-3">
              We collaborate with regulatory bodies, academic institutions,
              and industry partners to advance research, support compliance,
              and deliver scientifically sound analytical outcomes.
            </p>

            <Link to="/service">
              <button className="text-[#0e8dc7] font-medium text-sm sm:text-base flex items-center gap-2 hover:underline">
                Explore our capabilities →
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Ctx;
