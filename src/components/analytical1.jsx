import bgImage from "../assets/image/gc-ms.jpg";
import Wrapper from "./wrapper";

export default function GCMSHeroArticle() {
  return (
    <Wrapper>
      <section className="w-full pt-28">
        <div className="max-w-7xl bg-white font-manrope mx-auto pt-10 pb-0 px-10">

                <div className="mb-8">
                <h1 className="text-[26px] sm:text-[32px] font-semibold text-[#0b1c2d] leading-snug max-w-4xl">
                    GC-MS Method Development Service for Residual Solvent and Volatile
                    Impurity Profiling
                </h1>

                <div className="flex items-center gap-3 mt-4 text-sm text-gray-600">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-gray-400 text-xs font-semibold">
                    CI
                    </span>
                    <span>By CTX-ION Analytical Research Laboratory</span>
                    <span>•</span>
                    <span>June 2025</span>
                </div>
                </div>

                <div className="relative overflow-hidden border border-gray-200 shadow-md">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />

                <div className="absolute inset-0 bg-[#9fd3e1]/90" />

                <div className="relative px-16 py-16 text-center">

                    <h2 className="mx-auto text-6xl sm:text-7xl lg:text-8xl font-[700] tracking-tight leading-[1.05] text-[#0a1440]">
                    GC-MS
                    <br />
                    Method Development Service
                    for Residual Solvent and Volatile
                    <br />
                    Impurity Profiling
                    </h2>

                    <p className="mt-8 text-3xl lg:text-5xl font-bold tracking-widest text-[#0a1440]">
                    SUCCESS CASES
                    </p>

                    <ul className="mt-6 max-w-3xl mx-auto text-left text-[#0a1440] text-2xl leading-relaxed space-y-2 font-medium">
                    <li>• Solvent and matrix compatibility screening</li>
                    <li>• Selection of appropriate GC columns</li>
                    <li>• Temperature programming and MS ionization modes</li>
                    <li>• Standard calibration curve generation</li>
                    <li>• Method validation (LOD, LOQ, linearity, accuracy, precision)</li>
                    </ul>
                </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-base mt-8">
                When pharmaceutical, chemical, or environmental products require
                high-sensitivity analysis of residual solvents and volatile impurities,
                investing in a robust <span className="font-semibold">GC–MS method development service</span> is essential.
                At <span className="font-semibold">CTX-ION Analytical Research Laboratory</span>, we develop
                validated GC-MS methods aligned with regulatory, quality control,
                and product development requirements.
                </p>

            </div>
        </section>

    </Wrapper>
  );
}
