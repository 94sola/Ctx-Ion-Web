

import img1 from "../assets/image/about-frame.jpg"; 
import img2 from "../assets/image/about-frame.jpg";
import img3 from "../assets/image/about-frame.jpg";
import img4 from "../assets/image/HPLC.png";
import img5 from "../assets/image/about-frame.jpg";
import img6 from "../assets/image/gc-ms.jpg";
import img7 from "../assets/image/about-frame.jpg";
import img8 from "../assets/image/about-frame.jpg";
import img9 from "../assets/image/about-frame.jpg";

export default function Hero() {
  return (
    <section className="relative w-full py-10 lg:py-16 overflow-hidden  max-w-7xl mx-auto">

      <div className="absolute left-0 top-0 w-[60%] h-full bg-[#f8fdff]" />
      <div className="absolute right-0 top-0 w-[40%] h-full bg-[#f8f3fc]" />

      <div className="relative max-w-7xl mx-auto pb-14 px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 h-full">
        <div className="flex flex-col justify-center py-10 z-10">

          <h1 className="text-[60px] md:text-[80px] lg:text-[110px] font-heading font-bold leading-[0.9] tracking-tight text-black">
            ADVANCED<br />ANALYTICAL<br />SCIENCE
          </h1>

          <p className="mt-8 max-w-xl font-body text-gray-900 text-[18px] leading-[1.7]">
            CTX-ION is a modern analytical laboratory delivering accurate, reliable,
            and compliant testing services. We specialize in
            <span className="font-semibold"> elemental analysis, chemical characterization,</span> and
            <span className="font-semibold"> advanced instrumental testing</span> supporting
            industry, research, and regulatory requirements.
          </p>

          <div className="flex items-center gap-10 mt-10 text-gray-900 text-[15px]">
            <span className="border-l pl-4">
              <span className="font-semibold">ISO 17025</span> Quality Framework
            </span>
            <span className="border-l pl-4">
              <span className="font-semibold">NAFDAC & SON</span> Compliance
            </span>
          </div>

          <button className="mt-10 sm:mt-20 md:mt-28 bg-white border border-gray-100 w-56 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm hover:bg-gray-900 hover:text-white transition-all text-sm">
            Explore Our Capabilities
            <span className="text-xl">↗</span>
          </button>
        </div>
      </div>
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-10 right-10 sm:right-6 lg:right-10 z-20 max-w-3xl">
        <div className="grid grid-cols-3 gap-3 sm:gap-4">

          {[
            img1, img2, img3,
            img4, img5, img6,
            img7, img8, img9
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="CTX-ION laboratory analysis"
              className="rounded-xl shadow-lg object-cover h-[90px] sm:h-[105px] md:h-[120px] lg:h-[135px] transition-transform duration-300 hover:scale-[1.02]"
            />
          ))}

        </div>
      </div>

    </section>
  );
}
