import son from '../assets/image/SON-logo.png';
import lasepa from '../assets/image/lasepa-logo.png';

const Ctx = () => {
  return (
    <section className="w-full font-manrope bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-[#0e8dc7] rounded-full"></span>
          <span className="text-gray-500 text-sm tracking-wide">Trusted Reviews</span>
        </div>

        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold leading-tight tracking-tight text-gray-900">
          Client Testimonials
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-10">

          <div className="
            bg-white border border-gray-200 rounded-none
            shadow-sm hover:shadow-xl hover:-translate-y-1
            transition-all duration-300 p-6 sm:p-8 lg:p-10
            flex flex-col gap-6
          ">
            <div className="flex items-center gap-4">
              <img
                src={lasepa}
                alt="LASEPA"
                className="w-[70px] md:w-[90px] h-auto object-contain"
              />

              <div>
                <h5 className="text-lg font-semibold text-gray-900">
                  Lagos State Environmental Protection Agency
                </h5>
                <p className="text-gray-500 text-sm italic">
                  Regulatory Partner
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              “Ctx-ion has been instrumental in strengthening our digital analysis infrastructure. Their team supports our operations with 
              high-precision methodologies, fast response times, and unmatched technical reliability.”
            </p>

            <div className="mt-auto">
              <h4 className="font-semibold text-gray-900 text-base">Adenike Salami</h4>
              <p className="text-gray-500 text-sm italic">Senior Environmental Analyst</p>
            </div>
          </div>

          <div className="
            bg-white border border-gray-200 rounded-none
            shadow-sm hover:shadow-xl hover:-translate-y-1
            transition-all duration-300 p-6 sm:p-8 lg:p-10
            flex flex-col gap-6
          ">
            <div className="flex items-center gap-4">
              <img
                src={son}
                alt="SON"
                className="w-[55px] md:w-[70px] h-auto object-contain"
              />

              <div>
                <h5 className="text-lg font-semibold text-gray-900">
                  Standards Organisation of Nigeria (SON)
                </h5>
                <p className="text-gray-500 text-sm italic">
                  National Quality Authority
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              “Ctx-ion played a pivotal role in helping us adopt globally compliant data systems and digital frameworks. 
              Their methodological precision and technical depth have significantly improved our service delivery.”
            </p>

            <div className="mt-auto">
              <h4 className="font-semibold text-gray-900 text-base">David Ikenebome</h4>
              <p className="text-gray-500 text-sm italic">Lead Quality Systems Engineer</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Ctx;
