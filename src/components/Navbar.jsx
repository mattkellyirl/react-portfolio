import React from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/images/logo.png"; // Adjust the path as necessary

function Navbar() {
  return (
    // <!--Navigation Bar-->
    <nav class="static md:fixed md:top-0 md:left-0 md:w-full md:z-50 border-b bg-white md:bg-opacity-90">
      <div class="container mx-auto">
        <div class="max-w-screen-lg flex flex-wrap items-center justify-center md:justify-between mx-auto px-6 py-2">
          <div class="flex items-center space-x-8 rtl:space-x-reverse">
            <img src={logo} alt="Logo" class="h-14" />
          </div>

          {/* Navigation Links */}
          <div class="w-full text-center md:block md:text-start md:w-auto">
            <ul class="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li>
                <ScrollLink
                  to="hero"
                  smooth="easeInOutQuad"
                  duration={500}
                  class="block py-2 px-3 text-neutral-950 font-semibold transition-colors duration-300 hover:text-indigo-700 cursor-pointer"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="work"
                  smooth="easeInOutQuad"
                  duration={500}
                  class="block py-2 px-3 text-neutral-950 font-semibold transition-colors duration-300 hover:text-indigo-700 cursor-pointer"
                >
                  Work
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth="easeInOutQuad"
                  duration={500}
                  class="block py-2 px-3 text-neutral-950 font-semibold transition-colors duration-300 hover:text-indigo-700 cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
