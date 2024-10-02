const Footer = () => {
    return (
      <footer className="bg-[#096DA7] text-white py-8 px-4 sm:px-8 lg:px-16 font-[Eudoxus Sans]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-4">CTX-ION Analytics</h3>
            <p className="text-white">
              We provide high-quality chemical testing services, specializing in environmental, food, and phytochemical analysis href deliver reliable results.
            </p>
          </div>
  
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="text-white space-y-2">
            <li>
                  <a href="#about" className="text-white hover:text-black">About</a>
                </li>
                <li>
                  <a href="#what-we-do" className="text-white hover:text-black">What We Do</a>
                </li>
                <li>
                  <a href="#services" className=" text-white hover:text-black">Services</a>
                </li>
                <li>
                  <a href="#testimonials" className=" text-white hover:text-black">Testimonials</a>
                </li>
                <li>
                  <a href="#team" className=" text-white hover:text-black">Team</a>
                </li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white hover:text-black">Get in Touch</h4>
            <p className="text-white hover:text-black mb-4">Address: 2B Awori Close, Akora Villas off Adeniyi Jones, Ikeja, Lagos</p>
            <p className="text-white hover:text-black0 mb-4">Phone: +23408063655850, 08090870364</p>
            <p className="text-white hover:text-black mb-4">Email: ctxionanalytics@gmail.com</p>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons */}
              <a href="#" className=" text-white hover:text-black"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className=" text-white hover:text-black"><i className="fab fa-twitter"></i></a>
              <a href="#" className=" text-white hover:text-black"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-white hover:text-black"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} CTX-ION Analytics. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  