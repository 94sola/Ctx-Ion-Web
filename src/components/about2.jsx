import { useEffect, useRef, useState } from "react";
import teamImg from "../assets/image/Team-frame.png";

const About = () => {
  const imgRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16 font-manrope">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-sm font-medium text-gray-700 mb-4">
            — Who We Are
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Precision Testing for<br />
            Environmental & Industrial Samples
          </h2>

          <p className="text-gray-600 leading-relaxed mb-10 max-w-xl">
            CTX-ION has been delivering accurate analytical results since 2015.  
            We analyze soil, water, food, and petroleum samples using GC-MS, ICP-OES,
            and validated laboratory methods.
          </p>

          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-bold">2015</h3>
              <p className="text-gray-600 mt-1 text-sm">Established</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Fast</h3>
              <p className="text-gray-600 mt-1 text-sm">Turnaround</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Accurate</h3>
              <p className="text-gray-600 mt-1 text-sm">Results</p>
            </div>
          </div>
        </div>

        <div
          ref={imgRef}
          className={`
            transition-all duration-[900ms] ease-out
            ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
          `}
        >
          <img
            src={teamImg}
            alt="CTX-ION Laboratory Team"
            className="w-full h-full object-cover rounded-lg shadow-sm"
          />
        </div>

      </div>
    </section>
  );
};

export default About;
