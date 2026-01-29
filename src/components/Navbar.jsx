import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/image/CTX-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 40) {
        setHidden(true);     // scrolling down
      } else {
        setHidden(false);    // scrolling up
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`w-full bg-[#f8fdff] font-manrope fixed top-0 left-0 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 ">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-16 object-contain" alt="CTX" />
        </Link>

        <ul className="hidden lg:flex items-center gap-10 text-[15px] tracking-wide text-black">
          <li><Link to="/about" className="hover:text-gray-600">ABOUT</Link></li>
          <li><Link to="/service" className="hover:text-gray-600">SERVICES</Link></li>
          <li><Link to="/gallery" className="hover:text-gray-600">GALLERY</Link></li>
          <li><Link to="/contact" className="hover:text-gray-600">CONTACT</Link></li>
        </ul>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-sm tracking-wider"
        >
          MENU —
        </button>

        <div
          className={`fixed top-0 right-0 h-full w-[80%] bg-[#e6ecf5] transition-all duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-6 py-5 border-b">
            <span className="font-medium">MENU</span>
            <button onClick={() => setOpen(false)}>
              <IoMdClose size={26} />
            </button>
          </div>

          <ul className="flex flex-col gap-6 px-6 py-8 text-lg">
            <li><Link onClick={() => setOpen(false)} to="/about">ABOUT</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/services">SERVICES</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/gallery">GALLERY</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/contact">CONTACT</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
