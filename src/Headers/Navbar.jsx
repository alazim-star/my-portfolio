import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Navbar2 = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = (
    <>
    <li>
  <NavLink
    to="#home"
    className="p-5 text-[#c7b2f0] hover:text-white "
  >
    Home
  </NavLink>
</li>

      <li>
        <NavLink
          to="#about"
         className="p-5 text-[#c7b2f0] hover:text-white "
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="#skills"
         className="p-5 text-[#c7b2f0] hover:text-white "
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="#education"
      className="p-5 text-[#c7b2f0] hover:text-white "
        >
          Education
        </NavLink>
      </li>
      <li>
        <NavLink
          to="#projects"
         className="p-5 text-[#c7b2f0] hover:text-white "
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="#contact"
         className="p-5 text-[#c7b2f0] hover:text-white "
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  

  return (
    <div className="container mx-auto">
      <nav
        className={`${
          scrolled
            ? "backdrop-blur-md bg-white/ text-white shadow-lg"
            : "bg-transparent text-white"
        } w-full fixed top-0 z-50 transition-all duration-300 `}
      >
        <div className="navbar h-20 px-4 lg:px-10">
          <div className="navbar-start">
            {/* Mobile Dropdown */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content text-white bg-[#101342] rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            {/* Logo and Name */}
            <div className="flex items-center ">
            <h1 className=" font-bold text-4xl bg-gradient-to-r from-[#6761d8] to-purple-500 text-transparent bg-clip-text">
  AZIM
</h1>

            </div>
          </div>
          {/* Desktop Links */}
          <div className="navbar hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
            <div className="ml-20">
            <button className="border-4 border-purple-900 
             from-purple-900 to-purple-500 px-6 py-2 rounded-lg hover:bg-purple-800 text-purple-400 hover:text-white transition">
                Resume
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
