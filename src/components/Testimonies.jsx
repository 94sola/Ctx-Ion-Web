
const testimonials = [
    { 
      name: 'Prof Adedosu Taofeek',
      role: 'Ladoke Akintola University of Technology',
      feedback:
        'CTX-ION Analytics has been our go-to laboratory for all our research testing. Their state-of-the-art equipment and rigorous quality control protocols ensure that we receive the most accurate and reliable data every time.',
    },
    {
      name: 'Uchenna Igweike',
      role: 'Lab Manager, Seth Consult',
      feedback:
        'Working with CTX-ION Analytics has been a game-changer for our environmental testing needs. From the initial consultation to the delivery of results, their team demonstrated exceptional professionalism and expertise. The detailed analytical reports provided by CTX-ION helped us to make informed decisions and ensured compliance with regulatory standards.',
    },
    {
      name: 'Dr Anifowoshe Adebanjo',
      role: 'Osun State University',
      feedback:
        'In our research group, precision and accuracy are paramount. CTX-ION Analytics exceeded our expectations in every aspect. Their team’s deep understanding of our requirements, coupled with their advanced analytical capabilities, provides us with high-quality data that was crucial for our research and development projects.',
    },
  ];
  
  // Component for Individual Testimonial Card
  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white rounded-xl p-6 shadow-md shadow-gray-700 flex flex-col items-center text-center font-[Eudoxus Sans] hover:translate-x-1 hover:translate-y-1 ease-in-out duration-700">
      <h4 className="text-xl font-bold mb-2">{testimonial.name}</h4>
      <h6 className="text-lg mb-4 text-[#3764a8] font-semibold">{testimonial.role}</h6>
      <blockquote className="text-[#747474] text-center">{testimonial.feedback}</blockquote>
    </div>
  );
  
  // Main Testimonials Component
  const TestimonialsSection = () => {
    return (
      <div id='testimonials' className="w-full bg-white py-14 px-4 sm:px-8 lg:px-16 font-[Eudoxus Sans]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    );
  };
  
  export default TestimonialsSection;
  