import logo from "../assets/image/CTX-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300 font-manrope pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-white mb-4 border-b border-gray-800 pb-2">
              ABOUT CTX-ION
            </h4>

            <p className="text-gray-400 text-sm leading-loose">
              2B Awori Close, Akora Villas<br />
              Off Adeniyi Jones,<br />
              Ikeja, Lagos.
            </p>

            <p className="mt-4 text-gray-400 text-sm">ctxionanalytics@gmail.com</p>
            <p className="mt-2 text-gray-400 text-sm">+234 806 365 5850</p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center text-gray-200 text-sm hover:text-white transition-all hover:translate-x-1"
            >
              Contact us →
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-white mb-4 border-b border-gray-800 pb-2">
              PAGES
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                ["About Ctx", "#about"],
                ["Services", "#services"],
                ["Gallery", "#gallery"],
                ["Reviews", "#reviews"],
                ["FAQ’s", "#faqs"],
              ].map(([label, link]) => (
                <li key={label}>
                  <a
                    href={link}
                    className="hover:text-white transition-all hover:drop-shadow-lg hover:translate-x-1 inline-block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-white mb-4 border-b border-gray-800 pb-2">
              RESOURCES
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                ["Privacy Policy", "/privacy"],
                ["Terms & Conditions", "/terms"],
                ["Licensing", "/licensing"],
              ].map(([label, link]) => (
                <li key={label}>
                  <a
                    href={link}
                    className="hover:text-white transition-all hover:drop-shadow-lg hover:translate-x-1 inline-block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-white mb-4 border-b border-gray-800 pb-2">
              SOCIAL MEDIA
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                ["Instagram", "https://instagram.com"],
                ["Facebook", "https://facebook.com"],
                ["Twitter", "https://twitter.com"],
                ["LinkedIn", "https://linkedin.com"],
                ["WhatsApp", "https://whatsApp.com"],
              ].map(([label, link]) => (
                <li key={label}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-all hover:drop-shadow-lg hover:translate-x-1 inline-block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-20 pt-8 flex flex-col items-center space-y-4">
          <Link to="/" className="flex items-center hover:opacity-80 transition">
            <img src={logo} className="h-12 object-contain" alt="CTX" />
          </Link>

          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Ctx-ion. Designed with precision.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
