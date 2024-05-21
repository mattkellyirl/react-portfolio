import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"; // Adjust the path as necessary

function Navbar() {
  return (
    // <!--Navigation Bar-->
    <nav class="border-b">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 bg-red-100">
        <a href="" class="flex items-center space-x-8 rtl:space-x-reverse">
          <img src={logo} alt="Logo" class="h-14" />
        </a>

        {/* Navigation Links */}
        <div className="w-full md:block md:w-auto">
          <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-neutral-950 font-semibold transition-colors duration-300 hover:text-indigo-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/work"
                className="block py-2 px-3 text-neutral-950 font-semibold transition-colors duration-300 hover:text-indigo-700"
                aria-current="page"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-neutral-950 font-semibold transition-colors duration-300 hover:text-indigo-700"
                aria-current="page"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <nav className="border-b">
    //   <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
    //     <div className="flex items-center space-x-1 rtl:space-x-reverse">
    //       <img src={logo} alt="Logo" className="h-14" />
    //       {/* <h2 className="text-2xl font-bold tracking-tight text-neutral-950">
    //         Matt<span className="font-medium"> Kelly</span>
    //       </h2> */}
    //     </div>

    //     {/* Navigation Links */}
    //     <div className="w-full md:block md:w-auto">
    //       <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
    //         <li>
    //           <Link
    //             to="/"
    //             className="block py-2 px-3 text-neutral-950 font-semibold transition-colors duration-300 hover:text-indigo-700"
    //             aria-current="page"
    //           >
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/work"
    //             className="block py-2 px-3 text-neutral-950 font-semibold transition-colors duration-300 hover:text-indigo-700"
    //             aria-current="page"
    //           >
    //             Work
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/contact"
    //             className="block py-2 px-3 text-neutral-950 font-semibold transition-colors duration-300 hover:text-indigo-700"
    //             aria-current="page"
    //           >
    //             Contact
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Navbar;
