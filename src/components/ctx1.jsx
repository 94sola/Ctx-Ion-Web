import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";


const IconWrap = ({ children }) => (
  <div className="w-20 h-20 text-[#91668f] flex items-center justify-center">
    {children}
  </div>
);

const LabIcon = () => (
  <IconWrap>
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 2v8l-8 14a10 10 0 0 0 9 15h10a10 10 0 0 0 9-15L30 10V2" />
    </svg>
  </IconWrap>
);

const MicroscopeIcon = () => (
  <IconWrap>
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 10l8 8M12 36h24M24 18v10a8 8 0 0 1-8 8" />
    </svg>
  </IconWrap>
);

const DataIcon = () => (
  <IconWrap>
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 36h6V18H6zM18 36h6V12h-6zM30 36h6V24h-6z" />
    </svg>
  </IconWrap>
);

const ReportIcon = () => (
  <IconWrap>
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="10" y="6" width="28" height="36" />
      <path d="M16 14h16M16 22h16M16 30h10" />
    </svg>
  </IconWrap>
);


const services = [
  {
    icon: <LabIcon />,
    title: "Advanced Analytical Testing",
    text: "CTX-ION delivers high-precision analytical testing using validated laboratory methodologies, ensuring accuracy, repeatability, and scientific integrity.",
    link: "/analytical",
  },
  {
    icon: <MicroscopeIcon />,
    title: "Scientific Research & Development",
    text: "We support experimental research and innovation through structured laboratory studies and scientific validation.",
    link: "/research",
  },
  {
    icon: <DataIcon />,
    title: "Data Interpretation & Modeling",
    text: "Our specialists convert complex analytical datasets into actionable insights.",
    link: "/data",
  },
  {
    icon: <ReportIcon />,
    title: "Comprehensive Laboratory Reporting",
    text: "We produce detailed laboratory reports for regulatory, academic, and industrial use.",
    link: "/services/laboratory-reporting",
  },
  {
    icon: <LabIcon />,
    title: "Quality Control & Assurance",
    text: "Rigorous quality control testing ensuring compliance and consistency.",
    link: "/quality",
  },
  {
    icon: <MicroscopeIcon />,
    title: "Method Development & Validation",
    text: "Custom analytical method development with high sensitivity and reproducibility.",
    link: "/method",
  },
  {
    icon: <DataIcon />,
    title: "Regulatory & Compliance Support",
    text: "Defensible analytical documentation supporting audits and certifications.",
    link: "/support",
  },
  {
    icon: <ReportIcon />,
    title: "Scientific Consulting & Insights",
    text: "Expert consultation guiding laboratory strategy and interpretation.",
    link: "/consulting",
  },
];


const Ctx = () => {
  const sliderRef = useRef(null);
  const wrapperRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = sliderRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 5
    );
  };

  const handleScroll = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -1320 : 1320,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!wrapperRef.current?.contains(document.activeElement)) return;

      if (e.key === "ArrowRight" && canScrollRight) handleScroll("right");
      if (e.key === "ArrowLeft" && canScrollLeft) handleScroll("left");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [canScrollLeft, canScrollRight]);

  useEffect(() => {
    updateScrollState();
    sliderRef.current?.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      sliderRef.current?.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <section
      ref={wrapperRef}
      tabIndex={0}
      className="w-full bg-[#eef3fa] max-w-[1416px] mx-auto py-14 font-manrope outline-none"
    >
      <div className=" px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <p className="text-sm text-gray-600 mb-2">
            CTX-ION Analytical Research Laboratory
          </p>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold tracking-tight">
            Laboratory Services & Capabilities
          </h2>
        </div>

        <div className="relative flex items-center gap-6">

          {canScrollLeft && (
            <button
              onClick={() => handleScroll("left")}
              className="hidden lg:flex w-12 h-12 border border-gray-300 items-center justify-center text-xl hover:bg-black hover:text-white transition z-20"
            >
              ←
            </button>
          )}

          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth w-full"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-[300px] bg-white border border-gray-200 p-6 flex-shrink-0 hover:border-black hover:shadow-xl transition"
              >
                <div className="mb-8">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.text}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-[#91668f] text-sm font-medium hover:underline"
                >
                  Explore Service →
                </Link>
              </div>
            ))}
          </div>

          
          {canScrollRight && (
            <button
              onClick={() => handleScroll("right")}
              className="hidden lg:flex w-12 h-12 border border-gray-300 items-center justify-center text-xl hover:bg-black hover:text-white transition z-20"
            >
              →
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Ctx;
