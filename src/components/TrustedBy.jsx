import lasepa from '../assets/image/lasepa-logo.png';
import son from '../assets/image/SON-logo.png';
import nirma from '../assets/image/NIRMA logo.png';
import labwox from '../assets/image/labwox_logo.png';
import scientific from '../assets/image/ls_scientific logo.png';
import burea from '../assets/image/bureau_logo.png';

const TrustedBy = () => {
  return (
    <section className="bg-white py-12">
      
      {/* Section Header */}
      <div className="text-center mb-8 ">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-slate-900">
          Trusted by Leading Organizations
        </h2>
        <p className="text-[16px] sm:text-[18px] text-gray-500">
          We collaborate with industry leaders to deliver reliable and top-tier analytical testing services.
        </p>
      </div>

      {/* Sliding Logos */}
      <div className="overflow-hidden">
        <div className="flex items-center animate-slide infinite whitespace-nowrap space-x-8 py-4">
          <img src={lasepa} alt="Lasepa" className="w-[80px] md:w-[120px] h-auto mx-auto" />
          <img src={son} alt="SON" className="w-[80px] md:w-[120px] h-auto mx-auto" />
          <img src={nirma} alt="NIRMA" className="w-[80px] md:w-[120px] h-auto mx-auto" />
          <img src={labwox} alt="Labwox" className="w-[80px] md:w-[120px] h-auto mx-auto" />
          <img src={scientific} alt="LS Scientific" className="w-[80px] md:w-[120px] h-auto mx-auto" />
          <img src={burea} alt="Bureau Veritas" className="w-[80px] md:w-[120px] h-auto mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
