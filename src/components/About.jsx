import aboutImage from '../assets/image/about-frame.jpg';

const About = () => {
  return (
    <section id="about" className="bg-white  px-6 md:px-16 py-12">
      
      {/* Section Header - Centered */}
      <div className="text-center mb-12 font-[Eudoxus Sans]">
        <h2 className="font-extrabold text-[32px] sm:text-[42px] md:text-[56px] text-[#096DA7]">
          About CTX-ION
        </h2>
        <p className="font-[Eudoxus Sans] text-[16px] sm:text-[18px] text-gray-500 max-w-[650px] mx-auto mt-4">
          Delivering advanced chemical testing services since 2015, we stand at the forefront of innovation and quality.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center font-[Eudoxus Sans]">
        
        {/* Image Section - Full Width for Mobile, Half for Desktop */}
        <div className="order-2 md:order-1 flex justify-center">
          <div className="w-full h-auto max-w-[600px]">
            <img src={aboutImage} alt="CTX-ION Team at Work" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Text Content - Centered on Mobile, Left-Aligned on Desktop */}
        <div className="order-1 md:order-2 text-center md:text-left space-y-8">
          
          {/* Who We Are */}
          <div>
            <h3 className="font-semibold text-[24px] sm:text-[28px] text-[#096DA7]">
              Who We Are
            </h3>
            <p className="text-[16px] sm:text-[18px] text-gray-600 leading-7">
              At CTX-ION Analytics, we provide top-tier chemical testing services for industries and researchers alike. Based in Lagos, our mission is to offer reliable and timely analytical solutions tailored to meet the needs of modern science and industry.
            </p>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="font-semibold text-[24px] sm:text-[28px] text-[#096DA7]">
              Our Core Values
            </h3>
            <p className="text-[16px] sm:text-[18px] text-gray-600 leading-7">
              Integrity, innovation, and excellence guide our operations. We are dedicated to delivering superior results, adhering to strict standards of quality and constantly evolving with the advancements in analytical science.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;



