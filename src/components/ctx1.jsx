import { Link } from "react-router-dom";


const BuildingIcon = () => (
  <svg
    className="w-20 h-20 text-[#91668f]"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="10" y="14" width="28" height="24" rx="2" />
    <path d="M18 14v-6h12v6" />
    <path d="M20 22h2M20 28h2M26 22h2M26 28h2" />
  </svg>
);

const CodeIcon = () => (
  <svg
    className="w-20 h-20 text-[#91668f]"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M16 18l-6 6 6 6" />
    <path d="M32 18l6 6-6 6" />
    <path d="M20 30l8-12" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    className="w-20 h-20 text-[#91668f]"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="24" cy="24" r="12" />
    <path d="M12 24h24" />
    <path d="M24 12c4 6 4 18 0 24" />
  </svg>
);

const ChartIcon = () => (
  <svg
    className="w-20 h-20 text-[#91668f]"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 30h6V18h-6zM21 30h6V14h-6zM30 30h6V22h-6z" />
  </svg>
);

const services = [
  {
    icon: <BuildingIcon />,
    title: "Industries We Serve",
    text: "We provide tailored digital solutions across multiple industries to help businesses accelerate growth.",
  },
  {
    icon: <CodeIcon />,
    title: "Web Development",
    text: "We build scalable, modern, and user-centric web applications designed for performance and innovation.",
  },
  {
    icon: <GlobeIcon />,
    title: "Digital Strategy",
    text: "We help brands establish a powerful online presence through strategic digital planning and execution.",
  },
  {
    icon: <ChartIcon />,
    title: "Business Analytics",
    text: "We leverage data-driven insights to help organizations make informed decisions and boost efficiency.",
  },
];

const Ctx = () => {
  return (
    <section className="w-full font-manrope bg-[#eef3fa] py-10 md:py-14">
      <div className="max-w-[1336px] mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="flex items-center gap-2 mb-10">
          <span className="w-2 h-2 bg-[#0e8dc7] rounded-full"></span>
          <span className="text-gray-600 text-sm font-manrope">Our Services</span>
        </div>

        <h4 className="text-2xl sm:text-3xl xl:text-4xl font-manrope leading-[1.2] font-medium tracking-tight mb-4">
          Solutions We Provide
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

          {services.map((item, index) => (
            <div
              key={index}
              className="
                p-4 sm:p-6 lg:p-8 bg-white 
                rounded-none
                border border-gray-200 
                flex flex-col 
                transition-all duration-300
                hover:border-black
                hover:shadow-xl
                hover:scale-[1.03]
                cursor-pointer
                font-manrope
              "
            >
              <div className="sm:mb-10 mb-6">{item.icon}</div>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3 font-manrope">
                {item.title}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed font-manrope mb-6">
                {item.text}
              </p>

              <Link to="/about">
                <button className="text-[#91668f] font-medium text-sm sm:text-base hover:underline font-manrope flex items-center gap-2">
                  Read More
                </button>
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Ctx;
