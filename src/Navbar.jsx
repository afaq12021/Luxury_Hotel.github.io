import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Large screen navbar */}
      <div
        className={`hidden sm:flex justify-between fixed top-0 right-0 w-full transition-all duration-700 ${
          isSticky ? "bg-[#62B1B8]  p-4 z-10" : ""
        }`}
      >
        <div className="ml-20 w-32 h-20 bg-[#E0B973] rounded-b-3xl text-white flex flex-col items-center justify-center">
          <h1 className="tracking-wider font-semibold font-serif text-2xl text-blue-950">
            Luxury
          </h1>
          <p className="tracking-wider text-lg font-serif text-blue-950">
            Hotels
          </p>
        </div>
        <div className="flex items-center">
          <div className="sm:w-full flex justify-end sm:space-x-12 space-x-2 sm:pr-20 pr-4 text-white text-xl font-semibold">
            <NavLink
              className="hover:border-b border-white"
              exact
              activeClassName="active_class"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="hover:border-b border-white"
              exact
              activeClassName="active_class"
              to="/facilities"
            >
              Facilities
            </NavLink>
            <NavLink
              className="hover:border-b border-white"
              exact
              activeClassName="active_class"
              to="/rooms"
            >
              Rooms
            </NavLink>
            <NavLink
              className="hover:border-b border-white"
              exact
              activeClassName="active_class"
              to="/contact"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile menu for small screens */}
      <div
        className={`sm:hidden fixed top-0 right-0 w-full transition-all ${
          isSticky ? "bg-[#62B1B8]p-4 z-10" : ""
        }`}
      >
        <div className="flex justify-end">
          <div className="cursor-pointer mr-4" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </div>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:hidden bg-[#E0B973] text-white p-4`}
        >
          <div className="flex justify-end">
            <div className="cursor-pointer" onClick={toggleMenu}></div>
          </div>
          <NavLink
            className="block py-2"
            exact
            activeClassName="active_class"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="block py-2"
            exact
            activeClassName="active_class"
            to="/facilities"
          >
            Facilities
          </NavLink>
          <NavLink
            className="block py-2"
            exact
            activeClassName="active_class"
            to="/rooms"
          >
            Rooms
          </NavLink>
          <NavLink
            className="block py-2"
            exact
            activeClassName="active_class"
            to="/contact"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
