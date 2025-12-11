import img1 from "../assets/image/about-frame.jpg"; 
import img2 from "../assets/image/hero-image.webp";
import img3 from "../assets/image/landing-frame.jpg";

export default function Hero() {
  return (
    <section className="relative w-full py-10 lg:py-16 overflow-hidden">

      <div className="absolute left-0 top-0 w-[60%] h-full bg-[#f8fdff]" />
      <div className="absolute right-0 top-0 w-[40%] h-full bg-[#f8f3fc]" />

      <div className="relative max-w-7xl mx-auto pb-14 px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 h-full">
        <div className="flex flex-col justify-center py-10 z-10">

          <h1 className="text-[60px] md:text-[80px] lg:text-[110px] font-heading font-bold leading-[0.9] tracking-tight text-black">
            DIGITAL INNOVATORS
          </h1>

          <p className="mt-8 max-w-xl font-body text-gray-900 text-[18px] leading-[1.7]">
            We specialize in transforming ideas into impactful digital experiences.
            Our expertise spans <span className="font-semibold">branding, web design, development</span> and
            <span className="font-semibold"> digital marketing</span>, ensuring businesses establish
            a powerful online presence.
          </p>

          <div className="flex items-center gap-10 mt-10 text-gray-900 text-[15px]">
            <span className="border-l pl-4">
              <span className="font-semibold">75+</span> Project Completed
            </span>
            <span className="border-l pl-4">
              <span className="font-semibold">5480</span> Happy Customers
            </span>
          </div>

          <button className="mt-10 sm:mt-20 md:mt-28 bg-white border border-gray-100 sm:mb-10 w-44 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm hover:bg-gray-900 hover:text-white transition-all text-sm">
            Explore Our Works
            <span className="text-xl">↗</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 max-w-xl right-4 sm:right-6 md:right-8 lg:right-10 z-20">
        <div className="grid grid-cols-3 gap-3 md:gap-4">

          <img 
            src={img1} 
            className="rounded-lg shadow-lg object-cover h-[100px] sm:h-[110px] md:h-[130px] lg:h-[150px]" 
          />

          <img 
            src={img2} 
            className="rounded-lg shadow-lg object-cover h-[100px] sm:h-[110px] md:h-[130px] lg:h-[150px]" 
          />

          <img 
            src={img3} 
            className="rounded-lg shadow-lg object-cover h-[100px] sm:h-[110px] md:h-[130px] lg:h-[150px]" 
          />
        </div>
      </div>

    </section>
  );
}
