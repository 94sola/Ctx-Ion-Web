import research from '../assets/image/research.png';
import analytical from '../assets/image/Analytical.png';
import testing from '../assets/image/testing.png';

const services = [
  {
    image: research,
    alt: 'Research Icon',
    title: 'Research Support',
    description:
      'We bridge the educational gap by providing industry-standard analytical lab services to scientific researchers.',
  },
  {
    image: analytical,
    alt: 'Analytical Icon',
    title: 'Analytical Testing Services',
    description:
      'We collaborate with companies to offer analytical testing services, including regulatory product testing and environmental compliance monitoring.',
  },
  {
    image: testing,
    alt: 'Testing Icon',
    title: 'Third Party Testing',
    description:
      'We partner with other organizations to provide third-party analytical testing services for regulatory product testing and environmental compliance.',
  },
];

const ServiceCard = ({ image, alt, title, description }) => (
  <div className="bg-sky-600 rounded-[44px] p-6 w-full max-w-[420px] flex flex-col items-center text-center">
    <div className="w-[70px] h-[81px] bg-[#f3faff] rounded-full flex items-center justify-center mb-4">
      <img src={image} alt={alt} className="w-[40px] h-[40px]" />
    </div>
    <h5 className="text-black font-bold text-lg md:text-[22px] mb-4">{title}</h5>
    <p className="font-normal text-white leading-6 md:leading-8">
      {description}
    </p>
  </div>
);

const WhatWeDo = () => (
  <section id="what-we-do" className="h-fit bg-[#096DA7]">
    <div className="px-4 py-8 md:px-10 md:py-12 lg:px-[62px] lg:py-[64px]">
      <h2 className="text-3xl md:text-4xl lg:text-[64px] font-bold text-white m-4 md:m-8 text-center">
        What We Do
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeDo;

