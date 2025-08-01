import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { FaCoffee, FaTimes, FaUser, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // nav-links variables
  const navlinks = [
    { id: "home", label: "Home", extra: "lg:text-lg" },
    { id: "menu", label: "Menu", extra: "lg:text-lg" },
    { id: "about", label: "About", extra: "not-even:lg:text-lg" },
    { id: "Contact", label: "Contact", extra: "lg:text-lg" },
  ];

  return (
    // nav
    <nav className="relative bg-cover bg-center shadow-xl overflow-hidden bg-orange-950">
      {/* coffee theme bg  */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#483621] to-[#6F4E37] opacity-95 border-4 border-dashed border-amber-500 rounded-xl " /> */}

      <div className="relative max-w-7xl mx-auto px-8 py-5">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="flex items-center justify-center">
            <a
              href="#"
              className="text-white text-3xl md:text-3xl lg:text-4xl font-medium flex items-center"
              style={{ fontFamily: "'Berkshire Swash', serif" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/256/7564/7564847.png"
                width="40"
              />
              Sips Cafe
            </a>
          </div>

          {/* menu links  */}
          <div className="hidden md:flex space-x-12 items-center">
            {navlinks.map(({ id, label, extra }) => (
              <Link
                className={`text-white hover:text-yellow-300 transition-all duration-300 font-medium text-lg lg:text-md md:text-sm lg:text-base relative group cursor-pointer`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
                smooth={true}
                key={id}
                to={id}
                duration={500}
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-yellow-300 transition-all duration-300 group-hover:w-full " />
              </Link>
            ))}
          </div>

          {/* {button}  */}

          <div className="hidden md:flex space-x-5 items-center">
            <a
              href="#order"
              className="flex items-center lg:py-3 px-4 md:px-6 md:py-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-full shadow-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-medium text-sm md:text-sm"
            >
              <FaCoffee className="mr-2" />
              Order Now
            </a>

            <a
              href="#login"
              className="flex items-center px-4 md:px-6 md:py-1 py-2 lg:py-3 border-2 border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-white transition-all duration-300 font-medium text-sm md:text-sm"
            >
              <FaUser className="inline md:text-sm mr-2" />
              Login
            </a>
          </div>

          {/* Mobile toggle  */}

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-yellow-300 transition-all duration-300 text-2xl p-2 rounded-lg bg-white bg-opacity-10"
            >
              {isOpen ? (
                <FaTimes className="text-yellow-300" />
              ) : (
                <FaBars className="text-yellow-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu  */}
        {isOpen && (
          // menulinks
          <div className="md:hidden bg-[#4B3621] bg-opacity-95 backdrop-blur-sm rounded-lg mt-4 py-4 shadow-xl ">
            <div className="flex flex-col space-y-4 px-4">
              {navlinks.map(({ id, label }) => (
                <a
                  href={`#${id}`}
                  className="text-white text-base py-3 px-4 rounded-lg hover:bg-[#6F4E37] transition-all duration-300"
                  key={id}
                >
                  {label}
                </a>
              ))}

              {/* button section */}
              <div className="flex flex-col space-y-3 mt-4">
                {/* order btn  */}
                <a
                  href="#order"
                  className="w-full text-center py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Order Now
                </a>
                {/* login btn  */}
                <a
                  href="#login"
                  className="w-full text-center py-3 border-2 border-yellow-400 text-white rounded-full hover:bg-yellow-400 hover:text-white transition-all duration-300"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
